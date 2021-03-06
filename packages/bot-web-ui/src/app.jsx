import { reaction } from 'mobx';
import { Provider } from 'mobx-react';
import React from 'react';
import { runIrreversibleEvents, ApiHelpers, DBot, ServerTime } from '@deriv/bot-skeleton';
import './public-path'; // Leave this here! OK boss!
import Audio from './components/audio.jsx';
import FooterExtension from './components/footer-extension.jsx';
import MainContent from './components/main-content.jsx';
import NotificationMessages from './components/notification-messages.jsx';
import QuickStrategy from './components/quick-strategy.jsx';
import RunPanel from './components/run-panel.jsx';
import Toolbar from './components/toolbar.jsx';
import RootStore from './stores';
import GTM from './utils/gtm';
import './assets/sass/app.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        const {
            passthrough: { WS, root_store },
        } = props;
        this.root_store = new RootStore(root_store, WS, DBot);

        GTM.init(this.root_store);
        ServerTime.init(root_store.common);
        this.setDBotEngineStores();
    }

    setDBotEngineStores() {
        // DO NOT pass the rootstore in, if you need a prop define it in dbot-skeleton-store ans pass it through.
        const {
            core: { client },
            flyout,
            toolbar,
            quick_strategy,
            load_modal,
        } = this.root_store;
        const { handleFileChange } = load_modal;
        const { toggleStrategyModal } = quick_strategy;
        const { onBotNameTyped } = toolbar;
        this.dbot_store = {
            is_mobile: false,
            client,
            flyout,
            toolbar,
            toggleStrategyModal,
            handleFileChange,
            onBotNameTyped,
        };
        this.api_helpers_store = { ws: this.root_store.ws, server_time: this.root_store.server_time };
    }

    componentDidMount() {
        DBot.initWorkspace(__webpack_public_path__, this.dbot_store, this.api_helpers_store);
        this.registerCurrencyReaction();
        this.registerOnAccountSwitch();
        this.registerClickOutsideBlockly();
        this.registerBeforeUnload();
    }

    componentWillUnmount() {
        if (Blockly.derivWorkspace) {
            Blockly.derivWorkspace.dispose();
        }

        this.disposeReactions();

        // Ensure account switch is re-enabled.
        const { ui } = this.root_store.core;
        ui.setAccountSwitcherDisabledMessage(false);
    }

    /**
     * Register a reaction to currency
     */
    registerCurrencyReaction() {
        // Syncs all trade options blocks' currency with the client's active currency.
        this.disposeCurrencyReaction = reaction(
            () => this.root_store.core.client.currency,
            currency => {
                const workspace = Blockly.derivWorkspace;

                if (workspace) {
                    const trade_options_blocks = workspace
                        .getAllBlocks()
                        .filter(b => b.type === 'trade_definition_tradeoptions');
                    trade_options_blocks.forEach(trade_options_block => trade_options_block.setCurrency(currency));
                }
            }
        );
    }

    /**
     * Register a reaction to switchaccount
     */
    registerOnAccountSwitch = () => {
        const { client } = this.root_store.core;

        this.disposeSwitchAccountListener = reaction(
            () => client.switch_broadcast,
            switch_broadcast => {
                if (!switch_broadcast) {
                    return;
                }

                const { derivWorkspace: workspace } = Blockly;
                const { active_symbols, contracts_for } = ApiHelpers.instance;

                if (workspace) {
                    active_symbols.retrieveActiveSymbols(true).then(() => {
                        contracts_for.disposeCache();
                        workspace
                            .getAllBlocks()
                            .filter(block => block.type === 'trade_definition_market')
                            .forEach(block => {
                                runIrreversibleEvents(() => {
                                    const fake_create_event = new Blockly.Events.Create(block);
                                    Blockly.Events.fire(fake_create_event);
                                });
                            });
                    });
                }
            }
        );
    };

    /**
     * Ensures inputs are closed when clicking on non-Blockly elements.
     */
    onClickOutsideBlockly = event => {
        const path = event.path || (event.composedPath && event.composedPath());
        const is_click_outside_blockly = !path.some(el => el.classList && el.classList.contains('injectionDiv'));
        if (is_click_outside_blockly) {
            Blockly.hideChaff(/* allowToolbox */ false);
        }
    };

    registerClickOutsideBlockly() {
        window.addEventListener('click', this.onClickOutsideBlockly);
    }

    onBeforeUnload = event => {
        if (this.root_store.run_panel.is_stop_button_visible) {
            event.returnValue = true;
        }
    };

    registerBeforeUnload() {
        window.addEventListener('beforeunload', this.onBeforeUnload);
    }

    /**
     * Dispose Mobx reactions & event listeners.
     */
    disposeReactions() {
        if (typeof this.disposeCurrencyReaction === 'function') {
            this.disposeCurrencyReaction();
        }
        if (typeof this.disposeSwitchAccountListener === 'function') {
            this.disposeSwitchAccountListener();
        }
        window.removeEventListener('click', this.onClickOutsideBlockly);
        window.removeEventListener('beforeunload', this.onBeforeUnload);
    }

    render() {
        return (
            <Provider {...this.root_store}>
                <div className='bot'>
                    <NotificationMessages />
                    <Toolbar />
                    <MainContent />
                    <RunPanel />
                    <QuickStrategy />
                    <FooterExtension />
                    <Audio />
                </div>
            </Provider>
        );
    }
}
export default App;

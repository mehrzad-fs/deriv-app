import { getUrlSmartTrader } from '../url/helpers';

export const routes = {
    error404: '/404',
    account: '/account',
    financial_assessment: '/account/financial-assessment',
    personal_details: '/account/personal-details',
    proof_of_identity: '/account/proof-of-identity',
    proof_of_address: '/account/proof-of-address',
    passwords: '/account/passwords',
    deactivate_account: '/account/deactivate-account',
    account_deactivated: '/account-deactivated',
    account_limits: '/account/account-limits',
    connected_apps: '/account/connected-apps',
    api_token: '/account/api-token',
    login_history: '/account/login-history',
    two_factor_authentication: '/account/two-factor-authentication',
    self_exclusion: '/account/self-exclusion',
    account_password: '/settings/account_password',
    apps: '/settings/apps',
    cashier_password: '/settings/cashier_password',
    contract: '/contract/:contract_id',
    exclusion: '/settings/exclusion',
    financial: '/settings/financial',
    history: '/settings/history',
    index: '/index',
    limits: '/settings/limits',
    mt5: '/mt5',
    dxtrade: '/derivx',
    personal: '/settings/personal',
    positions: '/reports/positions',
    profit: '/reports/profit',
    reports: '/reports',
    root: '/',
    redirect: '/redirect',
    settings: '/settings',
    statement: '/reports/statement',
    token: '/settings/token',
    trade: '/',
    bot: '/bot',
    cashier: '/cashier',
    cashier_deposit: '/cashier/deposit',
    cashier_withdrawal: '/cashier/withdrawal',
    cashier_pa: '/cashier/payment-agent',
    cashier_acc_transfer: '/cashier/account-transfer',
    // cashier_offramp: '/cashier/off-ramp',
    cashier_onramp: '/cashier/on-ramp',
    cashier_p2p: '/cashier/p2p',
    cashier_p2p_verification: '/cashier/p2p/verification',
    cashier_pa_transfer: '/cashier/payment-agent-transfer',
    smarttrader: getUrlSmartTrader(),
    endpoint: '/endpoint',
    complaints_policy: '/complaints-policy',

    dashboard: '/dashboard',
    my_apps: '/dashboard/my-apps',
    about_us: '/dashboard/about-us',
    explore: '/dashboard/explore',
    resources: '/dashboard/resources',

    market_commodities: '/dashboard/markets/commodities',
    market_forex: '/dashboard/markets/forex',
    market_stock: '/dashboard/markets/stock',
    market_synthetic: '/dashboard/markets/synthetic',
    markets: '/dashboard/markets',

    platform_binary_bot: '/dashboard/platforms/binary-bot',
    platform_dbot: '/dashboard/platforms/dbot',
    platform_dmt5: '/dashboard/platforms/dmt5',
    platform_dmt5_financial: '/dashboard/platforms/dmt5-financial',
    platform_dmt5_financial_stp: '/dashboard/platforms/dmt5-financial-stp',
    platform_dmt5_synthetic: '/dashboard/platforms/dmt5-synthetic',
    platform_dtrader: '/dashboard/platforms/dtrader',
    platform_smarttrader: '/dashboard/platforms/smarttrader',
    platforms: '/dashboard/platforms',

    trade_type_cfds: '/dashboard/trade-types/cfds',
    trade_type_multipliers: '/dashboard/trade-types/multipliers',
    trade_type_options: '/dashboard/trade-types/options',
    trade_types: '/dashboard/trade-types',

    wallet_bank_wire: '/dashboard/wallets/bank-wire',
    wallet_cards: '/dashboard/wallets/cards',
    wallet_crypto: '/dashboard/wallets/crypto',
    wallet_ewallet: '/dashboard/wallets/ewallet',
    wallets: '/dashboard/wallets',
};

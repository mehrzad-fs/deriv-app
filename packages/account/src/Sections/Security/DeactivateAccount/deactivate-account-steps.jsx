import React from 'react';
import { Localize } from '@deriv/translations';
import { Link } from 'react-router-dom';
import { Button, Text } from '@deriv/components';
import { PlatformContext } from '@deriv/shared';
import classNames from 'classnames';

const DeactivateAccountSteps = ({ redirectToReasons }) => {
    const { is_dashboard } = React.useContext(PlatformContext);

    return (
        <div>
            <div className='deactivate-account__information'>
                <Text size='xs' weight='bold' className='deactivate-account__information--bold' as='p'>
                    <Localize i18n_default_text='Deactivate account' />
                </Text>
                <Text size='xs' as='p' line_height='s'>
                    <Localize i18n_default_text='Before you deactivate your account, you need to do the following:' />
                </Text>
            </div>
            <div className='deactivate-account__steps'>
                <Text size='xs' as='p' weight='bold' className='deactivate-account__title'>
                    <Localize i18n_default_text='1. Close all open positions' />
                </Text>
                <Text size='xs' as='p' line_height='s'>
                    <Localize
                        i18n_default_text='If you have a Deriv real account, go to <0>Portfolio</0> to close any open positions.'
                        components={[
                            <Link
                                to='/reports/positions'
                                key={0}
                                className={classNames('deactivate-account__link', { 'link--blue': is_dashboard })}
                            />,
                        ]}
                    />
                </Text>
                <Text size='xs' as='p'>
                    <Localize i18n_default_text='If you have a DMT5 real account, log into it to close any open positions.' />
                </Text>
            </div>
            <div className='deactivate-account__steps'>
                <Text size='xs' as='p' weight='bold' line_height='s' className='deactivate-account__title'>
                    <Localize i18n_default_text='2. Withdraw your funds' />
                </Text>
                <Text size='xs' as='p' line_height='s'>
                    <Localize
                        i18n_default_text='If you have a Deriv real account, go to <0>Cashier</0> to withdraw your funds.'
                        components={[
                            <Link
                                to='/cashier/withdrawal'
                                key={0}
                                className={classNames('deactivate-account__link', { 'link--blue': is_dashboard })}
                            />,
                        ]}
                    />
                </Text>
                <Text size='xs' as='p'>
                    <Localize
                        i18n_default_text='If you have a DMT5 real account, go to <0>DMT5 Dashboard</0> to withdraw your funds.'
                        components={[
                            <Link
                                to='/mt5'
                                key={0}
                                className={classNames('deactivate-account__link', { 'link--blue': is_dashboard })}
                            />,
                        ]}
                    />
                </Text>
            </div>
            <Button
                className={classNames('deactivate-account__button', {
                    'deactivate-account__button--dashboard': is_dashboard,
                })}
                large
                onClick={() => redirectToReasons()}
                {...(is_dashboard ? { blue: true } : { primary: true })}
            >
                <Localize i18n_default_text='Continue to account deactivation' />
            </Button>
        </div>
    );
};
export default DeactivateAccountSteps;

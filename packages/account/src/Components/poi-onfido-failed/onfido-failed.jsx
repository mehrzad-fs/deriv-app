import React from 'react';
import { PropTypes } from 'prop-types';
import { Icon, StaticUrl } from '@deriv/components';
import { isMobile, PlatformContext } from '@deriv/shared';
import { localize, Localize } from '@deriv/translations';
import IconMessageContent from 'Components/icon-message-content';

const OnfidoFailed = ({ suspected }) => {
    const { is_dashboard } = React.useContext(PlatformContext);
    if (is_dashboard && !isMobile() && suspected) {
        return (
            <IconMessageContent
                message={'We could not verify your proof of identity'}
                text={
                    <Localize
                        i18n_default_text='As a precaution, we have disabled trading, deposits and withdrawals for this account. If you have any questions, please go to our <0>Help Centre.</0>'
                        components={[<StaticUrl key={0} className='link link--orange' href='/help-centre' />]}
                    />
                }
                icon={<Icon icon='IcPoiSuspected' width={237} height={128} />}
                className='account-management-dashboard'
            />
        );
    }
    return (
        <IconMessageContent
            message={localize('Proof of identity verification failed')}
            text={localize(
                'We were unable to verify your document automatically. We will try to verify your document manually. Please check back in 1-3 days.'
            )}
            icon={
                is_dashboard && !isMobile() ? (
                    <Icon icon='IcPoiFailedDashboard' width={237} height={128} />
                ) : (
                    <Icon icon='IcPoiFailed' size={128} />
                )
            }
            className='account-management-dashboard'
        />
    );
};

OnfidoFailed.propTypes = {
    suspected: PropTypes.bool,
};

export default OnfidoFailed;

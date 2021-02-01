import classNames from 'classnames';
import React from 'react';
import { Icon, Money, Button, Text } from '@deriv/components';
import { formatMoney, getCurrencyName, getMT5AccountDisplay, getCurrencyDisplayCode } from '@deriv/shared';
import { Localize, localize } from '@deriv/translations';

const AccountList = ({
    balance,
    currency,
    currency_icon,
    display_type,
    has_balance,
    has_error,
    has_reset_balance,
    is_disabled,
    is_virtual,
    loginid,
    market_type,
    onClickAccount,
    onClickResetVirtualBalance,
    selected_loginid,
    server,
    is_dark_mode_on,
    sub_account_type,
}) => {
    if (is_disabled && !currency) return null;
    const currency_badge = currency ? currency_icon : 'IcCurrencyUnknown';

    return (
        <>
            <div
                id={`dt_${loginid}`}
                className={classNames('acc-switcher__account', {
                    'acc-switcher__account--selected': loginid === selected_loginid,
                    'acc-switcher__account--disabled': is_disabled,
                })}
                onClick={is_disabled ? undefined : onClickAccount}
            >
                <span className='acc-switcher__id'>
                    <Icon
                        icon={is_virtual ? 'IcCurrencyVirtual' : currency_badge}
                        className={'acc-switcher__id-icon'}
                        size={24}
                    />
                    <span>
                        {display_type === 'currency' ? (
                            <CurrencyDisplay is_virtual={is_virtual} currency={currency} />
                        ) : (
                            <AccountDisplay
                                market_type={market_type}
                                sub_account_type={sub_account_type}
                                server={server}
                                has_error={has_error}
                                is_dark_mode_on={is_dark_mode_on}
                            />
                        )}
                        <div
                            className={classNames('acc-switcher__loginid-text', {
                                'acc-switcher__loginid-text--disabled': has_error,
                            })}
                        >
                            {loginid}
                        </div>
                    </span>
                    {has_reset_balance ? (
                        <Button
                            is_disabled={is_disabled}
                            onClick={e => {
                                e.stopPropagation();
                                onClickResetVirtualBalance();
                            }}
                            className='acc-switcher__reset-account-btn'
                            secondary
                            small
                        >
                            {localize('Reset balance')}
                        </Button>
                    ) : (
                        has_balance && (
                            <Text
                                size='xs'
                                color='prominent'
                                styles={{ fontWeight: 'inherit' }}
                                className='acc-switcher__balance'
                            >
                                {currency && (
                                    <Money
                                        currency={getCurrencyDisplayCode(currency)}
                                        amount={formatMoney(currency, balance, true)}
                                        should_format={false}
                                        show_currency
                                    />
                                )}
                            </Text>
                        )
                    )}
                </span>
            </div>
        </>
    );
};

const CurrencyDisplay = ({ currency, is_virtual }) => {
    if (is_virtual) {
        return <Localize i18n_default_text='Demo' />;
    }
    if (!currency) {
        return <Localize i18n_default_text='No currency assigned' />;
    }
    return getCurrencyName(currency);
};

const AccountDisplay = ({ has_error, market_type, sub_account_type, server, is_dark_mode_on }) => {
    // TODO: Remove once account with error has market_type and sub_account_type in details response
    if (has_error)
        return (
            <div>
                <Text color='disabled' size='xs'>
                    <Localize i18n_default_text='Unavailable' />
                </Text>
                {server?.geolocation && (
                    <Text color='less-prominent' size='xxs' className='badge-server badge-server--disabled'>
                        {server.geolocation.region}&nbsp;
                        {server.geolocation.sequence !== 1 ? server.geolocation.sequence : ''}
                    </Text>
                )}
            </div>
        );
    return (
        <div>
            {getMT5AccountDisplay(market_type, sub_account_type)}
            {server?.geolocation && (
                <Text color={is_dark_mode_on ? 'general' : 'colored-background'} size='xxs' className='badge-server'>
                    {server.geolocation.region}&nbsp;
                    {server.geolocation.sequence !== 1 ? server.geolocation.sequence : ''}
                </Text>
            )}
        </div>
    );
};

export default AccountList;

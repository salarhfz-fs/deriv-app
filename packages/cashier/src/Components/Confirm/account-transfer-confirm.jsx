import PropTypes from 'prop-types';
import React from 'react';
import { localize } from '@deriv/translations';
import { Money } from '@deriv/components';
import { connect } from 'Stores/connect';
import Confirm from '../confirm.jsx';

const AccountTransferConfirm = ({
    error,
    account_transfer_amount,
    requestTransferBetweenAccounts,
    selected_from,
    selected_to,
    setIsTransferConfirm,
}) => (
    <Confirm
        data={[
            {
                key: 'transfer-from',
                label: localize('Transfer from'),
                value: [selected_from.text, selected_from.value],
            },
            { key: 'transfer-to', label: localize('Transfer to'), value: [selected_to.text, selected_to.value] },
            {
                key: 'amount',
                label: localize('Amount'),
                value: <Money currency={selected_from.currency} amount={account_transfer_amount} show_currency />,
            },
        ]}
        error={error}
        header={localize('Please confirm the transaction details in order to complete the transfer:')}
        onClickBack={() => {
            setIsTransferConfirm(false);
        }}
        onClickConfirm={() => {
            requestTransferBetweenAccounts({ amount: +account_transfer_amount });
        }}
    />
);

AccountTransferConfirm.propTypes = {
    requestPaymentAgentTransfer: PropTypes.func,
    setIsTryTransferSuccessful: PropTypes.func,
};

export default connect(({ modules }) => ({
    error: modules.cashier.config.account_transfer.error,
    selected_from: modules.cashier.config.account_transfer.selected_from,
    selected_to: modules.cashier.config.account_transfer.selected_to,
    account_transfer_amount: modules.cashier.config.account_transfer.account_transfer_amount,
    requestTransferBetweenAccounts: modules.cashier.requestTransferBetweenAccounts,
    setIsTransferConfirm: modules.cashier.setIsTransferConfirm,
    transfer_to: modules.cashier.config.payment_agent_transfer.confirm.client_id,
}))(AccountTransferConfirm);

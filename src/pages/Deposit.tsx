import React from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from 'src/store/context';

import Transaction from 'components/Transaction/Transaction';

import { useCheckLogin } from 'src/hooks/useCheckLogin';
// import { useRootData } from 'hooks/useRootData';
import { useTransaction } from 'hooks/useTransaction';

export const Deposit: React.FC = (): JSX.Element => {
  const {
    addressValue,
    amountValue,
    deposit,
    hash,
    isExecuted,
    isLoading,
    setAddressValue,
    setAmountValue,
    setHash,
    setExecuted,
    setLoading,
    setSymbol,
  } = useTransaction();

  // const { ethBalances, price, setTransactionType } = useRootData(
  //   ({ ethBalances, price, setTransactionType }) => ({
  //     ethBalances: ethBalances.get(),
  //     price: price.get(),
  //     setTransactionType,
  //   }),
  // );

  const store = useStore();

  const { ethBalances, price } = store;

  useCheckLogin();

  return (
    <Transaction
      addressValue={addressValue}
      amountValue={amountValue}
      balances={ethBalances}
      hash={hash}
      isExecuted={isExecuted}
      isInput={false}
      isLoading={isLoading}
      onChangeAddress={(e: string) => setAddressValue(e)}
      onChangeAmount={setAmountValue}
      price={price}
      setHash={setHash}
      setExecuted={setExecuted}
      setLoading={setLoading}
      setSymbol={setSymbol}
      setTransactionType={t => {
        store.transactionType = t;
      }}
      title='Deposit'
      transactionAction={deposit}
    />
  );
};
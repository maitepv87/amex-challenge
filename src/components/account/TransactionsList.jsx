import { TransactionItem } from "./TransactionItem";

export const TransactionsList = ({ transactions }) => {
  console.log("transactions", transactions);
  return (
    <div className="transactions-list">
      <h2>Transactions</h2>
      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          name={transaction.name}
          transactionDate={transaction.transactionDate}
          amountInCents={transaction.amountInCents}
        />
      ))}
    </div>
  );
};

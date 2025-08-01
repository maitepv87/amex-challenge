export const TransactionItem = ({ name, transactionDate, amountInCents }) => {
  return (
    <div className="transaction-item">
      <p>{transactionDate}</p>
      <p>{name}</p>
      <p>{amountInCents}</p>
    </div>
  );
};

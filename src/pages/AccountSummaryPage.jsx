import { useContext } from "react";
import { AccountContext } from "../context";
import { AccountSummaryCard, TransactionsList } from "../components/account";

export const AccountSummaryPage = () => {
  const { state } = useContext(AccountContext);
  const activeAccount = state.activeAccount;

  const isActiveAccountValid =
    activeAccount &&
    Object.keys(activeAccount).length > 0 &&
    typeof activeAccount.accountNumber === "string";

  if (!isActiveAccountValid) {
    return (
      <section className="account-summary-page">
        <p className="empty-account-message">
          Please select an account to view details.
        </p>
      </section>
    );
  }

  const hasTransactions =
    Array.isArray(activeAccount.transactions) &&
    activeAccount.transactions.length > 0;

  return (
    <section className="account-summary-page">
      <AccountSummaryCard account={activeAccount} />

      {hasTransactions && (
        <TransactionsList transactions={activeAccount.transactions} />
      )}
    </section>
  );
};

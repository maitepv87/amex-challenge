import { useContext } from "react";
import { AccountContext } from "../context";
import { AccountSummaryCard, TransactionsList } from "../components/account";

export const AccountSummaryPage = () => {
  const { state } = useContext(AccountContext);
  const activeAccount = state.activeAccount;

  console.log(activeAccount);
  return (
    <section className="account-summary-page">
      <h2>Account Summary</h2>
      {activeAccount && <AccountSummaryCard account={activeAccount} />}
      {activeAccount && activeAccount.transactions ? (
        <TransactionsList transactions={activeAccount.transactions} />
      ) : (
        <p>No T</p>
      )}
    </section>
  );
};

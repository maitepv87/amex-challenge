import { HeaderSection } from "./HeaderSection";
import { AccountContentSection } from "./AccountContentSection";
import { useContext, useEffect } from "react";
import { AccountContext } from "../context/AccountContext";
import { fetchAccounts } from "../context/accountActions";

export const AppLayout = () => {
  const { dispatch, state } = useContext(AccountContext);

  useEffect(() => {
    fetchAccounts(dispatch);
  }, [dispatch]);

  return (
    <main className="app-layout">
      <section className="header-section">
        <HeaderSection />
      </section>
      <section className="account-content-section">
        <AccountContentSection />
      </section>
    </main>
  );
};

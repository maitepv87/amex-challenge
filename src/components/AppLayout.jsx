import { useContext, useEffect } from "react";
import { AccountContext, fetchAccounts } from "../context";
import { HeaderSection } from "./HeaderSection";
import { AccountContentSection } from "./AccountContentSection";

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

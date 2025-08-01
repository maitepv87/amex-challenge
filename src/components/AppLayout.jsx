import "../styles/syles.css";
import { useContext, useEffect } from "react";
import { AccountContext, fetchAccounts } from "../context";
import { Header } from "./Header";
import { MainContent } from "./MainContent";
import { AccountSummaryPage } from "../pages/AccountSummaryPage";

export const AppLayout = () => {
  const { dispatch } = useContext(AccountContext);

  useEffect(() => {
    fetchAccounts(dispatch);
  }, [dispatch]);

  return (
    <div className="app-layout">
      <Header />
      <MainContent>
        <AccountSummaryPage />
      </MainContent>
    </div>
  );
};

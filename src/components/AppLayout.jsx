import { HeaderSection } from "./HeaderSection";
import { AccountContentSection } from "./AccountContentSection";
// import { useEffect, useState } from "react";
import { useDataFetcher } from "../hooks/useDataFetcher";

export const AppLayout = () => {
  const { data, isLoading, error } = useDataFetcher("./api.json");

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

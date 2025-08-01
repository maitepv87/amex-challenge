import { useContext, useState } from "react";
import { AccountContext, setActiveAccount } from "../context";

export const SidebarAccountSelector = () => {
  const { dispatch, state } = useContext(AccountContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleAccountSelection = (account) => {
    setActiveAccount(dispatch, account);
    setIsOpen(false);
  };

  // const activeText = state.activeAccount
  //   ? `Account - ${state.activeAccount.accountNumber.slice(-4)}`
  //   : "Select account";

  return (
    <aside className="sidebar-account-selector">
      <button
        className="toggle-menu-button"
        aria-expanded={isOpen}
        aria-controls="account-list"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        ☰ {isOpen ? "Select account" : state.activeAccount.accountNumber}
      </button>

      {isOpen && (
        <ul id="account-list">
          {state.data.length === 0 ? (
            <p className="empty-state">No accounts available</p>
          ) : (
            <ul id="account-list">
              {state.data.map((account) => (
                <li
                  key={account.id}
                  onClick={() => handleAccountSelection(account)}
                >
                  Account - {account.accountNumber.slice(-4)}
                </li>
              ))}
            </ul>
          )}
        </ul>
      )}
    </aside>
  );
};

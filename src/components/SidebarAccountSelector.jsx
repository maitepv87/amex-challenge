import { useContext, useState } from "react";
import { AccountContext, setActiveAccount } from "../context";

export const SidebarAccountSelector = () => {
  const { dispatch, state } = useContext(AccountContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleAccountSelection = (account) => {
    setActiveAccount(dispatch, account);
    setIsOpen(false);
  };

  const activeText = state.activeAccount?.accountNumber
    ? `Account - ${state.activeAccount.accountNumber.slice(-4)}`
    : "Select account";

  return (
    <aside
      className="sidebar-account-selector"
      aria-label="Account selector"
      role="complementary"
    >
      <button
        className="toggle-menu-button"
        aria-expanded={isOpen}
        aria-controls="account-list"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        ☰ {activeText}
      </button>

      {isOpen && (
        <ul
          id="account-list"
          role="listbox"
          className="account-list"
          aria-label="Available accounts"
        >
          {state.data.length === 0 ? (
            <li className="empty-state" role="option">
              No accounts available
            </li>
          ) : (
            state.data.map((account) => (
              <li
                key={account.id}
                role="option"
                tabIndex={0}
                onClick={() => handleAccountSelection(account)}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleAccountSelection(account)
                }
                className={
                  account.id === state.activeAccount?.id ? "selected" : ""
                }
              >
                Account - {account.accountNumber.slice(-4)}
              </li>
            ))
          )}
        </ul>
      )}
    </aside>
  );
};

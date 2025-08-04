import { useContext, useState } from "react";
import { AccountContext, setActiveAccount } from "../context";
import "../styles/syles.css";

export const SidebarAccountSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { dispatch, state } = useContext(AccountContext);

  const handleAccountSelection = (account) => {
    setActiveAccount(dispatch, account);
    setIsOpen(false);
  };

  console.log(state.data);

  const selectedAccount = state.activeAccount?.accountNumber
    ? `Account - ${state.activeAccount.accountNumber.slice(-4)}`
    : "Select Account";

  return (
    <div className="dropdown">
      <button
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="dropdown-toggle"
      >
        {selectedAccount} <span aria-hidden>▾</span>
      </button>

      {isOpen && (
        <ul role="listbox" className="dropdown-list">
          {state.data.map((account) => (
            <li
              key={account.id}
              role="option"
              tabIndex={0}
              onClick={() => handleAccountSelection(account)}
              onKeyDown={(e) =>
                e.key === "Enter" && handleAccountSelection(account)
              }
            >
              Account - {account.accountNumber.slice(-4)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

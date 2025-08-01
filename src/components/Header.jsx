import amexlogo from "../assets/logo.svg";
import { UserGreetingMessage, SidebarAccountSelector } from "./";

export const Header = () => {
  return (
    <header className="header-section">
      <div>
        <img src={amexlogo} alt="Amex logo" className="amex-logo" />
      </div>
      <div>
        <UserGreetingMessage />
      </div>
      <div>
        <SidebarAccountSelector />
      </div>
    </header>
  );
};

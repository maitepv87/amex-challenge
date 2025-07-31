import amexlogo from "../assets/logo.svg";
import { UserGreetingMessage, SidebarAccountSelector } from "./ui";

export const HeaderSection = () => {
  return (
    <div className="header-section">
      <div>
        <img src={amexlogo} className="amex-logo" alt="Amex logo" />
      </div>
      <div>
        <UserGreetingMessage />
      </div>
      <div>
        <SidebarAccountSelector />
      </div>
    </div>
  );
};

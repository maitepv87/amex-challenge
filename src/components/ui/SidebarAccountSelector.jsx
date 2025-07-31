const accounts = [
  { id: 123, accountNumber: 12345678 },
  { id: 3556, accountNumber: 88730003 },
];

export const SidebarAccountSelector = () => {
  return (
    <aside className="sidebar-account-selector">
      <h2>Accounts</h2>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>{account.accountNumber}</li>
        ))}
      </ul>
    </aside>
  );
};

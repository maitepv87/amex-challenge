import { AppLayout } from "./components/AppLayout";
import { AccountProvider } from "./context/AccountContext.jsx";

function App() {
  return (
    <AccountProvider>
      <AppLayout />
    </AccountProvider>
  );
}

export default App;

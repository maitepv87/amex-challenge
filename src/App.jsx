import { AppLayout } from "./components/AppLayout";
import { GlobalAccountProvider } from "./context/GlobalAccountContext.jsx";

function App() {
  return (
    <GlobalAccountProvider>
      <AppLayout />
    </GlobalAccountProvider>
  );
}

export default App;

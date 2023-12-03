import { Top } from "./components/pages/Top";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { ToastProvider } from "./hooks/useToast";

function App() {
  return (
    <ToastProvider>
      <DefaultLayout>
        <Top />
      </DefaultLayout>
    </ToastProvider>
  );
}

export default App;

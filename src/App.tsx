
import Header from "./components/Header";


import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

import AllRoutes from "./AllRoutes";

function App() {

  return (
    <>
      <Toaster position="bottom-right" theme="dark" />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
      
        <AllRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;

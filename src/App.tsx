import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
mport { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";



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

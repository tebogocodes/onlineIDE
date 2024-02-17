import Header from "./components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";



function App() {
  

  return (
    <>
      <Toaster position="bottom-right" theme="dark" />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
      
      </ThemeProvider>
    </>
  );
}

export default App;

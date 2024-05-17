import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Products from "./components/Products";
import { ThemeProvider } from "./components/ThemeProdiver";

function App() {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <h3>App Home</h3>
        <Products />
        <ReactQueryDevtools />
      </ThemeProvider>
    </div>
  );
}

export default App;

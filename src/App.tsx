import Products from "./components/Products";
import { ThemeProvider } from "./components/ThemeProdiver";

function App() {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <h3>App Home</h3>
        <Products />
      </ThemeProvider>
    </div>
  );
}

export default App;

import { ThemeProvider } from "./components/ThemeProdiver";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <h3>App</h3>
        <Button>Click</Button>
      </ThemeProvider>
    </div>
  );
}

export default App;

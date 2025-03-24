import Navbar from "./components/Navbar";
import { useColorMode } from "./components/ui/color-mode";

function App() {
  const { toggleColorMode } = useColorMode("<light-mode-value>");
  return (
    <div>
      <Navbar />
     
    </div>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NewYearPage from "./NewYearPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    
        <NewYearPage />;
      
    </>
  );
}

export default App;

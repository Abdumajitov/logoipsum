import "./App.css";
import Nav from "./Components/Navbar/Nav";
import Wel from "./Components/WelcomePage/Wel";
import Sub from "./Components/Subs/Sub";
import Bank from "./Components/Bankmars/Bank";
import Free from "./Components/Free/Free";
import { useState } from "react";

function App() {
  const [lightMod, setLightMod] = useState<boolean>(false);

  const handleClick = () => {
    setLightMod((prev) => !prev);
  };

  return (
    <div className={lightMod ? "biger" : "big"}>
      <div className="cont">
        <Nav
          lightMod={lightMod}
          handleClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <Wel
          lightMod={lightMod}
          handleClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <Sub
          lightMod={lightMod}
          handleClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <Bank lightMod={lightMod} handleClick={handleClick} />
        <Free />
      </div>
    </div>
  );
}

export default App;

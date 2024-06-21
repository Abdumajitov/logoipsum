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
        <Nav lightMod={lightMod} />
        <Wel lightMod={lightMod} />
        <Sub lightMod={lightMod} />
        <Bank lightMod={lightMod} handleClick={handleClick} />
        <Free lightMod={lightMod} />
      </div>
    </div>
  );
}

export default App;

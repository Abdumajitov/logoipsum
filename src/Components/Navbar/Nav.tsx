import "./Nav.scss";
import logo from "../../assets/Logo Color.svg";
import { SetStateAction, useState } from "react";

interface BankProps {
  handleClick: () => void;
  lightMod: boolean;
}

const Nav: React.FC<BankProps> = ({ lightMod }) => {
  const [state, setState] = useState<string>("");

  const handler = (info: SetStateAction<string>) => {
    setState(info);
  };

  return (
    <div className={lightMod ? "nav" : "navbar"}>
      <div className="logo">
        <img src={logo} alt="" className="logo-img" />
      </div>
      <ul className="menu">
        <a
          onClick={() => handler("Home")}
          href="#"
          className={state === "Home" ? "bor" : "link"}
        >
          Home
        </a>
        <a
          onClick={() => handler("Features")}
          href="#"
          className={state === "Features" ? "bor" : "link"}
        >
          Features
        </a>
        <a
          onClick={() => handler("Pricing")}
          href="#"
          className={state === "Pricing" ? "bor" : "link"}
        >
          Pricing
        </a>
        <a
          onClick={() => handler("Blog")}
          href="#"
          className={state === "Blog" ? "bor" : "link"}
        >
          Blog
        </a>
      </ul>
      <div className="start">
        <button>Get Started</button>
      </div>
      <div className="burger"><span className="liner"></span></div>
    </div>
  );
};

export default Nav;

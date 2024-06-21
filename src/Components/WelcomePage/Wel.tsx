import "./Wel.scss";
import hero from "../../assets/Hero 3D.png";
import strel from "../../assets/arrow-down.svg";
import g1 from "../../assets/Group.svg";
import g2 from "../../assets/Group (1).svg";
import g3 from "../../assets/Group (2).svg";
import g4 from "../../assets/Group (3).svg";
import g5 from "../../assets/Group (4).svg";

interface BankProps {
  handleClick: () => void;
  lightMod: boolean;
}

const Wel: React.FC<BankProps> = ({ lightMod }) => {
  return (
    <div className="welcome">
      <div className={lightMod ? "wel2" : "wel"}>
        <div className="wel-text">
          <p className="wel-p1">Grow your subscription business</p>
          <p className="wel-p2">
            Outcome-centered products that reduce churn, optimize pricing, and
            grow your subscription business end-to-end.
          </p>
          <div className="wel-btns">
            <button>Get Started</button>
            <a href="#fre" className="strel">
              <img src={strel} alt="" />
            </a>
          </div>
        </div>
        <div className="wel-img">
          <img src={hero} alt="" />
        </div>
      </div>
      <div className="collab">
        <img src={g1} alt="" />
        <img src={g2} alt="" />
        <img src={g3} alt="" />
        <img src={g4} alt="" />
        <img src={g5} alt="" />
      </div>
    </div>
  );
};

export default Wel;

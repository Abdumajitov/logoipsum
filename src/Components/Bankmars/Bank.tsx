import "./Bank.scss";
import camera from "../../assets/Camera.png";
import kal from "../../assets/Calculator.png";
import cart from "../../assets/Card.png";
import React from "react";

interface BankProps {
  handleClick: () => void;
  lightMod: boolean;
}

const Bank: React.FC<BankProps> = ({ handleClick, lightMod }) => {
  return (
    <div className="bankBIg">
      <div className="bank">
        <div className={lightMod ? "banc-cart2" : "bank-cart"}>
          <img src={cart} alt="" />
          <p className="bank-p">Benchmarks</p>
          <p className="bank-p2">
            See how you stack up against comparable companies in similar stages.
          </p>
        </div>
        <div className={lightMod ? "banc-cart2" : "bank-cart"}>
          <img src={kal} alt="" />
          <p className="bank-p">Pricing Audit</p>
          <p className="bank-p2">
            Benchmark the health of your monetization and pricing strategy.
          </p>
        </div>
        <div className={lightMod ? "banc-cart2" : "bank-cart"}>
          <img src={camera} alt="" />
          <p className="bank-p">Retention Audit</p>
          <p className="bank-p2">
            Audit where revenue leakage exists and where you can increase
            retention.
          </p>
        </div>
      </div>
      <div style={{ marginTop: "150px" }} className="night">
        <p className={lightMod ? "night-p2" : "night-p"}>
          Get the right plan for future product.
        </p>
        <div className="bt">
          <div className="btns">
            <button
              onClick={handleClick}
              className={lightMod ? "but11" : "but1"}
            >
              Light
            </button>
            <button
              onClick={handleClick}
              className={lightMod ? "but22" : "but2"}
            >
              Dark
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bank;

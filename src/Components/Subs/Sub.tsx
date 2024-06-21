import "./Sub.scss";
import con from "../../assets/Content Image.png";
import con2 from "../../assets/Content Image 02.png";
import { motion } from "framer-motion";

interface BankProps {
  handleClick: () => void;
  lightMod: boolean;
}

const Sub: React.FC<BankProps> = ({ lightMod }) => {
  return (
    <div className="sub">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className={lightMod ? "sub-2" : "sub-1"}
      >
        <div className="sub-1-img">
          <img src={con2} alt="" />
        </div>
        <div className="sub-1-text">
          <p className="sub-text-p1">Subscription index</p>
          <p className="sub-text-p2">
            A daily dataset to keep you up to date on subscription market trends
            and what's happening in your vertical.
          </p>
          <a href="#" className="item">
            Learn more
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className={lightMod ? "sub-2" : "sub-1"}
      >
        <div className="sub-1-text">
          <p className="sub-text-p1">In-depth metrics</p>
          <p className="sub-text-p2">
            Accurate, real-time reporting at your fingertips. Getting data has
            never been easier.
          </p>
          <a href="#" className="item">
            Learn more
          </a>
        </div>
        <div className="sub-1-img">
          <img src={con} alt="" />
        </div>
      </motion.div>
    </div>
  );
};

export default Sub;

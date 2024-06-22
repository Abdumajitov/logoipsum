import "./Free.scss";
import { motion } from "framer-motion";

const Free = () => {
  return (
    <div id="fre" className="free">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="free-cont"
      >
        <p className="starter">Starter</p>
        <p className="star">
          <span>Free</span>
        </p>
        <p className="starter">1 Website</p>
        <p className="starter">5 GB Hosting</p>
        <p className="starter">Limited Support</p>
        <button>Get Started</button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="free-cont"
      >
        <p className="starter">Premium</p>
        <p className="star">
          <span>$29</span>/month
        </p>
        <p className="starter">10 Website</p>
        <p className="starter">15 GB Hosting</p>
        <p className="starter">Premium Support</p>
        <button>Get Started</button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="free-cont"
      >
        <p className="starter">Enterprise</p>
        <p className="star">
          <span>$49</span>/month
        </p>
        <p className="starter">Unlimited Website</p>
        <p className="starter">50 GB Hosting</p>
        <p className="starter">Premium Support</p>
        <button>Get Started</button>
      </motion.div>
    </div>
  );
};

export default Free;

import "./Free.scss";

interface BankProps {
  handleClick: () => void;
  lightMod: boolean;
}

const Free: React.FC<BankProps> = ({lightMod}) => {
  return (
    <div id="fre" className="free">
      <div className="free-cont">
        <p className="starter">Starter</p>
        <p className="star">
          <span>Free</span>
        </p>
        <p className="starter">1 Website</p>
        <p className="starter">5 GB Hosting</p>
        <p className="starter">Limited Support</p>
        <button>Get Started</button>
      </div>
      <div className="free-cont">
        <p className="starter">Premium</p>
        <p className="star">
          <span>$29</span>/month
        </p>
        <p className="starter">10 Website</p>
        <p className="starter">15 GB Hosting</p>
        <p className="starter">Premium Support</p>
        <button>Get Started</button>
      </div>
      <div className="free-cont">
        <p className="starter">Enterprise</p>
        <p className="star">
          <span>$49</span>/month
        </p>
        <p className="starter">Unlimited Website</p>
        <p className="starter">50 GB Hosting</p>
        <p className="starter">Premium Support</p>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Free;

import { FC } from "react";
import "./Loading.css";

const Loading: FC = () => {
  return (
    <div className="loading-backdrop">
      <div className="container">
        <div className="dot dot1"></div>
        <div className="dot dot2"></div>
        <div className="dot dot3"></div>
      </div>
    </div>
  );
};

export default Loading;

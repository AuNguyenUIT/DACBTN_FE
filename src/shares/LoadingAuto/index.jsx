import React from "react";
import "./styles.scss";

function LoadingAuto(props) {
  return (
    <div className="loading">
      <img
        draggable="false"
        src="../assets/images/loading/loading.gif"
        alt=""
      />
    </div>
  );
}

export default LoadingAuto;

import React from "react";
import { useSelector } from "react-redux";
import "./styles.scss";

function Loading(props) {
  const isShow = useSelector((state) => state.loading);
  return isShow ? (
    <div className="loading">
      <img
        draggable="false"
        src="../assets/images/loading/loading.gif"
        alt=""
      />
    </div>
  ) : (
    <></>
  );
}

export default Loading;

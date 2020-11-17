import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
function InputQuantity(props) {
  const { quantity, handleChangeQuantity } = props;
  const [va, setValue] = useState(quantity);
  const inputEl = useRef(null);
  useEffect(() => {
    handleChangeQuantity(va);
  }, [va]);
  return (
    <div className="input-group mb-3 input-spinner">
      <div className="input-group-prepend">
        <button
          className="btn btn-light"
          type="button"
          name="button-minus"
          onClick={() => {
            if (inputEl.current.value > 0) {
              setValue(--inputEl.current.value);
            }
          }}
        >
          -
        </button>
      </div>
      <input
        type="text"
        name="quantity"
        className="form-control"
        value={va}
        ref={inputEl}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <div className="input-group-append">
        <button
          className="btn btn-light"
          type="button"
          name="button-plus"
          onClick={() => {
            // setValue(++inputEl.current.value);
            setValue(++inputEl.current.value);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

InputQuantity.propTypes = {
  quantity: PropTypes.number,
  handleChangeQuantity: PropTypes.func,
};
InputQuantity.defaultProps = {
  quantity: 1,
  handleChangeQuantity: (data) => {
    // console.log(parseFloat(data));
  },
};

export default InputQuantity;

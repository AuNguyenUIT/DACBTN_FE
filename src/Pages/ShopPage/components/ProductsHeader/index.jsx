import React, { useState } from "react";
import PropTypes from "prop-types";

function ProductsHeder(props) {
  const { length, sort, handleChangeSort } = props;

  const [valueSort, setValueSort] = useState(
    sort ? `_sort=${sort.sort}&_order=${sort.order}` : ""
  );
  return (
    <header className="border-bottom mb-4 pb-3">
      <div className="form-inline">
        <span className="mr-md-auto text-muted">{length} &nbsp;Sản phẩm</span>

        <select
          className="mr-2 form-control"
          value={valueSort}
          onChange={(event) => {
            setValueSort(event.target.value);
            handleChangeSort(event.target.value);
          }}
        >
          <option value="">Tất Cả</option>
          <option value="_sort=createAt&amp;_order=desc">Mới</option>
          <option value="_sort=quanSold&amp;_order=desc">Bán Chạy</option>
          <option value="_sort=price&amp;_order=asc">Giá Thấp</option>
          <option value="_sort=price&amp;_order=desc">Giá Cao</option>
        </select>
      </div>
    </header>
  );
}

ProductsHeder.propTypes = {
  length: PropTypes.number,
};
ProductsHeder.defaultProps = {
  length: 0,
};

export default ProductsHeder;

import React from "react";
import "./styles.scss";

function FilterProduct(props) {
  return (
    <div className="card">
      <article className="filter-group">
        <header className="card-header">
          <div>
            <h6 className="title">Product type</h6>
          </div>
        </header>
        <div className="filter-content collapse show" id="toggler" style={{}}>
          <div className="card-body">
            <form className="pb-3">
              <div className="input-group">
                <select className="mr-2 form-control" defaultValue="all">
                  <option value="all">Tất Cả</option>
                  <option value="new">Mới</option>
                  <option value="popular">Phổ biến</option>
                  <option value="hot">Bán Chạy</option>
                  <option value="sale">Sale</option>
                </select>
              </div>
            </form>

            {/* card-body.// */}
          </div>
        </div>
      </article>
      {/* filter-group  .// */}
      <article className="filter-group">
        <header className="card-header">
          <div>
            <h6 className="title">Brands</h6>
          </div>
        </header>
        <div className="filter-content collapse show">
          <div className="card-body">
            <label className="custom-control custom-checkbox">
              <input
                type="checkbox"
                defaultChecked
                className="custom-control-input"
              />
              <div className="custom-control-label">Mercedes</div>
            </label>
          </div>
          {/* card-body.// */}
        </div>
      </article>
      {/* filter-group .// */}
      <article className="filter-group">
        <header className="card-header">
          <div>
            <h6 className="title">Tầm Giá</h6>
          </div>
        </header>
        <div className="filter-content collapse show">
          <div className="card-body">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Min</label>
                <input
                  className="form-control"
                  placeholder="$0"
                  type="number"
                />
              </div>
              <div className="form-group text-right col-md-6">
                <label>Max</label>
                <input
                  className="form-control"
                  placeholder="$1,0000"
                  type="number"
                />
              </div>
            </div>
            {/* form-row.// */}
            <button className="btn btn-block btn-primary">Apply</button>
          </div>
          {/* card-body.// */}
        </div>
      </article>
      {/* filter-group .// */}
      <article className="filter-group">
        <header className="card-header">
          <div>
            <h6 className="title">Sizes</h6>
          </div>
        </header>

        <div className="card-body">
          <label className="checkbox-btn">
            <input type="checkbox" />
            <span className="btn btn-light"> XS </span>
          </label>
          <label className="checkbox-btn">
            <input type="checkbox" />
            <span className="btn btn-light"> SM </span>
          </label>
          <label className="checkbox-btn">
            <input type="checkbox" />
            <span className="btn btn-light"> LG </span>
          </label>
          <label className="checkbox-btn">
            <input type="checkbox" />
            <span className="btn btn-light"> XXL </span>
          </label>
        </div>
        {/* card-body.// */}
      </article>
    </div>
  );
}

FilterProduct.propTypes = {};

export default FilterProduct;

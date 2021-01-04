import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";
function FilterProduct(props) {
  const { categories, handleChangeFilter, filter } = props;
  // const [valueFilter, setValueFilter] = useState(filter);
  console.log();
  return (
    <div className="card">
      {/* <article className="filter-group">
        <header className="card-header">
          <div>
            <h6 className="title">Sắp Xếp</h6>
          </div>
        </header>
        <div className="filter-content collapse show" id="toggler" style={{}}>
          <div className="card-body">
            <form className="pb-3">
              <div className="input-group">
                <select
                  className="mr-2 form-control"
                  value={valueFilter}
                  onChange={(event) => {
                    console.log(event.target.value);
                    setValueFilter(event.target.value);
                    handleChangeFilter(event.target.value);
                  }}
                >
                  <option value="">Tất Cả</option>
                  {categories.map((category) => (
                    <option key={category.id} value={`category=${category.id}`}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </form>
          </div>
        </div>
      </article> */}
      <article className="filter-group">
        <header className="card-header">
          <div>
            <h6 className="title">Danh Mục</h6>
          </div>
        </header>
        <div className="filter-content collapse show" id="toggler" style={{}}>
          <div className="card-body">
            <form className="pb-3">
              <div className="input-group">
                <select
                  className="mr-2 form-control"
                  value={`category=${filter.category}`}
                  onChange={(event) => {
                    // setValueFilter(event.target.value);
                    handleChangeFilter(event.target.value);
                  }}
                >
                  <option value="">Tất Cả</option>
                  {categories.map((category) => (
                    <option key={category.id} value={`category=${category.id}`}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </form>
          </div>
        </div>
      </article>
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

            <button className="btn btn-block btn-primary">Apply</button>
          </div>
        </div>
      </article>
    </div>
  );
}

FilterProduct.propTypes = {
  filler: PropTypes.object,
  categories: PropTypes.array,
  handleChangeFilter: PropTypes.func,
};

FilterProduct.defaultProps = {
  filler: {},
  categories: [],
  handleChangeFilter: () => ({}),
};

export default FilterProduct;

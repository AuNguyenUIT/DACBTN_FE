import React, { useEffect, useState } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import qs from "query-string";
import { Link } from "react-router-dom";
import ProductsHeder from "./components/ProductsHeader";
import FilterProduct from "./components/Filter";
import Products from "./components/Products";
import Pagination from "./components/Pagination";
import { getProducts } from "../../apis/products";
import { useSelector } from "react-redux";

function ShopPage(props) {
  const { location, history } = props;
  const [products, setProducts] = useState([]);
  const categories = useSelector((state) => state.categories);
  const query = qs.parse(location.search);
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getProducts({ _limit: 20, _page: 1, ...query }).then((res) => {
      setProducts(res.data);
    });
  }, [sort, filter]);

  // useEffect(() => {
  //   history.push(`/shops?${filter ? `&` + filter : ""}`);
  // }, [sort, filter]);
  const handleChangeSort = (data) => {
    setSort(data);

    history.push(`/shops?${filter ? filter + "&" + data : data}`);
  };
  const handleChangeFilter = (filter) => {
    setFilter(filter);
    // history.push(`/shops?${filter}${sort ? `&` + sort : ""}`);
    history.push(`/shops?${sort ? filter + "&" + sort : filter}`);
  };
  return (
    <>
      <Breadcrumb>
        <div className="container d-flex">
          <BreadcrumbItem>
            <Link to="/">Trang Chủ</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Sản Phẩm</BreadcrumbItem>
        </div>
      </Breadcrumb>
      <section className="section-content padding-y">
        <div className="container">
          <div className="row">
            <aside className="col-md-3">
              <FilterProduct
                categories={categories}
                handleChangeFilter={handleChangeFilter}
                filter={{ category: query.category }}
              />
            </aside>
            <div className="col-9">
              <ProductsHeder
                length={products.length}
                sort={{ sort: query._sort, order: query._order }}
                handleChangeSort={handleChangeSort}
              />
              <Products products={products} />
              <Pagination />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

ShopPage.propTypes = {};

export default ShopPage;

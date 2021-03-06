import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderComponent from "../../features/HeaderComponent";
import { products } from "../../fakeData.json";
import ProductCard from "../../components/ProductCard";
import { Col, Row } from "antd";

function clearMarkers(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  return str;
}

export default function ProductsPage() {
  const location = useLocation();
  const key = clearMarkers(location.search.slice(5).toLowerCase());
  const [result, setResult] = useState([]);

  useEffect(() => {
    const match = products.filter((product) => {
      let productName = clearMarkers(product.name.toLowerCase());
      return productName.indexOf(key) !== -1;
    });
    setResult(match);
    window.scrollTo({top: 0})
  }, [key, result.length]);
  return (
    <div className="products-page">
      <HeaderComponent />
      <div className="products-page__wrap">
        <div className="products-page__title">
          <h1>List Products</h1>
        </div>
        <div className="products-page__product-container">
          <Row>
            {result.map((product) => {
              return (
                <div key={product.id} className="products-page__product-item">
                  <Col span={4}>
                    <ProductCard
                      src={product.src}
                      alt={product.src}
                      price={product.price}
                      sold={product.sold}
                      salePercent={product.sale}
                      name={product.name}
                      id={product.id}
                    />
                  </Col>
                </div>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
}

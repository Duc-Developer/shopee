import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import React, { useRef } from "react";
import CatalogCard from "../../components/CatalogCard";

function importAll(r) {
  return r.keys().map(r);
}

const catalogLogos = importAll(
  require.context(
    "../../assist/images/catalog-images",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const titles = [
  "Mẹ và Bé",
  "Quà tặng",
  "Điện Gia dụng",
  "Điện thoại và phụ kiện",
  "Nhà sách online",
  "Ô tô, xe máy, xe đạp",
  "Thời trang trẻ em",
  "Giày dép nữ",
  "Thời trang nam",
  "Thể thao & Du lịch",
  "Giày dép nam",
  "Thời trang nữ",
  "Thiết bị điện gia dụng",
  "Đồng hồ",
  "Phụ kiện thời trang",
  "Thiết bị điện tử",
  "Voucher",
  "Mỹ phẩm & Làm đẹp",
  "Máy tính & Laptop",
  "Bách hóa online",
  "Chăm sóc nhà cửa",
  "Đồ ăn thú cưng",
  "Đồ chơi",
  "Máy ảnh",
  "Túi ví",
];

function convertData() {
  let result = [];
  for (var key in titles) {
    result.push({
      src: catalogLogos[key],
      title: titles[key],
    });
  }
  return result;
}

export default function Catalog(props) {
  const refEl = useRef(null);

  const catalogList = convertData();
  return (
    <div className="catalog-main">
      <div className="catalog-main__title">
        <h3>DANH MỤC</h3>
      </div>
      <div ref={refEl} className="catalog-main__catalog-list">
        <div className="catalog-main__catalog-list--top">
          {catalogList.slice(0, 13).map((item, index) => {
            return (
              <div key={index}>
                <CatalogCard
                  width="10.3em"
                  height="13em"
                  src={item.src}
                  alt={item.src}
                  title={item.title}
                />
              </div>
            );
          })}
        </div>
        <div className="catalog-main__catalog-list--bottom">
          {catalogList.slice(13).map((item, index) => {
            return (
              <div key={index}>
                <CatalogCard
                  width="10.3em"
                  height="13em"
                  src={item.src}
                  alt={item.src}
                  title={item.title}
                />
              </div>
            );
          })}
        </div>
      </div>
      <LeftCircleOutlined
        className="catalog-main__icon-scroll-left"
        onClick={() => {
          refEl.current.scrollTo({ left: 0, behavior: "smooth" });
        }}
      />
      <RightCircleOutlined
        className="catalog-main__icon-scroll-right"
        onClick={() => {
          refEl.current.scrollTo({ left: 1000, behavior: "smooth" });
        }}
      />
    </div>
  );
}

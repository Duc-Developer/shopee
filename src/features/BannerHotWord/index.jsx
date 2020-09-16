import React from "react";
import { Col, Row } from "antd";
import slide01 from "../../assist/images/background_slide_001.jpeg";
import slide02 from "../../assist/images/background_slide_002.jpeg";
import slide03 from "../../assist/images/background_slide_003.jpeg";
import slide04 from "../../assist/images/background_slide_004.jpeg";
import slide05 from "../../assist/images/background_slide_005.jpeg";
import slide06 from "../../assist/images/background_slide_006.jpeg";
import freeExtraBanner from "../../assist/images/background_img_free_ship_extra.jpeg";
import sacomBankBanners from "../../assist/images/background_img_sacom_bank.jpeg";
import freshipExtra from "../../assist/images/free_ship_extra.png";
import globalProducts from "../../assist/images/global_products.png";
import returnExtra from "../../assist/images/return_extra.png";
import sale50Percent from "../../assist/images/sale_50_percent.png";
import shopeePremium from "../../assist/images/shopee_premium.png";
import shopeeDollar from "../../assist/images/shopee_dolla.png";
import mumClub from "../../assist/images/mum_club.png";
import bookClub from "../../assist/images/book_club.png";
import technology from "../../assist/images/technology.png";
import familyProtect from "../../assist/images/family_protect.png";
import BannerAutoSlide from "../../components/BannerAutoSlide";

const slideList = [slide01, slide02, slide03, slide04, slide05, slide06];
const hotWords = [
  { src: freshipExtra, content: "Freship Xtra" },
  { src: globalProducts, content: "Hàng Quốc Tế" },
  { src: returnExtra, content: "Hoàn Xu Đơn Bất Kỳ" },
  { src: sale50Percent, content: "Săn Siêu Sale" },
  { src: shopeePremium, content: "Shopee Premium" },
  { src: shopeeDollar, content: "Giảm Giá Trăm Tỷ" },
  { src: mumClub, content: "Shopee Mum's Club" },
  { src: bookClub, content: "Shopee Book Club" },
  { src: technology, content: "Siêu Thị Điện Tử" },
  { src: familyProtect, content: "Bảo Vệ Gia Đình" },
];

export default function BannerHotWord() {
  return (
    <div className="banner-hotword">
      <div className="banner-hotword--wrapper">
        <div className="banner-hotword__main-banner-container">
          <Row>
            <Col span={16}>
              <BannerAutoSlide listBanners={slideList} />
            </Col>
            <Col className="banner-hotword__main-banner-right" span={8}>
              <img
                width="100%"
                src={freeExtraBanner}
                alt="free-ship-extra-banner"
              />
              <img
                width="100%"
                src={sacomBankBanners}
                alt="sacom-bank-banner"
              />
            </Col>
          </Row>
        </div>
        <div className="banner-hotword__list-hot-words">
          {hotWords.map((item, index) => {
            return (
              <div key={index} className="banner-hotword__hot-word-item">
                <img src={item.src} alt={item.content} />
                <div>
                  <span>{item.content}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

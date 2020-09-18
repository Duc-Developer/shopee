import React from "react";
import shopeePayBanners from '../../assist/images/shopee_pay_online.png';
import BannerHotWord from '../../features/BannerHotWord';
import Catalog from "../../features/Catalog";
import FlashSaleContainer from "../../features/FlashSale";

export default function HomePage(props) {
  return (
    <div className="home-page">
      <BannerHotWord />
      <img width="90%" src={shopeePayBanners} alt="banner-pay-online" />
      <Catalog />
      <FlashSaleContainer />
    </div>
  );
}

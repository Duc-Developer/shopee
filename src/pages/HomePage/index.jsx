import React from "react";
import shopeePayBanners from '../../assist/images/shopee_pay_online.png';
import BannerHotWord from '../../features/BannerHotWord';
import Catalog from "../../features/Catalog";
import FlashSaleContainer from "../../features/FlashSale";
import superFlashBannerLeft from "../../assist/images/shopp_super_voucher_background_left.jpeg";
import superFlashBannerRight from "../../assist/images/shopp_super_voucher_background_right.jpeg";
import shopeeMartBanners from "../../assist/images/shopee_mart_background.jpeg";
import ShopeeMallDeal from "../../features/ShopeeMallDeal";


export default function HomePage(props) {
  return (
    <div className="home-page">
      <BannerHotWord />
      <img width="90%" src={shopeePayBanners} alt="banner-pay-online" />
      <Catalog />
      <FlashSaleContainer />
      <div className="home-page__body-banner">
        <div className="home-page__body-banner--left">
          <img src={superFlashBannerLeft} alt="super-banner-flash-left"/>
          <img src={superFlashBannerRight} alt="super-banner-flash-right"/>
        </div>
        <div className="home-page__body-banner--right">
          <img src={shopeeMartBanners} alt="shopee-mart-banner" />
        </div>
      </div>
      <ShopeeMallDeal />
    </div>
  );
}

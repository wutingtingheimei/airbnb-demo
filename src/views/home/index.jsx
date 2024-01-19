import React, { memo, useEffect } from "react";
import { HomeWrapper } from "./style";
import Banner from "./components/Banner";
import { fetchHomeAllDataAction } from "@/store/modules/home";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
// import NavList from "@/components/nav";
import HomeSectionV1 from "./components/HomeSectionV1";
import HomeSectionV2 from "./components/HomeSectionV2";
import Longfor from "./components/Longfor";
import HomeSectionV3 from "./components/HomeSectionV3";

// webpack 引入图片
// import coverImage from '@/assets/img/cover_01.jpeg'
const Home = memo(() => {
  // 从redux中获取数据
  const { goodPriceInfo, highScoreInfo,discountInfo, recommendInfo, longForInfo, plusInfo} = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longForInfo: state.home.longForInfo,
      plusInfo: state.home.plusInfo
    }),
    shallowEqual
  );

console.log(recommendInfo, 'recommendInfo')

  // 派发异步事件:发送网络请求
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeAllDataAction());
  }, [dispatch]);


  return (
    <HomeWrapper>
      <Banner></Banner>
      {/* <NavList></NavList> */}
      <div className="content">
        {/* 筛选 */}
        {Object.keys(recommendInfo).length && <HomeSectionV2 infoData={recommendInfo}></HomeSectionV2>}
        {Object.keys(discountInfo).length && <HomeSectionV2 infoData={discountInfo}></HomeSectionV2>}
        {Object.keys(longForInfo).length && <Longfor infoData={longForInfo}></Longfor>}
        {Object.keys(plusInfo).length && <HomeSectionV3 infoData={plusInfo}></HomeSectionV3>}
        <HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1>
        <HomeSectionV1 infoData={highScoreInfo}></HomeSectionV1>
      </div>
      {/* <img  src={coverImage} alt=""/> */}
    </HomeWrapper>
  );
});

export default Home;

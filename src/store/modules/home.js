import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeHotRecommendData, getHomeLongforData, getHomePlusData } from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchHomeDataAction = createAsyncThunk(f"etchData", async () => {
//   const resp = await getHomeGoodPriceData();
//   return resp;
// });

// 首页加载数据可以放在一个createAsyncThunk中
// createAsyncThunk 回调函数有两个参数, payload 和store对象
export const fetchHomeAllDataAction = createAsyncThunk(
  "fetchHomeData",
  (payload, { dispatch }) => {
    getHomeGoodPriceData().then((res) => {
      // 派发 修改数据
      dispatch(changeGoodPriceInfoAction(res));
    });
    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res));
    });
    getHomeDiscountData().then(res=> {
      dispatch(changeDiscountInfoAction(res))
    })
    getHomeHotRecommendData().then(res => {
      console.log(res, '2dwdwd')
      dispatch(changeRecommendInfoAction(res))
    })
    getHomeLongforData().then(res => {
      dispatch(changeLongforInfoAction(res))
    })

    getHomePlusData().then(res => {
      dispatch(changePlusInfoAction(res))
    })
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longForInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload
    },
    changeLongforInfoAction(state, { payload }) {
      state.longForInfo = payload
    },
    changePlusInfoAction(state, {payload}) {
      state.plusInfo = payload
    }
  },
  // extraReducers: {
  //   [fetchHomeDataAction.fulfilled](state, { payload }) {
  //     state.goodPriceInfo = payload;
  //   },
  // },
});

export const { changeGoodPriceInfoAction,changeHighScoreInfoAction, changeDiscountInfoAction, changeRecommendInfoAction, changeLongforInfoAction, changePlusInfoAction } = homeSlice.actions;


export default homeSlice.reducer;

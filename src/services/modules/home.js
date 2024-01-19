import hyRequest from "../request";

export const  getHomeGoodPriceData =  ()=>{
  return hyRequest.get({
    url: '/home/goodPrice'
  })
}


export const getHomeHighScoreData  = ()=>{
  return hyRequest.get({
    url: '/home/highscore'
  })
}

export const getHomeDiscountData  = ()=>{
  return hyRequest.get({
    url: '/home/discount'
  })
}


export function getHomeHotRecommendData() {
  return hyRequest.get({
    url: "/home/hotrecommenddest"
  })
}


export function getHomeLongforData() {
  return hyRequest.get({
    url: "/home/longfor"
  })
}


export function getHomePlusData() {
  return hyRequest.get({
    url: "/home/plus"
  })
}
import axios from "axios";

import { TIMEOUT, BASE_URL } from "./config";
class HYRequest{

  constructor (baseURL, timeout) {
    this.instance =axios.create({
      baseURL,
      timeout

    })


    this.instance.interceptors.response.use((res)=> {
      return res.data
    }, err => {
      return err
    })
  }

 

  request(config) {
    return this.instance.request(config)
  }
  get(config) {
    return this.request({...config, methods: "get"})
  }
  post(config) {
    return this.request({...config, methods: "post"})
  }

}



const  hyRequest = new HYRequest(BASE_URL, TIMEOUT)

export default hyRequest
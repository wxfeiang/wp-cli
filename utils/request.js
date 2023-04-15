/*
 * @Author: wxfeiang
 * @Description: 请求库
 * @Date: 2023-04-16 00:42:23
 * @LastEditTime: 2023-04-16 02:03:14
 * @FilePath: /wp-cli/utils/request.js
 */

import axios from "axios"
import ora from "ora"

const log = console.log
const spinner = ora("数据请求中，请稍后... \n")

spinner.start()

import configData from "../config/resStatus.js"
import dataJson from "../public/data.js"
const { baseURL, timeout } = dataJson
const { resStatus } = configData

const service = axios.create({
  baseURL,
  timeout
})

service.interceptors.request.use(
  (config) => {
    return config // VREAM
  },
  (error) => {
    log(error)
  }
)
// 响应拦截  401 token过期处理
service.interceptors.response.use(
  (response) => {
    const { code, message, data } = response // 后台返回的标准数据格式
    if (code || code == 200) {
      spinner.succeed("数据请求成功！")
      return data
    } else {
      //  答应错误消息
      spinner.succeed("数据请求成功！")
      spinner.fail("数据请求解析异常！")
      // return Promise.reject(new Error("111"))
    }
  },
  (error) => {
    /** *** 接收到异常响应的处理开始 *****/
    if (error && error.response) {
      error.message = resStatus[error.response.status] ?? resStatus["default"]
    } else {
      // 超时处理   可从接口返回数据判断
      if (JSON.stringify(error).includes("timeout")) {
        error.message = "服务器响应超时，请刷新当前页"
      }
    }
    spinner.stop()
    //  答应错误消息
    return Promise.reject(new Error(message))
  }
)
// 封装接口请求模块
export default service

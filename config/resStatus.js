/*
 * @Author: wxfeiang
 * @Description:  定义基础数据
 * @Date: 2023-04-16 00:43:11
 * @LastEditTime: 2023-04-16 01:04:28
 * @FilePath: /wp-cli/config/resStatus.js
 */
const configData = {
  // 网络请求返回的状态码
  resStatus: {
    400: "错误请求",
    401: "未授权，请重新登录",
    403: "拒绝访问",
    404: "请求错误,未找到该资源",
    405: "请求方法未允许",
    408: "请求超时",
    500: "服务器端出错",
    501: "网络未实现",
    502: "网络错误",
    503: "服务不可用",
    504: "网络超时",
    505: "http版本不支持该请求",
    default: `连接错误,请联系系统管理员！`
  }
}

export default configData

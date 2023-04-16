/*
 * @Author: wxfeiang
 * @Description:
 * @Date: 2023-04-16 00:36:12
 * @LastEditTime: 2023-04-16 22:48:47
 * @FilePath: /wp-cli/lib/init.js
 */
import chalk from "chalk"
import dataJson from "../public/data.js"
import requset from "../utils/request.js"

export const init = async () => {
  const res = await requset({
    url: `/repos/${dataJson.userName}/${dataJson.repos}/branches`
  })
  try {
    console.log(chalk.green("**当前可用的仓库模板如下:"))
    console.log(res)
    // const repos = res.map((item, index) => {
    //   let data = chalk.green(index) + ",仓库名称" + chalk.green(" : ") + item.name
    //   console.log(
    //     data

    //     // description: item.description,
    //     // branchesUrl: item.branches_url,
    //     // url: item.url
    //   )
    //   return data
    // })
  } catch (err) {
    console.log("cacth", err)
  }

  //   log(chalk.green(figlet.textSync("WangPeng-CLI", { horizontalLayout: "full" })))
}

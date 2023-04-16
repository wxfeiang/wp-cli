/*
 * @Author: wxfeiang
 * @Description:
 * @Date: 2023-04-16 00:36:12
 * @LastEditTime: 2023-04-16 22:46:36
 * @FilePath: /wp-cli/lib/list.js
 */
import chalk from "chalk"
import dataJson from "../public/data.js"
import requset from "../utils/request.js"
export const getTemplateList = async () => {
  const res = await requset({
    url: "/repos/users/" + dataJson.userName
  })
  try {
    console.log(chalk.green("**当前可用的仓库模板如下:"))
    const repos = res.map((item, index) => {
      let data = chalk.green(index) + ",仓库名称" + chalk.green(" : ") + item.name
      console.log(
        data

        // description: item.description,
        // branchesUrl: item.branches_url,
        // url: item.url
      )
      return data
    })
  } catch (err) {
    console.log("cacth", err)
  }

  //   log(chalk.green(figlet.textSync("WangPeng-CLI", { horizontalLayout: "full" })))
}

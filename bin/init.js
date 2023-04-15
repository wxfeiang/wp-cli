/*
 * @Author: wxfeiang
 * @Description:
 * @Date: 2023-04-16 00:36:12
 * @LastEditTime: 2023-04-16 01:49:42
 * @FilePath: /wp-cli/bin/init.js
 */
import requset from "../utils/request.js"

export const gitList = async () => {
  const res = await requset({
    url: "/repos"
  })
  console.log(res)
  //   const repos = res.map((item) => {
  //     console.log("当前可用的模板")
  //     // log(
  //     //   chalk(
  //     //     "==========" +
  //     //       JSON.stringify({
  //     //         name: item.name,
  //     //         description: item.description,
  //     //         branchesUrl: item.branches_url,
  //     //         url: item.url
  //     //       })
  //     //   )
  //     // )
  //   })

  //   log(chalk.green(figlet.textSync("WangPeng-CLI", { horizontalLayout: "full" })))
  //   spinner.stop()
}

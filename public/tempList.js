/*
 * @Author: wxfeiang
 * @Description: 请求在自己github线库的模板
 * @Date: 2023-04-15 17:44:36
 * @LastEditTime: 2023-04-16 00:46:13
 * @FilePath: /wp-cli/public/tempList.js
 */
import axios from "axios"
import chalk from "chalk"
import figlet from "figlet"
import ora from "ora"

const log = console.log
const spinner = ora("数据请求中，请稍后... \n")

const user = "wxfeiang"
const githubUrl = `https://api.github.com/users/${user}/repos`

export const gitList = async () => {
  spinner.start()
  const res = await axios.get(githubUrl)
  log(chalk.green.bgGreen.bold("当前可用的模板"))
  const repos = res.data.map((item) => {
    // return {
    //   name: item.name,
    //   description: item.description,
    //   branchesUrl: item.branches_url,
    //   url: item.url
    // }
    log(
      chalk(
        "==========" +
          JSON.stringify({
            name: item.name,
            description: item.description,
            branchesUrl: item.branches_url,
            url: item.url
          })
      )
    )
  })

  log(chalk.green(figlet.textSync("WangPeng-CLI", { horizontalLayout: "full" })))
  spinner.stop()
}

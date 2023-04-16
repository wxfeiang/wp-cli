/*
 * @Author: wxfeiang
 * @Description:
 * @Date: 2023-04-16 16:58:13
 * @LastEditTime: 2023-04-16 16:59:05
 * @FilePath: /wp-cli/lib/inquirer.js
 */
const inquirer = require("inquirer")
const question = [
  {
    type: "input",
    message: "你的职业是",
    name: "occupation",
    default: "养猪"
  }
]

// 写法2
let answer = await inquirer.prompt(question)
console.log(answer)

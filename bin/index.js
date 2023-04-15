#! /usr/bin/env node

// const program = require("commander")
import { program } from "commander"

import { gitList } from "./init.js"

program.version("1.0.0")

//创建新项目的命令
program
  .command("create <app-name>")
  .description("创建一个新项目")
  .action((appName) => {
    console.log(appName)
  })
program
  .command("init <templateName>")
  .description("项目初始化")
  .action((templateName) => {
    // 输入问题
    console.log(templateName)
  })
program
  .command("list")
  .description("查看当前可用的模板库")
  .action(() => {
    gitList()
  })

program.parse(process.argv)

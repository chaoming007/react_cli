#!/usr/bin/env node

const path = require("path")
const chalk = require('chalk')
const program = require('commander')
const inquirer = require('inquirer')
const download = require('download-git-repo')
const ora = require('ora')
const fs = require('fs-extra')

let questions=require("./lib/questions")
let tempJson=path.join(__dirname,"/template/package.json")
let temp=path.join(__dirname,"/template")
let nowTemp=path.join(process.cwd(),"/react-app")
let filename="react-app"
let spinner,objName;



program.version('0.0.1');                                    //声明版本号
program
.usage('<command> [options]')
.command('init')                                        //声明一个子命令
.description('create react working directory')          //给出命令的描述
.option('name', '项目的文件夹名字，如果没有默认为react-app')   //设置命令的参数
.action(function (options) {                    //命令的实现体
       if(typeof options=="string"){
         filename=options;
         objName=path.join(process.cwd(),"/"+options)
       }else{
         objName=nowTemp;
       }

      inquirer.prompt(questions).then(answers => {
        spinner= ora('downloading template');
        spinner.start();
        setFileFun(answers)
      })
      function setFileFun(obj){   
          let datObj="";
          fs.readJson(tempJson)
          .then((packageObj) => {    //读取package数据
            datObj=setPageJsonFun(packageObj,obj);
            return fs.copy(temp,objName)
          })
          .then(()=>{
            return fs.writeJson(path.join(objName,"package.json"),datObj);  
          }).then(()=>{
             spinner.stop()
             f()
          })
      }
      function setPageJsonFun(packageObj,obj){          //设置package
           for(let key in packageObj){
               for(let key_1 in obj){
                  if(key===key_1){
                     packageObj[key]=obj[key_1];
                  }
               }
           }
           return packageObj;
      }
      

});
program.parse(process.argv);                              //开始解析用户输入的命令
function f(){
    console.log("项目创建完成...");
    console.log("请执行",chalk.red("cd "+filename+" && npm install"),"进行后续操作...");
}


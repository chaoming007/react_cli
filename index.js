#!/usr/bin/env node

const path = require("path")
const chalk = require('chalk')
const program = require('commander')
const inquirer = require('inquirer')
const download = require('download-git-repo')
const ora = require('ora')
const fs = require('fs-extra')

let checkVersion=require("./lib/check-version");
let packAge = require(__dirname + '/package.json')
let questions=require("./lib/questions")
let tempJson=path.join(__dirname,"/template/package.json")
let temp=path.join(__dirname,"/template")
let nowTemp=path.join(process.cwd(),"/react-app")
let filename="react-app"
let spinner,objName;


program.on('--help', () => {
  console.log('  Examples:')
  console.log()
  console.log(chalk.gray('    # 创建一个新的react项目模板！（如果没有输入项目名称，默认名称为react-app）'))
  console.log('    $ react init my-project')
  console.log()
})


program.version(packAge.version);                                   
program
.usage('<command> [options]')
.command('init')                                        
.description('创建一个新的react项目模板！')          
.option('name', '项目的文件夹名字，如果没有默认为react-app')   
.action(function (options) {      
  checkVersion(setTempFun,options);              
      
});
program.parse(process.argv);     

function setTempFun(options){
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
        .then((packageObj) => {    
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
    function setPageJsonFun(packageObj,obj){         
          for(let key in packageObj){
              for(let key_1 in obj){
                if(key===key_1){
                    packageObj[key]=obj[key_1];
                }
              }
          }
          return packageObj;
    }

}

function f(){
    console.log(" ");
    console.log("    项目创建完成...");
    console.log(" ");
    console.log("    请执行",chalk.red("cd "+filename+" && npm install"),"进行开发吧...");
}


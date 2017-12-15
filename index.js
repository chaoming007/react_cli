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
let nowTemp=path.join(process.cwd(),"/template1")


// fs.writeJson('./package.json', {description: '这是一个react模板脚手架1111'})    //写入数据
// .then(() => {
//   console.log('success!')
// })
// .catch(err => {
//   console.error(err)
// })

// fs.ensureDir("./sdfdf")      
// .then(() => {
//   console.log('success!')
// })
// .catch(err => {
//   console.error(err)
// })

// console.log(process.cwd(),"------",__dirname)


// fs.copy('./template', './template1')
// .then(() => console.log('success!'))
// .catch(err => console.error(err))

const spinner;
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
      return fs.copy(temp,nowTemp)
    })
    .then(()=>{
      return fs.writeJson(path.join(nowTemp,"package.json"),datObj);  
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




// program.version('0.0.1'); //声明版本号
// program
//     .usage('<command> [options]')
//     .command('init')                                //声明一个子命令
//     .description('create react working directory') //给出命令的描述
//     .option('-a, --all', 'Whether to display hidden files') //设置命令的参数
//     .action(function (options) {                    //命令的实现体

//         inquirer.prompt(questions).then(answers => {
//             //console.log(answers);

//                     const spinner = ora('downloading template')
            
//                     spinner.start()
//                     //if (exists(tmp)) rm(tmp)
//                     download(gitUrl, process.cwd(), { clone:true }, err => {
//                         spinner.stop()
//                         if(err){
//                             console.log(err);
//                             console.log(chalk.red('Failed to download template'))
//                         }else{
//                             console.log(chalk.green('download template success'))
//                         }
                      
//                     })


//         });



    
//     });

// program.parse(process.argv);                        //开始解析用户输入的命令






//copy(y,d,f);

function f(){
    console.log("项目创建完成...");
    console.log("请执行",chalk.red("cd react-app && npm install"),"进行后续操作...");
}


//console.log(y,"------",process.cwd());
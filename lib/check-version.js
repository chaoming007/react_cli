const request = require('request')
const chalk = require('chalk')
const semver = require('semver')
const packageConfig = require('../package.json')

module.exports = (callback,arg) => {
    request('https://registry.npmjs.org/my-react-cli', (err, res, body) =>{
            if (!err && res.statusCode === 200) {
                const latestVersion = JSON.parse(body)['dist-tags'].latest
                const localVersion = packageConfig.version
                if (semver.lt(localVersion, latestVersion)) {
                    console.log()
                    console.log(chalk.yellow('  发现一个新的 my-react-cli 版本，请及时升级到最新版！'))
                    console.log()
                    console.log('  最新版本:   ' + chalk.green(latestVersion))
                    console.log('  已安装版本: ' + chalk.red(localVersion))
                    console.log()
                }else{
                    console.log('当前版本是:  '+chalk.green(localVersion)+' , 已经是最新版！ ')
                }
            }

            callback(arg);
    });

}

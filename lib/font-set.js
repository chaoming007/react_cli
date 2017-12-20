const figlet = require('figlet')
const chalk = require('chalk')
module.exports=()=>{
    figlet('my-react-cli', function(err, data) {
        console.log(chalk.green(data));
    });
}

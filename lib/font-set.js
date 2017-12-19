const figlet = require('figlet')
module.exports=()=>{
    figlet('my-react-cli', function(err, data) {
        console.log(data);
    });
}

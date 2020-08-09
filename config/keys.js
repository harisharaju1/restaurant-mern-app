//const LIVE = true;

//if(LIVE){
if(process.env.NODE_ENV==="production"){
    module.exports = require('./prod.js');
} else {
    module.exports = require('./dev.js');
}
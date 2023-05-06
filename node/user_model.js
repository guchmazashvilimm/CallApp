const {readFileSync} = require('fs');

let loadUser = () => JSON.parse(readFileSync('users.json'));

console.log(loadUser());
module.exports = {loadUser};
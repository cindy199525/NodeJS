const { usersModel } = require('./models/userModels')


module.exports.login = async function (user) {
    const data = await usersModel.find(user)
    console.log('3333', data);
    return data;







}
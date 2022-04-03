const { login } = require('../dao/userDao')

module.exports.login = async function (user) {
    // 调用第三层userDao.js里暴露的login方法
    const data = await login(user);
    console.log('222', data);
    if (data.length > 0) {
        return {
            message: '登录成功',
            status: 1
        }

    }
    else {
        return {
            message: '登录失败',
            status: 0
        }

    }


}
const validator = require('validator')
const userModel = require('./../models/user-info')
const userCode = require('./../codes/user')


const user = {
    async create (user) {
        let result = await userModel.create(user)
        return result
    },

    async getExistOne (formData) {
        let result = await userModel.getExistOne({
            'email': formData.email,
            'name': formData.userName
        })
        return result
    },

    

}

module.exports = user
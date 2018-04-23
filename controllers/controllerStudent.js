const Model = require('../models')

class ControllerStudent{

    static addStudent(first_name, last_name, email){
        return Model.Student.create({first_name: first_name, last_name: last_name, email: email})
            .then(() => {
                return true
            })
            .catch(() => {
                return false
            })
    }

}

module.exports = ControllerStudent
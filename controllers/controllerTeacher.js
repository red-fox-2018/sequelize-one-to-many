const Model = require('../models')

class ControllerTeacher{

    static findTeacher(id){
        console.log('===>',id)
        return Model.Teacher.findById(id,{
            order:[
                ['id','ASC']
            ],
            include: Model.Subject
        })
    }

    static listTeachers(){
        return Model.Teacher.findAll({
            order:[
                ['id','ASC']
            ],
            include: Model.Subject
        })   
    }

    static editTeacherData(id, first_name, last_name, email, SubjectId){
        let edit = Model.Teacher.update({first_name: first_name, last_name: last_name, email: email, SubjectId: SubjectId},{where:{id: id}})
        return edit
    }

    static deleteTeacherData(id){
        let remove = Model.Teacher.destroy({where:{id: id}})
        return remove
    }
}

module.exports = ControllerTeacher
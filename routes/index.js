const express = require('express')
const app = express()
var router = express.Router()
const model= require("./../models")


router.get("/",function(req,res) {
	res.render("mainPage")
	console.log('-===============')
})



//===================TEACHERS===============================================

//router.get("/subjects/:subject_id/")

router.get("/teachers",function(req,res) {
	model.Teacher.findAll({include:model.Subject}).then(teachersSubject =>{
		//res.send(teachersSubject)
		res.render("teachers",{teachersSubject:teachersSubject})	
	})
		
})

router.get("/teachers/addTeacher",function(req,res) {
	res.render("addTeacher")
})

router.post("/teachers/addTeacher",function(req,res) {
	model.Teacher.create({
		first_name:req.body.first_name,
		last_name:req.body.last_name,
		email:req.body.email,
		subject_id:req.body.subject_id
	})
	.then(teacherName =>{
		console.log('------------------berhasil')
		res.redirect("/teachers/addTeacher")})
	.catch(err => {
		console.log("==============")
		let error = new Error("format email salah")
		res.render("addTeacher",{error:error})
	})
	
})




// router.get("/teachers",function(req,res){
// 	model.Teacher.findOne({where: {id:3}},{include:model.Subject}).then(data =>{
// 	res.send(data)
// 	})		
// })



// router.get("/teachers/",function(req,res) {
// 	model.Teacher.findAll({raw:true}).then(dataTeachers => {
// 		res.render("teachers",{dataTeachers:dataTeachers})
// 	})
// })

// router.get("/teachers/addTeacher",function(req,res) {
// 	res.render("addTeacher")
// })

// router.post("/teachers/addTeacher",function(req,res){
// 	model.Teacher.create(req.body).then(res.redirect("/teachers/addTeacher"))
// })

// router.get("/teachers/editTeacher/:id",function(req,res) {
// 	model.Teacher.findById(req.params.id,{raw:true}).then(dataTeacher=>{
// 		res.render("editTeacher",{dataTeacher:dataTeacher})
// 	})
// })

// router.post("/teachers/editTeacher/:id",function(req,res) {
// 	model.Teacher.update(req.body,{
// 		where:{
// 				id:req.params.id 
// 		}
// 	}).then(res.redirect("/teachers"))
// })

// router.get("/teachers/:id",function(req,res){
// 	model.Teacher.destroy({
// 		where: {
// 			id:req.params.id
// 		}
// 	}).then(res.redirect("/teachers"))
// })


// //=========================SUBJECT======================================
// router.get("/subjects",function(req,res) {
// 	model.Subject.findAll({raw:true}).then(dataSubjects => {
// 		res.render("subjects",{dataSubjects:dataSubjects})	
// 	})
	
// })

// router.get("/subjects/addSubject",function(req,res) {
// 	res.render("addSubject")
// })

// router.post("/subjects/addSubject",function(req,res) {
// 	model.Subject.create(req.body).then(res.redirect("/subjects/addSubject"))
// })

// router.get("/subjects/editSubject/:id",function(req,res) {
// 	model.Subject.findById(req.params.id,{raw:true}).then(dataSubject =>{
// 		res.render("editSubject",{dataSubject:dataSubject})
// 	})
// })

// router.post("/subjects/editSubject/:id",function(req,res) {
// 	model.Subject.update(req.body, {
// 		where: {
// 			id:req.params.id
// 		}
// 	}).then(res.redirect("/subjects"))
// })

// router.get("/subjects/:id",function(req,res) {
// 	model.Subject.destroy({
// 		where:{
// 			id:req.params.id
// 		}
// 	}).then(res.redirect("/subjects"))
// })







module.exports = router

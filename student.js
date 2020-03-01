var mongoose = require('mongoose')
 
var Schema = mongoose.Schema

//1.连接数据库
mongoose.connect('mongodb://localhost/student')

//2.设计集合结构（表结构）
var studentSchema = new Schema({
	name:{
		type:String,
		required:true
	},
	gender:{
		type:Number,
		enum:[0,1],
		deafault:0
	},
	age:{
		type:Number,
	}
})

//3.将文档结构发布为模型，返回模型构造函数
module.exports = mongoose.model('Student', studentSchema)

//4.使用Model

//*********
//增加数据
//**********

//var admin = new User({
//	username:'admin',
//	password:'123456',
//	email:'admin@admin.com'
//})
//
//admin.save(function(err, ret){
//	if(err){
//		console.log('保存失败')
//	}else{
//		console.log('保存成功')
//		console.log(ret)
//	}
//})

//*********
//查询数据
//**********

//Student.find(function(err, ret){
//	if(err){
//		console.log('查询失败')
//	}else{
//		console.log('查询成功')
//		console.log(ret)
//	}
//})

//*********
//删除数据
//**********

//User.remove({
//	 username: 'admin'
//	},function(err, ret){
//	if(err){
//		console.log('删除失败')
//	}else{
//		console.log('删除成功')
//		console.log(ret)
//	}
//})

//*********
//更新数据
//**********

//Stu.findByIdAndUpdate('5e5a4b58d52a113a4cdb5d06',
// {password:'123'},function(err, ret){
//	if(err){
//		console.log('更新失败')
//	}else{
//		console.log('更新成功')
//		console.log(ret)
//	}
//})

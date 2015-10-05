var mongoose = require('mongoose');

//connect with db
mongoose.connect('mongodb://localhost/test');

// table stucture
var student = {
	name: String,
	age: Number,
	stud_id: String
};

//creating model for executing CRUD
var mStudent = mongoose.model('student', student);


//create new object
var aziz = new mStudent({
		name: 'aziz tinwala',
		age: '21',
		stud_id: '1234'
	});

//inserting object into db
aziz.save(function(err) {
	//console.log(err);
});


//quering db for all records of mStudent model
mStudent.find({stud_id: '5678'}, function(err, kitties) {
	console.log(kitties);
});
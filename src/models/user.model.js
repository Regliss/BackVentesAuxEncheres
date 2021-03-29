const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	lastName: {
		type: String,
		required: true,
		lowercase: true
	},
	firstName: {
		type: String,
		required: true,
		lowercase: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
		minLength: 4,
		unique: true,
	},
	isAdmin: {
		type: Boolean,
		default: false,
		required: true,
	},
	address: {
		type: String,
	},
	phone: {
		type: String,
		maxLength: 15,
	}
})

module.exports = mongoose.model('User', userSchema);
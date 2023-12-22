const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:FSzAE8q87LSd2faf@cluster0.uof1tyg.mongodb.net/');

const User = mongoose.model('Users', { name: String, email: String, password: String });

const user = new User({ name: 'Ashraf', email: 'ashrafkajal7@gmail.com', password: '123456' });
user.save().then(() => console.log('done'));

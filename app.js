//jshint esversion:6
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));

app.get('/', async (req, res) => {
    res.render('home')
})

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});
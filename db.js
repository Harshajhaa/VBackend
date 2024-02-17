
const mongoose = require('mongoose');
const express = require('express');
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const app = express();
const User = require('./models/User');

app.set("view engine", "ejs");
app.use(cors());
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(express.json()); // For parsing application/json

// app.use('/api', require('./Routes/Register'));

app.post('/register', async (req, res) => {
    console.log(req.body);
    try {
        await User.create({
          fullname: req.body.fullname,
          //username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          confirmpassword: req.body.confirmpassword
        });
      //   res.json({ success: true });
      } catch (error) {
        console.log(error);
      //   res.json({ success: false });
      }
    res.sendStatus(200);
});

const port = process.env.PORT || 5000;
// console.log(port);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => app.listen(port, console.log(`connected, listening on ${port}`)))
    .catch((err) => console.log(`${err} unable to connect`));



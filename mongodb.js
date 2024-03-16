const mongoose = require('mongoose');
let compass_url ="mongodb://localhost:27017/sampledb";
let mongodb_url ="mongodb+srv://melbin_kichu:Kichu123@cluster0.wsqd82l.mongodb.net/FristDB?retryWrites=true&w=majority&appName=Cluster0"             

mongoose.connect(mongodb_url).then(() => {
    console.log("db connected");
})
.catch((err) => {
    console.log(err);
})
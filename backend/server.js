const express = require("express");
const app = express();
app.use(express.json());
const authRoutes = require("./routes/authRoutes.js");
const queueRoutes = require("./routes/queueRoutes.js");
app.use("/api/auth", authRoutes); 
app.use("/api/queue",queueRoutes);
app.get("/", (req,res) =>{
    res.send("MintQueue Backend Running");
});
const PORT = 5000;
app.listen(PORT,() => {
    console.log(`server runnning on port ${PORT}`);
});
exports.register = (req,res) => {
    const { name, email, password } = req.body;
    console.log("Received data:",req.body);   
    res.json({
        message: "User registered successfully",
        user: {
            name,
            email
        }
    });
};
 exports.login = (req, res) => {
    const { emial, password } = req.body;
    res.json({
        message:"User logged in successfully",
        email
    });
 };
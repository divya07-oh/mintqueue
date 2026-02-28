let queue = [];
let currentToken = 0;
exports.joinQueue = (req,res) =>{
    currentToken++;
    const newEntry = {
        token: currentToken,
        status: "waiting"
    };
    queue.push(newEntry);
    res.json({
        message:"joined queue successfully",
        token: currentToken
    });
};
exports.getQueue = (req,res) =>{
    res.json(queue);
};
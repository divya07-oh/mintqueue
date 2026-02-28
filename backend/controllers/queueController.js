let queue = []; //empty list
let currentToken = 0; //start 0
exports.joinQueue = (req,res) =>{ //client request anupuna ishu function run agum
    currentToken++;
    const newEntry = {
        token: currentToken,
        status: "waiting" //pudhu person create panrom
    };
    queue.push(newEntry);
    res.json({
        message:"joined queue successfully", // response anuprom
        token: currentToken
    });
};
exports.getQueue = (req,res) =>{
    res.json(queue);
};
exports.serveNext = (req,res) => {
    const nextPerson = queue.find(person => person.status === "waiting");
    if(!nextPerson){
        return res.json({ message: "No one in waiting"});
    }
    nextPerson.status = "served";
    res.json({
        message: "Next token served",
        token: nextPerson.token
    });
};
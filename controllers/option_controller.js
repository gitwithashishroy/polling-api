const Question = require("../models/question");
const Option = require("../models/option");


// add votes to options 
module.exports.addVote = async (req, res) => {

  try {
    let option = await Option.findOne({id : req.params.id});
    // console.log(option) ; 
    if (option) {
      const currentvote = option.votes + 1;
      // console.log("currentvote", currentvote);
      option.votes = currentvote ; 
      await option.save() ; 
      
      return res.status(500).json({
        message : "votes added successfully" 
      })

    }
  } catch (error) {
    return res.status(500).json({
      message: "Error in creating votes",
      Error: error,
    });
  }
};

// delete options 
module.exports.deleteOption = async (req , res)=>{
  try {
    let option = await Option.findOne({id : req.params.id}); 
    console.log(option) ; 
    if (option){
      await option.remove() ; 
      let question = await Question.updateOne({_id : option.question}, { $pull : { options : { _id: option._id } }}); 
      console.log(question) ; 
      return res.status(500).json({
        message : "option deleted successfully" 
      })
    }else {
      return res.status(500).json({
        message : "Option not found in database" 
      })
    }
  } catch (error) {
    return res.status(500).json({
      message: "Error in deleting option",
      Error: error,
    });
  }
}



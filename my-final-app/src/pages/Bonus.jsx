import Radio from "../components/Radio";

function Bonus() {
 return (
 <>
   <h3>by Cheok Kuan Leong</h3>
    <h1 className= "border-red-300"> What kind of buyer are YOU? </h1>
      <div className="flex items-center justify-center py-8 m-6 p-6 border-2 border-gray-300 rounded-lg shadow-lg">
      <p>
      <Radio 
      id="question1"
      question = "If your investments suddenly drops by 30%, what would you do?"
      op1 = "Sell everything"
      op2 = "Wait"
      op3 = "Buy more"
      />
      <Radio 
      id="question2"
      question = "Regarding the current economic situation, what would you do with your investments?"
      op1 = "Sell everything"
      op2 = "Wait"
      op3 = "Buy more"
      />
      <Radio 
      id="question3"
      question = "What do you think of our slide? Was it helpful?"
      op1 = "Yes, it was very helpful!"
      op2 = "No, it wasn't very helpful."
      op3 = "I'm not sure."
      />
      </p>
      </div>
 </>
)
};

export default Bonus;

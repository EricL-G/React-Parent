import myPics from '../assets/Albert3.png';
import myPics2 from '../assets/DebtCategories.png';
import myPics3 from '../assets/usdebt.png';
import myPics4 from '../assets/Workplace.png'
import myPics5 from '../assets/Entrepreneurs.png'
import myPics6 from '../assets/Budget.png'
import React from "react";
import Pictures from "../components/Pictures";

function Second() {
 return (
 <>
   <h3>by Cheok Kuan Leong</h3>
    <h2> Image Fun Facts </h2>


      <div className = "flex items-center justify-center py-8 m-6 p-6 border-2 border-gray-300 rounded-lg shadow-lg">
      <Pictures
      pics={myPics}
      />
       <Pictures
      pics={myPics2}
      />
       <Pictures
      pics={myPics3}
      />
      </div>

      <div className = "flex items-center justify-center py-8 m-6 p-6 border-2 border-gray-300 rounded-lg shadow-lg">
      <Pictures
      pics={myPics4}
      />
       <Pictures
      pics={myPics5}
      />
       <Pictures
      pics={myPics6}
      />
      </div>

 </>
)
};


export default Second;
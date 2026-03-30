import myPics from '../assets/Albert3.png';
import myPics2 from '../assets/DebtCategories.png';
import myPics3 from '../assets/usdebt.png';
import React from "react";
import Carousels from "../components/Carousels";

function About() {
 return (
 <>
   <h3>by Cheok Kuan Leong</h3>
    <h2> Image Fun Facts </h2>


      <div>
      <Carousels
      pics={myPics}
      />
       <Carousels
      pics={myPics2}
      />
       <Carousels
      pics={myPics3}
      />
      </div>

 </>
)
};


export default About;
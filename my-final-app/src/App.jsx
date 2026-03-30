import Header from './components/Header';
import List from './components/List';
// import Imageslide from './components/Imageslide'
import Button from './components/Button'
import CanvasSwitcher from './components/CanvasSwitcher'
import myPics from './assets/Albert3.png';
import myPics2 from './assets/DebtCategories.png';
import myPics3 from './assets/usdebt.png';
import React from "react";
import Carousels from "./components/Carousels";
import Radio from "./components/Radio";
import "flowbite"; // Import Flowbite JS for interactive components
import "./index.css"; // Tailwind styles
function App() {
  return (
    <>
    
    <h1 className="text-4xl font-bold text-blue-600
	bg-yellow-100 p-8 rounded-xl">
  Tailwind is working!
</h1>

      <Header
        title="Fun Facts"
        subtitle="Things you've probably never known!"
      />

      <p> Read from Below: </p>

      <List fact1="Diversifying investments across various asset classes is crucial for reducing risk, often summarized by the saying, Don't put all your eggs in one basket, emphasizing the importance of decision making"/>
      <List fact1="Albert Einstein famously referred to compound interest as the {eighth wonder of the world} , highlighting its power to grow investments exponentially over time. "/>
      <List fact1="The U.S. national debt has grown from $43 billion in 1940 to over $36 trillion in 2026—an increase of more than 83,000% " />

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

      <CanvasSwitcher />
      {/* <Button 
      name="Next"
      /> */}

      <h1 className= "border-red-300"> What kind of buyer are YOU? </h1> 
      
      
    </>
  );
}

export default App;

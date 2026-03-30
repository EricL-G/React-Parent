import Header from '../components/Header'
import List from '../components/List'

function Home() {
 return (
 <>
   <h3>by Cheok Kuan Leong</h3>
   

   <Header
        title="Fun Facts"
        subtitle="Things you've probably never known!"
      />


  <p> Read from Below: </p>


      <List fact1="Diversifying investments across various asset classes is crucial for reducing risk, often summarized by the saying, Don't put all your eggs in one basket, emphasizing the importance of decision making"/>
      <List fact1="Albert Einstein famously referred to compound interest as the {eighth wonder of the world} , highlighting its power to grow investments exponentially over time. "/>
      <List fact1="The U.S. national debt has grown from $43 billion in 1940 to over $36 trillion in 2026—an increase of more than 83,000% " />
 </>
   );
}


export default Home;

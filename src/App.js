import logo from './logo.svg';
import './App.css';
import RoyalCard from './royal-card';

function App() {
  const RoyalObj=[
    {
      img:"img/img1.webp",
      name:"Royal Enfield Hunter 350",
      pover:"349.34 cc|35 kmpl|20.2 bhp|177 kg",
      price:"₹ 1,49,900",
      btn:"Check On-Road Price"
    },
    {
      img:"./img/img2.webp",
      name:"Royal Enfield Classic 350",
      pover:"349 cc|35 kmpl|20.2 bhp|195 kg",
      price:"₹ 1,93,080",
      btn:"Check On-Road Price"
    },
    {
      img:"./img/img3.webp",
      name:"Royal Enfield Bullet 350",
      pover:"349 cc|37 kmpl|20.2 bhp|195 kg",
      price:"₹ 1,73,562",
      btn:"Check On-Road Price"
    },
    {
      img:"./img/img4.webp",
      name:"Royal Enfield Meteor 350",
      pover:"349 cc|35 kmpl|20.2 bhp|191 kg",
      price:"₹ 2,05,826",
      btn:"Check On-Road Price"
    },
    {
      img:"./img/img5.webp",
      name:"Royal Enfield Continental GT 650",
      pover:"648 cc|25 kmpl|47 bhp|211 kg",
      price:"₹ 3,18,417",
      btn:"Check On-Road Price"
    },
    {
      img:"./img/img6.webp",
      name:"Royal Enfield Himalayan",
      pover:"411 cc|30 kmpl|24.3 bhp|199 kg",
      price:"₹ 2,15,881",
      btn:"Check On-Road Price"
    },
    {
      img:"./img/img7.webp",
      name:"Royal Enfield Super Meteor 650",
      pover:"648 cc|24 kmpl|46.3 bhp|241 kg",
      price:"₹ 3,54,398",
      btn:"Check On-Road Price"
    },
    {
      img:"./img/img8.webp",
      name:"Royal Enfield Interceptor 650",
      pover:"648 cc|23 kmpl|47 bhp|213 kg",
      price:"₹ 3,02,418",
      btn:"Check On-Road Price"
    },
    {
      img:"./img/img9.webp",
      name:"Royal Enfield Scram 411",
      pover:"411 cc|30 kmpl|24.3 bhp|185 kg",
      price:"₹ 2,06,234",
      btn:"Check On-Road Price"
    },
  ]
  return (
    <div className="App">
  
      < RoyalCard DataAll={RoyalObj}/>
    </div>
    
  );

}

export default App;

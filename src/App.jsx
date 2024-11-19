import { createSignal } from "solid-js";
import Farmer from "./classes/Farmer.mjs";
import styles from "./styles/compiledCSS/test.module.css"

function App() {
  /* Testing Classes */
  const Default_Bill = {
    name:"Boomer_Bill", //name -- for refrence in code, if you want to display name use .fullName
    nickname:"Bill", //Nickname
    img:"/assets/characters/Bill.png", //avatar (img)
    locked:false, //Wether Locked or not
    lvl:1, //lvl (integer)
    lvlUpPrice: 100n, //lvl up price (float)
    BasePrice: 100n, //Base price
    scaling:[ // Price scaling
        { min: 1,   modifier: 1100n  },
        { min: 75,  modifier: 1300n  },
        { min: 100, modifier: 900n  },
        { min: 300, modifier: 800n },
        { min: 500, modifier: 650n },
    ],
    Tools:[0,1,2,3,0,5] //Hoe Array
  }
  const Boomer_Bill = new Farmer(Default_Bill);
  const [a,setA] = createSignal(5);
  setInterval(() => {
    setA((prev)=>prev+1);
  }, 1000);
  return (
    <div>
     <p className={styles.test}>test {Boomer_Bill.getLevelUpPrice(a())}</p>
     
    </div>
  );
}

export default App;

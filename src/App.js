import { createContext , useState } from 'react';
import Menu from './Componennts/menu/Menu';
// import Video from './Componennts/main/Video';
import Video2 from './Componennts/main/Video2';
import Vision from './Componennts/main/Vision';
import Values from './Componennts/main/Values';
import Exp from './Componennts/main/Exp';
import Visionaries from './Componennts/main/Visionaries';
import Objects from './Componennts/main/Objects';
import Bars from './Componennts/menu/Bars';
import Provenance from './Componennts/menu/Provenance';
import Boutique from './Componennts/menu/Boutique';
import Arts from './Componennts/menu/Arts';
import Model from './Componennts/menu/Model';
import Futter from './Componennts/futter/Futter';
import './App.scss';
import Configue from './Componennts/menu/Configue';

  export const Cont = createContext("") 
 
  // 4 292 line

function App() {

  const [help,setHelp] = useState("inspring")
  const [menu,setMenu] = useState(false)
  const [a,seta] = useState(true)
  const [b,setB] = useState(false)
  const [w,setW] = useState("transparent");
  const [w2,setW2] = useState("white");
  const [w3,setW3] = useState("transparent");

  return (
    <div className="App">
    
     <Cont.Provider value={{
      help,
      setHelp,
      menu,
      setMenu,
      a,
      seta,
      b,
      setB,
      w,
      setW,
      w2,
      setW2,
      w3,
      setW3,
     }}>
     <Menu />
     <Bars />
     <Video2 />
     <Vision />
     <Values />
     <Exp />
     <Visionaries />
     <Objects /> 
     <Provenance />
     <Boutique />
     <Arts />
     <Model />
     <Configue />
     <Futter />
     </Cont.Provider>
     {/* <div className='div1'></div> */}
    </div>
  );
}

export default App;

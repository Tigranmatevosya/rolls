import { useContext, useState } from "react"
import "./Menu.scss"
import { Cont } from "../../App"

 export default function Menu(){ 
  const menucont = useContext(Cont)
    return <div style={{background:menucont.w3}} className="menu">
     <div className="menu1">
      <div style={{color:menucont.w2}} onClick={()=>{
        menucont.setMenu(true);
        // menucont.setHelp("inspring");
        menucont.seta(!menucont.a)
      }}>
      <i class="fa fa-bars" aria-hidden="true"></i>
       {menucont.a ? "MENU" :"CLOSE"} </div>
<div>
<img src="https://seeklogo.com/images/R/rolls-royce-logo-6CAEBBEB1C-seeklogo.com.png" alt="" />
</div>
      <div style={{color:menucont.w2}} >FIND A DEALER</div>
     </div>
     <div style={{background:menucont.w}} className="menu2">
      <div className="gic"></div>
      <div className="betw">
        <div  className="betw1">
          <div style={{color:menucont.w2}} onClick={()=>{
         menucont.setHelp("inspring");
         menucont.setW("transparent");
         menucont.setW2("white");
         menucont.setW3("transparent");
         window.scrollTo(0,0);
          }} >INSPRING GREATNESS</div>
        </div>
        <div className="betw1">
        <div style={{color:menucont.w2}} onClick={()=>{
        menucont.setHelp("vision");
        menucont.setW2("black");
        menucont.setW("rgb(219, 216, 216)");
        menucont.setW3("white");
        window.scrollTo(0,0);
        }}>VISION</div>
        <div style={{color:menucont.w2}} onClick={()=>{
        menucont.setHelp("values");
        menucont.setW2("black");
        menucont.setW("rgb(219, 216, 216)");
        menucont.setW3("white");
        window.scrollTo(0,0);
        }}>VALUES</div>
        <div  style={{color:menucont.w2}} onClick={()=>{
        menucont.setHelp("experience");
        menucont.setW2("black");
        menucont.setW("rgb(219, 216, 216)");
        menucont.setW3("white");
        window.scrollTo(0,0);
        }}>EXPERIENCE</div>
        <div  style={{color:menucont.w2}} onClick={()=>{
        menucont.setHelp("visionaries");
        menucont.setW2("black");
        menucont.setW("rgb(219, 216, 216)");
        menucont.setW3("white");
        window.scrollTo(0,0); 
        }}>VISIONARIES</div>
        <div style={{color:menucont.w2}} onClick={()=>{
        menucont.setHelp("objects");
        menucont.setW2("black");
        menucont.setW("rgb(219, 216, 216)");
        menucont.setW3("white");
        window.scrollTo(0,0);
        }} >OBJECTS</div>
        </div>
      </div>
     </div>
    </div>
 }
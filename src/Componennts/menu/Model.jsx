import { useContext, useState } from "react"
import "./Model.scss"
import { Cont } from "../../App"

export default function Model(){
    const modcont = useContext(Cont);
    const [cars,setCars] = useState("PHANTOM")
    const [cars2,setCars2] = useState("PHANTOM2")
    
    if(modcont.b == true){
    return <div className="models">
        <div className={cars2}>
           <div className="closedivs">
           <div onClick={()=>{
                 modcont.setB(false)
                 modcont.setMenu(true);
            }} className="closediv1">
                <i class="fa fa-angle-left" aria-hidden="true"></i>--
                MODELS</div>
           <div onClick={()=>{
          //   modcont.setHelp("inspring")   
            setCars("PHANTOM")
            setCars2("PHANTOM2")
           }} className="closediv">PHANTOM</div>
            <div onClick={()=>{
            setCars("PHANTOMEXTANDED")
            setCars2("PHANTOMEXTANDED2")
            }} className="closediv">PHANTOM EXTANDED</div>
            <div onClick={()=>{
               //   modcont.setHelp("prov")
                 setCars("SPECTRE")
                 setCars2("SPECTRE2")
            }} className="closediv">SPECTRE</div>
            <div onClick={()=>{
               //   modcont.setHelp("bot")
                 setCars("GHOST")
                 setCars2("GHOST2")
            }} className="closediv">GHOST</div>
            <div onClick={()=>{
               //   modcont.setHelp("art")
                 setCars("GHOSTEXTANDED")
                 setCars2("GHOSTEXTANDED2")
            }} className="closediv2">GHOST EXTANDED</div>
             <div onClick={()=>{
               //   modcont.setHelp("art")
                 setCars("CULLINAN")
                 setCars2("CULLINAN2")
            }} className="closediv2">CULLINAN SERIES ||</div>
             <div onClick={()=>{
               //   modcont.setHelp("art")
                 setCars("BADGE")
                 setCars2("BADGE2")
            }} className="closediv2">BLACK BADGE</div>
             <div onClick={()=>{
                 modcont.setHelp("con");
                 modcont.setB(false);
                 modcont.setW("transparent");
                 modcont.setW2("white");
                 modcont.setW3("transparent");
            }} className="closediv2">CONFIGUE</div>
           </div>
         </div>
         <div className={cars}>
            {/* model cars */}
            {/* <img src={car[2]} alt="" /> */}
         </div>
     </div>
    }
 }
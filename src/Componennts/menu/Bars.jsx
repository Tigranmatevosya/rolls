import { useContext } from 'react'
import { Cont } from '../../App'
import './Bars.scss'

 export default function Bars(){
    const barscont = useContext(Cont);
    if(barscont.menu == true){
    return <div className="bars">
        
        <div onClick={()=>{
             barscont.setMenu(false);
             barscont.seta(true)
        }} className="close">
           <div className="closedivs">
           <div onClick={()=>{
            barscont.setHelp("inspring");
            barscont.setW3("transparent");
            barscont.setW("transparent");   
            barscont.setW2("white");
            window.scrollTo(0,0);
           }} className="closediv1">INSPRING GREATNESS</div>
            <div onClick={()=>{
             barscont.setB(true);
             window.scrollTo(0,0);
            }} className="closediv">MODELS</div>
            <div onClick={()=>{
                 barscont.setHelp("prov");
                 barscont.setW3("white");
                 barscont.setW("rgb(219, 216, 216)")
                 barscont.setW2("black");
             window.scrollTo(0,0);
            }} className="closediv">PROVENANCE</div>
            <div onClick={()=>{
                 barscont.setHelp("bot");
                 barscont.setW3("white");
                 barscont.setW("rgb(219, 216, 216)")
                 barscont.setW2("black");
             window.scrollTo(0,0);
            }} className="closediv">BOUTIQUE</div>
            <div onClick={()=>{
                 barscont.setHelp("art")
                 barscont.setW3("white");
                 barscont.setW("rgb(219, 216, 216)")
                 barscont.setW2("black");
             window.scrollTo(0,0);
            }} className="closediv2">MUSE ARTS PROGRAMME</div>
           </div>
        </div>
       
    </div>
    }
 }
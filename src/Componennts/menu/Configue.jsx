import { useContext, useState } from "react"
import { Cont } from "../../App"
import './Configue.scss'
 
 export default function Configue(){
    const [gic,setGic] = useState("ghost");
    const concont = useContext(Cont);
    if(concont.help == "con"){
        return <div className="configue">
        <div className="conimg">
        <div>
        CONFIGURE YOUR <br />
            ROLLS-ROYCE
        </div>
        </div>
        <div className="context1">
            <div>
            You don’t just purchase a Rolls-Royce, you commission it. A motor car that is yours, and yours alone. <br /> Every Rolls-Royce that leaves Goodwood is unique to its owner. Our configurator lets you begin the <br />
             journey of commissioning your Bespoke Rolls-Royce by designing your vision. <br />
This is to only be used as a guide and we advise to confirm your design with your local dealership.
            </div>
        </div>
        <div className="conmenu">
          <div className="contmenudiv">
            <div onClick={()=>{
                setGic("phantom");
            }} className="contmenudiv1">
          PHANTOM
          {gic =="phnatom" ? <div></div> : ""}
            </div>
            <div onClick={()=>{
                setGic("phnatomex");
            }} className="contmenudiv2">
            PHANTOM <br /> EXTANDED
            {gic =="phnatomex" ? <div></div> : ""}
            </div>
            <div onClick={()=>{
                setGic("spectre");
            }} className="contmenudiv3">
                SPECTRE
                {gic =="spectre" ? <div></div> : ""}
                </div>
            <div onClick={()=>{
                setGic("ghost");
            }} className="contmenudiv4">
                GHOST
                {gic =="ghost" ? <div></div> : ""}
            </div>
            <div onClick={()=>{
                setGic("ghostex");
            }} className="contmenudiv5">
            GHOST EXTANDED
            {gic =="ghostex" ? <div></div> : ""}
            </div>
            <div onClick={()=>{
                setGic("culinan");
            }} className="contmenudiv6">
                CULLINAN
                {gic =="culinan" ? <div></div> : ""}
                </div>
            <div onClick={()=>{
                setGic("bbg");
            }} className="contmenudiv7">
                BLACK BADGE <br /> GHOST
                {gic =="bbg" ? <div></div> : ""}
            </div>
            <div onClick={()=>{
                setGic("bbc");
            }} className="contmenudiv8">
            BLACK BADGE <br />  CULLINAN
            {gic =="bbc" ? <div></div> : ""}
            </div>
          </div>

          <div className="conmenu2">
          <div className={gic}>
            <a href="https://configure.rolls-roycemotorcars.com/en_LU/configure/RR21BB/TD81/1DF,2VB,319,322,3CD,453,460,477,4NM,4T6,4T7,508,548,5AC,5AS,5DF,5DL,5DP,5GB,609,610,654,6AC,6AE,6AK,6AM,6CP,6FR,6NW,6WD,853,880,8KL,8R9,8S3,8TF,L0E_HT,L1T,L1Z,L2U,L5A,LA0_R1,LA2_HT,LAH_HT,LAN_HT,LAP_HT,LAS_R1,LAT_R1,LAV,LCA_HT,LCE_HT,LCP,LCQ,LE1_W24,LE2_R32,LE5_HT,LL1_HT,LL2_R1,LLE,LM0_R1,LM1_R1,LM8_TU,LM9_R1,LMA_HT,LMB_HT,LMC_R1,LMD_HT,LMF_R1,LMK_HT,LML_HT,LMN_R1,LMP_HT,LMQ_R1,LMS_HT,LMT_R1,LMU_HT,LMW_R1,LMX_R1,LMY_R1,LMZ_R1,R9F,RA1,RA5,RAE,RBHT,RD2,RE6,REN,RM3,RRS,RSL,RU9,WW24,Z02,Z0D,Z9D,Z9G,Z9L">
            <button class="button-17" role="button">CONFIGURE YOURS
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
</button></a>
       
             </div>
          </div>
             <div className="context2">
               <div>
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSuojNkN-7BqXMHYASXRdzcGOJGK1RWzhf6Ogs6mCHCHIVD9eTD" alt="" />
              <h1>
              FIND A DEALER
              </h1>
              <p>
              Book a driving experience or begin your commission.
              </p>
               </div>
              <a href="https://www.rolls-roycemotorcars.com/en_GB/bespoke/configure-your-rolls-royce.html">
           <div>
           <button class="button-17" role="button">SEARCH
           </button>  
           </div>
              </a>
             </div>
        </div>
    </div>
    }
 }
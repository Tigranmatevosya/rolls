import { useContext, useState } from "react"
import { Cont } from "../../App"
import './Prov.scss'
import Provslider from "./Provslider"
import Provslider2 from "./Provslider2"
export default function Provenance(){
    
    const provcont = useContext(Cont)
    const [block,setBlock] = useState(false)
    const text = "Provenance is the certified pre-owned programme, run and operated by Rolls-Royce Motor Cars. It only includes Goodwood era motor cars — built after 2003 — which are carefully curated against suitability criteria including age, mileage and condition. Any motor car purchased with a Provenance label comes with the backing of the manufacturer, meaning you are in safe hands";
    const [block2,setBlock2] = useState(false)
    const text2 = "·  A full 360 degree Provenance inspection conducted by master technicians.    ·     The motor car will be restored to Provenance standards using genuine parts    ·     Two years' warranty on parts and labour, including trim  ·     Two years of servicing which include oil, filters and brake pads    ·     Two years' roadside assistance for complete peace of mind   ·     Exclusive access to Whispers, the Rolls-Royce private members club";
    const [block3,setBlock3] = useState(false)
    const text3 = "Two years (outside North America). Please contact the dealer for more information"; 
    const [block4,setBlock4] = useState(false)
    const text4 = "If you need to contact us for Roadside Assistance, please do so on the numbers found here.";
    const [block5,setBlock5] = useState(false)
    const text5 = "This includes any item requiring replacement within the condition-based servicing standards, including oil, brakes and filters. Tyres not included.";
    const [block6,setBlock6] = useState(false)
    const text6 = "The warranty, servicing and roadside packages are region-based, so the answer will vary depending on where you take your motor car. We suggest checking directly with your dealer.";
    const [block7,setBlock7] = useState(false)
    const text7 = "Rolls-Royce Motor Cars Financial Services is available in selected markets. Please check with your dealer for more information.";    
    if(provcont.help == "prov"){
    return <div className="porv">
        <div className="provimg">
            <div>
                <h1>
                    PROVENCE
                </h1>
                <p>
                    CERTIFIED PRE-OWNED MOTOR CARS
                </p>
            </div>
        </div>

        <div className="intro">
       <div>
       <h5>
         CERTIFIED PRE-OWNED MOTOR CARS
         </h5>
         <h1>
INTRODUCING PROVENANCE BY <br /> ROLLS-ROYCE
         </h1>
         <p>
Provenance motor cars are previously owned Rolls-Royce models meticulously refurbished to the <br /> highest standards. Spanning all models and encompassing often rare styles, each Provenance <br /> motor car has a rich history – from its inception at the hands of master technicians, to its first <br />
 intrepid owner exploring boundless opportunity from within. As a Provenance owner, you will <br /> experience a Rolls-Royce that drives as beautifully as it did the day it left the Home of Rolls-Royce <br /> in Goodwood.
         </p>
         <p>
Continue the legacy and discover your certified Rolls-Royce Provenance motor car.
         </p>
       </div>
       <div className="button">
<a href="">
<button class="button-17" role="button">CONTACT A DEALER</button>

</a>
<a href="https://pre-owned.rolls-roycemotorcars.com/en_gb/search">
<button class="button-17" role="button">SEARCH PRE-OWNED</button>
</a>
            </div>
        </div>
      <div className="provsliderdiv11">
      <Provslider />
      </div>
      <div className="provpro">
      THE PROVENANCE PROPOSITION
      </div>

      <div className="provimg2">
        <div className="provimg2div1">
            <div>
<h1>
360 DEGREE <br /> INSPECTION

</h1>
<p>
Before we award the certified Provenance title, every element of <br /> each motor car must be thoroughly trialled and tested against <br /> our renowned standards.

</p>
</div>

        </div>
        
        <div className="provimg2div2">
        <div>
<h1>
LOVINGLY RESTORED
</h1>
<p>
We demand that our collection be flawless in form and <br /> impressive in nature. Each motor car is lovingly restored as close <br /> as it can be to the original specification.
</p>
</div>


        </div>
        <div className="provimg2div1">
        <div>
<h1>
WHISPERS EXCLUSIVE <br /> ACCESS
</h1>
<p>
As the owner of a Provenance motor car, you will be one of the <br /> select few with immediate access to Whispers – our private <br /> members club, offering unique experiences, connections and a <br /> 24/7 complimentary concierge.
</p>
</div>
        </div>
        <div className="provimg2div2">
<div>
<h1>
PROVENANCE <br /> WARRANTY
</h1>
<p>
Provenance motor cars are protected by two-years' additional <br /> warranty. Using only genuine Rolls-Royce parts, our trained <br /> technicians within our authorised network ensure all repairs are <br /> flawlessly conducted.
</p>
</div>
        </div>
        <div className="provimg2div1">
        <div>
<h1>
ROLLS-ROYCE <br /> SERVICING
</h1>
<p>
Exceptional cars demand exceptional service. With each <br /> Provenance motor car, we include two-years' servicing alongside <br />   the added warranty, ensuring that your motor car is maintained <br /> to the highest standards.
</p>
</div>
        </div>
        <div className="provimg2div2">
        <div>
<h1>
ROADSIDE ASSISTANCE
</h1>
<p>
Take full advantage of Rolls-Royce Roadside Assistance included <br /> with your Provenance motor car.  We cover the unexpected, <br /> offering our owners absolute peace of mind wherever they drive.
</p>
</div>
        </div>
      </div>
      <div className="provlov">
        <div>
        <h1>
        LOVINGLY RESTORED
        </h1>
        <p>
        Each Provenance motor car is a masterpiece, officially approved by the Rolls-Royce team and <br /> lovingly restored as close as it can be to the original specification. By upholding a discerning <br /> attitude, we ensure that legacies are preserved for generations to come.
        </p>
        </div>
      </div>
      <div className="provvideo">
        <video src=""></video>
      </div>

      <div className="provbes">
       <div>
       <h1>
        BESPOKE FOR PROVENANCE
        </h1>
        <p>
Tailor your Provenance motor car by selecting from a breadth of available Bespoke features. <br />
 Glamorous embellishments, striking colour combinations, artisanal detailing – every Provenance  <br />
  motor car can be tailored to its new owner through truly expressive customisation. Bring original <br /> concepts to life through conversations with our Rolls-Royce Bespoke team.
        </p>
        <div className="button">
            <button class="button-17" role="button">CONTACT A DEALER</button>
            </div>
       </div>
      </div>
     <div className="slider2div">
      <Provslider2 />
     </div>

<div className="provbes2">
       <div>
       <p>
       An already ingrained courageous <br /> essence inspires more adventures <br /> yet to come.
        </p>
       </div>
      </div>
      <div className="provimg3">
        <div>
         <h3>
         JOIN THE WORLD'S MOST <br /> EXCLUSIVE CLUB
         </h3>
         <p>
A Rolls-Royce motor car opens the door to a new way of living; <br /> one rooted in the extraordinary. The acquisition of each <br /> Provenance motor car grants owners access to Whispers — our <br /> private members club and digital extension of the marque, <br /> offering the world’s most rarefied products, services and ideas.
         </p>
           <button>
DISCOVER WHISPERS
           </button>
        </div>
      </div>
        <div className="provpres">
            <div>
            Preservation is what defines legacy.
            </div>
        </div>
        <div className="provdetal">
            <div className="provdetaldiv1">
            PROVENANCE IN DETAIL
            </div>
          <div>
          <div className="gic"></div>
          <div onClick={()=>{
                setBlock(!block);
            }}  className="provdetaldiv2">
            <p>
            How is Provenance different from any other pre-owned Rolls-Royce?
            </p>
            {block ? <i class="fa fa-minus" aria-hidden="true"></i> : <i class="fa fa-plus" aria-hidden="true"></i>}
            <div className="provblocknone">
            {block ? text : ""}
            </div>
          <div className="gic2"></div>
          </div>
          <div onClick={()=>{
                setBlock2(!block2);
            }}  className="provdetaldiv2">
            <p>
            What does Provenance include?
          </p>
            {block2 ? <i class="fa fa-minus" aria-hidden="true"></i> : <i class="fa fa-plus" aria-hidden="true"></i>}
            <div className="provblocknone">
            {block2 ? text2 : ""}
            </div>
          <div className="gic2"></div>
          </div>
          <div onClick={()=>{
                setBlock3(!block3);
            }}  className="provdetaldiv2">
            <p>
            How long is the warranty, servicing and Roadside Assistance cover?            </p>
            {block3 ? <i class="fa fa-minus" aria-hidden="true"></i> : <i class="fa fa-plus" aria-hidden="true"></i>}
            <div className="provblocknone">
            {block3 ? text3 : ""}
            </div>
          <div className="gic2"></div>
          </div>
          <div onClick={()=>{
                setBlock4(!block4);
            }}  className="provdetaldiv2">
            <p>
            How do I access Provenance’s Roadside Assistance in an emergency?
            </p>
            {block4 ? <i class="fa fa-minus" aria-hidden="true"></i> : <i class="fa fa-plus" aria-hidden="true"></i>}
            <div className="provblocknone">
            {block4 ? text4 : ""}
            </div>
          <div className="gic2"></div>
          </div>
          <div onClick={()=>{
                setBlock5(!block5);
            }}  className="provdetaldiv2">
            <p>
            How is Provenance different from any other pre-owned Rolls-Royce?
            </p>
            {block5 ? <i class="fa fa-minus" aria-hidden="true"></i> : <i class="fa fa-plus" aria-hidden="true"></i>}
            <div className="provblocknone">
            {block5 ? text5 : ""}
            </div>
          <div className="gic2"></div>
          </div>
          <div onClick={()=>{
                setBlock6(!block6);
            }}  className="provdetaldiv2">
            <p>
            How is Provenance different from any other pre-owned Rolls-Royce?
            </p>
            {block6 ? <i class="fa fa-minus" aria-hidden="true"></i> : <i class="fa fa-plus" aria-hidden="true"></i>}
            <div className="provblocknone">
            {block6 ? text6 : ""}
            </div>
          <div className="gic2"></div>
          </div>
          <div onClick={()=>{
                setBlock7(!block7);
            }}  className="provdetaldiv2">
            <p>
            How is Provenance different from any other pre-owned Rolls-Royce?
            </p>
            {block7 ? <i class="fa fa-minus" aria-hidden="true"></i> : <i class="fa fa-plus" aria-hidden="true"></i>}
            <div className="provblocknone">
            {block7 ? text7 : ""}
            </div>
          <div className="gic22"></div>
          </div>
          </div>
        </div>
        <div className="provimg4">
          <div className="provimg4div1">
            <h1>
            BEGIN YOUR PROVENANCE STORY
            </h1>
<a href="https://pre-owned.rolls-roycemotorcars.com/en_gb/search">
<button class="button-17" role="button">SEARCH PRE-OWNED</button>
</a>
          </div>
        </div>
        <div className="provrol">
          <h1>
          CONTINUE YOUR JOURNEY
          </h1>
          <div className="rol">
                <div className="col1">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-2-1-chapter-1--the-spirit-of-the-ecstasy/page-properties/rolls-royce-chapter-1-the-spirit-of-ecstasy-single-card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>BESPOKE BOUTIQUE</h4>
                  <p>
Desirable accessories personalised to your liking.
                  </p>
                </div>
                <div className="col2">
                <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-0-house-of-rolls-royce/page-properties/Showroom-card-image.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>INSPIRING GREATNESS</h4>
                  <p>
A confluence of exceptional and extraordinary narratives, as revealed by Rolls-Royce.
                   </p>
                </div>
                <div className="col3">
               
                <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/4-0-bespoke/page-properties/rolls-royce-bespoke-single-card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>DISCOVER BESPOKE</h4>
                  <p>Choose from our exclusive collections or collaborate with our craftspeople and designers to create a Rolls-Royce wholly unique to you. This is Rolls-Royce Bespoke.</p>
                </div>
            </div>
            <button class="button-17" role="button">SEARCH PRE-OWNED</button>

        </div>
    </div>
    }
}
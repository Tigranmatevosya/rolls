import { useContext } from "react";
import { Cont } from "../../App";
import './Boutique.scss'
// import BotSlider from "./BotSlider";
export default function Boutique(){

    const botcont = useContext(Cont)
    if(botcont.help == "bot"){
        return <div className="bot">
          
          <div className="visbot">
      
          </div>
           
           <div className="visbot2">
           <div className="vis">
          E N D U R I N G  D E S I G N,  E L E G A N T L Y <br /> D I S T I L L E D.

            </div>
            <div className="visdiv2">
            Explore our carefully curated collection of expertly crafted accessories to elevate your Rolls-Royce <br /> experience.

            </div>
            <div className="visdiv2">
            DISCOVER ALL ACCESSORIES
            </div>
           </div>


         <div className="botimg1">
            <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/boutique/homepage-update/components/Boutique_HP_Cards-D.jpg/jcr:content/renditions/cq5dam.web.2880.webp" alt="" />
           </div>

         
           <div className="visbot2">
           <div className="vis">
           T R A V E L  I N  S T Y L E
            </div>
            <div className="visdiv2">
            Crafted from the finest materials, our luggage collection is a homage to timeless design. From the understated and elegant to the bold and daring, there is a suitable accompaniment for even the most seasoned traveller.
            </div>
            <div className="visdiv2">
            DISCOVER LUGGAGE
            </div>
           </div>

        <div className="botimg2">
         <div className="botimg2div">
            <h2>
KINETIC LUGGAGE <br /> COLLECTION
            </h2>
            <p>
Expertly engineered and painstakingly fashioned,the six-piece <br /> Kinetic Luggage collection exudes contemporary class and <br /> sophistication. 
            </p>
            <h4>
VIEW IN DETAIL
            </h4>
         </div>
        </div>
         
        {/* <div className="visbot2">
           <div className="vis">
           1 : 1 8  R E P L I C A  M O D E L  C A R
            </div>
            <div className="visdiv2">
            Offering a new dimension to Rolls-Royce artistry, a 1:18 scale replica model car is the realisation of greatness on a miniature level. Crafted by delicate hands to remarkable accuracy, these intricate creations capture every detail of their full-sized counterparts.
            </div>
           </div> */}

         {/* <BotSlider /> */}
          <div className="vis2">
        <h2>
          S I T   A   M O M E N T  A N D  S A V O U R  T H E  <br /> S U B L I M E 
        </h2>
          </div>

          <div className="botsublime">
           <div className="botimg3div">
           <h1>
           PURSUIT SEAT
            </h1>
            <p>
            Perch in style with the beautifully designed Pursuit Seat, crafted from <br /> polished aluminium and carbon fibre and finished with the supplest <br /> padded natural grain leather.
            </p>
            <p>
              AVAILABLE FOR:
            </p>
            <p>
              ALL MODELS
            </p>

           </div>
          </div>
        <div className="botblack">
        <div className="botblackdiv">
        <div className="vis">
        D I S C O V E  R  T H E  W O R L D  F R O M  T H E <br />
         B E S T  S E A T  I N  T H E  H O U S E
            </div>
            <div className="visdiv2">
            Opening at the touch of a button, the Cullinan Viewing Suite gives you the best seat in the house <br /> for the finest views in the world.
            </div>
            <div className="visdiv2">
            VIEW IN DETAIL
            </div>
        </div>
        </div>

        <div className="botimage4">
        </div>

        <div className="botfut">
            <div>
            <h3>EXPLORE BOUTIQUE FURTHER</h3>
            <p className="botp">CONTINUE YOUR JOURNEY</p>
            </div>

          <div className="rol">
          <div className="col1">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/boutique/all_accessories/page-properties/april_2023/Accessories_HP_Pulse-Single-Card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>ALL ACCESSORIES</h4>
                  <p>
                  Explore the entirety of our deluxe extensions.
                  </p>
                </div>
                <div className="col1">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/boutique/collections/page-properties/rolls-royce-accessories-product-collections-single-card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>LIFESTYLE COLLECTIONS</h4>
                  <p>
                  A curated selection of accessories that cater to the individual.
                  </p>
                </div>
                <div className="col1">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/boutique/bespoke/page-properties/rolls-royce-accessories-bespoke-boutique-single-card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>BESPOKE BOUTIQUE</h4>
                  <p>
                  Desirable accessories personalised to your liking.
                  </p>
                </div>
          </div>
          <div className="button">
            <button class="button-17" role="button">INSPRING GRATNES
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
</button>

            </div>

        </div>

         </div>
    }
}
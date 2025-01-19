import { useContext } from "react"
import { Cont } from "../../App"
import './Video.scss'
 
 export default function Video(){
    const vidcont = useContext(Cont)
    if(vidcont.help == "inspring"){
        return <div className="video1">
        
        <div className="vis">
     INSPIRING GREATNESS SERIES
            </div>
            <div className="visdiv2">
       This inspirational series from Rolls-Royce offers a window
       into the worlds of those defying the <br /> ordinary. Discover stories f
       rom remarkable individuals 
       who are on unrelenting quests for greatness.
            </div>

            <video  width={1000} style={{margin:"100px"}} controls autoPlay loop muted >
            <source src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-2-6-inspiring-greatness-series/components/year-of-the-dragon-fascia/Year_of_the_dragon_Snippet_Desktop.mp4?stage2cachekiller" type="video/mp4"/>
            </video>


            <div className="button">
         <a href="https://www.rolls-roycemotorcars.com/en_GB/inspiring-greatness/values/inspiring-greatness-series.html">
          <button class="button-17" role="button">WATCH ALL EPISODES</button>
         </a>
         </div>


          <div className="videovision">
          <div className="vis">
                V I S I O N
            </div>
            <div className="visdiv2">
            The pioneering visions of Rolls-Royce Motor Cars unlock a future of unprecedented potential.
            </div>
            <div className="rol">
                <div className="col1">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/spectre-discover/page-properties/01_RR_SPECTRE_DISCOVER-single-card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>SPECTRE</h4>
                  <p>
The marque’s first all-electric motor car is a prophecy fulfilled.</p>
                </div>
                <div className="col2">
                <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/coachbuild/page-properties/TILES-SINGLE-ROSE.png/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>THE HISTORY OF COACHBUILD</h4>
                  <p>
Legacy, craft, and inspiration. A vision realised without compromise.
                  </p>
                </div>
                <div className="col3">
               
                <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-1-1-103-ex/page-properties/rolls-royce-103ex-spirit-of-ecstasy-vision-single-card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>
                THE FUTURE IN THE MAKING:<br></br> ROLLS‑ROYCE 103EX: VISION NEXT 100
                  </h4>
                  <p>
                  Introducing the visionary Rolls-Royce 103EX. Journey into the future of luxury travel, with our first ever autonomous motor car.
                  </p>
                </div>
            </div>
            <div className="button">
          <button class="button-17" role="button">WATCH ALL EPISODES</button>

          </div>
          </div>
          <div className="videovalues">
          <div className="vis">
          V A L U E S
            </div>
            <div className="visdiv2">
Excellence, perfection, and greatness underpin everything we do. By attaining these values, the impossible becomes reality.
                </div>
          <div className="rol">
                <div className="col1">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/goodwood/page-properties/rolls-royce-goodwood-single-card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>A GREENER GOODWOOD</h4>
                  <p>
                 The home of Rolls-Royce
                  </p>
                </div>
                <div className="col2">
                <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-2-6-how-rolls-met-royce/page-properties/rolls-royce-how-rolls-met-royce-single-card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>CHAPTER 3: A VISION BEYOND TIME</h4>
                  <p>
               Discover the design philosophy that has defined Rolls<br></br> -Royc
               e motor cars since the first Silver Ghost. Rolls <br></br> -Royce presents Chapter 3: A Vision Beyond Time.
               </p>
                </div>
                <div className="col3">
               
                <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-2-1-chapter-1--the-spirit-of-the-ecstasy/page-properties/rolls-royce-chapter-1-the-spirit-of-ecstasy-single-card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>HOW ROLLS MET ROYCE</h4>
                  <p>
                A joining of forces in 1904, forged from a shared passion for enginee
                ring and a desire to create the Best Car in the World.
                     </p>
                </div>
            </div>
            <div className="button">
     <button onClick={()=>{
      vidcont.setHelp("vision")
     }} class="button-17" role="button">DISCOVER MORE</button>
          </div>
          </div>
          <div className="videoexp">
          <div className="vis">
          E X P E R I  E N C E
            </div>
            <div className="visdiv2">
            As a world-class marque, there is more to Rolls-Royce than meets the eye. Explore the experiences and events placing us at the summit of luxury.
                </div>
                <div className="rol">
            <div className="col2">
                <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-4-7-festival-of-speed/page-properties/rolls-royce-festival-of-speed-single.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>GOODWOOD REVIVAL</h4>
                  <p>
                  A golden era of motoring.
                  </p>
                </div>
                <div className="col2">
                <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-4-2-a-private-privilege/page-properties/rolls-royce-private-privilege-single-card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>ART MEETS PHILANTHROPY: DINE ON THE LINE</h4>
                  <p>
                  Rolls‑Royce Motor Cars presents Evelina Art for Allergy X Dine on the Line 
                  for an exclusive evening of art, philanthropy and culinary experiences at the Home of
                  Rolls‑Royce in Goodwood.
                  </p>
                </div>
                <div className="col2">
                <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-4-1-goodwood-revival/page-properties/rolls-royce-goodwood-revival-single-card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>IN THE ARTIST'S STUDIO</h4>
                  <p>
                     World-renowned artists reveal their creative spaces to an elite selection o
                     f guests at the Rolls-Royce Motor Cars European Art Drive.
                  </p>
                </div>
            </div>
          </div>
          <div className="videovisionares">
          <div className="vis">
          V I S I O N A R I E S
            </div>
            <div className="visdiv2">
            Uncover the works of those whose ingenuity and expertise have paved groundbreaking paths.
                </div>

                <div className="rol">
                <div className="col1">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-5-5-forge-yellow/page-properties/forgw-yellow-single-card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>FORGE YELLOW</h4>
                  <p>
            Black Badge Cullinan's signature colour, explained.
                  </p>
                </div>
         <div className="col1">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-2-6-inspiring-greatness-series/components/year-of-the-dragon-fascia/properties/Dragon-Single-Card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>CREATING PHANTOM SERENITY'S TEXTILE REALM</h4>
                  <p>
                Discover the artistry of an icon enveloped in fine Chinese silk and embroidered with a hand-painted blossom motif.
                  </p>
                </div>

                <div className="col1">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/the-making-of-cb02/page-properties/rolls-royce-coachbuild-boattail-single-card%20copy%202.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>INSPIRING GREATNESS SERIESL</h4>
                  <p>
             In this exploratory series from Rolls-Royce lies a collection of aspirational stories from those who rewrite the boundaries of greatness.
                  </p>
                </div>
         </div>
                <div className="button">
          <button class="button-17" role="button">DISCOVER MORE</button>
          </div>
          </div>
           <div className="videoobj">
           <div className="vis">
           O B J E C T S
            </div>
            <div className="visdiv2">
            Rolls-Royce objects are singular expressions of unsurpassed artistry, craftsmanship and, of course, <br /> luxury.
                </div>
                 
                <div className="rol">
                <div className="col1">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-6-8-phantom-gallery/page-properties/Phantom_Gallery_HP_Pulse-Single-Card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>FORGE YELLOW</h4>
                  <p>
            Black Badge Cullinan's signature colour, explained.
                  </p>
                </div>
         <div className="col1">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/cellarette/page-properties/rolls-royce-cellarete-single-card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>CREATING PHANTOM SERENITY'S TEXTILE REALM</h4>
                  <p>
                Discover the artistry of an icon enveloped in fine Chinese silk and embroidered with a hand-painted blossom motif.
                  </p>
                </div>

                <div className="col1">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/bespoke-craft-starlight-headliner/page-properties/rrmc-bespoke-starlight-headliner-Single_Tile.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>INSPIRING GREATNESS SERIESL</h4>
                  <p>
             In this exploratory series from Rolls-Royce lies a collection of aspirational stories from those who rewrite the boundaries of greatness.
                  </p>
                </div>
         </div>
         <div className="button">
          <button class="button-17" role="button">DISCOVER MORE</button>
          </div>
           </div>

        </div>
    }
   
 }
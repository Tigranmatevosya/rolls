import { useContext } from "react"
import { Cont } from "../../App"
import './Vision.scss'
 
 export default function Vision(){
     const viscont = useContext(Cont)
    if(viscont.help == "vision"){
        viscont.setW("rgb(219, 216, 216)")
        return <div className="vision">
            <div className="vis">
                V I S I O N
            </div>
            <div className="visdiv2">
            Inspiring Greatness. For over 100 years, Rolls-Royce Motor Cars
             has pushed the boundaries of luxury, <br></br> creating new realities both wit
             hin and beyond automotive design.
            </div>
            <div className="visdiv2">
            Explore our vision.
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
        </div>
    }
 }
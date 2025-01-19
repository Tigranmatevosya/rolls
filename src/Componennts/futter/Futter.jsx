import { useContext } from 'react'
import './Futter.scss'
import { Cont } from '../../App'

 export default function Futter(){
    
    const futcont = useContext(Cont)
    return <div className="futter">
        <div className="futrols">ROLLS-ROYCE</div>
      <div className="gic gic1"></div>
      <div className="futflex">
      <div className="futflex1">
        <div>PRE-OWNED
        </div>
        <div>COOKIES
        </div>
        <div>PRESSCLUB
        </div>
        <div>LEGAL
        </div>
        <div>COMPLAINTS
        </div>
        <div>FIND A DEALER
        </div>
        <div>EU TYRE LABELS
        </div>
        <div>FAQS
        </div>
        <div>CONTACT
        </div>
        <div>PRIVACY
        </div>
        <div>CAREERS
        </div>
        <div>SITE MAP
        </div>
        <div>WHISPERS
        </div>
        <div>LANGUAGE
        </div>
        </div>
        <div className="futflex2">
          <div>
          <i class="fa fa-youtube-play" aria-hidden="true"></i>
            </div> 
          <div>
          <i class="fa fa-facebook" aria-hidden="true"></i>
          </div> 
          <div>
          <i class="fa fa-instagram" aria-hidden="true"></i>
          </div> 
          <div>
          <i class="fa fa-linkedin" aria-hidden="true"></i>
          </div> 
          <div>
            X
          </div>
        </div>
      </div>
      <div className="gic"></div>
    
    </div>
 }
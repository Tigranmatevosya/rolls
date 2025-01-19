import { useContext } from 'react'
import { Cont } from '../../App'
import './Video.scss'
import Video from './Video'
export default function Video2(){
    const vidcont2 = useContext(Cont)
    if(vidcont2.help == "inspring"){
    return <div className="video22">
     <div className="video2">
     <div>
     INSPIRING <br></br> GREATNESS
     </div>
     <p>
     Inspiring Greatness exists at the very core of Rolls-Royce Motor Cars. It is the g
     uiding force from which our <br></br> innovation, aspirations, and ongoing legacy unfold. As
      we continue to extend the limits of possibility, Inspiring <br></br> Greatness will forever
       remain our ultimate pursuit.
     </p>
     </div>
     <Video />
    </div>
    }
 }
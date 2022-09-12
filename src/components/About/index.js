import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        The lorem ipsum gets its name from the Latin phrase Neque porro quisquam est qui dolorem 
                        ipsum quia dolor sit amet. which translates to “Nor is there anyone who loves or pursues 
                        or desires to obtain pain of itself, because it is pain.”
                    </p>
                    <p>
                        The lorem ipsum gets its name from the Latin phrase Neque porro quisquam est qui dolorem 
                        ipsum quia dolor sit amet. which translates to “Nor is there anyone who loves or pursues 
                        or desires to obtain pain of itself, because it is pain.”
                    </p>
                    <p>
                        The lorem ipsum gets its name from the Latin phrase Neque porro quisquam est qui dolorem 
                        ipsum quia dolor sit amet. which translates to “Nor is there anyone who loves or pursues 
                        or desires to obtain pain of itself, because it is pain.”
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className="face1">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faPython} color="#FFF" />
                        </div>
                    </div>
                </div>

            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About
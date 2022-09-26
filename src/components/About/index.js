import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
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
                        My name is Ahmed and I am currently pursuing a degree in Computer Science from McMaster University.
                        During my studies, I developed a strong foundation in programming principles, algorithms and data 
                        structures and databases. I learned how to create small applications in Java and Python, built machine
                        learning models in Python, and created a full-stack website using HTML5, CSS, JavaScript, and PHP. 
                    </p>
                    <p>
                        In addition to my degree requirements, I completed several web projects using the MERN stack to create
                        full-stack website and utilize different APIs, in addition to completing the Machine Learning Nanodegree 
                        from Udacity, which culminated in a CNN project that recognizes hand gestures in images.  
                    </p>
                    <p>
                        In my free time, I enjoy reading books about history, sociology, and modern Western philosophy. I am also 
                        a soccer fan who enjoys the occasional pickup game with friends and unfortunately supports Manchester United.
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
                            <FontAwesomeIcon icon={faNodeJs} color="#3c873a" />
                        </div>
                    </div>
                </div>

            </div>
            <Loader type="line-scale" />
        </>
    )
}

export default About
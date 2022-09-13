import { useEffect, useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import img_0 from '../../assets/images/0.png'
import img_1 from '../../assets/images/1.png'
import { faCircleLeft, faCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [projInd, setProjInd] = useState(0)
  const images = [img_0, img_1, img_0]
  const proj_names = ["Traveler Chronicles", "Travel Advisor", "Traveler Chronicles"]

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    

  return (
    <div className="container projects-page">
      <>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']} 
              idx={15} 
            />
          </h1>
        </div>
        <div className='projects'>
          <div className='project-cards'>
            {projInd === 0 ?
            <FontAwesomeIcon className='left-arrow-inactive' icon={faCircleLeft} />
            :
            <FontAwesomeIcon className='left-arrow' icon={faCircleLeft} onClick={() => {setProjInd(projInd - 1)}} />
            }
            <div className='project-card'>
              <img className='proj-img' src={images[projInd]} alt="traveler-chronicles" />
              <h1>{proj_names[projInd]}</h1>
              <p>The lorem ipsum gets its name from the Latin phrase Neque porro quisquam est qui dolorem 
                        ipsum quia dolor sit amet. which translates to “Nor is there anyone who loves or pursues 
                        or desires to obtain pain of itself, because it is pain.”</p>
              <h3>Technologies Used:</h3>
              <div className='proj-links'>
                <button>Visit Site</button>
                <button>Source Code</button>
              </div>
            </div>
            <div className='project-card'>
              <img className='proj-img' src={images[projInd+1]} alt="traveler-chronicles" />
              <h1>{proj_names[projInd+1]}</h1>
            </div>
            {projInd === images.length-2 ?
            <FontAwesomeIcon className='right-arrow-inactive' icon={faCircleRight} />
            :
            <FontAwesomeIcon className='right-arrow' icon={faCircleRight} onClick={() => {setProjInd(projInd + 1)}} />
            }
          </div>
        </div>

        <Loader type="line-scale" />
      </>
    </div>
  )
}

export default Projects
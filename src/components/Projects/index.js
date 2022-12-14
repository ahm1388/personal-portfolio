import { useEffect, useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import img_0 from '../../assets/images/0.png'
import img_1 from '../../assets/images/1.png'
import img_2 from '../../assets/images/2.png'
import img_3 from '../../assets/images/3.png'
import img_4 from '../../assets/images/4.png'
import {
  faCircleLeft,
  faCircleRight,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [projInd, setProjInd] = useState(0)
  const images = [img_2, img_0, img_4, img_3]
  const proj_names = [
    'Kitaby Book Club',
    'Traveler Chronicles',
    'Hand Gesture Recognition',
    'Iron Ore Prediction',
  ]
  const proj_desc = [
    'Book group website where a user can register an account and create discussion groups for their favourite books, or join existing groups in the books they are interested in. The website was created using the MERN stack.',
    "Social media app where users can create accounts or log in through their Google account to share their travel adventures and like other peoples' experiences. Used React for the front end, NodeJS for the back end, and MongoDB to store the user and post information.",
    'Created a CNN model that was trained on approximately 10,000 images to be able to categorize pictures of hand gestures into 10 differnt types. Utilized popular data analysis and machine learning libraries in Python such as Numy, Pandas, and TensorFlow',
    'Used Random Forest Regression to train a model that predicts impurity concentration in ores acquired through a mining process. Lab tests require 2 hours to report the impurity level, which created a need for accurate, real-time impurity reporting based on process conditions. Model is also able to predict impurity concentration 3 hours in advance based on current conditions.',
  ]
  const proj_links = [
    ['http://kitabybookclub.com/', 'https://github.com/ahm1388/kitaby'],
    [
      'https://www.travelerchronicles.net',
      'https://github.com/ahm1388/traveler-chronicles',
    ],
    [
      'https://github.com/ahm1388/ML-Hand-Gesture-Recognition',
      'https://github.com/ahm1388/ML-Hand-Gesture-Recognition',
    ],
    [
      'https://github.com/ahm1388/quality-prediction-mining-process',
      'https://github.com/ahm1388/quality-prediction-mining-process',
    ],
  ]
  const proj_tech = [
    [
      ['React', faReact, '#5ED4F4'],
      ['NodeJS', faNodeJs, '#3c873a'],
      ['MongoDB', faDatabase, '#fff'],
    ],
    [
      ['React', faReact, '#5ED4F4'],
      ['NodeJS', faNodeJs, '#3c873a'],
      ['MongoDB', faDatabase, '#fff'],
    ],
    [['Python', faPython, 'white']],
    [['Python', faPython, 'white']],
  ]
  const [windowDimensions, setWindowDimensions] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  const detectSize = () => {
    setWindowDimensions({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
      console.log(windowDimensions)
    }
  }, [windowDimensions])

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    // {windowDimensions.winWidth > 800}
    <div className="container projects-page">
      <>
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
        </div>
        <div className="projects">
          <div className="project-cards">
            {projInd === 0 ? (
              <FontAwesomeIcon
                className="left-arrow-inactive"
                icon={faCircleLeft}
              />
            ) : (
              <FontAwesomeIcon
                className="left-arrow"
                icon={faCircleLeft}
                onClick={() => {
                  setProjInd(projInd - 1)
                }}
              />
            )}
            <div className="project-card">
              <img
                className="proj-img"
                src={images[projInd]}
                alt="traveler-chronicles"
              />
              <h1>{proj_names[projInd]}</h1>
              <p>{proj_desc[projInd]}</p>
              <div className="technologies">
                <h3>Technologies:</h3>
                {proj_tech[projInd].map((tech) => (
                  <FontAwesomeIcon
                    className="tech-icon"
                    title={tech[0]}
                    icon={tech[1]}
                    color={tech[2]}
                  />
                ))}
              </div>
              <div className="proj-links">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={proj_links[projInd][0]}
                >
                  <button href="">Visit Site</button>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={proj_links[projInd][1]}
                >
                  <button>Source Code</button>
                </a>
              </div>
            </div>

            <div className="project-card">
              <img
                className="proj-img"
                src={images[projInd + 1]}
                alt="traveler-chronicles"
              />
              <h1>{proj_names[projInd + 1]}</h1>
              <p>{proj_desc[projInd + 1]}</p>
              <div className="technologies">
                <h3>Technologies:</h3>
                {proj_tech[projInd + 1].map((tech) => (
                  <FontAwesomeIcon
                    className="tech-icon"
                    title={tech[0]}
                    icon={tech[1]}
                    color={tech[2]}
                  />
                ))}
              </div>
              <div className="proj-links">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={proj_links[projInd + 1][0]}
                >
                  <button href="">Visit Site</button>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={proj_links[projInd + 1][1]}
                >
                  <button>Source Code</button>
                </a>
              </div>
            </div>

            {projInd === images.length - 2 ? (
              <FontAwesomeIcon
                className="right-arrow-inactive"
                icon={faCircleRight}
              />
            ) : (
              <FontAwesomeIcon
                className="right-arrow"
                icon={faCircleRight}
                onClick={() => {
                  setProjInd(projInd + 1)
                }}
              />
            )}
          </div>
        </div>

        <Loader type="line-scale" />
      </>
    </div>
  )
}

export default Projects

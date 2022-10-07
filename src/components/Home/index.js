import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'A', 'h', 'm', 'e', 'd']
    const jobArray = ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 4500)
      }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br/>
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br/>
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={17} />
                    </h1>
                    <h2>McMaster University, Computer Science</h2>
                    <Link className="flat-button" to="/contact">CONTACT ME</Link>
                </div>
            </div>
            <Loader type="line-scale" />
        </>
    )
}

export default Home
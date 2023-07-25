
import { useEffect, useState } from 'react'
import './App.css'
import Fact from './Cats-Components/Fact'
import Picture from './Cats-Components/Picture'
import Loader from './components/Loader'
/* import get from '../utils/fetching1' */
import get2 from '../utils/fetching2'

function Cats() {
/*  const fetching = async () => {
    await fetch('https://catfact.ninja/fact')
      .then(res => {
        return res.json()
      })
      .then(res => {
        setFrontText(res.fact.split(" ", 3).join(" ").replace(",", ''))
        setCurrentFact(res.fact)
      })
  }
 */
/*   const fetching = async () => {
    const mydata = await get('https://catfact.ninja/fact')
    setFrontText(mydata.fact.split(" ", 3).join(" ").replace(",", ''))
    setCurrentFact(mydata.fact)
  } */
/*   const handleClick = async () => {
    setCurrentFact('')
    setFrontText('')
    setPic(null)
    await fetching()
  } */
  const [currentFact, setCurrentFact] = useState('')
  const [frontText, setFrontText] = useState('')
  const [pic, setPic] = useState(null)
  
  const fetching2 = async () => {
    const mydata = await get2('https://catfact.ninja/fact', true)
    setFrontText(mydata.fact.split(" ", 3).join(" ").replace(",", ''))
    setCurrentFact(mydata.fact) 
  }

  useEffect(() => {
    fetching2()
  }, [])

  useEffect(() => {
    const fetchingPic = async () => {
      setFrontText(currentFact.split(" ", 3).join(" ").replace(",", ''))
      if (frontText && frontText !== '') {
        const imgUrl = await get2(`https://cataas.com/cat/says/${frontText}`)
        setPic(imgUrl.url)
      }
    }
    fetchingPic()
  }, [currentFact]) 

  const handleClick2 = async () => {
    setCurrentFact('')
    setFrontText('')
    setPic(null)
    await fetching2()
  }

  return (
    <>
      <div className='container'>

        <div className='fact-area'>

        {!currentFact ? <Loader /> : <Fact text={currentFact} />}
          

{/*           <button className="brutal-btn" type="button" onClick={handleClick}>Next</button> */}
          <button className="brutal-btn" type="button" onClick={handleClick2}>Fetching 2</button>
        </div>

        <div className='img-area'>
         {!pic ? <Loader /> : <Picture className='picture' src={pic} />}
        </div>
       

      </div>
    </>
  )
}

export default Cats

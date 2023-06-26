
import { useEffect, useState } from 'react'
import './App.css'
import Fact from './components/Fact'
import Picture from './components/Picture'
import Loader from './components/Loader'
function App() {

  const [currentFact, setCurrentFact] = useState('')
  const [frontText, setFrontText] = useState('')
  const [pic, setPic] = useState(null)

  const fetching = async () => {
    await fetch('https://catfact.ninja/fact')
      .then(res => {
        return res.json()
      })
      .then(res => {
        setFrontText(res.fact.split(" ", 3).join(" ").replace(",", ''))
        setCurrentFact(res.fact)
      })

  }

  useEffect(() => {

    fetching();

  }, [])

  useEffect(() => {
    setPic(null)
    const fetchingPic = async () => {
      await fetch(`https://cataas.com/cat/says/${frontText}`)
        .then(res => setPic(res.url))
    }

    if (frontText && frontText !== '') {
      fetchingPic()
    }

  }, [frontText])

  const handleClick = async () => {
    setCurrentFact('')
    setFrontText('')
    setPic(null)
    await fetching()

  }

  return (
    <>
      <div className='container'>

        <div className='fact-area'>

        {!currentFact ? <Loader /> : <Fact text={currentFact} />}
          

          <button className="brutal-btn" type="button" onClick={handleClick}>Next</button>
        </div>

        <div className='img-area'>
         {!pic ? <Loader /> : <Picture className='picture' src={pic} />}
        </div>
       

      </div>
    </>
  )
}

export default App

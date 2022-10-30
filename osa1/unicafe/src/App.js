import { useState } from 'react'

const Header = ({title}) => <h1>{title}</h1>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  let average = 0
  let positive = 0
  if (total != 0) {
    average = (props.good - props.bad)/total
    positive = (1-(props.bad + props.neutral)/total) * 100
  }
  
  if (total != 0){
    return(
      <div>
        <p>good {props.good}</p>
        <p>neutral {props.neutral}</p>
        <p>bad {props.bad}</p>
        <p>all {total}</p>
        <p>average {average}</p>
        <p>positive {positive} %</p>
      </div>
    )
  }
  else{
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const goodClick = () => setGood(good + 1)
  const neutralClick = () => setNeutral(neutral + 1)
  const badClick = () => setBad(bad + 1)

  return (
    <div>
      <Header title='give feedback'/>
      <Button handleClick={goodClick} text='good'/>
      <Button handleClick={neutralClick} text='neutral'/>
      <Button handleClick={badClick} text='bad'/>

      <Header title='statistics'/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
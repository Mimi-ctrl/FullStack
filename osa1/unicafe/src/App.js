import { useState } from 'react'

const Header = ({title}) => <h1>{title}</h1>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({text, value}) => {
  if(text==='positive'){
    return(
      <p>{text} {value} %</p>
    )
  }
  else{
    return (
      <p>{text} {value}</p>
    )
  }
}

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  if (total != 0){
    const average = (props.good - props.bad)/total
    const positive = (1-(props.bad + props.neutral)/total) * 100
    return(
      <div>
        <StatisticLine text='good' value={props.good}/>
        <StatisticLine text='neutral' value={props.neutral}/>
        <StatisticLine text='bad' value={props.bad}/>
        <StatisticLine text='all' value={total}/>
        <StatisticLine text='average' value={average}/>
        <StatisticLine text='positive' value={positive}/>
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
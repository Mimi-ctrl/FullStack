const Course = ({course}) => {
    return (
        <div>
            <Header course={course} />
            <Content parts={course.parts} />
            <Total parts={course.parts}/>
        </div>
    )
}

const Header = ({course}) => {
    return (
        <>
            <h2>{course.name}</h2>
        </>
    )
}
  
const Part = ({part}) => {
    return (
        <div>
            <p>{part.name} {part.exercises}</p>
        </div>
    )
}
  
const Content = ({parts}) => {
    return (
        <div>
            {parts.map((part) => (
                <Part key={part.id} part={part} />
            ))}
        </div>
    )
}

const Total = ({parts}) => {
    return (
      <>
        <h4>
          total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises
        </h4>
      </>
    )
}

export default Course

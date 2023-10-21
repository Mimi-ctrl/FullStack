const Course = ({course}) => {
    return (
        <div>
            <Header course={course} />
            <Content parts={course.parts} />
        </div>
    )
}

const Header = ({course}) => {
    return (
        <>
            <h1>{course.name}</h1>
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

export default Course

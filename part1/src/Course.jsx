const Header = ({title}) => {
    return (
      <div>
        <h1> {title} </h1>    
      </div>
    )
  }
  const Parts = ({parts}) => {
    return (
      <div>
        {parts.map((part, i) => <p key={i}>{part.name} {part.exercises}</p>)}
      </div>
    )   
  }
  
  const Total = ({parts}) => {
  
    const total = parts.map(part => part.exercises).reduce((acc, current) => acc + current)
  
    return (
      <div>
        <b>Number of exercises {total}</b>
      </div>
    )
  }

  
const Course = ({course}) => {
    return (
      <>
        <Header title={course.name}/>
        <Parts parts={course.parts}/>
        <Total parts={course.parts}/>
      </>
    )
  
  }

  export default Course
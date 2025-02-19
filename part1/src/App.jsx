const Header = ({title}) => {
  return (
    <div>
      <h1> {title} </h1>    
    </div>
  )
}
const Part = ({part, num_excercises}) => {
  return (
    <div>
      <p>{part} {num_excercises}</p>
    </div>
  )   
}

const Content = ({parts}) => {

  return (
    <div>
        <Part part={parts[0].name} num_excercises={parts[0].excercises}/>
        <Part part={parts[1].name} num_excercises={parts[1].excercises}/>
        <Part part={parts[2].name} num_excercises={parts[2].excercises}/>
    </div>
  )
}

const Total = ({parts}) => {

  return (
    <div>
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </div>
  )
}

const App = () => {


  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }

    ]
  }


  return (
    <div>
          <Header title={course.name}/>
          <Content parts={course.parts}/>
          <Total parts={course.parts}/>
    </div>

  )
}

export default App
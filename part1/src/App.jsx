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

const Content = (props) => {
  return (
    <div>
        <Part part={props.part1} num_excercises={props.exercises1}/>
        <Part part={props.part2} num_excercises={props.exercises2}/>
        <Part part={props.part3} num_excercises={props.exercises3}/>
    </div>
  )
}

const Total = (props) => {

  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

const App = () => {

  const course_info = {
     course : 'Half Stack application development',
     part1 : 'Fundamentals of React',
     exercises1 : 10,
     part2 : 'Using props to pass data',
     exercises2 : 7,
     part3 : 'State of a component',
     exercises3 : 14
  }


  return (
    <div>
          <Header title={course_info.course} />
          <Content {...course_info}/>
          <Total {...course_info}/>
    </div>

  )
}

export default App
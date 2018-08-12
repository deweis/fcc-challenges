/**
* Task: There are List and ToDo components in the code editor. When rendering
* each List from the ToDo component, pass in a tasks property assigned to an
* array of to-do tasks, for example ["walk dog", "workout"]. Then access this
* tasks array in the List component, showing its value within the p element. Use
* join(", ") to display the props.tasksarray in the p element as a comma
* separated list. Today's list should have at least 2 tasks and tomorrow's
* should have at least 3 tasks.
*/
const List= (props) => {
  { /* change code below this line */ }
  return (<p>{props.tasks.join(', ')}</p>);
  { /* change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* change code below this line */ }
        <List tasks={['tbd 1', 'tbd 2']}/>
        <h2>Tomorrow</h2>
        <List tasks={['tbd 3', 'tbd 4', 'tbd 5']}/>
        { /* change code above this line */ }
      </div>
    );
  }
};

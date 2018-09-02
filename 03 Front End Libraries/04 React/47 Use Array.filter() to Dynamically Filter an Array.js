/**
* Task: In the code editor, MyComponent's state is initialized with an array of
* users. Some users are online and some aren't. Filter the array so you see
* only the users who are online. To do this, first use filter to return a new
* array containing only the users whose online property is true. Then, in the
* renderOnline variable, map over the filtered array, and return a li element
* for each user that contains the text of their username. Be sure to include a
* unique key as well, like in the last challenges.
*/
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    }
  }
  render() {
    const usersOnline = null; // change code here
    const renderOnline = null; // change code here
    return (
       <div>
         <h1>Current Online Users:</h1>
         <ul>
           {renderOnline}
         </ul>
       </div>
    );
  }
};

/**
* Task: The renderToString() method is provided on ReactDOMServer, which is
* available here as a global object. The method takes one argument which is a
* React element. Use this to render App to a string.
*/

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// change code below this line
ReactDOMServer.renderToString(<App />);

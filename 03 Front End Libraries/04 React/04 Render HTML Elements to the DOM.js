/**
* Task: The code editor has a simple JSX component. Use the ReactDOM.render()
* method to render this component to the page. You can pass defined JSX
* elements directly in as the first argument and use document.getElementById()
* to select the DOM node to render them to. There is a div with
* id='challenge-node' available for you to use. Make sure you don't change the
* JSX constant.
*/
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// change code below this line
const target = document.getElementById('challenge-node');
ReactDOM.render(JSX, target);

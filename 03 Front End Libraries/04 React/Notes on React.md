# Paradigms


1. **Unidirectional data flow**: State flows in one direction down the tree of your application's components, from the stateful parent component to child components. The child components only receive the state data they need.

2. **Separating state logic from UI logic**: Complex stateful apps can be broken down into just a few, or maybe a single, stateful component. The rest of your components simply receive state from the parent as props, and render a UI from that state. It begins to create a separation where state management is handled in one part of code and UI rendering in another. This is one of React's key principles. When it's used correctly, it makes the design of complex, stateful applications much easier to manage.

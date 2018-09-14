- **React:** Is a view library that you provide with data, then it renders the view in an efficient, predictable way.

- **Redux:** Is a state management framework that you can use to simplify the management of your application's state.

- **Typically**, in a React Redux app, you create a single Redux store that manages the state of your entire app. Your React components subscribe to only the pieces of data in the store that are relevant to their role. Then, you dispatch actions directly from React components, which then trigger store updates.

- Although React components can manage their own state locally, when you have a complex app, it's generally better to keep the app state in a single location with Redux. There are exceptions when individual components may have local state specific only to them.

- Because Redux is not designed to work with React out of the box, you need to use the `react-redux` package. It provides a way for you to pass Redux `state` and `dispatch` to your React components as `props`.

- **react-redux:** React Redux provides a small API with two key features: `Provider` and `connect`.

- **Provider** The `Provider` is a wrapper component from React Redux that wraps your React app. This wrapper then allows you to access the Redux `store` and `dispatch` functions throughout your component tree. `Provider` takes two props, the Redux store and the child components of your app. Defining the `Provider` for an App component might look like this:

  ```<Provider store={store}><App/></Provider>```

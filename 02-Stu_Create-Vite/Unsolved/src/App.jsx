// TODO: Add a comment explaining what this import statement is doing
// The import statement is importing the HelloReact component from the HelloReact.js file in the components folder. 
import HelloReact from './components/HelloReact';

// TODO: Add a comment explaining the purpose of the App component
// The App component is the main component that is being rendered to the DOM. 
// It is the parent component that will render the HelloReact component.
function App() {
  return <HelloReact />;
}

export default App;

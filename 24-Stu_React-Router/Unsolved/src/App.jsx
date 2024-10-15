// Todo: Bring in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom'; // Outlet renders the matching child route component
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      {/* Todo: Fill in the appropriate component so that the user will conditionally see the appropriate view based on the URL */}
      <Outlet /> {/* This will render the child route component based on the current route */}
    </>
  );
}

export default App;

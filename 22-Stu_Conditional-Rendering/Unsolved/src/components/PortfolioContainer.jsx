import { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
  // This method is rendering the page based on the currentPage state.
  // If the currentPage is 'Home' then it renders the Home component.
  // If the currentPage is 'About' then it renders the About component.
  // If the currentPage is 'Blog' then it renders the Blog component.
  // If the currentPage is 'Contact' then it renders the Contact component.

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      // We are passing the currentPage state and the handlePageChange method as props.
      // The currentPage state is used to determine which page to render.
      // The handlePageChange method is used to update the currentPage state.
      // The NavTabs component uses the currentPage state to determine which tab is active.
      // The NavTabs component uses the handlePageChange method to update the currentPage state when a tab is clicked.
      // The renderPage method uses the currentPage state to determine which page to render.

      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      // The renderPage method is called to render the page based on the currentPage state.
      // The currentPage state is initially set to 'Home', so the Home component is rendered.
      <main className="mx-3">{renderPage()}</main>
    </div>
  );
}

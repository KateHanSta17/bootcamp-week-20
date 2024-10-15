// TODO: Add a comment explaining how we are able to extract the key value pairs from props
// we are able to extrat the key value pairs from props by passing the props as an argument to the function component and then 
// destructuring the props object to get the key value pairs as individual variables in the function component argument list 
// as shown below in the NavTabs function component below.
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for
          // this is a ternary operator and it is checking if the currentPage is equal to 'Home' and if it is then it sets the className to 'nav-link active'
          // otherwise it sets the className to 'nav-link'.

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          //  TODO: Add a comment explaining what this logic is doing
          // this logic is checking if the currentPage is equal to 'About' and if it is then it sets the className to 'nav-link active'
          // otherwise it sets the className to 'nav-link'.

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => handlePageChange('Blog')}
          //  TODO: Add a comment explaining what this logic is doing
          //  this logic is checking if the currentPage is equal to 'Blog' and if it is then it sets the className to 'nav-link active'
          // otherwise it sets the className to 'nav-link'.

          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          //  TODO: Add a comment explaining what this logic is doing
          // this logic is checking if the currentPage is equal to 'Contact' and if it is then it sets the className to 'nav-link active'
          // otherwise it sets the className to 'nav-link'.

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;

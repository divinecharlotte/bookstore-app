import { React } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const links = [
    { id: 1, path: '/', text: 'Books' },
    { id: 2, path: '/categories', text: 'Categories' },
  ];

  return (
    <div className="Nav">
      <ul className="nav-links">
        <h2>Bookstore CMS</h2>
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.path}>
              {' '}
              {link.text}
              {' '}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Nav;

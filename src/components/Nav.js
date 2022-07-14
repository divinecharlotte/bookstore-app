import { React } from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/images/profile.png';

const Nav = () => {
  const links = [
    { id: 1, path: '/', text: 'Books' },
    { id: 2, path: '/categories', text: 'Categories' },
  ];

  return (
    <nav className="navBar">
      <h1>BookStore CMS</h1>
      <ul>
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
      <img src={profile} alt="profile" />
    </nav>
  );
};
export default Nav;

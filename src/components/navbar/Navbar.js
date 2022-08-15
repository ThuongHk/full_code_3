import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';


const Navbar = () => {
    return (
        <div>
             <ul className="nav justify-content-start bg-info">
        <li className="nav-item">
          <Link className="nav-link" to="staff">Nhân viên</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="department">Phòng Ban</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="salary">Bảng lương</Link>
        </li>       
      </ul>
        </div>
    );
};

export default Navbar;
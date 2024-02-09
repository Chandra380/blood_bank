import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../../../styles/Layout.css';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const location = useLocation();
    const {user} = useSelector(state=>state.auth);
  return (
    <div>
      <div className="sidebar">
        <div className="menu">
          {user?.role === 'organisation'&&(
            <>
              <div className={`menu-item ${location.pathname==='/' && 'active'}`}>
                        <i className="fa-solid fa-warehouse"></i>
                        <Link to='/'>Inventory</Link>
                    </div>
                    <div className={`menu-item ${location.pathname==='/donor' && 'active'}`}>
                        <i className="fa-solid fa-hand-holding-medical"></i>
                        <Link to='/donor'>Donor</Link>
                    </div>
                    <div className={`menu-item ${location.pathname==='/hospital' && 'active'}`}>
                        <i className="fa-solid fa-hospital"></i>
                        <Link to='/hospital'>Hospital</Link>
                    </div>
            </>
          )}
          {(user?.role != 'organisation')&&(
              <div className={`menu-item ${location.pathname==='/organisation' && 'active'}`}>
              <i className="fa-sharp fa-solid fa-building-ngo"></i>
              <Link to='/'>Organisation</Link>
          </div>
          )}    
        </div>
      </div>
    </div>
  )
}

export default Sidebar

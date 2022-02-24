import React from 'react';

const Navbar = () => {
    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            
            <a className="navbar-brand ps-3" href="/admin">
                <i class="fas fa-recycle"></i> 
                RE:SCHOOL Ecology
            </a>
            
            <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!">
                <i className="fas fa-bars"></i>
            </button>
            
            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Recherche" aria-label="recherche" aria-describedby="btnNavbarSearch" />
                    <button className="btn btn-primary" id="btnNavbarSearch" type="button">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </form>
            
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fas fa-user"></i>
                    </a>
                    
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/admin/profile">Mon Compte</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#!">Se Déconnecter</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fas fa-bell"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">                        
                        <li className="dropdown-item">Notification 1</li>
                        <li><hr className="dropdown-divider" /></li>
                        <li className="dropdown-item">Notification 2</li>
                        <li><hr className="dropdown-divider" /></li>
                        <li className="dropdown-item">Notification 3</li>
                        <li><hr className="dropdown-divider" /></li>
                        <li className="dropdown-item">Notification 4</li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fas fa-cogs"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#!">Paramétres</a></li>
                        <li><a className="dropdown-item" href="#!">Notifications</a></li>
                    </ul>
                </li>
            </ul>

        </nav>
    );
}

export default Navbar;

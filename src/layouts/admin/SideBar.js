import React from 'react';
import {BsFillBarChartLineFill} from 'react-icons/bs';

const Sidebar = () => {
    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Suivi</div>
                            <a className="nav-link" href="/admin/dashboard">
                                <div className="sb-nav-link-icon">
                                    <BsFillBarChartLineFill/>
                                </div>
                                Dashboard
                            </a>
                            <a className="nav-link" href="/admin/map">
                                <div className="sb-nav-link-icon">                                   
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-map" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
                                        <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
                                    </svg>
                                </div>
                                Map
                            </a>

                            <div className="sb-sidenav-menu-heading">Gestion de :</div>
                            <a className="nav-link " href="/admin/poubelles">
                                <div className="sb-nav-link-icon">
                                <i class="fas fa-trash"></i>
                                </div>
                                Poubelles
                            </a>

                            <a className="nav-link" href="/admin/camions">
                                <div className="sb-nav-link-icon"><i class="fas fa-truck-moving"></i></div>
                                Camions
                            </a>
                            
                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts2" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon"><i class="fas fa-user-cog"></i></div>
                                Personnel
                                <div className="sb-sidenav-collapse-arrow">
                                    <i className="fas fa-angle-down"></i>
                                </div>
                            </a>
                            <div className="collapse" id="collapseLayouts2" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link" href="/admin/ouvriers">
                                        Ouvriers
                                    </a>
                                    <a className="nav-link" href="/admin/reparateurs">
                                        Réparateurs
                                    </a>
                                </nav>
                            </div>
                            
                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts3" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon">
                                    <i class="fas fa-user-tie"></i>
                                </div>
                                Clients
                                <div className="sb-sidenav-collapse-arrow">
                                    <i className="fas fa-angle-down"></i>
                                </div>
                            </a>
                            <div className="collapse" id="collapseLayouts3" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link" href="/admin/reponsable-etablissement">
                                        <i class="bi bi-tools"></i>
                                        Responsables des établissements
                                    </a>
                                    <a className="nav-link" href="/admin/achetur-de-dechets">
                                        Acheteurs de déchets
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        Gestionnaire
                    </div>
                </nav>
    );
}

export default Sidebar;

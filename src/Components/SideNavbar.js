import React from 'react'
import { icons } from '../images'

const SideNavbar = () => {
  return (
    <div className=" mx-1 my-3">
        <div className="row">
            <div className=" px-sm-2 px-0 bg-dark rounded">
                <div className="d-flex flex-column align-items-center align-items-sm-start pt-2 text-white min-vh-100">
                    <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="fs-5 d-none d-sm-inline">Board</span>
                    </a>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li className="nav-item">
                            <a href="/" className="nav-link align-middle px-0">
                                <i className="fs-4 bi-house">
                                    <img src={icons.dashboard} width={20} height={20} alt='Not Found' style={{backgroundColor:"white"}}></img>
                                </i> <span className="ms-1 d-none d-sm-inline text-white">Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link align-middle px-0">
                                <i className="fs-4 bi-house">
                                <img src={icons.transaction} width={20} height={20} alt='Not Found' style={{backgroundColor:"white"}}></img>
                                </i> <span className="ms-1 d-none d-sm-inline text-white">Transactions</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link align-middle px-0">
                                <i className="fs-4 bi-house">
                                <img src={icons.sechedule} width={20} height={20} alt='Not Found' style={{backgroundColor:"white"}}></img>
                                </i> <span className="ms-1 d-none d-sm-inline text-white">Schedules</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link align-middle px-0">
                                <i className="fs-4 bi-house">
                                <img src={icons.users} width={20} height={20} alt='Not Found' style={{backgroundColor:"white"}}></img>
                                </i> <span className="ms-1 d-none d-sm-inline text-white">Users</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="nav-link px-0 align-middle">
                                <i className="fs-4 bi-people">
                                <img src={icons.setting} width={20} height={20} alt='Not Found' style={{backgroundColor:"white"}}></img>
                                </i> <span className="ms-1 d-none d-sm-inline text-white">Settings</span> 
                            </a>
                        </li>
                    </ul>
                    <hr/>
                    <div className="dropdown pb-4">
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li className="nav-item">
                            <a href="/" className="nav-link align-middle px-0">
                                <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline text-white">Help</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="nav-link px-0 align-middle">
                                <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline text-white">Contact Us</span> 
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideNavbar

import React, { useEffect, useState } from 'react'

const Navigation = (props) => {
    const {title,image,name,email,logOut} = props;
    const [img,setImg] = useState(image);
    
    useEffect(()=>{
        if(image)localStorage.setItem("image", image);
    },[])
    useEffect(()=>{
        if(!img) setImg(localStorage.getItem("image"));
    },[img])
    console.log(props,"props");
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mt-4 navbar-static-top">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">{title}</a>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                {/* <img src={image} alt='Not Found'/> */}
                <button className='btn'>
                    <img src={img} className="rounded-circle" alt="Not Found" width="40" height="40"></img>
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navigation

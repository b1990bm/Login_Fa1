import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from "../image/logo.svg";
import Search from "../image/search.svg";
import login from "../image/login.svg";
import close from "../image/close.svg";
import "../Styles/style.scss";
const Navbar = () => {
    const [search,setSearch]=useState(false);
    return (
        <div className="navContainer">
            <div className="rightBar">
                <img src={Logo} alt="Logo" />
                <div className="menuBar">
                    <Link className="linkmenu" to="/" > خانه</Link>
                    <Link className="linkmenu" to="/products" > محصولات</Link>
                    <Link className="linkmenu" to="" > وبلاگ</Link>
                    <Link className="linkmenu" to="" > تماس با ما</Link>
                </div>
            </div>

            <div className="leftBar">
                

                {
                    search===true ? 
                    <>
                        <input type="text" className="searchBar" placeholder="عبارت خود رو وارد کنید"/> 
                        <img  src={close} alt="close" className="closSearch" onClick={()=>setSearch(false)}/>
                    </>
                    :
                    <img src={Search} onClick={()=>setSearch(true)} alt="search" />

                }
                
                  
                <div className="buttonBar">
                    <Link className='btnlogin' to="/login"><img src={login} alt="" /></Link>
                </div>

            </div>
            
        </div>
    );
};

export default Navbar;
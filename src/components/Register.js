import React from 'react';
import "../Styles/style.scss";
import {Link} from 'react-router-dom';
import { useState } from 'react';
const Register = () => {
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
       
    

    const sumbitHandeler=(e)=>{
        e.preventDefault();

            localStorage.setItem("name",JSON.stringify(name));
            localStorage.setItem("email",JSON.stringify(email));
            localStorage.setItem("password",JSON.stringify(password));



    }

    
    return (
        <div>
            <form className="form" onSubmit={sumbitHandeler}>
            <h1 className="headerName">ثبت نام</h1>
            <div className="form-group">
                <label>نام</label>
                <input type="text" name="name" className="form-control" 
                                    placeholder="نام خود را وارد کنید" 
                                    onChange={(e)=>setName(e.target.value)}                    
                                    />

            </div>
            <div className="form-group">
                <label>ایمیل</label>
                <input type="email" name="email" className="form-control" 
                                    placeholder="ایمیل خود را وارد کنید" 
                                    onChange={(e)=>setEmail(e.target.value)}  
                                    />
            </div>
            <div className="form-group">
                <label>پسورد</label>
                <input type="text" name="password" className="form-control" 
                                    placeholder="پسورد خود را وارد کنید" 
                                    onChange={(e)=>setPassword(e.target.value)}  
                                    />
            </div>
            <div className="form-group">
                <label>شماره تماس</label>
                <input type="phone" className="form-control" 
                                    placeholder="شماره تماس خود را وارد کنید" />
            </div>
            <button type="submit" className="register">ثبت نام</button>
            <Link to="/login">اگر ثبت نام کردید وارد شوید ؟</Link>
            </form>
        </div>
    );
};

export default Register;
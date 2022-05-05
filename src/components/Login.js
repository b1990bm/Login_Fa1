import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
    const [emaillog,setEmaillog]=useState("");
    const [passwordlog,setPasswordlog]=useState("");

    const sumbitHandeler=(e)=>{
        e.preventDefault();
        const mail=JSON.parse(localStorage.getItem("email"));
        const pass=JSON.parse(localStorage.getItem("password"));

        if(emaillog===mail && passwordlog===pass){
          
            window.location.replace("/register")

        }else{
           
        }

    }

    return (
        <div>
            <form className="form" onSubmit={sumbitHandeler}>
            <h1 className="headerName">ورود کاربر</h1>
            <div className="form-group">
                <label>ایمیل</label>
                <input type="email" className="form-control" 
                                    placeholder="ایمیل خود را وارد کنید" 
                                    onChange={(e)=>setEmaillog(e.target.value)}
                                    />
            </div>
            <div className="form-group">
                <label>پسورد</label>
                <input type="text" className="form-control" 
                                    placeholder="پسورد خود را وارد کنید" 
                                    onChange={(e)=>setPasswordlog(e.target.value)}
                                    />
            </div>
            <button type="submit" className="register">وارد شوید</button>
            
            <Link to="/register">لطفا ثبت نام کنید</Link>
            </form>
        </div>
    );
};

export default Login;
import React from 'react';
import {Link} from 'react-router-dom';
const Login = () => {
    return (
        <div>
            <form className="form">
            <h1 className="headerName">ثبت نام</h1>
            <div className="form-group">
                <label>ایمیل</label>
                <input type="email" className="form-control" 
                                    placeholder="ایمیل خود را وارد کنید" />
            </div>
            <div className="form-group">
                <label>پسورد</label>
                <input type="text" className="form-control" 
                                    placeholder="پسورد خود را وارد کنید" />
            </div>
            <button type="submit" className="register">وارد شوید</button>
            <Link to="/register">لطفا ثبت نام کنید</Link>
            </form>
        </div>
    );
};

export default Login;
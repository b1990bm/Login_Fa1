import React from 'react';
import "../Styles/style.scss";
const Register = () => {
    return (
        <div>
            <form className="form">
            <h1 className="headerName">ثبت نام</h1>
            <div className="form-group">
                <label>نام</label>
                <input type="text" className="form-control" 
                                    placeholder="نام خود را وارد کنید" />
            </div>
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
            <div className="form-group">
                <label>شماره تماس</label>
                <input type="phone" className="form-control" 
                                    placeholder="شماره تماس خود را وارد کنید" />
            </div>
            <button type="submit" className="register">ثبت نام</button>
            <a href="#">اگر ثبت نام کردید وارد شوید ؟</a>
            </form>
        </div>
    );
};

export default Register;
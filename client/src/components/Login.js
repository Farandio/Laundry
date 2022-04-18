import React from 'react'
import 'bulma/css/bulma.min.css';
import loginStyle from './style/login.module.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

const showHide = () => {
        const password = document.getElementById('password');
        const toggle = document.getElementById('toggle');
        
            if(password.type === 'password'){
                password.setAttribute('type', 'text');
                toggle.classList.add('hide')
            } else{
                password.setAttribute('type', 'password');
                toggle.classList.remove('hide')
            }
}

const Login = () => {
  return (
    <div className={loginStyle.container}>
        <br /><br /><br /><br /><br /><br /><br />
        <div className="row px-3">
            <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0 shadow-lg">
                <div className="img-left d-none d-md-flex"></div>

                <div className="card-body">
                    <center>
                    <h4 className="title text-center mt-4">
                        LOGIN
                    </h4>
                    </center>
                    <form className="form-box px-3" method="POST" action="/loginSubmit">
                        <div className="from-input">
                            <span><i className="fa fa-user"></i></span>
                            <input type="text" name="username" placeholder="Username" tabindex="10" required />
                        </div>
                        <div className="from-input">
                            <span><i className="fa fa-eye" onclick={ showHide }></i></span>
                            <input id="password" type="password" name="password" placeholder="Password" required />
                        </div>
                            
                        <div className="mb-3">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="cb1" name="" />
                                <label className="custom-control-label" for="cb1">Remember me</label>
                            </div>
                        </div>

                        <div className="mb-3">
                            <button type="submit" className="btn btn-block text-uppercase" name="login" value="LOG IN">Login</button>
                        </div><br />

                        <div className="mb-3">
                            Belum memiliki akun ? <a href="/signup">Klik disini</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
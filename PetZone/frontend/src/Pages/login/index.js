import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import LoginBg from '../../Images/loginbg.png'
import Logo from '../../Images/logo.png'
import InputField from '../../Components/InputField'
import './login.css'
const Index = () => {
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const history = useNavigate()
    return (

        <div style={{ backgroundImage: `url(${LoginBg})`, backgroundRepeat: 'repeat' }} className='login-main-cont'>
            <div className='mt-5 login-container'>
                <div className='login-body'>
                    <div className='login-logo-cont'>
                        <img className='logo-img' src={Logo} alt='Logo Image' loading='lazy' />
                        <h1 className='logo-heading'>PET ZONE </h1>
                    </div>
                    <div className='mt-5 login-input-form'>
                        <h4 className='mb-4 '>LOGIN</h4>
                        <form>
                            <InputField label={'Email'} type={'email'} value={email} setValue= {setEmail} />
                            <InputField label={'Password'} type={'password'} value={pass} setValue= {setPass} />
                            
                            <div style={{ color: '#86b7fe' }} className="mb-4 col text-end">
                                <a>Forgot password?</a>
                            </div>
                            <div className='d-flex justify-content-center form-group'>
                                <button onClick={(e) => {
                                    e.preventDefault()

                                }} className='px-4 btn btn-primary'>Login</button>
                            </div>
                        </form>
                    </div>
                    <div className='mt-4 d-flex justify-content-center'>
                        <p>Not a member? <span onClick={()=> history('/signup')} style={{ color: '#86b7fe',cursor: 'pointer', }}>Register</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
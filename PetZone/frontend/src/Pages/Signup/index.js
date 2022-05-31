import React, { useState } from 'react'
import LoginBg from '../../Images/loginbg.png'
import Logo from '../../Images/logo.png'
import InputField from '../../Components/InputField'
import { useNavigate } from 'react-router-dom'

const Index = () => {
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[pass,setPass] = useState('')
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
                <h4 className='mb-4 '>Sign Up</h4>
                <form>
                    <InputField label={'Full Name'} type={'text'} value={name} setValue= {setName} />
                    <InputField label={'Email'} type={'email'} value={email} setValue= {setEmail} />
                    <InputField label={'Password'} type={'password'} value={pass} setValue= {setPass} />
                    <div className='d-flex justify-content-center form-group'>
                        <button onClick={(e) => {
                            e.preventDefault()
                            history('/')
                        }} className='px-4 btn btn-primary'>Sign Up</button>
                    </div>
                </form>
            </div>
            <div className='mt-4 d-flex justify-content-center'>
                        <p>Already have an account? <span onClick={()=> history('/')} style={{ color: '#86b7fe',cursor: 'pointer', }}>Login</span></p>
                    </div>
        </div>
    </div>
</div>
  )
}

export default Index
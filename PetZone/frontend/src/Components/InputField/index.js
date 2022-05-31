import React from 'react'

const Index = ({label, type, value, setValue}) => {
    return (
        <div className="form-floating mb-4">
            <input onChange={(e)=> setValue(e.target.value)} type={type} value={value} id="form1email" className="form-control" placeholder=' ' />
            <label for="form1email">{label}</label>
        </div>
    )
}

export default Index
import React, { useState } from 'react'

export default function Form({ submit }){
    const initial = {
        name: 'ds',
        email: 'ds',
        role: 'ds'
    }
    const [formValues, setFormValues] = useState(initial)

    const change = (evt) => {
        const { name, value } = evt.target
        setFormValues({...formValues, [name]: value})
    }
    const handleSubmit = evt => {
        evt.preventDefault()
        submit(formValues)
        setFormValues(initial)
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id='name' type="text" name ='name' onChange={change} value={formValues.name}/>

            <label htmlFor="email">Email</label>
            <input id='email' type="email" name ='email' onChange={change} value={formValues.email}/>

            <label htmlFor="role">Role</label>
            <select id='role' name="role" onChange={change} value={formValues.role}>
                <option value="">select-a-role</option>
                <option value="FE">Frontend Engineer</option>
                <option value="BE">Backend Engineer</option>
                <option value="D">Designer</option>
            </select>
            <button>submit</button>
        </form>
    )
}
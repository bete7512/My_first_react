import React, { useState } from "react";

const Form = (props) => {
    const [email, useEmail] = useState('betekbebe@gmail.com')
    const [password, usePassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password)
    }
    return (
        <div className="flex justify-center items-center font-bold">
            <div>
                <div className="font-bold text-xl">This is from Parents {props.message}</div>
                <div className="font-serif text-lg">Your Result is here</div>
                <div>{email}</div>
                <div>{password}</div>
                <div className="space-y-4">
                    <form onSubmit={handleSubmit}>
                        <div className="">
                            <div>
                                <label htmlFor="email">Email</label>
                            </div>
                            <input value={email} className="p-3 rounded-lg text-lg" id="email" type="text" placeholder="Enter your email" onChange={(e) => useEmail(e.target.value)} />
                        </div>
                        <div>
                            <div>
                                <label htmlFor="password">Password</label>
                            </div>
                            <input value={password} className="p-3 rounded-lg text-lg" id="password" type="text" placeholder="Enter your password" onChange={(e) => usePassword(e.target.value)} />
                        </div>
                        <button className="px-4 py-2 font-bold bg-yellow-700 rounded-lg " >submit</button>
                    </form>
                </div>
            </div>
        </div >
    )
}
export default Form
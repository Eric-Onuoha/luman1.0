import React from "react";
import { useState } from "react";
import { signIn } from "./signIn.firebase.utils";
import { getMultipleDocuments } from "../../firestore/getFromFirestore.utils";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateCurrentUser } from "../../reduxStore/reducers/user.reducer";
import "./authenticator.styles.scss";

const Authenticator = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const defaultFormFields = {
        email:"",
        password:"",
    };

    const nextPath = window.location.pathname;

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    const handleSubmit = async (event)=> {
        event.preventDefault();

        try{
            const {user} = await signIn(email, password);
            getMultipleDocuments("Users").then((UsersDB) => {
                // console.log(UsersDB[user.uid]);
                dispatch(updateCurrentUser(UsersDB[user.uid]));
            });
            // dispatch(updateCurrentUser(user.email));
            navigate(nextPath);
        } catch(error){
            alert(error.message);
        }

    }

    return(
        <div id="aunthenticatorComponent">
            <h1>Sign In to Lush Operations</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={handleChange} value={email}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={handleChange} value={password}/>
                <button type="submit">Login</button>
                <p>Don't have an account? Find an existing account holder to help you create one</p>
            </form>
        </div>
    )
};

export default Authenticator;
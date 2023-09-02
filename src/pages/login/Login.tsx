import React, {useRef, useState} from "react";

import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../config/firebase";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Header from "../../components/header/Header";

import "./Login.css";

function Login() {
    const loginForm: any = useRef<HTMLFormElement>(null);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    function login(e: Event) {
        const email: string = loginForm.current?.elements.email.value;
        const password: string = loginForm.current?.elements.password.value;
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log("logged in");
            })
            .catch(err => {
                if (err.message === "Firebase: Error (auth/user-not-found)." || err.message === "Firebase: Error (auth/wrong-password).") {
                    alert("Onjuiste inloggegevens");
                    console.error(err.message);
                }
            });
    }

    return (
        <>
            <Header/>
            <div className="container">
                <Form
                    form={loginForm}
                    submitAction={login}
                    title="Log hier in op je account"
                    isSubmitted={isSubmitted}
                    setIsSubmitted={setIsSubmitted}
                >
                    <Input
                        id="email"
                        type="email"
                        placeholder="Vul hier je gebruikersnaam(emailadres) in"
                        required={true}
                    />
                    <Input
                        id="password"
                        type="password"
                        placeholder="Vul hier je Wachtwoord in"
                        required={true}
                    />

                    <Button
                        type={"submit"}
                        message="Login"
                    />

                </Form>
            </div>
        </>
    );
}

export default Login;
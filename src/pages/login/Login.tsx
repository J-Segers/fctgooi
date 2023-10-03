import React, {useRef, useState} from "react";

import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../config/firebase";
import FormComponent from "../../components/formComponent/FormComponent";
import InputComponent from "../../components/inputComponent/InputComponent";
import ButtonComponent from "../../components/buttonComponent/ButtonComponent";
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import FooterComponent from "../../components/footerComponent/FooterComponent";


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
            <HeaderComponent/>
            <div className="container">
                <FormComponent
                    form={loginForm}
                    submitAction={login}
                    title="Log hier in op je account"
                    isSubmitted={isSubmitted}
                    setIsSubmitted={setIsSubmitted}
                >
                    <InputComponent
                        id="email"
                        type="email"
                        placeholder="Vul hier je gebruikersnaam(emailadres) in"
                        required={true}
                    />
                    <InputComponent
                        id="password"
                        type="password"
                        placeholder="Vul hier je Wachtwoord in"
                        required={true}
                    />
                    <ButtonComponent
                        type={"submit"}
                        message="Login"
                    />
                </FormComponent>
            </div>
            <FooterComponent/>
        </>
    );
}

export default Login;
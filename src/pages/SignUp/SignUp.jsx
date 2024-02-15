import { useContext } from "react"
import Layout from "../../components/Layout/Layout"
import { ShopingCartContext } from "../../context/ShopingCartContext"


function SignUp(){

    const context = useContext(ShopingCartContext)

    const submitData = (event) => {
        console.log(event)
        const userName = document.getElementById("userName")
        const userEmail = document.getElementById("userEmail")
        const userPassword = document.getElementById("userPassword")

        const isNameValid = validateName(userName.value)
        const isEmailValid = validateEmail(userEmail.value)
        const isPasswordValid = validatePassword(userPassword.value)


        if(isNameValid && isEmailValid && isPasswordValid){
            const data = {
                "name": userName.value,
                "email": userEmail.value,
                "password": userPassword.value,
                "isLoggedIn": false
            }
            context.setUserData(data)
            context.setLocalStorageUserData(data)
        }else{
            alert("Invalid email or password")
        }
    }

    const validateName = (name) => {
        if (name.startsWith(" ")) {
            return false;
        }

        var regex = /^[a-zA-Z]+$/; // Expresión regular para verificar que solo contenga letras
        if (!regex.test(name)) {
            return false;
        }

        return true;
    }

    const validateEmail = (email) => {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el formato de correo electrónico
        return regex.test(email);
    }

    const validatePassword = (password) => {
        if (password.length < 8) {
            return false;
        }
        
        var regex = /(.)\1{2,}/; // Expresión regular para detectar caracteres repetidos al menos 3 veces consecutivas
        if (regex.test(password)) {
            return false;
        }

        return true;
    }


    return(
        <Layout>
            <form className="flex items-center flex-col gap-4 w-60 h-80" onSubmit={(event) => {
                event.preventDefault()
                submitData(event)
            }}>
                <div className="w-full">
                    <p>Your name</p>
                    <input type="text" placeholder="name" id="userName" className="p-1 my-2 border border-black rounded w-full"/>
                </div>
                <div className="w-full">
                    <p>Your email</p>
                    <input type="text" placeholder="email@example.com" id="userEmail" className="p-1 my-2 border border-black rounded w-full"/>
                </div>
                <div className="w-full">
                    <p>Your password</p>
                    <input type="password" placeholder="********" id="userPassword" className="p-1 my-2 border border-black rounded w-full"/>
                </div>
                <button className="rounded border border-black w-full mt-8">Sign Up!</button>
            </form>
        </Layout>
    )
}

export default SignUp
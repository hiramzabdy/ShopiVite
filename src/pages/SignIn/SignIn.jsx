import { useContext } from "react"
import Layout from "../../components/Layout/Layout"
import { ShopingCartContext } from "../../context/ShopingCartContext"


function SignIn(){

    const context = useContext(ShopingCartContext)

    const submitData = (event) => {
        console.log(event)
        const userEmail = document.getElementById("userEmail").value
        const userPassword = document.getElementById("userPassword").value

        let validCredentials = validateCredentials(userEmail, userPassword)
        if(validCredentials){
            handleLogIn()

        }else{
            alert("Invalid email or password")
        }
    }

    const validateCredentials = (email, password) => {
        const localUserData = context.localStorageUserData
        if(localUserData["email"] === ""){
            return false
        }
        if(localUserData["email"] === email && localUserData["password"] === password){
            return true
        }
        return false
    }

    const handleLogIn = () => {

    }


    return(
        <Layout>
            <form className="flex items-center flex-col gap-4 w-60 h-80" onSubmit={(event) => {
                event.preventDefault()
                submitData(event)
            }}>
                <div className="w-full">
                    <p>Your email</p>
                    <input type="text" placeholder="email@example.com" id="userEmail" className="p-1 my-2 border border-black rounded w-full"/>
                </div>
                <div className="w-full">
                    <p>Your password</p>
                    <input type="password" placeholder="********" id="userPassword" className="p-1 my-2 border border-black rounded w-full"/>
                </div>
                <button className="rounded border border-black w-full mt-4 p-1">Log in</button>
            </form>
            <div className="flex items-center flex-col gap w-60 h-80">
                <p>Still don't have an account?</p>
                <a href="/SignUp" className="w-full">
                    <button className="rounded border border-black w-full mt-4 p-1">Sign Up!</button>
                </a>
            </div>
        </Layout>
    )
}

export default SignIn
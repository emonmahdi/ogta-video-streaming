import { useContext } from "react"
import { AuthContext } from "../Pages/Auth/AuthProvider.js/AuthProvider"


const useAuth = () => {

    return useContext(AuthContext)
}

export default useAuth;
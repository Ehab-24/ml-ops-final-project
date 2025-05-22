import { createContext, useContext, useState } from "react";
import * as api from "@/api/accounts";
import * as LocalAuthManager from "./LocalAuthManager"
import { toast } from "sonner";
import type { LoginPayload } from "@/components/forms/LoginForm";
import type { SignupPayload } from "@/components/forms/SignupForm";

type AuthState = { isLoggedIn: boolean, role: string };

type TAuthContext = {
    auth: AuthState;
    signup: (payload: SignupPayload) => void;
    login: (payload: LoginPayload) => void;
    logout: () => void;
};

const AuthContext = createContext<TAuthContext>(
    {
        auth: { isLoggedIn: false, role: "" },
        signup: (_) => { },
        login: (_) => { },
        logout: () => { }
    }
);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const [auth, setAuth] = useState<AuthState>({
        isLoggedIn: LocalAuthManager.hasData(),
        role: LocalAuthManager.getRole() ?? ""
    })

    async function signup(payload: SignupPayload) {
        const result = await api.register(payload)
        if (result.ok) {
            toast.success("Created new account!")
        } else {
            toast.error(result.error)
        }
    }

    async function login(payload: LoginPayload) {
        const result = await api.login(payload)
        if (result.ok) {
            const response = result.value
            LocalAuthManager.save(response)
            setAuth({
                role: response.role,
                isLoggedIn: true
            })
            toast.success("Logged in successfully!")
        } else {
            toast.error(result.error)
        }
    }

    function logout() {
        console.log('user logged out')
        LocalAuthManager.clear()
        setAuth({
            isLoggedIn: false,
            role: ""
        })
    }

    return (
        <AuthContext.Provider value={{
            auth, signup, login, logout
        }}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};



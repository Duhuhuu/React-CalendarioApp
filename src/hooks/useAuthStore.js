import { useDispatch, useSelector } from "react-redux"
import { calendarApi } from "../api"
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store"


export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth )
    const dispatch =  useDispatch()

    const starLogin = async({ email, password }) =>{
        console.log({ email, password })
        dispatch(onChecking);
        try {
            // const resp = await calendarApi.post('/auth')
            const {data} = await calendarApi.post('/auth',{ email, password});
            localStorage.setItem('token',data.token)
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch(onLogin({name: data.name , uid: data.uid}));

        } catch (error) {
            dispatch(onLogout('Credenciales Incorrectas'))
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }

    }

    const starRegister = async({ name, email, password }) =>{

        dispatch(onChecking);

        try {
            const { data } = await calendarApi.post('/auth/new',{ name, email, password});
            localStorage.setItem('token',data.token)
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch(onLogin({name: data.name , uid: data.uid }));

        } catch (error) {
            console.log(error)
          
            dispatch(onLogout(error.response.data?.msg || 'Error con los datos' ))
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }

    }



    return {
        //*Propiedades
        errorMessage,
        status, 
        user,
        //*Metodos
        starLogin,
        starRegister

    }

}
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useAuthStore, useForm } from '../../hooks';
import './LoginPage.css';

const loginFormFields = {
    loginEmail:    '',
    loginPassword: ''
}
const registerFormFields = {
    registerName:        '',
    registerEmail:       '',
    registerPassword:    '',
    registerPassword2:   '',
}


export const LoginPage = () => {

    const { starLogin, errorMessage, starRegister } = useAuthStore();

    const { loginEmail, loginPassword, onInputChange:onLoginImputChange } = useForm( loginFormFields );
    const { registerName, registerEmail, registerPassword, registerPassword2, onInputChange:onRegisterImputChange } = useForm( registerFormFields );
    
    const loginSubmit = ( event ) => {
        event.preventDefault();
        starLogin({email:loginEmail, password:loginPassword})

    }
    const registerSubmit = ( event ) =>{
        event.preventDefault();
        if(registerPassword !== registerPassword2){
            Swal.fire('Error en el Registro', 'Contraseñas no son iguales', 'error');
            return;
        }else{
            Swal.fire('Registro exitoso!', 'Usuario registrado!!', 'success');
        }

        starRegister({name:registerName, email:registerEmail, password:registerPassword,})
    }

    useEffect(() => {
      if(errorMessage !== undefined){
        Swal.fire('Error en la Autentificacion', errorMessage, 'error');
      }
    }, [errorMessage])



    


    
    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={ loginSubmit } > 
                        <div className="form-group mb-2">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="loginEmail"
                                value={ loginEmail }
                                onChange={ onLoginImputChange }
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="loginPassword"
                                value={ loginPassword }
                                onChange={ onLoginImputChange }
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={ registerSubmit }>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="registerName"
                                value={ registerName }
                                onChange={ onRegisterImputChange }
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name="registerEmail"
                                value={ registerEmail }
                                onChange={ onRegisterImputChange }
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                                name="registerPassword"
                                value={ registerPassword }
                                onChange={ onRegisterImputChange }
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                                name="registerPassword2"
                                value={ registerPassword2 }
                                onChange={ onRegisterImputChange }
                            />
                        </div>

                        <div className="d-grid gap-2">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
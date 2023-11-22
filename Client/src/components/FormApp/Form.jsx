import React from "react";
import './formStyle.css'
import { validate } from "../../functionValidate/validation";

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userData: {
                email: '',
                password: ''
            },
            errors: {
                email: '',
                password: ''
            }
        }
    }


    handleChange = (event) => {
        const { name, value} = event.target;
        this.setState((prevState) => ({
            userData: {
                ...prevState.userData,
                [name]: value
            }
        }))
        
        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // this.loginUser
        // const { email, password } = this.state.userData;
        const { email, password } = this.state.userData;
        const errors = validate({ email, password });

        // Actualizar el estado de errores
        this.setState({ errors });

        // Si no hay errores, puedes continuar con la lógica adicional
        if (Object.values(errors).every((error) => error === '')) {
            // Realizar acciones adicionales aquí, como enviar datos al servidor
        }
       
        this.props.loginUser({ email, password})
      }

    render(){
        return(
                <form onSubmit={this.handleSubmit} action="">
            <div className="container-login">
                    {/* Email */}
                <h1 className="h1-login">LOGIN</h1>
                <label htmlFor="Email" className="email-input"> Enter Email</label>
                <input
                 type="text" 
                 name="email" 
                 placeholder="Email..."
                 onChange={this.handleChange} 
                 value={this.state.userData.email}
                 required
                 />
                 <i className='bx bxs-envelope'></i>
                 <div className="error">{this.state.errors.email}</div>

                <br />

                    {/* password */}
                <label htmlFor="Password">Enter Password</label>
                <input 
                 type="password"
                 name="password" 
                 placeholder="Password..." 
                 onChange={this.handleChange} 
                 value={this.state.userData.password}
                 required
                 />
                 <i className='bx bxs-lock-alt'></i>
                 <div className="error">{this.state.errors.password}</div>
                <button disabled={!this.state.userData.email || !this.state.userData.password || this.state.errors.email || this.state.errors.password} style={{cursor: "pointer"}} className="button-sub">Submit</button>
        </div>
            </form>
                
        )
    }
}

export default Form
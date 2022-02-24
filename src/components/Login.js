import React from 'react';
import { Button, Checkbox, Form, Message } from 'semantic-ui-react'
import "./login.css"

const Login = () => {
    return (
        <div className="login-body">
            <div className="login-main">           
                <h2 className="login-titre">Espace Client</h2> 
                <Form>
                    <Form.Field>
                        <label>Adresse e-mail :</label>
                        <input placeholder='exemple@gmail.com' />
                    </Form.Field>
                    <Form.Field>
                        <label>Mot de passe :</label>
                        <input placeholder='mot de pasee' />
                    </Form.Field>
                    <Form.Field>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" for="flexSwitchCheckDefault">J'accepte tous les Terms et Conditions</label>
                        </div> 
                    </Form.Field>
                    <button type='submit'>Se Connecter</button>
                </Form>
            </div>
        </div>
    );      
}

export default Login;

import React from 'react';
import { Button, Checkbox, Container, Form, Segment, Message } from 'semantic-ui-react'

const Login = () => {
    return (
        <div style={{ backgroundColor: 'olive' }}>
            <Container  >
                <Segment style={{ padding: '8em 23em' }} vertical>
                    <h2 style={{ textAlign : 'center' }}>Espace Client</h2>
                    <Form >
                        <Form.Field>
                            <label>Adresse e-mail :</label>
                            <input placeholder='exemple@gmail.com' />
                        </Form.Field>
                        <Message
                        error
                        header='Adresse e-mail incorrecte!'
                        content='Veuillez vérifier votre adresse e-mail.'
                        />
                        <Form.Field>
                            <label>Mot de passe :</label>
                            <input placeholder='mot de pasee' />
                        </Form.Field>
                        <Form.Field>
                            <Checkbox label="J'accepte tous les Terms et Conditions"
                                error={{
                                    content: 'Vous devez accepter tous les terms et conditions!',
                                    pointing: 'left',
                                }}
                            />
                        </Form.Field>
                        <Button type='submit'>Se Connecter</Button>
                    </Form>
                </Segment>
            </Container>
        </div>
    );      
}

export default Login;

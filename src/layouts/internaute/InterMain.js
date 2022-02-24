import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap';
import { Image ,Segment, Grid, Header, Button, Icon, Divider} from 'semantic-ui-react'
import images from '../../assets/frontend/img/greys.jpg'

export default class InterMain extends Component {
  render() {
    return (
        <Container>
            <Row>
                <Segment style={{ padding: '8em 0em' }} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <p style={{ fontSize: '1.33em' }}> 
                                Un texte est une série orale ou écrite de mots perçus comme constituant un
                                ensemble cohérent, porteur de sens et utilisant les structures propres à 
                                une langue (conjugaisons, construction et association des phrases…).
                                ... L'étude formelle des textes s'appuie sur la linguistique, qui est 
                                l'approche scientifique du langage.Un texte est une série orale ou écrite de mots perçus comme constituant un
                                ensemble cohérent, porteur de sens et utilisant les structures propres à 
                                une langue (conjugaisons, construction et association des phrases…).
                                L'étude formelle des textes s'appuie sur la linguistique, qui est 
                                l'approche scientifique du langage.
                            </p>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Row>
            <Divider inverted section />
            <Segment style={{ padding: '8em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column floated='left' width={3}><Image src={images} size='large' circular /></Grid.Column>
                        <Grid.Column floated='center' width={3}><Image src={images} size='large' circular /></Grid.Column>
                        <Grid.Column floated='right' width={3}><Image src={images} size='large' circular /></Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Row>
                <Segment style={{padding: '8em 0em' }} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={7} textAlign='center' >
                                <Header as='h3' style={{ fontSize: '2em' }} textAlign='left'>
                                    Titre 1
                                </Header>
                                <p style={{ fontSize: '1.33em' , textAlign:'left' }}>
                                We can give your company superpowers to do things that they never thought possible.
                                Let us delight your customers and empower your needs... through pure data analytics.
                                </p>
                                <Header as='h3' style={{ fontSize: '2em' }} textAlign='left'>
                                    Titre 2
                                </Header>
                                <p style={{ fontSize: '1.33em', textAlign:'left' }}>
                                Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                                bioengineered.
                                </p>
                                <Grid.Row>
                                    <Grid.Column textAlign='center' style={{ padding: '3em 0em' }}> 
                                        <Button size='huge' color='olive'>
                                            En savoir plus
                                            <Icon name='right arrow' />
                                        </Button>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid.Column>
                            <Grid.Column floated='right' width={6}>
                                <Image bordered rounded size='large' src={images} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Row>
            <Divider inverted section />
            <Row>
                <Segment style={{ padding: '8em 0em' }} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <p style={{ fontSize: '1.33em' }}> 
                                Un texte est une série orale ou écrite de mots perçus comme constituant un
                                ensemble cohérent, porteur de sens et utilisant les structures propres à 
                                une langue (conjugaisons, construction et association des phrases…).
                                ... L'étude formelle des textes s'appuie sur la linguistique, qui est 
                                l'approche scientifique du langage.
                            </p>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Row>
            
        </Container>
    )
  }
}

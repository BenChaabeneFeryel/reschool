import React from 'react';
import { Container, Segment, List, Divider, Grid } from 'semantic-ui-react'

const Interfooter = () => {
    return (
        <div>
            <Segment inverted vertical style={{ margin: '3em 0em 0em', padding: '3em 0em' }}>
                <Container textAlign='center'>
                    <Grid columns={3} divided stackable inverted>
                        <Grid.Row>
                            <Grid.Column>
                                <p>hello1</p>
                            </Grid.Column>
                            <Grid.Column>
                                <p>hello2</p>
                            </Grid.Column>
                            <Grid.Column>
                                <p>hello3</p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Divider inverted section />
                    <List horizontal inverted divided link size='small'>
                        <List.Item as='a' href='#'>
                            Contactez-nous
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Politique de Confidentialit√©
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Politique de Cookies
                        </List.Item>
                    </List>
                </Container>
            </Segment>
        </div>
    );
}

export default Interfooter;

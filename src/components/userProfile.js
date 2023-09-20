import React from 'react';
import { MyContext } from '../App';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../App.css'


class UserProfile extends React.Component{
    render(){
        return(
            <MyContext.Consumer>
               {
                valueFromParent =>(
                    <div id='container'>
                    <Card className='m-5'>
                        <Card.Header><img style={{width: "265px"}} src={valueFromParent.user.image} alt='userImage'/></Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>{valueFromParent.user.name}</ListGroup.Item>
                            <ListGroup.Item>{valueFromParent.user.email}</ListGroup.Item>
                            <ListGroup.Item>{valueFromParent.user.salary}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                    <Card className='m-5'>
                        <Card.Header><img style={{width: "265px"}} src={valueFromParent.user.image} alt='userImage'/></Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>{valueFromParent.user1.name}</ListGroup.Item>
                            <ListGroup.Item>{valueFromParent.user1.email}</ListGroup.Item>
                            <ListGroup.Item>{valueFromParent.user1.salary}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                    <Card className='m-5'>
                        <Card.Header><img style={{width: "265px"}} src={valueFromParent.user.image} alt='userImage'/></Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>{valueFromParent.user2.name}</ListGroup.Item>
                            <ListGroup.Item>{valueFromParent.user2.email}</ListGroup.Item>
                            <ListGroup.Item>{valueFromParent.user2.salary}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
                )
               }
            </MyContext.Consumer>
        )
    }
}

export default UserProfile;
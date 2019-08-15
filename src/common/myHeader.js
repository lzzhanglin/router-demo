import React, {Component} from 'react';
import { Button,Layout} from 'antd'
const { Header } = Layout;



function MyHeader(props) {
    return(
        <Header style={{ background: '#53828a',color: '#fff'}}>Header
        <Button style={{float:'right',marginRight:50,marginTop:16}} onClick={props.signOut}>sign out</Button>
        </Header>
    )
 }


export default MyHeader
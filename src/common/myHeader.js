import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Button,Layout} from 'antd'
const { Header } = Layout;

class MyHeader extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Header style={{ background: '#53828a',color: '#fff'}}>Header
            <span style={{marginLeft:100}}>store is: {this.props.header}</span>
            <Button style={{float:'right',marginRight:50,marginTop:16}} onClick={this.props.signOut}>sign out</Button>
            </Header>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      header: state.header
    }
  }

const mapDispatchToProps = (dispatch) =>({
    addItem: () => dispatch(),
    removeItem: () => dispatch(),
})
export default connect(mapStateToProps, mapDispatchToProps)(MyHeader)

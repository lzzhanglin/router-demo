import React, { Component }from 'react';
import {Input,List, Button} from 'antd'
import {store} from '../store/index.js'
import {connect} from 'react-redux'
import {changeHeader,deleteHeader} from '../action/actions'

console.log("类型为："+typeof(changeHeader))

class PageOne extends Component {
    constructor(props){
        super(props);
        this.state={
            inputValue:''
        }
     
        
    }

    handleInputChange = e=>{
        this.setState({
            inputValue:e.target.value
        })

    }

    render(){
            return(
              <div >
                  <p style={{color:'red',marginTop:50,textAlign:'center',fontSize:30}}> page one</p>
                  <div>
                  <p style={{marginLeft:30,color:'black',fontSize:'20px'}}>store is: {this.props.header}</p>
                  </div>
                  <Input onChange={this.handleInputChange} style={{marginLeft:30,width:300}} placeholder='请输入store值'></Input>
                  <Button type='primary' style={{marginLeft:50}} onClick={this.props.changeHeader}>修改store</Button>

                  <div>
                  <Button type='danger' style={{marginLeft:30,marginTop:30}} onClick={this.props.deleteHeader}>清除store</Button>

                  </div>

              </div>
            
        )
        }
}

const mapStateToProps = (state) => {
    return {
      ...state
    }
  }

const mapDispatchToProps = (dispatch,ownProps) => {
    return{
        changeHeader: () => dispatch(changeHeader('hello')),
        deleteHeader: () => dispatch(deleteHeader()),
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(PageOne)
import React, { Component }from 'react';
import {Icon,  Menu, Layout} from 'antd'
import { Link,} from 'react-router-dom'

const {  Sider } = Layout;
const { SubMenu } = Menu;

function MySider() {
    return(
        <Sider style={{ background: '#c1c8c9',color: '#fff',}}>
        <Menu
        //   onClick={this.handleClick}
          style={{ width: 200 }}
          // defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.ItemGroup key="g1" title="Item 1">
              <Menu.Item key="1"><Link to='/pageOne'>pageOne</Link></Menu.Item>
              <Menu.Item key="2"><Link to='/pageTwo'>pageTwo</Link></Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g2" title="Item 2">
              <Menu.Item key="3"><Link to='/pageThree'>pageThree</Link></Menu.Item>
              <Menu.Item key="4"><Link to='/pageFour'>pageFour</Link></Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
        </Sider>
    )
    
}

export default MySider
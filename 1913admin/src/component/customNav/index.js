import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import { Menu} from 'antd';
let navData=[
    {name:'首页',path:'/home'},
    {name:'设置',path:'/setting'},
    {name:'用户管理',
     path:'/user',
     children:[
        {name:'用户列表',path:'/user/list'},
        {name:'用户删除',path:'/user/del'},
     ]
    }
]

const { SubMenu } = Menu;
class CustomNav extends Component{
    renderItem=(data)=>{
        return data.map((item,index)=>{
            if(item.children){
                return(
                    <SubMenu title={item.name}>
                        {this.renderItem(item.children)}
                    </SubMenu>
                )
            }else{
                return <Menu.Item>{item.name}</Menu.Item>
            }
        })
    }
    render(){
        return(
            <div className='home'>
                  <Menu style={{ width: 256 }} mode="vertical">
                      {this.renderItem(navData)}
                    {/* <SubMenu
                    key="sub1"
                    title={
                        <span>
                        <Icon type="mail" />
                        <span>Navigation One</span>
                        </span>
                    }
                    >
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    </SubMenu> */}
                </Menu>,
            </div>
        )
    }
}
export default withRouter(CustomNav)
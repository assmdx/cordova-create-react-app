import React from 'react'
import {TabBar} from 'antd-mobile'
import {withRouter} from 'react-router-dom'


@withRouter
class NavLinkBar extends React.Component{
    render(){
        const pathname = this.props.location.pathname
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                tabBarPosition='bottom'
            >
                <TabBar.Item
                    // badge={v.path === '/msg' ? this.props.unread :0}
                    key={0}
                    title={"探索"}
                    icon={{uri:require(`./discover.png`)}}
                    selectedIcon={{uri:require(`./discover1.png`)}}
                    selected={pathname==="/home"}
                    onPress={()=>{
                        this.props.history.push('/home')
                    }}
                >
                </TabBar.Item>
                <TabBar.Item
                    // badge={v.path === '/msg' ? this.props.unread :0}
                    key={0}
                    title={"我的订阅"}
                    icon={{uri:require(`./rss.png`)}}
                    selectedIcon={{uri:require(`./rss1.png`)}}
                    selected={pathname==="/myservice"}
                    onPress={()=>{
                        this.props.history.push('/myservice')
                    }}
                >
                </TabBar.Item>
                <TabBar.Item
                // badge={v.path === '/msg' ? this.props.unread :0}
                key={0}
                title={"设置"}
                icon={{uri:require(`./user.png`)}}
                selectedIcon={{uri:require(`./user1.png`)}}
                selected={pathname==="/setting"}
                onPress={()=>{
                    this.props.history.push('/setting')
                }}
            >
            </TabBar.Item>
            </TabBar>
        )
    }
}
export default  NavLinkBar

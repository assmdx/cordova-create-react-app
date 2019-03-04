import React from 'react'
import { NavBar, Icon } from 'antd-mobile'
import {withRouter} from 'react-router-dom'


@withRouter
class Header extends React.Component {
    render() {
        const pathname = this.props.location.pathname
        return (
            <NavBar
                mode="light"
                // icon={<Icon type="left" />}
                onLeftClick={() => console.log('onLeftClick')}
                // rightContent={[
                //     <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                //     <Icon key="1" type="ellipsis" />,
                // ]}
            >
                {
                    pathname === '/home' && "服务列表"
                }
                {
                    pathname === '/detail' && "查看服务"
                }
                {
                    pathname === '/myservice' && "我的订阅"
                }
                {
                    pathname === '/setting' && "设置"
                }
            </NavBar>
        )
    }
}
export default Header

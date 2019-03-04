import React from 'react'

import "./home.css"
import NavLinkBar from '../../component/navlink/navlink'
import Header from '../../component/header/header'
import ServiceList from '../../component/servicelist/servicelist'
import MyService from "../../component/myService/myService"
import Setting from "../../component/setting/setting"
import Detail from "../../component/detail/detail"


class Home extends React.Component {
    render(){
        const pathname = this.props.location.pathname
        return(
            <div>
                <Header/>
                {
                    pathname === '/home' && <ServiceList/>
                }
                {
                    pathname === '/myservice' && <MyService/>
                }
                {
                    pathname === '/setting' && <Setting/>
                }
                {
                    pathname === '/detail' && <Detail/>
                }
                <NavLinkBar/>
            </div>
        )
    }
}

export default Home

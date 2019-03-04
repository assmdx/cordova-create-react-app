import React from 'react'

import {List,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'
import "./login.css"

class Login extends React.Component {
    render(){
        return(

            <div
                className={"login-container"}
                style={{
                    top:"0px",
                    bottom:"0px",
                    position:"fixed"
                }}
            >
                <WingBlank>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <List
                        className={"input-container"}
                    >
                        <InputItem
                            placeholder={"手机号"}
                        >
                        </InputItem>
                        <InputItem
                            extra={<Button type="primary" size="small" inline>获取验证码</Button>}
                        >
                        </InputItem>
                    </List>
                    <WhiteSpace
                        style={{
                            backgroundColor:"transparent"
                        }}
                    />
                    <List>
                        <Button
                            type="primary"
                            onClick={()=>{
                                this.props.history.push('/home')
                            }}
                        >登录</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

export default Login


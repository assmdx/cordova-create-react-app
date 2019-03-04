import React from 'react'
import { List,Card,Button, WingBlank, WhiteSpace } from 'antd-mobile'
import {withRouter} from 'react-router-dom'

@withRouter
class Setting extends React.Component {
    render() {
        return (
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
                <List>
                    <Button
                        type="warning"
                        onClick={()=>{
                            this.props.history.push('/login')
                        }}
                    >退出</Button>
                </List>
            </WingBlank>
        )
    }
}
export default Setting

import React from 'react'
import { List,Card, WingBlank, WhiteSpace,Switch  } from 'antd-mobile'


class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            checked : false
        }
    }
    render() {
        return (
            <WingBlank>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WingBlank>
                    <List>
                        <Card>
                            <Card.Header
                                // thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                            >
                            </Card.Header>
                            <Card.Body>
                                <div>如果在有雾霾的时候，给你发短信</div>
                                <WhiteSpace></WhiteSpace>
                                <WhiteSpace></WhiteSpace>
                                <WhiteSpace></WhiteSpace>
                                <WhiteSpace></WhiteSpace>
                                <WhiteSpace></WhiteSpace>
                                <WhiteSpace></WhiteSpace>
                                <WhiteSpace></WhiteSpace>
                                <WhiteSpace></WhiteSpace>
                                <WhiteSpace></WhiteSpace>
                                <WhiteSpace></WhiteSpace>
                                <WhiteSpace></WhiteSpace>
                                <WhiteSpace></WhiteSpace>
                                <WhiteSpace></WhiteSpace>
                                <WhiteSpace></WhiteSpace>
                                <WhiteSpace></WhiteSpace>
                                <WhiteSpace></WhiteSpace>
                                <WhiteSpace></WhiteSpace>
                                <WhiteSpace></WhiteSpace>
                                <WhiteSpace></WhiteSpace>
                                <WhiteSpace></WhiteSpace>
                                <WhiteSpace></WhiteSpace>
                                <WhiteSpace></WhiteSpace>
                                <WhiteSpace></WhiteSpace>
                                <WhiteSpace></WhiteSpace>
                                <List>
                                    <List.Item
                                        extra={<Switch
                                            checked={this.state.checked}
                                            onChange={() => {
                                                this.setState({
                                                    checked: !this.state.checked
                                                })
                                            }}
                                        />}
                                    />
                                </List>
                            </Card.Body>
                            <Card.Footer content="45K" >
                            </Card.Footer>
                        </Card>
                    </List>
                </WingBlank>
            </WingBlank>
        )
    }
}
export default Detail

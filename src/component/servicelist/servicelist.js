import React from 'react'
import { List,Card, WingBlank, WhiteSpace } from 'antd-mobile'
import {withRouter} from 'react-router-dom'


@withRouter
class ServiceList extends React.Component {
    render() {
        return (
            <WingBlank>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WingBlank>
                    <List>
                        <Card
                            onClick={()=>{
                                this.props.history.push('/detail')
                            }}
                        >
                            <Card.Body>
                                <div>如果在有雾霾的时候，给你发短信</div>
                            </Card.Body>
                            <Card.Footer content="45K" extra={<div></div>} />
                        </Card>
                    </List>
                </WingBlank>


                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WingBlank>
                    <List>
                        <Card
                            onClick={()=>{
                                this.props.history.push('/detail')
                            }}
                        >
                            <Card.Body>
                                <div>如果在有雾霾的时候，给你发短信</div>
                            </Card.Body>
                            <Card.Footer content="45K" extra={<div></div>} />
                        </Card>
                    </List>
                </WingBlank>


                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WingBlank>
                    <List>
                        <Card
                            onClick={()=>{
                                this.props.history.push('/detail')
                            }}
                        >
                            <Card.Body>
                                <div>如果在有雾霾的时候，给你发短信</div>
                            </Card.Body>
                            <Card.Footer content="45K" extra={<div></div>} />
                        </Card>
                    </List>
                </WingBlank>
            </WingBlank>
        )
    }
}
export default ServiceList

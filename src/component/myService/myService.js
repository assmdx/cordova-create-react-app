import React from 'react'
import { List,Card, WingBlank, WhiteSpace ,SwipeAction } from 'antd-mobile'


class MyService extends React.Component {
    render() {
        return (
            <List>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <SwipeAction
                    style={{ backgroundColor: 'gray' }}
                    autoClose
                    right={[
                        {
                            text: '取消订阅',
                            onPress: () => console.log('delete'),
                            style: { backgroundColor: '#F4333C', color: 'white' },
                        }
                    ]}
                    // left={[
                    //     {
                    //         text: 'Reply',
                    //         onPress: () => console.log('reply'),
                    //         style: { backgroundColor: '#108ee9', color: 'white' },
                    //     },
                    //     {
                    //         text: 'Cancel',
                    //         onPress: () => console.log('cancel'),
                    //         style: { backgroundColor: '#ddd', color: 'white' },
                    //     },
                    // ]}
                    onOpen={() => console.log('global open')}
                    onClose={() => console.log('global close')}
                >
                    <List.Item
                        // extra="More"
                        // arrow="horizontal"
                        //onClick={e => console.log(e)}
                    >
                        雾霾订阅服务
                    </List.Item>
                </SwipeAction>
            </List>
        )
    }
}
export default MyService

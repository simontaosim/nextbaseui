import React from 'react';
import { Text } from 'native-base';
import MainLayout from '../../layout/MainLayout';
export default class Home extends React.Component{
    render(){
        return (
            <MainLayout history={this.props.history}>
                <Text>首页</Text>
                
            </MainLayout>
        )
    }
} 
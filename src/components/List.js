

import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
} from 'react-native';
import { Header, Container, Left, Title, Right, Body, Content, Label, Button } from 'native-base';
import DatePicker from '@react-native-community/datetimepicker';


const List = () => {

    return (
        <Container>
            <Header>
                <Body><Title>LIST</Title></Body>
                <Right />
            </Header>

            <Content>
                    <Text>List</Text>
            </Content>
        </Container>
    )
}

export default List
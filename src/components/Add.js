
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
import { Header, Container, Left, Title, Right, Body, Content, Label, Button, List, ListItem } from 'native-base';
import DatePicker from '@react-native-community/datetimepicker';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'

const Add = ({ list = [], loading }) => {

    const [selectdate, setSelectDate] = useState(false)
    const [date, setDate] = useState(new Date())
    const [item, setItem] = useState('')
    const [price, setPrice] = useState('')
    const [addItem, setAddItem] = useState(false)

    const chageDate = (event, newdate) => {
        setDate(newdate ? newdate : date)
        setSelectDate(false)
    }

    const onSave = () => {
        setAddItem(false)
    }

    return (
        <Container>
            <Header>
                <Body><Title>ITEM LIST</Title></Body>
                <Right>
                    {
                        !addItem &&
                        <Button onPress={() => setAddItem(true)} transparent>
                            <Title>ADD</Title>
                        </Button>
                    }
                </Right>
            </Header>

            <Content style={{ flex: 1, }}>

                {addItem &&
                    <React.Fragment>
                        <View style={{ padding: 20, paddingTop: 30 }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ width: "40%", paddingTop: 3 }}>
                                    <Label>SELECT DATE</Label>
                                </View>
                                <View style={{ width: "60%" }}>
                                    <View style={{ padding: 5, borderWidth: 1, borderRadius: 3, borderColor: 'red' }}>
                                        <Label onPress={() => setSelectDate(true)}>{date.toDateString()}</Label>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ padding: 20, paddingTop: 30 }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ width: "40%", paddingTop: 3 }}>
                                    <Label>ITEM</Label>
                                </View>
                                <View style={{ width: "60%" }}>
                                    <TextInput
                                        style={{
                                            borderRadius: 5,
                                            borderColor: "#000",
                                            borderWidth: 1
                                        }}
                                        placeholder={"input item ..."}
                                        value={item}
                                        onChange={(value) => setItem(value)}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ padding: 20, paddingTop: 30 }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ width: "40%", paddingTop: 3 }}>
                                    <Label>PRICE</Label>
                                </View>
                                <View style={{ width: "60%" }}>
                                    <TextInput
                                        style={{
                                            borderRadius: 5,
                                            borderColor: "#000",
                                            borderWidth: 1
                                        }}
                                        placeholder="input price ..."
                                        value={price}
                                        onChange={(value) => setPrice(value)}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ padding: 20, borderBottomWidth: 2, borderBottomColor: "#e9e9ef", margin: 3 }}>
                            <View style={{ flexDirection: "row", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                <View style={{ width: "50%", padding: 10 }}>
                                    <Button danger style={{ backgroundColor: "red", alignItems: "center", justifyContent: "center", borderRadius: 5 }}>
                                        <Title style={{ fontWeight: "bold" }}>CANCEL</Title>
                                    </Button>
                                </View>
                                <View style={{ width: "50%", padding: 10 }}>
                                    <Button onPress={onSave} success style={{ alignItems: "center", justifyContent: "center", borderRadius: 4 }}>
                                        <Title style={{ fontWeight: "bold", alignSelf: "center" }}>SAVE</Title>
                                    </Button>
                                </View>

                            </View>
                        </View>
                    </React.Fragment>
                }
                <List>
                    {
                        list.map((li, index) => (
                            <ListItem key={index}>
                                <Left>

                                </Left>
                                <Body>

                                </Body>
                                <Right>
                                    <Button transparent>
                                        <Icon name="trash-o"/>
                                    </Button>
                                    <Button transparent>
                                        <Icon name="edit"/>
                                    </Button>
                                </Right>
                            </ListItem>
                        ))
                    }
                </List>
            </Content>
            {
                selectdate &&
                <DatePicker
                    testID="datepicker"
                    value={date}
                    mode={"date"}
                    display="default"
                    onChange={chageDate}
                />
            }
        </Container>
    )
}

export default withNavigation(Add)
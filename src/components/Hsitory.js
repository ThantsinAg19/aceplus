

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
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component'
import { withNavigation } from 'react-navigation'
const History = ({ list = [], loading }) => {

    const [selectdate, setSelectDate] = useState(false)
    const [date, setDate] = useState(new Date())
    const [item, setItem] = useState('')
    const [price, setPrice] = useState('')
    
    const header = ['Start', 'Head1', 'Head2', 'Head3']
    const summary = ['', 'Total', '20.12', '112.12']

    const chageDate = (event, newdate) => {
        setDate(newdate ? newdate : date)
        setSelectDate(false)
    }

    return (
        <Container>
            <Header>
                <Body>
                    <Title>HISTORY</Title>
                </Body>
                <Right>
                    <View style={{ padding: 5, borderWidth: 1, borderRadius: 3, backgroundColor: "#fff" }}>
                        <Label onPress={() => setSelectDate(true)}>{date.toDateString()}</Label>
                    </View>
                </Right>
                {/* <Right > */}
            </Header>

            <Content style={{ flex: 1, }}>
                <Table>
                    {/* <Row data={header} style={styles.row}/> */}
                    <TableWrapper style={[styles.row, { backgroundColor: '#e9e9ef' }]}>
                        <Cell data={"Day"} style={styles.day} textStyle={styles.tableNumber} />
                        <Cell data={"Description"} style={styles.desc} textStyle={{ alignSelf: "center" }} />
                        <Cell data={"Price"} textStyle={styles.tableNumber} />
                    </TableWrapper>
                    {/* <Rows data={list} /> */}
                    {
                        list.map((row, key) => (
                            <TableWrapper key={key} style={styles.row}>
                                <Cell data={"1"} style={styles.day} textStyle={styles.tableNumber} />
                                <Cell data={"lzhgfghpsdoighdsfpgodfghjposdih"} style={styles.desc} textStyle={{ marginLeft: 10 }} />
                                <Cell data={"1"} textStyle={styles.tableNumber} />
                            </TableWrapper>
                        ))
                    }
                    <TableWrapper style={[styles.row, { backgroundColor: '#e9e9ef' }]}>
                        <Cell data={""} style={styles.day} textStyle={styles.tableNumber} />
                        <Cell data={"Total"} style={styles.desc} textStyle={{ alignSelf: "center", fontWeight: "bold" }} />
                        <Cell data={"1"} textStyle={styles.tableNumber} />
                    </TableWrapper>
                </Table>
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
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    tableNumber: {
        alignSelf: "flex-end",
        marginRight: 20
    },
    day: {
        width: "20%"
    },
    desc: {
        width: "60%"
    },
    price: {
        width: "20%"
    },

    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#FFF1C1', paddingTop: 10, paddingBottom: 10 },
    text: { margin: 6 },
    row: { flexDirection: 'row', backgroundColor: '#FFF1C1', borderBottomColor: "#e9e9ef", borderBottomWidth: 1, paddingTop: 10, paddingBottom: 10, margin: 10, },
    btn: { width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff' }
})

export default withNavigation(History)
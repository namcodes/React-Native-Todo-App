import React from 'react'
import {KeyboardAvoidingView,ScrollView, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const Lists = (props) =>{
    return(
        <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.container}>
            <View style={styles.item}>
                <View style={styles.ListGroup}>
                    <View style={styles.counter}>
                        <Text style={styles.count}>{props.count}</Text>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Text style={styles.text}>{props.text}</Text> 
                    </ScrollView>
                       
                </View>
               

                <TouchableOpacity style={styles.delete} onPress={() => props.deleteList()}>
                    <FontAwesome name="trash" size={25} color="#D22727"/>
                </TouchableOpacity>
            </View>
           </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    item:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        paddingLeft: 15,
        paddingTop: 15,
        paddingBottom: 15,
        marginVertical: 10,
        fontSize: 20,
    },
    ListGroup:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    counter:{
        marginRight: 10,
        paddingLeft: 5,
        paddingRight: 15,
        borderRightWidth: 1,
        borderColor: '#484848',
    },
    text:{
        fontSize: 18,
        color: '#484848',
        paddingLeft: 5,
    },
    count:{
        fontSize: 18,
        color: '#484848',
    },
    delete:{
        position: 'absolute',
        right: 0,
        paddingHorizontal: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        height: "100%",
    }
});

export default Lists;
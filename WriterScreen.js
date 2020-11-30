import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity,KeyBoardAvoidingView } from 'react-native';

export default class WriterScreen extends Component{
    constructor(){
        super();
        this.state={
            title:'',
            author:'',
            story:''
        }
    }
    render(){
        return(
            <KeyBoardAvoidingView>
                <TouchableOpacity style={styles.header}>
                    <Text style={styles.headerText}>Writer's Corner</Text>
                </TouchableOpacity>

                <TextInput
                style={styles.input}
                placeholder="Title"
                onChangeText={(text)=>this.setState({title:text})}
                value={this.state.title}
                />

                <TextInput
                style={styles.input}
                placeholder="Author's name"
                onChangeText={(text)=>this.setState({author:text})}
                value={this.state.author}
                /> 

                <TextInput
                style={styles.input}
                placeholder="Start writing here"
                multiline={true}
                onChangeText={(text)=>this.setState({story:text})}
                value={this.state.story}
                />

                <TouchableOpacity style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity> 

            </KeyBoardAvoidingView>
        )
    }
}

const styles=StyleSheet.create({
    header:{
        backgroundColor:"black",
        width:"50%",
        height: 50,
        alignSelf:'center',
        alignItems:'center'
    },
    headerText:{
        color:'white',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:30
    },
    input:{
        width:150,
        height:50,
        borderColor:"black",
        borderWidth:1
    },
    submitButton:{
        backgroundColor:"red",
        width:75,
        height:25
    },
    submitButtonText:{
        color:"white",
        fontSize:15,
        textAlign:'center'
    }
})
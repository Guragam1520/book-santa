import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';


export default class CustomSideBarMenu extends React.Component{
    logOut=()=>{
        this.props.navigation.navigate("WelcomeScreen")
        firebase.auth().signOut();
    }
render(){
    return(
        <View style={styles.container}>
            <View style={styles.DrawerItemscontainer}>
                <DrawerItems {...this.props}/>
            </View>
            <View style={styles.logOutcontainer}>
                <TouchableOpacity style={styles.logOutbutton} onPress={()=>{this.logOut}}>
                      <Text style={styles.LogoutText}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    DrawerItemscontainer:{
        flex:1
    },
    logOutbutton:{
        height:30,
        width:"100%",
        justifyContent:"center",
        padding:10
    },
    logOutcontainer:{
       flex:0.2,
       justifyContent:"flex-end",
       paddingBottom:30
    },
    LogoutText:{
        fontSize:30,
        fontWeight:"bold"
    }
})
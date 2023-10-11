import React from "react";
import { StyleSheet, View,Text,Image,Pressable,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SelectColorScreen = () => {
    const changeSky = () => {  
        alert('sky')
     }
    return (
        <View style={{width:'100%',height:'25%',backgroundColor:'white'}}>
             <Image
          style={styles.image}
          source={require("/assets/vs_blue.png")}
        />  
            <Text style={styles.title}>
                Điện Thoại Vsmart Joy 3 {'\n'}
                Hàng chính hãng</Text>
            <Text style={styles.textSelect}>Chọn 1 màu bên dưới:</Text>
            <View style={{alignItems:'center',marginTop:'5%'}}>
            <Pressable onPress={changeSky}>
             <Image source={require("/assets/sky.png")} style={styles.imageColor}>
            </Image>
            </Pressable>
            <Pressable onPress={changeSky}>
             <Image source={require("/assets/red.png")} style={styles.imageColor}>
            </Image>
            </Pressable>
            <Pressable onPress={changeSky}>
             <Image source={require("/assets/blue.png")} style={styles.imageColor}>
            </Image>
            </Pressable>
            <Pressable onPress={changeSky}>
             <Image source={require("/assets/black.png")} style={styles.imageColor}>
            </Image>
            </Pressable>
            </View>
            <TouchableOpacity  style={{marginLeft:'5%', backgroundColor:'#1952E2',width:'90%',height:'40px',borderRadius:'10px',marginTop:'8%'}}>
            <Text style={{color:'white',textAlign:'center',justifyContent:'center',paddingTop:'5px',fontWeight:'bold',fontSize:'20px'}}>XONG</Text>
            </TouchableOpacity>
            </View>

        
    )
}

const styles = StyleSheet.create({
    image: {
        width: 'null',
        height: '150px',
        resizeMode: 'contain',
        marginLeft:'-65%',      },
    title: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: '20px',
        lineHeight: '18px',
        marginLeft: '35%',
        marginTop:'-35%'
    },
    textSelect:{
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: '22px',
        lineHeight: '18px',
        marginTop:'35%',
        marginLeft:'5%'
    },
    imageColor:{
        marginTop:'8%',
        width:'100px',
        height:'80px',
    }
})

export default SelectColorScreen;
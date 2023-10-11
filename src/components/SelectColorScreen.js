import React from "react";
import { StyleSheet, View,Text,Image,Pressable,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const SelectColorScreen = () => {
    const navigation = useNavigation();

    const colours = {
        red: {
          image: require('/assets/vs_red.png'),
          description: "Đỏ"
        },
        black: {
          image: require('/assets/vs_black.png'),
          description: "Đen"
        },
        blue: {
          image: require('/assets/vs_blue.png'),
          description: "Xanh"
        },
        sky: {
          image: require('/assets/vs_silver.png'),
          description: "Bạc"
        },
      };
    const [choice, setSelected] = useState(colours.blue);

    const [isHidden, setIsHidden] = useState(false);

     const changeBlue = () => {
        setIsHidden(true);
        setSelected(colours.blue)
     }
     const changeSky = () => {
        setIsHidden(true);
        setSelected(colours.sky)
     }
     const changeRed = () => {
        setIsHidden(true);
        setSelected(colours.red)
     }
     const changeBlack = () => {
        setIsHidden(true);
        setSelected(colours.black)
     }
    return (
        <View style={{width:'100%',height:'25%',backgroundColor:'white'}}>
             <Image
          style={styles.image}
          source = {choice.image} alt="colours"
        />  
            <Text style={styles.title}>
                Điện Thoại Vsmart Joy 3 {'\n'}
                Hàng chính hãng</Text>
                {isHidden && (
                    <View style={styles.textColor}>
                        <Text style={styles.text}>Màu: <Text style={{ fontWeight: 'bold',fontSize:'16px' }}>{choice.description}</Text></Text>
                        <Text style={styles.text}>Cung cấp bởi <Text style={{ fontWeight: 'bold',fontSize:'16px'}}>Tiki Tradding</Text></Text>
                        <Text style={{ fontWeight: 'bold',marginTop:'5%',fontSize:'16px',marginLeft:'1%'}}>1.790.000 đ</Text>
                    </View>
                )}
            <Text style={styles.textSelect}>Chọn 1 màu bên dưới:</Text>
            <View style={{alignItems:'center',marginTop:'5%'}}>
            <Pressable onPress={changeSky}>
            <Image source={require("/assets/sky.png")} style={styles.imageColor}>
            </Image>
            </Pressable>
            <Pressable onPress={changeRed}>
             <Image source={require("/assets/red.png")} style={styles.imageColor}>
            </Image>
            </Pressable>
            <Pressable onPress= {changeBlue}>
            <Image source={require("/assets/blue.png")} style={styles.imageColor}>
            </Image>
            </Pressable>
            <Pressable onPress={changeBlack}>
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
        marginLeft: '40%',
        marginTop:'-35%',
        textAlignVertical:'center'
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
    },
    textColor:{
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: '22px',
        lineHeight: '18px',
        marginLeft:'40%',
        marginBottom:'-25%',
        marginTop:'1%',
    },
    text:{
        marginTop:'3%',
        fontSize:'16px',
    }
})

export default SelectColorScreen;
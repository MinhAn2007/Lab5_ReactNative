import { StyleSheet, Text, View,Image,TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements'
const OrderScreen = () => {
    return (
        <View style= {styles.container}>
        <Image
          style={styles.image}
          source={require("/assets/vs_blue.png")}
        />        
        <Text style={styles.title}>Điện thoại Vsmart Joy 3 -Hàng Chính hãng</Text>
        <View style={{flexDirection:'row',marginLeft:'-60%'}}>
        <Image
          style={styles.star}
          source={require("/assets/star.png")}
        /> 
         <Image
          style={styles.star}
          source={require("/assets/star.png")}
        /> 
         <Image
          style={styles.star}
          source={require("/assets/star.png")}
        /> 
         <Image
          style={styles.star}
          source={require("/assets/star.png")}
        /> 
         <Image
          style={styles.star}
          source={require("/assets/star.png")}
        /> 
        </View>
        <Text style={styles.textRate}>(Xem 828 đánh giá)</Text>
        <Text style={{fontSize:'20px',fontWeight:'bold',marginTop:'5%',marginLeft:'-70%'}}>1.790.000 đ</Text>
        <Text style={{fontSize:'20px',color:'grey',marginTop:'-7%',marginLeft:'19%',textDecorationLine:'line-through'}}>1.790.000 đ</Text>
        <View style={{flexDirection:'row',marginTop:'5%'}}>
        <Text style={{fontSize:'15px',fontWeight:'bold',color:'red',marginLeft:'-27%'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN   </Text>
          <Image style={{width:'25px',height:'25px'}} source={require('/assets/question.png')}></Image>
          </View>
          <TouchableOpacity style={{borderWidth:'1px',width:'100%',height:'40px',borderRadius:'35px',marginTop:'4%'}}>
            <Text style={{textAlign:'center',justifyContent:'center',paddingTop:'5px',fontSize:'18px',fontWeight:'bold'}}>4 MÀU CHỌN MÀU</Text>
            <Text style={{marginTop:'-38px',marginLeft:'90%',fontSize:'35px'}}>{'>'}</Text>

        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'red',width:'100%',height:'40px',borderRadius:'10px',marginTop:'15%'}}>
            <Text style={{color:'white',textAlign:'center',justifyContent:'center',paddingTop:'5px',fontWeight:'bold',fontSize:'20px'}}>CHỌN MUA</Text>
        </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
        resizeMode: 'contain',
        width: '360px',
        height:'350px',
        marginTop:'-5%'},
    title:{
        fontWeight:'bold',
        fontSize:'17px',
        marginLeft:'-8%',
        marginBottom:'2%'
    },
    star:{
        width:'30px',
        height:'30px'
    },
    textRate:{
        marginTop:'-7%',
        fontWeight:'bold',
        fontSize:'17px',
        marginLeft:'40%'
    }
  });
  export default OrderScreen
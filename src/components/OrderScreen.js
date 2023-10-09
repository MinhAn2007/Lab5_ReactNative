import { StyleSheet, Text, View,Image } from 'react-native';

const OrderScreen = () => {
    return (
        <View style= {styles.container}>
        <Image
          style={styles.image}
          source={require("/assets/vs_blue.png")}
        />        
        <Text style={styles.title}>Điện thoại Vsmart Joy 3 -Hàng Chính hãng</Text>
        <View style={{flexDirection:'row',marginLeft:'-53%'}}>
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
        <Text style={{fontSize:'20px',fontWeight:'bold',marginTop:'5%',marginLeft:'-60%'}}>1.790.000 đ</Text>
        <Text>1.790.000 đ</Text>

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
        width: '420px',
        height:'420px',
        marginTop:'-35%'
    },
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
        marginTop:'-6%',
        fontWeight:'bold',
        fontSize:'17px',
        marginLeft:'30%'
    }
  });
  export default OrderScreen
import { Animated, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    xFrom:{
        flex: 1,
        backgroundColor: '#ffffff',
        paddingStart: '5%',
        paddingEnd: '5%',      
    },

    Title:{
        height: 40,        
        color:'blue',
        fontSize:20,        
        marginTop:3,
        alignSelf:'center',       
    },

    Item:{                     
    //    backgroundColor: "#38A69D",                
        marginTop:"1%",
        marginLeft: "1%",
        marginRight: "15%",        
        marginBottom:"1%",        
    },

    Transp:{
        backgroundColor: "transparent",
    },

    Text:{
        fontWeight:'bold',
        fontSize:16,
        color:'#FFFF',
    },

    InputForm:{
        flex: 1,
        backgroundColor:"#f0f0f0",
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%',

    },

    textInputStyle: {
        fontSize:16,
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,        
        borderTopRightRadius:15,        
        borderColor: '#55FFFF',
        backgroundColor:'#E8E8E8',
      },

    container: {
                
        paddingTop: 1,
        backgroundColor: '#FFFFFF',
      },  
    imagem:{
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    buttonFacebookStyle: {
        borderTopRightRadius:25,        
        borderBottomRightRadius:25,  
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#485a96',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 50,
        borderRadius: 5,
        margin: 3,
        width:"87%",
        right:"1%",
      },
      organizalista:{
        position:'relative',
        flexDirection:'row',
      }
  });

  export default styles 
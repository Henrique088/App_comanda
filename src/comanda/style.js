import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    xFrom:{
        flex: 1,
        backgroundColor: '#ffffff',
        paddingStart: '5%',
        paddingEnd: '5%',      
    },
    Itens:{
        alignItems: "flex-start",
        backgroundColor: "#38A69D",
        flexGrow: 1,
        margin: 4,
        padding: 20
       
    },
    Text:{
        fontWeight:'bold',
        fontSize:16,
        color:'#ffffff',        
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
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#0066CC',
      },
    container: {
        paddingTop: 40,
        backgroundColor: 'white',
      },
  });

  export default styles 
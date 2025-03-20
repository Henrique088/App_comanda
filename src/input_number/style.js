import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      backgroundColor: "#007bff",
      padding: 10,
      borderRadius: 10,
      width: 60,
     
    },

    button_02: {
        backgroundColor: "#DC143C",
        padding: 10,
        borderRadius: 10,
        width: 60,
        height: 60,
       
      },
    text: {
      color: "#fff",
      fontSize: 30,
      textAlign: "center",
    },
    input: {
      width: "30%",
      textAlign: "center",
      fontSize: 25,
      fontWeight: "bold",
      color: "#000",
      borderBottomColor: "#000",
      borderBottomWidth: 1,
      marginHorizontal: 15,
       
    },
  });

  export default styles  
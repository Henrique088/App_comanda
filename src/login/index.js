import React, {useContext, useEffect, useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import { Text, View, TextInput, Image, TouchableOpacity, Vibration, SafeAreaView, ScrollView  } from 'react-native';

import styles from './style';
import Config from '../config/';



export default function Login() {

    const navigation = useNavigation();    
    const [username, setUsername] = React.useState(null);
    const [password, setPassword] = React.useState(null);


    const [ErroMessageUser, SeterroMessageUser] = React.useState(null);
    const [erroMessagePass, seterroerroMessagePass] = React.useState(null); 
    const [erroLogin, seteerroLogin] = React.useState(null); 
  
    

    async function Entrar(username, password){        
        
        if (username != null && password != null && username != '' && password != ''){
            
            const confgg = {
                method: 'POST',            
                body: JSON.stringify({nome:username, senha:password}),
                setTimeout: 5000,            
                headers: {'Content-type': 'application/json',},};
                
            const response = await fetch(Config.baseURL+'login/', confgg)
            .then(async response => await response.json())
            .then((data) => {
                if(data.validar=="true"){
                    Config.IdUser = username.toUpperCase();
                    navigation.reset({ index: 0, routes: [{name: "Home"}] })               
                }
                else
                    seteerroLogin('Usuário ou senha inválido!')
                    setTimeout(()=> {
                        seteerroLogin(null)
                    },4000);
                })
                .catch((e) => {
                console.error(e.message)
                });
        }else{
            console.log(username," ", password)
        }        
    };

  function ValidationInput(){   
        try{
            if(username == null) {
                Vibration.vibrate();
                SeterroMessageUser("* Campo usuário é obrigatório")
                setTimeout(()=> {
                    SeterroMessageUser(null)    
                    setUsername(null)               
                },3000);            
            }
            
            if(username == '') {
                Vibration.vibrate();
                SeterroMessageUser("* Campo usuário é obrigatório")
                setTimeout(()=> {
                    SeterroMessageUser(null) 
                    setUsername(null)                  
                },3000);            
            }

            if(password == null) {  
                Vibration.vibrate();        
                seterroerroMessagePass("* Campo senha é obrigatório")
                setTimeout(()=> {
                    seterroerroMessagePass(null)
                    setPassword(null)
                },3000);  
            }        

            if(password == '') {  
                Vibration.vibrate();        
                seterroerroMessagePass("* Campo senha é obrigatório")
                setTimeout(()=> {
                    seterroerroMessagePass(null)
                    setPassword(null)
                },3000);  
            }
            
            Entrar(username, password);
        }catch(e){
            console.error('Erro na validação dos campos: ',e.message);
        }
    };  

  function Validation(){    
      ValidationInput();      
  }; 


  return (
    <SafeAreaView  style={styles.Tela} >
        
            <View style={styles.logo}>      
                <Image source={require('../static/img/login.png')} />
            </View>
            <View style={styles.Organizarinput}>
                <TextInput 
                    placeholder="Digite o usuário" 
                    style={styles.inputUser} 
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={username}               
                    onChangeText={text=> setUsername(text)}>
                </TextInput>

                <Text style={styles.erroMessage}>{erroMessagePass}</Text>

                <TextInput
                    style={styles.inputPass}
                    returnKeyType="default"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry                    
                    placeholder="Digite a senha"
                    value={password}
                    onChangeText={text=> setPassword(text)}>
                </TextInput>

            </View>
            <Text style={styles.MenssageRetorno}>{erroLogin}</Text>
            
            <View style={styles.organizarbotao}>
                <TouchableOpacity
                    style={styles.Button}
                    onPress={()=> Validation()}>

                    <Text style={styles.TextButton}>Entrar</Text>

                </TouchableOpacity>
            </View>            
           
    </SafeAreaView>
  );
}
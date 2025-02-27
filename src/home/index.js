import React, {useEffect, useState, useContext } from 'react';
import { ImageBackground } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Config from '../config'
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';


export default function Home(){  
      const navigation = useNavigation(); 
     
      function status(){
            Config.ValidaProduto = false;
            navigation.navigate('Produto');
      }; 
     
      
  return( 
           
    <View style={styles.Tela}> 
     <ImageBackground  
     source={require('../static/img/planofundo.jpg')} 
    style={{width: 200, height: 200}}  />

      {/* Lista de comandas */}    
      <TouchableOpacity style={styles.ButtonComanda}
            onPress={()=> navigation.navigate('Comanda')} >
            <Text style={styles.TextButtonPedido}>Mesa</Text>
      </TouchableOpacity>

      {/* Lista das comandas para ser usadas na venda.*/}
      <TouchableOpacity style={styles.ButtonPedido}
            onPress={()=> navigation.navigate('Pedido')} >     
            <Text style={styles.TextButtonPedido}>Pedido</Text>            
      </TouchableOpacity>

      {/* Lista de produtos. */}
      <TouchableOpacity style={styles.ButtonProduto}
            onPress={()=> status() } >
            <Text style={styles.TextButtonProduto}>Produto</Text>
      </TouchableOpacity>
    </View>   
      
      );
}
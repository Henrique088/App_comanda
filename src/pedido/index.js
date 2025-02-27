import React, {useEffect, useLayoutEffect, useState } from 'react';
import { ImageBackground } from 'react-native';
import { View, Text, TouchableHighlight, SafeAreaView, FlatList  } from 'react-native';
import Animated, {useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';
import styles from './style';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import Config from '../config/';

export default function Pedido() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [lista, setLista] = React.useState(null);
    const [erroMensagem, seterroMensagem] = React.useState(null);    
    const columns = 3;
    const randomWidth = useSharedValue(10);
    const opacity = useSharedValue(0); 
   
    

    React.useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        console.log('Está focado, itens do pedido.');
      });
  
      return unsubscribe;
    }, [navigation]);
  
React.useEffect(() => {
      const unsubscribe = navigation.addListener('blur', () => {
        console.log('Não está focado , itens do pedido.');
      });
  
      return unsubscribe;
    }, [navigation]);

    const Item = ({item, onPress, state, index}) => (               
        <TouchableHighlight 
            onPress={onPress}
            style={[styles.Contem,  backgroundColorItem({state, index }) ]}                       
        >

            <Text style={[styles.text]} >
              {item.codigocomanda} - {item.descricaocomanda}
              
            </Text>
        </TouchableHighlight>
    );    
    
    const annim = useAnimatedStyle(() => {      
      return {
          opacity : opacity.value
      };
    });    
    
    useEffect(() => {
       opacity.value = withTiming(1,{duration: 1000}); 
       Item;
       window.onload;     
    },[]);
    
    useEffect(() => {        

        const res = fetch(Config.baseURL+'/Comanda/')
                .then(async response => await response.json())
                .then((data) => {
                    if(data!=""){
                        setLista(data);
                        
                    }
                    else
                    seterroMensagem('Registro não encontrado!')
                        setTimeout(()=> {
                            seterroMensagem(null);                                             
                        },3000);
                })
                .catch((e) => {
                    console.error('Erro no retorno do servidor: Consulta comanda')
                });                                
    }, []);

    function Chamada(id, name){            
        Config.Mesa = id;  
        Config.NomeMesa = name;
        console.log("Mesa", Config.Mesa)
        console.log("Nome mesa", Config.NomeMesa)
        navigation.navigate('PedidoVenda')                                             
                 
    };
    
    
    
    const backgroundColorItem = ({ state, index }) => {
      const style = index === 0 ? { marginTop: 0 } : {};        
      switch (state) {
        case 0:
          return { ...style, backgroundColor: "#38A69D" };
        case 1:
          return { ...style, backgroundColor: "#EA8F51" };
        default:
          return style;
      }
      
    };
   
    
    const _renderProduto = ({item}) => {                      
        if (item.empty) {                        
            return <View style={[styles.Contem, styles.itemEmpty]} />;
        };
       
        return (          
          <Item
            item={item}
            onPress={() => {Chamada(item.codigocomanda, item.descricaocomanda)} }
            state={item.statuscomanda}
            index={item.codigocomanda}
          />
      );
    };
    
    const myListEmpty = () => {
      return (
        <View style={{ alignItems: "center" }}>
        <Text style={styles.text}>Não Existe comandas.</Text>
        </View>
      );
    };

    const myItemSeparator = () => {
      return <View style={{ height: 1, width: '100%', marginTop:"2%", backgroundColor: "grey", marginHorizontal:10 }} />;
      };

    return ( 
      <SafeAreaView state={[styles.container]}>            
            <ImageBackground  
                source={require('../static/img/cinzapaper.png')} 
                style={[styles.imageBackground]}  
            />          
            <Animated.FlatList
                data={lista}
                keyExtractor={item => item.codigocomanda}
                numColumns={columns}                
                renderItem={_renderProduto } 
                ListEmptyComponent={myListEmpty}
                ItemSeparatorComponent={myItemSeparator}
          //      ListHeaderComponent={() => ( <Text style={{ fontSize: 30, textAlign: "center",marginTop:20,   fontWeight:'bold',textDecorationLine: 'underline' }}> Comanda </Text> )}
          //      ListFooterComponent={() => ( <Text style={{ fontSize: 30, textAlign: "center",marginBottom:50,fontWeight:'bold' }}>Seja bem vindo !</Text> )}
                onEndReachedThreshold={0.2}
                >
            </Animated.FlatList>
      </SafeAreaView>
          )};  
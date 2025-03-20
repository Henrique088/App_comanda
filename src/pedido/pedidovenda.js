import React, {useContext, useEffect, useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import { Text, View, SafeAreaView,  FlatList, ScrollView, TouchableOpacity, Alert} from 'react-native';
import styles from './style';
import stylepedidovenda from './stylepedidovenda';
import Config from '../config';
import ItensPedidoVenda from './itenspedido';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
//import NumericInput from 'react-native-numeric-input'
import NumericInput from '../input_number';


export default function PedidoVenda() {
    const navigation = useNavigation(); 
    const [qte, setqte] = useState(1); 
 
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          console.log('Está focado, Pedido de venda.');
        });
    
        return unsubscribe;
      }, [navigation]);
    
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
          console.log('Não está focado , Pedido de venda.');
        });
    
        return unsubscribe;
      }, [navigation]);

    const ItemView = ({item}) => {
        
        return (
            <TouchableHighlight
                onPress={() => getItem(item)}
            >
            <View style={styles.Item}>
                <Text
                style={styles.TextItem}
                >
                {item.codigoproduto}
                {' - '}
                {item.descricaoproduto.toUpperCase()}
                {'\n\nVr.Total: '}{FormatValue(item.valortotal)}
                </Text>
            </View>
            </TouchableHighlight>
        );
    };  
    
    const _keyExtractor = item => {        
        return item.descricaocomanda;
        };   

    function BuscaQuant(I){            
        Config.Quant = I;            
    };

     // Screen was focused
//    React.useEffect(() => {
//        const unsubscribe = navigation.addListener('focus', () => {
//        Config.ValidaProduto = false    
//        });
//        return unsubscribe;
//      }, [navigation]);

    
    const onChangeText = (value) => {
        let text = value.replace(/[^0-9]/g, '');
                if (isNaN(text)) {
                    setqte(text)
                return
                }
    
    console.log("text",text)
    };

    function AdicioneItem(){
        if (qte <1){
            console.log("adicione ao menos uma unidade");
            Alert.alert('Aviso', 'Adicione ao menos uma quantidade!', [{ text: 'OK' }]);
        }
        else {
            Config.ValidaProduto = true
            navigation.navigate('Produto')
        }
               
    }

    function ButtonMirus(qte){
        console.log(qte)
        if(qte>0){
            setqte(qte-1)
            console.log(qte)
        }
    }
    function buttonplus(qte){
        console.log(qte)
        if(qte>0){
            setqte(qte++)
            console.log(qte)
        }
    }
    
    

    console.log("Quantidade:", qte)

    return (  
        <SafeAreaView  style={stylepedidovenda.ContainerPedido}>   
            
                <View style={stylepedidovenda.Mesa} >       
                    <Text style={styles.ItemComanda}>
                        {Config.Mesa+'-'+Config.NomeMesa}
                    </Text>
                </View>  

                <View style={stylepedidovenda.container}>                
                    <View style={stylepedidovenda.organizabuttons}>
                        {/*<NumericInput
                            iconSize={15}
                            //step={1.5}
                            valueType='real'
                            rounded 
                            //rounded type='up-down'
                            textColor='#B0228C' 
                            iconStyle={{ color: 'black' }} 
                            rightButtonBackgroundColor='#EA3788' 
                            leftButtonBackgroundColor='#E56B70'
                            value={qte}
                            onChange={value=> setqte(value)}
                            stype='decimal'
                            decimalPlaces={0}
                            useGrouping={false}
                            minValue={1} 
                            //initValue={1}                   
                            />    */}

                            <NumericInput value={qte} onChange={setqte} />
                                         
                                                          
                    </View>
                    
                    <View style={stylepedidovenda.ButtonContainer} > 
                        <Icon.Button                        
                            style={stylepedidovenda.Button}  
                            size={35}
                            backgroundColor="transparent" // "remove" o fundo padrão do Icon
                            underlayColor="transparent" //remove o efeito do click
                            iconStyle={{ marginRight: 0, marginLeft: 0 }} //ajusta o icone                            
                            name="cart-plus"                        
                            onPress={()=> AdicioneItem() } >
                           
                        </Icon.Button>

                        {Config.ValidaProduto = true}
                        {BuscaQuant(qte)}                  
                    </View>                
                </View>
                            
            {ItensPedidoVenda()}
        
        </SafeAreaView>

        );
    }
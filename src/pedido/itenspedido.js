import React, {useContext, useEffect, useState } from 'react';
import { Text, View, Alert,  FlatList,TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import Config from '../config'
import styles from './style';
import stylepedidovenda from './stylepedidovenda';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { formToJSON } from 'axios';


export default function ItensPedidoVenda() {
    const navigation = useNavigation();
    const [prodados, setProDados] = useState();   
    const [showMore, setShowMore] = useState(false);
    const [total, setTotal] = useState(0);
    
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
    
          useEffect(() => {
            if(prodados){
              const valorTotal = prodados.reduce((acc, item) => {
                return acc + (typeof item.precototal === "number" ? item.precototal : 0);
              }, 0);
              setTotal(valorTotal);
            }
           
          }, [prodados]);

    useEffect(() => { 
      console.log("itenspedido_funcçaõoo", Config.Mesa)
        Itens();
        
        

    }, []);   
    console.log("itenspedido_funcçaõoo_02", Config.Mesa)
    // Listar os itens da comanda.
   async function Itens(){        
        const reme = {            
            method: 'POST',
            body: JSON.stringify({codigo:Config.Mesa}),
            setTimeout: 10000,            
            headers: {'Content-type': 'application/json',},};        
        
            const res = fetch(Config.baseURL+'/Pedido/id/',reme)        
                    .then(async response => await response.json())
                    .then((data) => 
                    {setProDados(data)},
                   
                    ).catch(() => { 
                        setProDados([]);
                        console.log('Não existe itens na lista!');
                    }); 
    };
   

    // Rotina para deletar o item da comanda, se ouver permissão do usuário 
    function DeletaItem(comanda, codigoitem, seqitem, usuario){        
        const delitem = {            
            method: 'POST',            
            body: JSON.stringify({codigocomanda:comanda, codigo:codigoitem, seq:seqitem, users:usuario}),
            setTimeout: 30000,            
            headers: {'Content-type': 'application/json; charset=UTF-8',},};        
        
        fetch(Config.baseURL+'/Pedido/delete/',delitem)
                .then(res => res.json() )
                .then((json) => {         
                    const Validar = json[0];
                    if (Validar.permissao == 1){
                        Alert.alert('Item Excluído com sucesso.'); 
                        Itens();
                                              
                    } else
                        Alert.alert('Usuário sem acesso a exclusão');                        
                });
    };

    const ListEmptyComponent = () => (
        <View
          style={{
            padding: 10,
            alignItems: 'center',
            fontSize: 26,
            textAlign: 'center',            
            flex: 1, // Without it will dispay at the very top
            justifyContent: 'center',
          }}
        >
          <Text style={{fontWeight:'bold',}}>Lista Vazia!</Text>
        </View>
      );

    function financial(x) {          
        return Number.parseFloat(x).toFixed(2)
      };

    async function Validacao(prod, cont){                
        if(!prod.null){ 
            Alert.alert(
                "Deletar",
                "Tem certeza que deseja excluir o registro?",
                [
                  {
                    text: "Cancelar",
                    onPress: () => {
                      return;
                    },
                    style: "cancel"
                  },
                  {
                    text: "Confirmar",
                    onPress: () => DeletaItem(Config.Mesa, prod, cont, Config.IdUser)
                  }
                ],
                { cancelable: false }
              );
        }    
    };  
    
    const handleTextLayout = ({ nativeEvent} ) => {
        setShowMore(nativeEvent.lines.length > 2);
      };

    
    const _renderProduto = ({item}) => {
                 
        return (            
            <View style={[styles.ListaItem]}>                
                <View  style={[styles.AlinhaTexto]}>
                    <Text  numberOfLines={2} onTextLayout={handleTextLayout} style={styles.itenspedido} > {item.codigoproduto} - {item.descricaoproduto} </Text>
                    <Text  numberOfLines={2} ellipsizeMode="tail" onTextLayout={handleTextLayout} style={styles.SubTotais}>
                        QTE: {financial(item.quantidade)} | VALOR UNIT: {financial(item.precovendaitem)} | VALOR TOTAL: {financial(item.precototal)} 
                        
                    </Text>
                </View>                
 
                <TouchableOpacity onPress={()=> Validacao(item.codigoproduto, item.sequencial) }>
                    <MaterialIcons 
                    name='delete-forever'
                    size={40} 
                    color="#f64c75"/>                     
                </TouchableOpacity>
                
            </View>
            
            
            );
        };  
    const ItemSeparatorView = () => {
        return (
            // Flat List Item Separator            
            <View
            style={{
                height: 1,               
                width: '100%',
                backgroundColor: '#C8C8C8',
            }}
            />
        );
        };
        
        
        
    return (
      <SafeAreaView style={{flex:1, width: '100%', height: '100%'}}>
            <FlatList style={stylepedidovenda.FlatList}
                data = { prodados }
                keyExtractor = { item => item.sequencial }
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem = {_renderProduto }
                ListEmptyComponent={ListEmptyComponent}                
                >       
            </FlatList>
            <Text style={styles.valorTotal}> Valor total R$: {total.toFixed(2)} </Text>
      </SafeAreaView>
)}
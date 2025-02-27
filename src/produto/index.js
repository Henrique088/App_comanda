import React, {useEffect, useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import { Alert, View, Text, FlatList, TextInput, SafeAreaView, Image, TouchableOpacity  } from 'react-native';
import styles from './style';
import Config from '../config/';
import renderSwitch from './imageproduto';

export default function Produto(){
  const navigation = useNavigation(); 
    const [lista, setLista] = React.useState(null);
    const [erroMensagem, seterroMensagem] = React.useState(null);     
    const [search, setSearch] = useState('');
    const [masterData, setMasterData] = useState([]);
    const [agrup, setAgroup] = useState([]);
    const [caminho, setCaminho] = React.useState('../static/img/');   
    
    React.useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        // Screen was focused
      });
      return unsubscribe;
    }, [navigation]);
  
    React.useEffect(() => {
      const unsubscribe = navigation.addListener('blur', () => {
        // Screen was unfocused
      });
      return unsubscribe;
    }, [navigation]);
    
    function FormatValue(num) {
          return num.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    }   

    function GerarPedido(item){      
      const conf = {
        method: 'POST',           
        body: JSON.stringify({codigo:item, mesa: Config.Mesa, qte: Config.Quant}),
        setTimeout: 5000,            
        headers: {                
            'Content-type': 'application/json',
            },      
          };

        const retor = fetch(Config.baseURL+'/Pedido/',conf)
            .then(async response => await response.json())
            .then((data) => {
                
                if(data!=""){                    
                  navigation.push('PedidoVenda');                   
                }
                else
                seterroMensagem('Registro não encontrado!')
                    setTimeout(()=> {
                        seterroMensagem(null)
                    },3000);
            })
            .catch((e) => {
                console.error('Erro no retorno do servidor: Seleção do item.')
            });
    };

    useEffect(() => {
       
        const confgg = {
            method: 'POST',            
            body: JSON.stringify({codigo:agrup}),
            setTimeout: 5000,            
            headers: {                
                'Content-type': 'application/json',
            },
        };
             
        const response = fetch(Config.baseURL+'/produdo/',confgg)
                .then(async response => await response.json())
                .then((data) => {
                    
                   if(data && data.length > 0){
                        setLista(data);
                        setMasterData(data);
                    }
                    else
                    seterroMensagem('Registro não encontrado!')
                        setTimeout(()=> {
                            seterroMensagem(null)
                        },3000);
                })
                .catch((e) => {
                    console.error('Erro no retorno do servidor: ${e}')
                });       
        }, []); 

        const searchFilter = (text) => {          
          if (text) {                                  
            const newData = masterData.filter(              
                function(item) {                  
                  if (item.descricao) {                    
                    const itemData = item.descricao.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                  }
                });
              setLista(newData);
            } else {
              setLista(masterData);
            }
            setSearch(text);
        };   
        const ItemView = ({item}) => {
            
            const ValidarImagem = renderSwitch(item.codigo);

            console.log(renderSwitch(item.codigo))
          return (
           
            <View style={styles.organizalista}>      
                <Image  source={ValidarImagem} style={styles.imagem} alt={""}/>           
                <TouchableOpacity onPress={() => getItem(item)} style={styles.buttonFacebookStyle }>
                        
                      <View style={styles.Item}>                      
                      
                          <Text style={styles.Text} >                                
                                {item.codigo} 
                                {' - '}
                                {item.descricao.toUpperCase()}
                                {'\n\nPreço: '}{FormatValue(item.precovenda)}
                          </Text>                                
                      </View>            
                </TouchableOpacity>
            </View>
          );          
        };

       
        const getItem = (item) => {                  
          if (Config.ValidaProduto){              
            Config.IdProduto =  item.codigo;              
            GerarPedido(Config.IdProduto);
            navigation.navigate('Pedido')
          } else {
                    Alert.alert('Produto:',
                        'Código        : ' + item.codigo + 
                        '\n\nDescrição : ' + item.descricao +
                        '\n\nPreço     : ' + FormatValue(item.precovenda) );
            
          };            
        };
      
      const ListEmptyComponent = () => (
        <View
          style={{
            alignItems: 'center',
            flex: 1, // Without it will dispay at the very top
            justifyContent: 'center',
          }}
        >
          <Text style={{fontWeight:'bold',}}>No results.</Text>
        </View>
      );

    return(
      <SafeAreaView>  
          
          <View style={styles.container}>      
              <TextInput
                    style={styles.textInputStyle} 
                    onChangeText={(text) => searchFilter(text)}
                    value={search}
                    underlineColorAndroid="transparent"
                    placeholder="Pesquisar Aqui" >

              </TextInput>
              
              <FlatList
                data={lista}
                keyExtractor={item => item.codigo}          
                renderItem={ItemView}  
                ListEmptyComponent={ListEmptyComponent} 
                maxToRenderPerBatch={10}
                initialNumToRender={10}
                maximumZoomScale={10}
                minimumZoomScale={1}
                
              >       
              </FlatList>      
          </View>    
      </SafeAreaView>  
    )
}


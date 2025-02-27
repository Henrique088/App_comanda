import React, {useEffect  } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableHighlight, Platform } from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import Config from '../config/';

export default function Comanda(){
    const navigation = useNavigation();
    const [lista, setLista] = React.useState(null);
    const [erroMensagem, seterroMensagem] = React.useState(null);    

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
                            seterroMensagem(null)
                        },3000);
                })
                .catch((e) => {
                    console.error('Erro no retorno do servidor: ${e}')
                });       
        }, []); 

        const Comm = ({item}) => {
            return (
              <TouchableHighlight>
                <View style={styles.Itens}>              
                    <Text                  
                      style={styles.Text}                  
                      >                     
                      {Config.Mesa= item.codigocomanda }
                      {' - '}
                      {item.descricaocomanda.toUpperCase()}                                             
                    </Text>
                          
                </View>            
              </TouchableHighlight>
            );          
          };

    return(

        <SafeAreaView style={{flex: 1}}>  
          <View style={styles.container}>

            <FlatList
              ItemSeparatorComponent={ Platform.OS !== 'android' && (({highlighted}) => (
                    <View
                        style={[styles.separator, highlighted && {marginLeft: 0}]}>
                  </View>
                ))}
              data={lista}
              keyExtractor={item => item.codigocomanda}                      
              renderItem={Comm} >          
            </FlatList>      
          </View>
        </SafeAreaView>  
    )
}
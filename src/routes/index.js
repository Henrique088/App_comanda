import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../login/';
import Home from '../home/';
import Comanda from '../comanda';
import Produto from '../produto'
import Pedido from '../pedido/index';
import PedidoVenda from '../pedido/pedidovenda';
import RoutesTabs from './routetabs';

const Stack = createNativeStackNavigator();

export default function Routes(){
   
    return(
       
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />            
            <Stack.Screen name="Home" component={RoutesTabs} options={{headerShown:false}} />
            <Stack.Screen name="Comanda" component={Comanda} options={{headerShown:true, title: 'Mesa',}} />
            <Stack.Screen name="Produto" component={Produto} options={{headerShown: true, title: 'Lista de Produtos',}} />
            <Stack.Screen name="Pedido" component={Pedido} options={{headerShown:true}} />
            <Stack.Screen name="PedidoVenda" component={PedidoVenda} options={{headerShown:true, title: 'Venda',}} />
        </Stack.Navigator>

       
       
    );
}
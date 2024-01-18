import { FlatList, StyleSheet, Text, View } from 'react-native'
import allOrders from "../Data/Ordenes.json"
import OrderItem from '../Componentes/OrderItem'

const Ordenes = () => {
  return (
    <FlatList
        data={allOrders}
        keyExtractor={item => item.id}
        renderItem={({item}) => <OrderItem order={item}/>}
    />
  )
}

export default Ordenes

const styles = StyleSheet.create({
    
})
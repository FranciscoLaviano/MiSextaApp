import { FlatList, StyleSheet} from 'react-native'
import CategoryItem from './CategoryItem'
import { useGetCategoriesQuery } from '../app/services/ShopService'


const Categories = ({navigation,route}) => {
  const {data:categorias} = useGetCategoriesQuery()

  return (
    <FlatList
        style={styles.container}
        data={categorias}
        keyExtractor={item => item}
        renderItem={({item}) => <CategoryItem  category={item} navigation={navigation} route={route}/>}
    />
  )
}

export default Categories

const styles = StyleSheet.create({
    container:{
        width:"100%",
        
    }
})
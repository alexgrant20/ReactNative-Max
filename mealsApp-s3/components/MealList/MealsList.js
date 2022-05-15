import { useNavigation } from '@react-navigation/native';
import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from './MealItem';

function MealsList({ items }) {
  const navigation = useNavigation();

  function renderMealItem(itemData) {
    const mealItem = itemData.item;

    function pressedHandler() {
      navigation.navigate('MealDetail', {
        mealItem,
      });
    }

    return (
      <MealItem
        title={mealItem.title}
        image={mealItem.imageUrl}
        affordability={mealItem.affordability}
        complexity={mealItem.complexity}
        duration={mealItem.duration}
        onPress={pressedHandler}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
        numColumns={1}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

import { useLayoutEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import MealItem from '../components/MealItem';
import { CATEGORIES, MEALS } from '../data/dummy-data';

function MealsOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;

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

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      category => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
        numColumns={1}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

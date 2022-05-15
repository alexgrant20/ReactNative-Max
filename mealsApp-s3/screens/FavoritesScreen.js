import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MealsList from '../components/MealList/MealsList';
import { MEALS } from '../data/dummy-data';
import { FavoriteContext } from '../store/context/favorites-context';

function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoriteContext);

  const favoriteMeals = MEALS.filter(meal =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

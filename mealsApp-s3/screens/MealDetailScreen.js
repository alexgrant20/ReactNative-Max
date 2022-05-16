import { useContext, useLayoutEffect } from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import IconButton from '../components/IconButton';
import List from '../components/MealDetail/List';
import Subtitile from '../components/MealDetail/Subtitile';
import MealDetails from '../components/MealDetails';
import { addFavorite, removeFavorite } from '../store/redux/favorites';
// import { FavoriteContext } from '../store/context/favorites-context';

function MealDetailScreen({ navigation, route }) {
  // const favoriteMealsCtx = useContext(FavoriteContext);
  // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealItem.id);
  const dispatch = useDispatch();
  const mealItem = route.params.mealItem;
  const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);
  console.log(favoriteMealIds);
  const mealIsFavorite = favoriteMealIds.includes(mealItem.id);

  function cangeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      // favoriteMealsCtx.removeFavorite(mealItem.id);
      dispatch(removeFavorite({ id: mealItem.id }));
    } else {
      // favoriteMealsCtx.addFavorite(mealItem.id);
      dispatch(addFavorite({ id: mealItem.id }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            size={24}
            color="white"
            icon={mealIsFavorite ? 'star' : 'star-outline'}
            onPress={cangeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, cangeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: mealItem.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{mealItem.title}</Text>
      <MealDetails
        duration={mealItem.duration}
        affordability={mealItem.affordability}
        complexity={mealItem.complexity}
        textStyle={styles.detaiLText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitile>Ingredient</Subtitile>
          <List data={mealItem.ingredients} />
          <Subtitile>Steps</Subtitile>
          <List data={mealItem.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detaiLText: {
    color: 'white',
  },
  listContainer: {
    maxWidth: '80%',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
});

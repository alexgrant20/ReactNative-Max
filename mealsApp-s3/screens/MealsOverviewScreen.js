import { useLayoutEffect } from 'react';
import MealsList from '../components/MealList/MealsList';
import { CATEGORIES, MEALS } from '../data/dummy-data';

function MealsOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;

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

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;

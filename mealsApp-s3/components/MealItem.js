import { useNavigation } from '@react-navigation/native';
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MealDetails from './MealDetails';

function MealItem({
  title,
  image,
  duration,
  complexity,
  affordability,
  onPress,
}) {
  // Alternative navigation
  // function onPress() {
  //   // const navigation = useNavigation();
  //   // navigation.navigate('MealDetail', {
  //   //   // Data
  //   // })
  // }

  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) => {
          return [styles.innerContainer, pressed ? styles.click : ''];
        }}
        android_ripple={{ color: '#ccc' }}
        onPress={onPress}
      >
        <Image source={{ uri: image }} style={styles.imageBg} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <MealDetails
            affordability={affordability}
            complexity={complexity}
            duration={duration}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    elevation: 4,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { height: 0, width: 2 },
    shadowRadius: 8,
  },
  innerContainer: {
    flex: 1,
  },
  imageBg: {
    width: '100%',
    height: 200,
  },
  textContainer: {
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },

  click: {
    opacity: Platform.OS === 'ios' ? 0.8 : 1,
  },
});

import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function MealItem({ title, image, duration, complexity, affordability }) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) => {
          return [styles.innerContainer, pressed ? styles.click : ''];
        }}
        android_ripple={{ color: '#ccc' }}
      >
        <Image source={{ uri: image }} style={styles.imageBg} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.detailContainer}>
            <Text style={styles.detailItem}>{duration}</Text>
            <Text style={styles.detailItem}>{complexity}</Text>
            <Text style={styles.detailItem}>{affordability}</Text>
          </View>
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
    borderTopStartRadius: 10,
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
  detailContainer: {
    flexDirection: 'row',
  },
  detailItem: {
    marginRight: 5,
    textTransform: 'uppercase',
  },
  click: {
    opacity: Platform.OS === 'ios' ? 0.8 : 1,
  },
});

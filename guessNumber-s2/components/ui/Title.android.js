import { Platform, StyleSheet, Text } from 'react-native';

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    // borderWidth: Platform.OS === 'android' ? 2 : 5,
    // borderWidth: Platform.select({ ios: 5, android: 2 }),
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 3,
    padding: 12,
    maxWidth: '80%',
    width: 300,
  },
});

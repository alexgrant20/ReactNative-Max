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
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 3,
    padding: 12,
    maxWidth: '80%',
    width: 300,
  },
});

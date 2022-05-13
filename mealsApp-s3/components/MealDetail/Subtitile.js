import { StyleSheet, Text } from 'react-native';

function Subtitile({ children }) {
  return <Text style={styles.subtitle}>{children}</Text>;
}

export default Subtitile;

const styles = StyleSheet.create({
  subtitle: {
    color: '#cca57d',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 6,
    textAlign: 'center',
    borderBottomColor: '#cca57d',
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
  },
});

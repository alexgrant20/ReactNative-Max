import { Image, StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.container}>
      <Title>GAME OVER!</Title>
      <View style={styles.successImageContainer}>
        <Image
          source={require('../assets/success.png')}
          style={styles.successImage}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.hightlight}>{roundsNumber}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={styles.hightlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  successImageContainer: {
    borderRadius: 200,
    overflow: 'hidden',
    width: 300,
    height: 300,
    borderColor: Colors.primary800,
    borderWidth: 3,
    margin: 36,
  },
  successImage: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  hightlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});

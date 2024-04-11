import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface OrangeButtonProps {
  onPress: () => void;
  title: string;
}

class OrangeButton extends React.Component<OrangeButtonProps> {
  render() {
    const { onPress, title } = this.props;
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFA500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default OrangeButton;

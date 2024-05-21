import React from 'react';
import { Text } from 'react-native';
import { styles } from './Stylenome';


export default function TextoNome ({texto}: {texto: string}) {
  return (
    <Text style={styles.cumprimento}>{texto}</Text>
  );
}

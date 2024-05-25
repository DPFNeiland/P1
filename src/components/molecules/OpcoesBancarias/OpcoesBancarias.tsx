
import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import TextoOpcoesBancarias from '../../atoms/TextoOpcoesBancarias/TextoOpcoesBancarias';
import { styles } from './StyleOpcoesBancarias';
import AntDesign from '@expo/vector-icons/AntDesign';


const images = {
    i1: require('../../../assets/Pix.png'),
    i2: require('../../../assets/Pagar.png'),
    i3: require('../../../assets/Transferir.png'),
    i4: require('../../../assets/Transferir.png')
};

export default function OpcoesBancarias({ textoopcaobancario, i }: { textoopcaobancario: string, i: string }) {
    const imageSource = images[i];

    return (
        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.viewImage}>
                <Image source={imageSource} style={styles.imagem} />
            </View>
            <TextoOpcoesBancarias texto={textoopcaobancario} />
        </TouchableOpacity>
    );
}
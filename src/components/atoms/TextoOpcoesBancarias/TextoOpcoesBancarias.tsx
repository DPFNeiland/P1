import React from "react"
import { Text } from "react-native"
import {styles} from './StylesTextoOpcoesBancarias'



export default function TextoOpcoesBancarias({texto}: {texto: string}) {
    return (
        <Text style={styles.opcoesbancarias}>{texto}</Text>
    )
}

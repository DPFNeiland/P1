import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 'auto',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white'
    },

    text: {
        fontWeight: 'bold',
        color: '#6F6F6F',
        fontSize: 16,
        marginRight: 60,
        marginLeft: -180
    },

    xis: {
        marginRight: 200,
        marginLeft: -10
    },

    safearea: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
        flex: 1,
        backgroundColor: 'white'
    },

    imput: {
        borderColor: '#6F6F6F',
        borderWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: 360,
        height: 40
    },

    textimput: {
        fontSize: 18
    },

    texto: {
        fontWeight: 'bold',
        fontSize: 18
    },

    viewBot: {
        height: 70,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 100
    },

    containerButton: {
        padding: 'auto',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 30
    },

    textNovidades: {
        color: '#6F6F6F',
        fontSize: 16
    },

    containerInfo: {
        borderBottomWidth: 0.2,
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        height: '10%'
    },

    textoEmail: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#810AD0'
    },

    textoBotao: {
        color: '#810AD0'
    },

    containerEmail: {
        flexDirection: 'row',
        width: '100%',
        flex: 1, // Ocupa todo o espaço vertical disponível
        alignItems: 'flex-end', // Alinha os elementos no canto inferior
    },

    email: {
        borderRadius: 0.2,
        borderWidth: 0.2,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        verticalAlign: 'bottom',
        height: '30%'
        
    },

    chat: {
        borderRadius: 0.2,
        borderWidth: 0.2,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        verticalAlign: 'bottom',
        height: '30%'
    }


})
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    view: {
        backgroundColor: '#810AD0',
        width: '100%',
        height: '15%',
        justifyContent: 'flex-end',
        padding: 20,
        gap: 30
    },

    abadebotoes: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    bootes: {
        flexDirection: 'row',
        width: '30%',
        gap: 30,
        alignItems: 'center'
    },

    perfil: {
        backgroundColor: '#9a3adc',
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    },

    view2: {
        backgroundColor: '#ffffff',
        padding: 20,
        flex: 1,
        gap: 18
    },

    opcoesbancarias: {
        fontWeight: 'bold',
        fontSize: 16,


    },

    conta: {
        fontWeight: 'bold',
        fontSize: 20
    },

    opcoes: {
        flexDirection: 'row',
    },

    opcoesscrolview: {
        gap: 30,
    },


    meuscartoes: {
        height: '13%',
        borderRadius: 10,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: 20,
        flexDirection: 'row',
        gap: 10
    },

    Novidade: {
        backgroundColor: '#f0f1f5',
        height: '45%',
        width: '70%',
        borderRadius: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 15,
    },

    novidadetext: {
        color: '#810AD0',
        fontSize: 15
    },

    novidadesacompanhando: {
        fontSize: 15

    },

    IconeTexto: {
        flexDirection: "column",
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: 5,
        width: '60%'

    }
})
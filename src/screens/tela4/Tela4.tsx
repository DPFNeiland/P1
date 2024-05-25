import { View, Text, Image, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { styles } from "./StyleTela4";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import OpcoesBancarias from "../../components/molecules/OpcoesBancarias/OpcoesBancarias";
import { Entypo } from '@expo/vector-icons';

export default function Tela4() {
    return (
        <SafeAreaView style={styles.safearea}>

            <View style={styles.container}>
                <AntDesign name="close" size={35} color="#810AD0" style={styles.xis} />
                <Text style={styles.text}>ME AJUDA</Text>
            </View>

            <View style={styles.imput}>
                <TextInput style={styles.textimput} placeholder="Qual é a sua dúvida?"></TextInput>
                <AntDesign name="search1" size={26} color="#810AD0" />
            </View>

            <Text style={styles.texto}>Como você avalia o Me Ajuda?</Text>

            <View style={styles.containerButton}>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.viewBot}>
                        <AntDesign name="warning" size={35} color="#810AD0" />
                    </View>
                    <Text style={styles.textoBotao}>Péssimo</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.viewBot}>
                        <Entypo name="emoji-sad" size={35} color="#810AD0" />
                    </View>
                    <Text style={styles.textoBotao}>Ruim</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.viewBot}>
                        <Entypo name="emoji-happy" size={35} color="#810AD0" />
                    </View>
                    <Text style={styles.textoBotao}>Bom</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.viewBot}>
                        <AntDesign name="hearto" size={35} color="#810AD0" />
                    </View>
                    <Text style={styles.textoBotao}>Perfeito</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerInfo}>
                <View>
                    <Text style={styles.texto}>Novidades</Text>
                    <Text style={styles.textNovidades}>Tudo sobre o Nubank e nossos produtos.</Text>
                </View>
                <AntDesign name="right" size={20} color="black" />
            </View>

            <View style={styles.containerInfo}>
                <View>
                    <Text style={styles.texto}>Conta</Text>
                    <Text style={styles.textNovidades}>Conheça tudo sobre a sua conta digital.</Text>
                </View>
                <AntDesign name="right" size={20} color="black" />
            </View>

            <View style={styles.containerInfo}>
                <View>
                    <Text style={styles.texto}>Pagar Fatura</Text>
                    <Text style={styles.textNovidades}>Descubra como e onde pagar a sua fatura.</Text>
                </View>
                <AntDesign name="right" size={20} color="black" />
            </View>

            <View  style={styles.containerEmail}>
                <View style={styles.email}>
                    <Text style={styles.textoEmail}>E-mail</Text>
                </View>

                <View style={styles.chat}>
                    <Text style={styles.textoEmail}>Chat</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
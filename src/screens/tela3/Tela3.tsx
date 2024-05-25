import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { styles } from "./StyleTela3";
import TextoNome from "../../components/atoms/textonome/Textonome";
import OpcoesBancarias from "../../components/molecules/OpcoesBancarias/OpcoesBancarias";

export default function Tela3() {


    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <View style={styles.abadebotoes}>
                    <TouchableOpacity style={styles.perfil}>
                        <Image
                            source={require('./../../assets/pessoa.png')}
                        />
                    </TouchableOpacity>

                    <View style={styles.bootes}>
                        <Image source={require('./../../assets/zoio.png')} />
                        <TouchableOpacity><Image source={require('./../../assets/question.png')} /></TouchableOpacity>
                        <Image source={require('./../../assets/mensagem.png')} />
                    </View>
                </View>

            </View>

            <View style={styles.view2}>
                <Text style={styles.conta}>Destaques</Text>









                <Text style={styles.conta}> Tem de tudo </Text>


                <TouchableOpacity style={styles.meuscartoes}>
                <Image source={require('./../../assets/shopee.jpeg')} style={{ height: 60, width: 60, borderRadius: 8 }}></Image>


                    <View style={styles.IconeTexto}>
                        <Text style={styles.opcoesbancarias}>Shoppe</Text>
                        <Text style={styles.novidadesacompanhando}>Cupom para compras acima de R$40</Text>
                    </View>

                    <Text style={styles.opcoesbancarias}>R$10 OFF</Text>


                </TouchableOpacity>

                <TouchableOpacity style={styles.meuscartoes}>
                    <Image source={require('./../../assets/magalu.png')} style={{ height: 60, width: 60, borderRadius: 8 }}></Image>

                    <View style={styles.IconeTexto}>
                        <Text style={styles.opcoesbancarias}>Magazine Luiza</Text>
                        <Text style={styles.novidadesacompanhando}>Para produtos vendidos e entregues Magulu</Text>
                    </View>

                    <Text style={styles.opcoesbancarias}>50% OFF</Text>


                </TouchableOpacity>



            </View>


        </View>

    )
}
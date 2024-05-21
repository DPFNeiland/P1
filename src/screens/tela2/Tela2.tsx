import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { styles } from "./StyleTela2";
import TextoNome from "../../components/atoms/textonome/Textonome";
import OpcoesBancarias from "../../components/molecules/OpcoesBancarias/OpcoesBancarias";

export default function Tela2() {


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
                        <Image source={require('./../../assets/question.png')} />
                        <Image source={require('./../../assets/mensagem.png')} />
                    </View>
                </View>

            </View>

            <View style={styles.view2}>
                <Text style={styles.conta}>Acompanhe seu dinheiro</Text>



                <TouchableOpacity style={styles.meuscartoes}>
                    <View style={styles.IconeTexto}>
                        <Image source={require('./../../assets/Cartoes.png')} />
                        <Text style={styles.opcoesbancarias}>Caixinhas</Text>
                    </View>

                    <Text style={styles.opcoesbancarias}>RS 100,00</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.meuscartoes}>
                    <View style={styles.IconeTexto}>
                        <Image source={require('./../../assets/Cartoes.png')} />
                        <Text style={styles.opcoesbancarias}>Investimentos</Text>
                    </View>

                    <Text style={styles.opcoesbancarias}>RS 317,94</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.meuscartoes}>
                    <View style={styles.IconeTexto}>
                        <Image source={require('./../../assets/Cartoes.png')} />
                        <Text style={styles.opcoesbancarias}>Cripto</Text>
                    </View>

                    <Text style={styles.opcoesbancarias}>RS 758,90</Text>

                </TouchableOpacity>

               

                <Text style={styles.conta}> Seguros </Text>


                <TouchableOpacity style={styles.meuscartoes}>
                    <View style={styles.IconeTexto}>
                        <Image source={require('./../../assets/Cartoes.png')} />
                        <Text style={styles.opcoesbancarias}>Seguro de Vida</Text>
                    </View>


                </TouchableOpacity>

                <TouchableOpacity style={styles.meuscartoes}>
                    <View style={styles.IconeTexto}>
                        <Image source={require('./../../assets/Cartoes.png')} />
                        <Text style={styles.opcoesbancarias}>Seguro de ceular</Text>
                    </View>


                </TouchableOpacity>



            </View>


            <View style={{ backgroundColor: 'red', width: '100%', height: '10%' }}>

            </View>
        </View>

    )
}
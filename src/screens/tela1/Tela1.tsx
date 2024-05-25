import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { styles } from "./StyleTela1";
import TextoNome from "../../components/atoms/textonome/Textonome";
import OpcoesBancarias from "../../components/molecules/OpcoesBancarias/OpcoesBancarias";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Tela1() {


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
                        <Image  source={require('./../../assets/zoio.png')} />
                        <TouchableOpacity><Image source={require('./../../assets/question.png')} /></TouchableOpacity>
                        <Image source={require('./../../assets/mensagem.png')} />
                    </View>
                </View>

                <TextoNome texto="Olá, Ana Gabriela" />
            </View>

            <View style={styles.view2}>
                <Text style={styles.conta}>Conta</Text>
                <Text style={styles.conta}>R$ 1.356.897,98</Text>


                <View style={styles.opcoes}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.opcoesscrolview}>

                        <OpcoesBancarias textoopcaobancario="Pix" i='i1' />
                        <OpcoesBancarias textoopcaobancario="Pagar" i='i2' />
                        <OpcoesBancarias textoopcaobancario={`Pegar \n Empréstimo`} i='i3' />
                        <OpcoesBancarias textoopcaobancario="Transferir" i='i4' />


                    </ScrollView>

                </View>

                <TouchableOpacity style={styles.meuscartoes}>
                    <Image source={require('./../../assets/Cartoes.png')} />
                    <Text style={styles.opcoesbancarias}>Meus  cartões</Text>
                </TouchableOpacity>



                <View style={styles.opcoes}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.opcoesscrolview}>
                        <TouchableOpacity style={styles.Novidade}>
                            <Text style={styles.novidadetext}>Novidade! </Text>
                            <Text style={styles.novidadesacompanhando}>Conheça a ferramenta de controle de Gastos do Nubank.</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                <Text style={styles.conta}> Cartão de Crédito </Text>

                <Text style={styles.novidadesacompanhando}>Conheça a ferramenta de controle de Gastos do Nubank.</Text>

            </View>


                

        </View>

    )
}
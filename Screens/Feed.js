import { View, StyleSheet, Text, Image, ScrollView } from "react-native"


export default function Feed(){

    return (

    <ScrollView>

        <View style = {styles.containerProfile}> 
            <View style = {styles.viewimg}>  
                <Text style = {styles.titulo}>Sinal verde pro lanche: hoje o clima é McDonald's!🍔 
            </Text>

            <Text style = {styles.subtitulo}>Navegue no site com muito sabor e diversão!</Text>

            <Image  style={styles.img} source={require("../assets/feed1.jpg")}/>


            <Text style = {styles.descricao}>🎉 Aqui o menu é outro, mas a experiência é tão boa quanto seu combo favorito!
📱 Nosso site está de cara nova com um toque especial do McDonald's:
cores vibrantes, ícones divertidos e aquele jeitinho irresistível que você já conhece.
🍦 Então pega sua batata (ou melhor, seu celular) e vem curtir essa vibe deliciosa com a gente!</Text>


            </View>

        </View>

    </ScrollView>
          

    )
}
const styles = StyleSheet.create({
    containerProfile:{
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
        // backgroundColor: 'grey'
    },
    imgback:{
        flex: 1,
    },
    img:{
        width: 370, 
        height: 200,
        borderRadius: 5,
        marginBottom: 20

    },
    img2:{
        width: 370, 
        height: 300,
        borderRadius: 5,
    },
    
    viewimg:{
        alignItems: 'flex-start',
    },
    textcred:{
        alignSelf: 'center'
    },
    txtinput:{
        borderWidth: 0.5,
        borderRadius: 5,
        padding: 5
    },
    divisao:{
        justifyContent: 'space-evenly',
        padding: 5,
    },
    titulo:{
        color: 'black',
        fontSize: 30,
        fontStyle: 'italic',
        marginBottom: 20
    },
    subtitulo:{
        color: 'black',
        fontSize: 20,
        marginBottom: 20

    },
    descricao:{
        color: 'black',
        fontSize: 15,
    }
})
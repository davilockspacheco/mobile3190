import { View, StyleSheet, Text, Image } from "react-native"


export default function Home(){

    return (
        <View style = {styles.containerProfile}> 
            <View style = {styles.viewimg}>  
                <Text style = {styles.titulo}>Venha conhecer nosso cardápio 
            </Text>
            </View>

            <Text>McDonald's Corporation é uma rede multinacional estadunidense de fast food, fundada em 1940 como um restaurante operado por Richard e Maurice McDonald, em San Bernardino, Califórnia, Estados Unidos.</Text>
            
            <Text>O McDonald's é a maior cadeia de restaurantes de fast food do mundo,[9] servindo mais de 69 milhões de clientes diariamente, em mais de 100 países[10] por meio de 40 mil pontos de venda em 2021.</Text>
        </View>
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
        width: 150, 
        height: 100,
        borderRadius: 5,
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
        fontSize: 15,
        fontStyle: 'italic'
    }
})
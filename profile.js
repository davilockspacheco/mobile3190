import { Text, View, StyleSheet, Image, Button, TextInput, ImageBackground } from "react-native";

export default function Profile(){
    return(
        <View style = {styles.containerProfile}> 
            <View style = {styles.viewimg}>
                <Image style = {styles.img} source={{ uri: 'https://novonegocio.com.br/wp-content/uploads/2014/09/franquia-mc-donalds-2.jpg.webp'}}/>

                <br></br>
                <Text style = {styles.titulo}> <h1>Venha para o McDonalds<br></br>
                        FAÇA JA O SEU LOGIN ! ! ! </h1>
                </Text>
            </View>
            <br></br><br></br>

            <View style = {styles.imgmeio}>
                <Image  style={styles.img} source={require("../projetomobile/assets/imagem1.webp")}/> 
                <Image  style={styles.img}  source={require("../projetomobile/assets/imagem2.jpg")}/>
            </View>
            
            <br></br><br></br>
            <View style = {styles.divisao}>
                <TextInput style = {styles.txtinput}
                placeholder="Usuario" 
                />
                <br></br>
                <TextInput style = {styles.txtinput}
                placeholder="Senha" 
                />
            </View>
            <br></br>
            <Button 
            title= "Finalizar"
            color="red"
            // disable
            />
             <br></br>
 
            <Image style = {styles.img2} source={{ uri: 'https://media.istockphoto.com/id/637275080/pt/foto/mcdonalds-exterior.jpg?s=612x612&w=0&k=20&c=gprFpZpzQtvzho6tm3Q2DzRrw1S3VZArD8JRI9tUqco='}}/>

        </View>
    )
}
const styles = StyleSheet.create({
    containerProfile:{
        flex: 1,
        padding: 10,
        backgroundColor: 'white'
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
    imgmeio:{
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    viewimg:{
        alignItems: 'center',
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
        color: 'red',
        fontSize: 15,
        fontStyle: 'italic'
    }
})
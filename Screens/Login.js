import { View, StyleSheet, Text, Image, TextInput, Button, ImageBackground  } from "react-native-web"
import AntDesign from '@expo/vector-icons/AntDesign';
import { auth } from "../controller";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

//.
export default function Login({navigation}){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    
    const VerificarUsuario = () => {
        // navigation.navigate('HomeTab')
        signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            navigation.navigate('HomeTab')
        })
        .catch((error) => {
            console.log('Erro ao logar: ', error.message);
        });
    }

    return(
        <View style = {styles.containerProfile}> 

        {/* <ImageBackground source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToeaf4hYq4X0R1l5QXeESpfB7XnR-Lsw2zkg&s'}} resizeMode="cover" style={styles.background}> */}


                    <View style = {styles.viewimg}>
                        <Text style = {styles.titulo}> <h1>Venha para o McDonalds<br></br>
                                FAÇA JA O SEU LOGIN ! ! ! </h1>
                        </Text>
                    </View>
                    <View style = {styles.divisao}>
                        <TextInput style = {styles.txtinput}
                        placeholder="Usuario" 
                        value= {email}
                        onChangeText={setEmail}

                        />
                        <br></br>
                        <TextInput style = {styles.txtinput}
                        placeholder="Senha" 
                        value= {senha}
                        onChangeText={setSenha}
                        />
                    </View>
                    <br></br>
                    <Button 
                    title= "Entrar"
                    color="#8392ab"
                    onPress={VerificarUsuario}                    
                    />
                    <Button 
                    title= "Cadastrar"
                    color="#8392ab"
                    onPress= {()=> navigation.navigate('TelaCadastro')}
                    />
                     <br></br>
         
        {/* </ImageBackground> */}
                </View>

    );
}

const styles = StyleSheet.create({
    containerProfile:{
        flex: 1,
        padding: 10,
        alignItems:  'center',
        color: '#808080'
    },
    background:{
        flex: 1,
        justifyContent: 'center',
        width: 'auto',
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
        padding: 5,
        height: 30,
        width: 200
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
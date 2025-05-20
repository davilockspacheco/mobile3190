import { View, StyleSheet, Text, Image, TextInput, Button, ImageBackground  } from "react-native-web"
import AntDesign from '@expo/vector-icons/AntDesign';
import { auth } from "../controller";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { db } from '../controller';
import { collection, addDoc } from "firebase/firestore"; 
 
export default function cadastroProduto({navigation}){

    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [imagem, setImagem] = useState("");

    const CadastrarProduct = async () => {
        try{
            await addDoc(collection(db, 'produtos'), {
                nome,
                preco: parseFloat(preco),
                imagem,
            });
            setNome();
            setPreco();
            setImagem();
        }
        catch{
            console.log('Erro ao cadastrar produto', error)
        }
    }

    return(
    <View style = {styles.containerProfile}> 
        <View style = {styles.viewimg}>
            <Text style = {styles.titulo}> <h1>Venha para o McDonalds<br></br>
                    TELA DE CADASTRO DO PRODUTO </h1>
            </Text>
        </View>
        <View style = {styles.divisao}>
            <TextInput style = {styles.txtinput}
            placeholder="Nome" 
            value= {nome}
            onChangeText={setNome}
            />
        </View>
        <View style = {styles.divisao}>
            <TextInput style = {styles.txtinput}
            placeholder="Preço" 
            value= {preco}
            onChangeText={setPreco}
            />
        </View>
        <View style = {styles.divisao}>
            <TextInput style = {styles.txtinput}
            placeholder="URL da Imagem" 
            value= {imagem}
            onChangeText={setImagem}
            />
        </View>
        <br></br>
        <Button 
        title= "Cadastrar"
        color="#8392ab"
        onPress={CadastrarProduct}                    
        />
    </View>
    );
}

const styles = StyleSheet.create({
    containerProfile:{
        flex: 1,
        padding: 10,
        alignItems:  'center',
        backgroundColor: '#252f40'
    },
    
    img:{
        width: 150, 
        height: 100,
        borderRadius: 5,
    },
    viewimg:{
        alignItems: 'center',
    },
    txtinput:{
        borderWidth: 0.5,
        borderRadius: 5,
        padding: 5,
        height: 30,
        width: 200,
        color: 'white',
        borderColor: '#808080'
    },
    divisao:{
        justifyContent: 'space-evenly',
        padding: 10,
    },
    titulo:{
        color: 'white',
        fontSize: 15,
        fontStyle: 'italic'
    }
})
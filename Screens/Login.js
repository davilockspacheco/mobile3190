import { View, StyleSheet, Text, Image, TextInput, Button } from "react-native-web"
import AntDesign from '@expo/vector-icons/AntDesign';
import { auth } from "../controller";
import { signInWithEmailAndPassword } from "firebase/auth";


export default function Login({navigation}){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    
    const VerificarUsuario = () => {
        navigation.navigate('TelaCadastro')

        const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

    }
    return(
        <View style = {styles.containerProfile}> 
                    <View style = {styles.viewimg}>
        
                        <br></br>
                        <Text style = {styles.titulo}> <h1>Venha para o McDonalds<br></br>
                                FAÇA JA O SEU LOGIN ! ! ! </h1>
                        </Text>
                    </View>
                    <br></br><br></br>
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
                    title= "Entrar"
                    color="red"
                    onPress= {()=> navigation.navigate('HomeTab')}
                    
                    // disable
                    />
                    <Button 
                    title= "Cadastrar"
                    color="red"
                    onPress= {()=> navigation.navigate('TelaCadastro')}
                    // disable
                    />
                     <br></br>
         
        
                </View>

    );
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
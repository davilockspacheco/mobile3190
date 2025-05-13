import{ View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { useState } from 'react';

export default function Count(){

    const [contador, setContador] = useState(0);

    function Aumentar(){
        setContador (contador + 1);
    }
    function Diminuir(){
        if (contador > 0){
        setContador (contador - 1);
        }
    }

    return(
        <View style = {styles.container}>
            <Text style = {styles.txt}>
                Meu contador
            </Text>
            <Text style = {styles.txt}>
                {contador}
            </Text>
            <View style = {styles.buttons}>
                <TouchableOpacity
                style = {styles.button}
                onPress={Aumentar}>
                    +
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.button}
                onPress={Diminuir}>
                    -
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize: 40,
        color: 'yellow'
    },
    txt:{
        fontSize: 25,
        color: 'Black'
    },
    buttons:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width : 400
    }
})
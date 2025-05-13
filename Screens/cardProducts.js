import { View, Text, Image, StyleSheet } from "react-native";

export default function CardProduct({id, nome, preco, imagem}){
    return(
        <View style={StyleSheet.card}>
            <Image style={StyleSheet.img} source={{uri: imagem}}/>
            <Text style={StyleSheet.txtItem}>{id}</Text>
            <Text style={StyleSheet.txtItem}>{nome} - R${preco.toFixed(2)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 10,
        margin: 10,
        alignItems: 'center'
    },
    txtItem:{
        fontSize: 22,
        fontWeight: 'bold',
        color: 'red'
    },
    
})
import { View, Text, Image, StyleSheet } from "react-native";

export default function CardProduct({id, nome, preco, imagem}){
    return(
        <View style={styles.card}>
            <Image style={styles.img} source={{uri: imagem}}/>
            <Text style={styles.txtItem}>{id}</Text>
            <Text style={styles.txtItem}>{nome} - R${preco.toFixed(2)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#8392ab',
        borderRadius: 8,
        padding: 10,
        margin: 10,
        alignItems: 'center'
    },
    txtItem:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#e9ecef'
    },
    img:{
        height: 50,
        width: 50,
    }
    
})
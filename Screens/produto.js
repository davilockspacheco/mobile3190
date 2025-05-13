import { useState } from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import CardProduct from './cardProducts';


export default function Product(){

    const [produtos, setProdutos] = useState([
        {id : 1, nome: 'Big Mac', preco: 10.99, imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Big_Mac_hamburger.jpg/2371px-Big_Mac_hamburger.jpg'},
        {id: 2,  nome: 'Cheddar McMelt', preco: 12.99, imagem: 'https://s2-receitas.glbimg.com/b8AnopUe1YHxJpGexp76Y7_5iX0=/1200x/smart/filters:cover():strip_icc()/s.glbimg.com/po/rc/media/2013/05/06/19_59_07_665_11503131.jpg'},
        {id: 3, nome: 'Quarterão com Queijo', preco: 14.99, imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8WPqAt0ny97ltgI24E_SXZDBWyw3Kt6ofiw&s'},
        {id : 4, nome: 'McChicken', preco: 9.99, imagem: 'https://www.allrecipes.com/thmb/cEaLfplaeP_pwhDKvB_vah_Ezwg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8702751_CopycatMcChicken4x3-fd74c35c3fdc48538f4d3e95e7fda55a.jpg'},
        {id: 5,  nome: 'McFish', preco: 11.99, imagem: 'https://s2-oglobo.glbimg.com/fB935uZY8M8tSIFILaCQrqbbjvE=/0x0:570x294/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2024/n/E/CAaIVMR8A4GITie2jFKA/whatsapp-image-2024-06-10-at-17.08.36.jpeg'},
        {id: 6, nome: 'McNífico Bacon', preco: 14.99, imagem: 'https://gkpb.com.br/wp-content/uploads/2018/12/S2Publicom_strip_286832_0_full-e1545076751866.jpg'},
        {id : 7, nome: 'Duplo Burger com Queijo', preco: 13.99, imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB7NDCnvT-NoZxRVWuy8T5jYrxCuAXjm1hFQ&s'},
        {id: 8,  nome: 'Triplo Cheeseburger', preco: 19.99, imagem: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2013/12/19/mctriplo.jpeg'},
        {id: 9, nome: 'McVeggie', preco: 8.99, imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo9SGaxHgBItYiynJPXDyNHBePuxwi5D8Ljw&s'},
        {id : 10, nome: 'Chicken Jr.', preco: 8.99, imagem: 'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-junior-chicken:1-3-product-tile-desktop?wid=829&hei=515&dpr=off'},
    
        ])

    return(
        <View style={styles.container}>
            <Text style={styles.txt} >Cardápio</Text>
            {/* {produtos.map((item) => (
                <View style={styles.cardapio}>
                    <Text >{item.id} </Text>
                    <Text>{item.nome} </Text>
                    <Text>R${item.preco} </Text>
                </View>
            ))} */}

            <FlatList
            data={produtos}
            renderItem={({item}) => (
                <CardProduct
                id ={item.id}
                nome ={item.nome}
                preco ={item.preco}
                imagem ={item.imagem}
                />
            )}
            keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',

    },
    txt:{
        fontSize: 30,
        color: 'red',
        fontWeight: 'bold'

    }
})
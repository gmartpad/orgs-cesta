import React from 'react';
import { StyleSheet, Image, Text, Dimensions, View } from 'react-native'

import Texto from '../componentes/Texto'

import topo from "../../assets/topo.png"
import logo from "../../assets/logo.png"

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>Detalhe da cesta</Texto>

        <View style={estilos.cesta}>
            <Texto style={estilos.nome} >Cesta de Verduras</Texto>
            <View style={estilos.fazenda}>
                <Image style={estilos.imagemFazenda} source={logo}/>
                <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
            </View>
            <Texto style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha</Texto>
            <Texto style={estilos.preco}>R$ 40,00</Texto>
        </View>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        // (Altura / largura) * width do Dimensions 
        height: (578/768)*width,
        // fontFamily: "Montserrat",
    },
    titulo: {
        position: "absolute",
        width: "100%",
        textAlign: "center",
        fontSize: 15,
        lineHeight: 26,
        color: "#fff",
        fontWeight: "bold",
        padding: 16,
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16, 
    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontFamily: "MontserratBold",
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda: {
        height: 32,
        width: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: "MontserratRegular"
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
});
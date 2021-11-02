import React from 'react';
import { StyleSheet, Image, Text, Dimensions } from 'react-native'

import topo from "../../assets/topo.png"

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Text style={estilos.titulo}>Detalhe da cesta</Text>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        // (Altura / largura) * width do Dimensions 
        height: (578/768)*width,
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
    }
});
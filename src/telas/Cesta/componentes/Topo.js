import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';

import Texto from "../../../componentes/Texto";
import topo from "../../../../assets/topo.png";

const width = Dimensions.get('screen').width;

export default function Topo({ titulo }){
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>{titulo}</Texto>
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
})
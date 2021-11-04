import React from 'react';
import { StyleSheet, Image, Text, Dimensions, View } from 'react-native'

import Topo from "./componentes/Topo";
import Detalhes from './componentes/Detalhes';
import Texto from "../../componentes/Texto";


export default function Cesta() {
    return <>
        <Topo/>

        <View style={estilos.cesta}>
            <Detalhes/>
        </View>
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16, 
    },
    
});
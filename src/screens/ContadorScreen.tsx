import { useState } from "react"
import { Button, Text, TouchableOpacity, View, StyleSheet } from "react-native"

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10);

    return (
        <View style={
            styles.container
        }>
            <Text
             style={
                styles.title
                }>Contador: {contador}
        </Text>
        <TouchableOpacity
            onPress={() => setContador(contador +1)}
        >
            <View 
            >
                <Text>+1</Text>
            </View>

        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        position: 'relative', //no es necesario agregar position relative debido a que se establece en este punto por defecto
        top: -15
    },
    
})
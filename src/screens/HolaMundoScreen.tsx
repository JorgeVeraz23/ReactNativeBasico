import { Text, View } from "react-native"


const HolaMundoScreen = () => {


    return(
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center'
          }}>
            <Text style={{
              fontSize: 50,
              color: 'black',
              textAlign: 'center'
            }}>Holaaa Jorge seras un gran programador en React Native</Text>
          </View>
      
    )
}

export default HolaMundoScreen;
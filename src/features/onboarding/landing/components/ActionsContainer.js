import React from 'react';
import {
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Text,
    View,
} from 'react-native';

class ActionsContainer extends React.Component {
    render(){
        return (
            <View style={styles.actions_container}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.button_content}>Me connecter 👋</Text>
                </TouchableOpacity>
                <Text style={styles.link}>Découvrir l'app</Text>
            </View>
        );
    }
}

const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
    actions_container: {
        position: 'absolute',
        bottom: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'red',
        width: width*0.7,
        height: height*0.07,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    button_content: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    link: {
        color: 'red',
        width,
        textAlign: 'center',
        textDecorationLine: 'underline',
        marginTop: height*0.02
    }
})
export default ActionsContainer;

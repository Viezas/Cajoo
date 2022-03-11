import React from 'react';
import {
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import ActionsContainer from './components/ActionsContainer';
import LogoContainer from './components/LogoContainer';

class Landing extends React.Component {

    render(){
        return (
            <View style={styles.main}>
                <LogoContainer></LogoContainer>
                <ActionsContainer></ActionsContainer>
            </View>
        );
    }
}

const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
    main:{
        height,
        width,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    logo_container:{
        marginBottom: height*0.2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        width: width*0.9,
        resizeMode: 'contain',
    },
    sub_title: {
        fontSize: 25,
        fontWeight: 'bold',
    },
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
export default Landing;

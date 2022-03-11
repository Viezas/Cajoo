import React from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import LoginHeader from '../../../components/LoginHeader';

class LoginForm extends React.Component {
    render(){
        return (
            <View>
                <LoginHeader navigation={this.props.navigation}/>
                <View style={styles.form_container}>
                    <View style={styles.input_container}>
                        <View style={styles.logo_container}>
                            <Image source={require('../../../assets/img/french_logo.png')} style={styles.logo}/>
                        </View>
                        <Text style={styles.text_bold}> +33 </Text>
                        <TextInput keyboardType="phone-pad" style={styles.input} autoFocus></TextInput>
                    </View>
                    <View style={styles.disclaimer}>
                        <Text style={styles.text}>En cliquant sur "CONTINUER", vous acceptez la </Text>
                        <TouchableOpacity>
                            <Text style={[styles.link, styles.text]}>Politique de Confidentialité,</Text>
                        </TouchableOpacity>
                        <Text style={styles.text}> les </Text>
                        <TouchableOpacity>
                            <Text style={[styles.link, styles.text]}>CGU</Text>
                        </TouchableOpacity>
                        <Text style={styles.text}> et les </Text>
                        <TouchableOpacity>
                            <Text style={[styles.link, styles.text]}>CGV</Text>
                        </TouchableOpacity>
                        <Text style={styles.text}> de Cajoo</Text>
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btn_content}>CONTINUER</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
    form_container: {
        height: height,
        width,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input_container: {
        marginTop: -height*0.6,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#ec0000',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: width*0.9,
        height: height*0.1,
    },  
    logo_container: {
        width: '20%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: '70%',
        resizeMode: 'contain',
    },
    text_bold: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    input: {
        width: '60%',
        height: '100%',
        paddingLeft: width*0.05,
        fontSize: 22,
    },
    disclaimer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: width*0.01,
        marginBottom: height*0.03,
        position: 'absolute',
        bottom: 400,
    },
    text: {
        fontSize: 15,
    },
    link: {
        color: '#ec0000',
        textDecorationLine: 'underline',
    },
    btn: {
        backgroundColor: '#ec0000',
        width: width*0.9,
        height: height*0.07,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 350,
    },
    btn_content: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
})
export default LoginForm;

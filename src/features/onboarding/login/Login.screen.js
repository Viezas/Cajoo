import React from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import FacebookBtn from './components/FacebookBtn';
import GoogleBtn from './components/GoogleBtn';
import PhoneBtn from './components/PhoneBnt';

class Login extends React.Component {
    goToLandingScreen = () => {
        this.props.navigation.navigate('landing')
    }
    render(){
        return (
            <View>
                <View style={styles.nav}>
                    <TouchableOpacity style={styles.back} onPress={this.goToLandingScreen}>
                        <Image source={require('../../../assets/img/left-chevron.png')} style={styles.icon}/>
                    </TouchableOpacity>
                    <Text style={styles.nav_title}>Connexion</Text>
                </View>
                <View style={styles.actions_container}>
                    <Text style={styles.sub_title}>Connectez-vous simplement</Text>
                    <FacebookBtn/>
                    <GoogleBtn/>
                    <PhoneBtn/>
                </View>
            </View>
        );
    }
}

const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
    nav: {
        backgroundColor: '#ec0000',
        height: height*0.1,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    back: {
        height: '100%',
        width: '20%',
        marginRight: width*0.1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon:{
        height: '50%',
        width: '50%',
        resizeMode: 'contain',
        alignSelf: 'flex-start',
    },
    nav_title: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        width: '40%',
        textAlign: 'center'
    },
    sub_title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: height*0.04,
    },
    actions_container: {
        height: height*0.9,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
})
export default Login;

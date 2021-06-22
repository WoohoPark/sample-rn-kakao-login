import React from 'react';
import RNKakaoLogins from 'react-native-kakao-logins';

import {
    StyleSheet,
    Text,
    View,
    Button,
    Alert
} from 'react-native';

const App = () => {


    const kakaoLogin = () => {
        RNKakaoLogins.login((err, result) => {
            if (err) {
                Alert.alert('login error', err.toString());
                return;
            } else {
                Alert.alert('token', JSON.stringify(result));
            }
        });
    };

    const kakaoLogOut = () => {
        RNKakaoLogins.logout((err, result) => {
            if (err) {
                Alert.alert('error', err.toString);
            }
            console.log(`${result}`);
        });
    };

    const kakaoProfile = () => {
        RNKakaoLogins.getProfile((err, result) => {
            if (err) {
                Alert.alert('error', err.toString);
            }
            Alert.alert('result2', JSON.stringify(result));
        })
    }

    return (
        <View>
            <Button
                block
                style={{ backgroundColor: '#F7E314' }}
                onPress={kakaoLogin}
                title="카카오 로그인">
            </Button>
            <Button
                block
                style={{ backgroundColor: '#F7E314' }}
                onPress={kakaoProfile}
                title="카카오 프로필">
            </Button>
            <Button
                block
                style={{ backgroundColor: '#F7E314' }}
                onPress={kakaoLogOut}
                title="카카오 로그아웃">
            </Button>
        </View>
    );

};

const styles = StyleSheet.create({

});

export default App;
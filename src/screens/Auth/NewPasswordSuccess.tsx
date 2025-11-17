import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AppText from '../../components/custom/AppText';

interface NewPasswordSuccessScreenProps {
    navigation?: any;
}

const NewPasswordSuccess: React.FC<NewPasswordSuccessScreenProps> = ({ navigation }) => {
    const handleContinue = () => {
        // TODO:
        // - Validate password & confirmPassword
        // - Gọi API set mật khẩu mới với token reset
        // Sau khi thành công:
        navigation?.navigate('Login');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAwareScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
                enableOnAndroid
                keyboardShouldPersistTaps="handled"
                extraScrollHeight={24}
            >
                <View style={styles.container}>
                    {/* TOP: Logo */}
                    <View style={styles.topContainer}>
                        <Image
                            source={require('../../../assets/icon.png')}
                            style={styles.logo}
                            resizeMode="center"
                        />
                    </View>

                    {/* TITLE + SUBTITLE */}
                    <View style={[styles.topContainer, { gap: 12 }]}>
                        <AppText style={styles.title}>Successfully {'\n'} Reset Password!</AppText>
                        <AppText style={styles.subtitle}>
                            You password has been successfully reset. Click below to login magically.
                        </AppText>
                    </View>

                    {/* BOTTOM: Submit */}
                    <View style={styles.bottomSection}>
                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={handleContinue}
                        >
                            <AppText
                                style={[
                                    styles.submitButtonText,
                                    { fontFamily: 'CenturyGothic-Bold' },
                                ]}
                            >
                                Continue
                            </AppText>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scroll: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
    },
    container: {
        marginTop: 202,
        width: 353,
        alignSelf: 'center',
        gap: 48,
    },

    // TOP
    topContainer: {
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150,
    },
    title: {
        fontSize: 32,
        fontWeight: '400',
        textAlign: 'center',
        color: '#140001',
    },
    subtitle: {
        fontSize: 11,
        color: '#5A4C4C',
        textAlign: 'center',
        lineHeight: 15,
    },

    // BOTTOM
    bottomSection: {
        gap: 12,
    },
    submitButton: {
        backgroundColor: '#E91F27',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default NewPasswordSuccess;

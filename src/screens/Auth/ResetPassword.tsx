import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AppText from '../../components/custom/AppText';

interface ResetPasswordScreenProps {
    navigation?: any;
}

const ResetPassword: React.FC<ResetPasswordScreenProps> = ({ navigation }) => {
    const [email, setEmail] = useState('');

    const handleReset = () => {
        // TODO: gọi API gửi mail reset password
        navigation?.navigate('NewPassword');
    };

    const handleSignIn = () => {
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
                            source={require('../../../assets/FerroCreteBuildersLogo.png')}
                            style={styles.logo}
                            resizeMode="center"
                        />
                    </View>

                    {/* TITLE + SUBTITLE */}
                    <View style={[styles.topContainer, { gap: 12 }]}>
                        <AppText style={styles.title}>Reset Password</AppText>
                        <AppText style={styles.subtitle}>
                            No worries, we&apos;ll send you reset instructions.
                        </AppText>
                    </View>

                    {/* FORM */}
                    <View style={styles.formSection}>
                        <View style={styles.fieldContainer}>
                            <AppText style={styles.fieldLabel}>Email</AppText>
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter your email"
                                    placeholderTextColor="#AAA8A8"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    value={email}
                                    onChangeText={setEmail}
                                />
                            </View>
                        </View>
                    </View>

                    {/* BOTTOM */}
                    <View style={styles.bottomSection}>
                        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
                            <AppText
                                style={[
                                    styles.resetButtonText,
                                    { fontFamily: 'CenturyGothic-Bold' },
                                ]}
                            >
                                Reset
                            </AppText>
                        </TouchableOpacity>

                        <View style={styles.footerRow}>
                            <AppText style={styles.footerText}>
                                Already have an account?{' '}
                            </AppText>
                            <TouchableOpacity onPress={handleSignIn}>
                                <AppText
                                    style={[
                                        styles.signInText,
                                        { fontFamily: 'CenturyGothic-Bold' },
                                    ]}
                                >
                                    Sign in
                                </AppText>
                            </TouchableOpacity>
                        </View>
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
        marginTop: 120,
        width: 353,
        alignSelf: 'center',
        gap: 48,
    },

    // TOP
    topContainer: {
        alignItems: 'center',
    },
    logo: {
        width: 220,
        height: 40,
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

    // FORM
    formSection: {
        width: 353,
        gap: 16,
    },
    fieldContainer: {
        gap: 10,
    },
    fieldLabel: {
        fontSize: 12,
        fontWeight: '400',
        color: '#310D12',
    },
    inputWrapper: {
        flexDirection: 'row',
        justifyContent:'space-between',
        borderWidth: 1,
        borderColor: '#F1F0F0',
        borderRadius: 8,
        padding: 10,
    },
    input: {
        flex: 1,
        fontSize: 12,
        fontWeight: '400',
        color: '#140001',
    },

    // BOTTOM
    bottomSection: {
        gap: 12,
    },
    resetButton: {
        backgroundColor: '#E91F27',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    resetButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    footerRow: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    footerText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#8D7D7E',
    },
    signInText: {
        fontSize: 14,
        color: '#E91F27',
        fontWeight: '600',
    },
});

export default ResetPassword;

import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AppText from '../../components/custom/AppText';
import { ArrowSquareDown, Eye } from 'iconsax-react-nativejs';

interface LoginScreenProps {
    navigation?: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        // TODO: gọi API login sau
    };

    const handleForgotPassword = () => {
        // navigation?.navigate('ForgotPassword');
    };

    const handleSignUp = () => {
        // navigation?.navigate('Register');
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
                    {/* Logo */}
                    <View style={styles.topContainer}>
                        <Image
                            source={require('../../../assets/FerroCreteBuildersLogo.png')}
                            style={styles.logo}
                            resizeMode="center"
                        />
                    </View>

                    {/* Ferrocrete Builders Title */}
                    <View style={[styles.topContainer, { gap: 12 }]}>
                        <AppText style={styles.title}>
                            Welcome to{'\n'}Ferrocrete Builders
                        </AppText>
                        <AppText style={styles.subtitle}>
                            Ferrocrete Builders is a commercial and structural concrete {'\n'} contracting company composed of builders.
                        </AppText>
                    </View>

                    {/* MIDDLE: Form */}
                    <View style={styles.formSection}>
                        {/* Email */}
                        <View style={styles.fieldContainer}>
                            <AppText style={styles.fieldLabel}>Email</AppText>
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter your email"
                                    placeholderTextColor="#AAA8A8"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    value={email}
                                    onChangeText={setEmail}
                                />
                                <ArrowSquareDown size="16"/>
                            </View>
                        </View>

                        {/* Password */}
                        <View style={styles.fieldContainer}>
                            <AppText style={styles.fieldLabel}>Password</AppText>
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter your password"
                                    placeholderTextColor="#B0B0B0"
                                    secureTextEntry={!showPassword}
                                    value={password}
                                    onChangeText={setPassword}
                                />
                                <TouchableOpacity
                                    onPress={() => setShowPassword(prev => !prev)}
                                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                                >
                                    <Eye size="16" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.rememberForgotRow}>
                            <TouchableOpacity
                                style={styles.rememberRow}
                                onPress={() => setRememberMe(prev => !prev)}
                                activeOpacity={0.8}
                            >
                                <View
                                    style={[
                                        styles.checkbox,
                                        rememberMe && styles.checkboxChecked,
                                    ]}
                                >
                                    {rememberMe && <View style={styles.checkboxInner} />}
                                </View>
                                <AppText style={styles.rememberText}>Remember me</AppText>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={handleForgotPassword}>
                                <AppText style={styles.forgotText}>Forgot password</AppText>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* BOTTOM: Button + footer */}
                    <View style={styles.bottomSection}>
                        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                            <AppText style={styles.loginButtonText}>Login</AppText>
                        </TouchableOpacity>

                        <View style={styles.footerRow}>
                            <AppText style={styles.footerText}>
                                Don&apos;t have an account?{' '}
                            </AppText>
                            <TouchableOpacity onPress={handleSignUp}>
                                <AppText style={styles.signUpText}>Sign up</AppText>
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
        paddingTop: 120,
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

    // MIDDLE (form)
    formSection: {
        width: 353,
        gap: 16,        
    },
    fieldContainer: {
        gap: 10
    },
    fieldLabel: {
        fontSize: 12,
        fontWeight: '400',
        color: '#310D12',
    },
    inputWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#F1F0F0',
        borderRadius: 8,
        padding: 10,
    },
    input: {
        flex: 1,
        fontSize: 12,
        color: '#AAA8A8',
        fontWeight: '400',
    },
    iconText: {
        fontSize: 16,
    },
    rememberForgotRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
    },
    rememberRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 18,
        height: 18,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#C4C4C4',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    checkboxChecked: {
        borderColor: '#FF3B30',
    },
    checkboxInner: {
        width: 10,
        height: 10,
        borderRadius: 2,
        backgroundColor: '#FF3B30',
    },
    rememberText: {
        fontSize: 13,
        color: '#333333',
    },
    forgotText: {
        fontSize: 13,
        color: '#007AFF',
    },

    // BOTTOM
    bottomSection: {
        marginTop: 8,
    },
    loginButton: {
        backgroundColor: '#E53935',
        borderRadius: 8,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    footerRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
    },
    footerText: {
        fontSize: 13,
        color: '#555555',
    },
    signUpText: {
        fontSize: 13,
        color: '#E53935',
        fontWeight: '600',
    },
});

export default LoginScreen;

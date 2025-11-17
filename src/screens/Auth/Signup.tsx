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
import {ArrowDown2, Eye} from 'iconsax-react-nativejs';

interface SignUpScreenProps {
    navigation?: any;
}

const Signup: React.FC<SignUpScreenProps> = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [religion, setReligion] = useState(''); // tạm thời là text, sau này có thể mở modal chọn
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleCreateAccount = () => {
        // TODO: gọi API register sau
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
                        <AppText style={styles.title}>
                            Get Started With{'\n'}Ferrocrete Builders
                        </AppText>
                        <AppText style={styles.subtitle}>
                            Enter your details below to create your account{'\n'}
                            and get started.
                        </AppText>
                    </View>

                    {/* FORM */}
                    <View style={styles.formSection}>
                        {/* Full Name */}
                        <View style={styles.fieldContainer}>
                            <AppText style={styles.fieldLabel}>Full Name</AppText>
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter your full name"
                                    placeholderTextColor="#AAA8A8"
                                    value={fullName}
                                    onChangeText={setFullName}
                                />
                            </View>
                        </View>

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
                                    autoCorrect={false}
                                    value={email}
                                    onChangeText={setEmail}
                                />
                            </View>
                        </View>

                        {/* Phone Number */}
                        <View style={styles.fieldContainer}>
                            <AppText style={styles.fieldLabel}>Phone Number</AppText>
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter your phone number"
                                    placeholderTextColor="#AAA8A8"
                                    keyboardType="phone-pad"
                                    value={phoneNumber}
                                    onChangeText={setPhoneNumber}
                                />
                            </View>
                        </View>

                        {/* Religions (fake dropdown) */}
                        <View style={styles.fieldContainer}>
                            <AppText style={styles.fieldLabel}>Religions</AppText>
                            <TouchableOpacity
                                style={styles.inputWrapper}
                                activeOpacity={0.8}
                                onPress={() => {
                                    // TODO: mở modal chọn religion sau
                                }}
                            >
                                <AppText
                                    style={[
                                        styles.input,
                                        !religion && styles.placeholderText,
                                    ]}
                                    numberOfLines={1}
                                >
                                    {religion || 'Select your religions'}
                                </AppText>
                                <ArrowDown2 size={16} />
                            </TouchableOpacity>
                        </View>

                        {/* Password */}
                        <View style={styles.fieldContainer}>
                            <AppText style={styles.fieldLabel}>Password</AppText>
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter your password"
                                    placeholderTextColor="#AAA8A8"
                                    secureTextEntry={!showPassword}
                                    value={password}
                                    onChangeText={setPassword}
                                />
                                <TouchableOpacity
                                    onPress={() => setShowPassword(prev => !prev)}
                                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                                >
                                    <Eye size={16} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* BOTTOM: Button + footer */}
                    <View style={styles.bottomSection}>
                        <TouchableOpacity
                            style={styles.createButton}
                            onPress={handleCreateAccount}
                        >
                            <AppText
                                style={[
                                    styles.createButtonText,
                                    { fontFamily: 'CenturyGothic-Bold' },
                                ]}
                            >
                                Create Account
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
        padding: 10
    },
    input: {
        flex: 1,
        fontSize: 12,
        fontWeight: '400',
        color: '#140001',
    },
    placeholderText: {
        color: '#AAA8A8',
    },

    // BOTTOM
    bottomSection: {
        gap: 12,
    },
    createButton: {
        backgroundColor: '#E91F27',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    createButtonText: {
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

export default Signup;

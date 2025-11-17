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
import { Eye } from 'iconsax-react-nativejs';

interface NewPasswordScreenProps {
    navigation?: any;
}

const NewPassword: React.FC<NewPasswordScreenProps> = ({ navigation }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = () => {
        // TODO:
        // - Validate password & confirmPassword
        // - Gọi API set mật khẩu mới với token reset
        // Sau khi thành công:
        navigation?.navigate('NewPasswordSuccess');
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
                        <AppText style={styles.title}>Set New Password</AppText>
                        <AppText style={styles.subtitle}>
                            Creating a new password is easy. Enter the new password{'\n'}
                            you want to create and replace it.
                        </AppText>
                    </View>

                    {/* FORM */}
                    <View style={styles.formSection}>
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
                            <AppText style={styles.helperText}>
                                Must be at least 8 characters
                            </AppText>
                        </View>

                        {/* Confirm Password */}
                        <View style={styles.fieldContainer}>
                            <AppText style={styles.fieldLabel}>Confirm Password</AppText>
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Confirm your password"
                                    placeholderTextColor="#AAA8A8"
                                    secureTextEntry={!showConfirmPassword}
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                />
                                <TouchableOpacity
                                    onPress={() =>
                                        setShowConfirmPassword(prev => !prev)
                                    }
                                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                                >
                                    <Eye size={16} />
                                </TouchableOpacity>
                            </View>
                            <AppText style={styles.helperText}>
                                Must be at least 8 characters
                            </AppText>
                        </View>
                    </View>

                    {/* BOTTOM: Submit */}
                    <View style={styles.bottomSection}>
                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={handleSubmit}
                        >
                            <AppText
                                style={[
                                    styles.submitButtonText,
                                    { fontFamily: 'CenturyGothic-Bold' },
                                ]}
                            >
                                Submit
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
        paddingTop: 80,
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
        borderWidth: 1,
        borderColor: '#F1F0F0',
        justifyContent:'space-between',
        borderRadius: 8,
        padding: 10,
    },
    input: {
        flex: 1,
        fontSize: 12,
        fontWeight: '400',
        color: '#140001',
    },
    helperText: {
        fontSize: 12,
        fontWeight: '400',
        color: '#A79697',
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

export default NewPassword;

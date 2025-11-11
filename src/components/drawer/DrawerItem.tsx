import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
    label: string;
    icon: keyof typeof Ionicons.glyphMap;
    active?: boolean;
    onPress?: () => void;
};

export default function DrawerItem({ label, icon, active, onPress }: Props) {
    const Content = (
        <View style={styles.row}>
            <Ionicons
                name={icon}
                size={22}
                color={active ? '#ffffff' : '#C7C7C7'}
                style={{ marginRight: 14 }}
            />
            <Text style={[styles.label, active && styles.labelActive]} numberOfLines={1}>
                {label}
            </Text>
        </View>
    );

    if (active) {
        return (
            <LinearGradient
                colors={['rgba(203, 36, 55, 0.28)', 'rgba(203, 36, 55, 0.08)']}
                start={{ x: 0.1, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.activePill}
            >
                <TouchableOpacity onPress={onPress} style={styles.itemTouch} activeOpacity={0.8}>
                    {Content}
                </TouchableOpacity>
            </LinearGradient>
        );
    }

    return (
        <TouchableOpacity onPress={onPress} style={styles.itemTouch} activeOpacity={0.8}>
            {Content}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemTouch: {
        paddingVertical: 12,
        paddingHorizontal: 14,
        borderRadius: 14,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        color: '#C7C7C7',
        fontWeight: '500',
    },
    labelActive: {
        color: '#ffffff',
        fontWeight: '700',
    },
    activePill: {
        borderRadius: 14,
        marginBottom: 8,
    },
});

import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import DrawerItem from './DrawerItem';

export default function SideMenu(props: DrawerContentComponentProps) {
    const { navigation } = props;
    const [active, setActive] = useState('Dashboard');

    const items = [
        { label: 'Dashboard', icon: 'grid-outline', route: 'Home' },
        { label: 'Pre-Qualification', icon: 'people-outline', route: 'PreQualification' },
        { label: 'Bid Invitations', icon: 'document-text-outline', route: 'BidInvitations' },
        { label: 'Contract', icon: 'calendar-outline', route: 'Contract' },
        { label: 'Invoices', icon: 'bookmark-outline', route: 'Invoices' },
        { label: 'Safety', icon: 'shield-outline', route: 'Safety' },
        { label: 'Documents', icon: 'clipboard-outline', route: 'Documents' },
        { label: 'Messages', icon: 'mail-outline', route: 'Messages' },
    ];

    return (
        // nền panel có bo tròn phải để giống ảnh
        <View style={styles.panel}>
            {/* nút X đỏ góc phải */}
            <TouchableOpacity style={styles.close} onPress={() => navigation.closeDrawer()}>
                <Ionicons name="close" size={26} color="#FF3B30" />
            </TouchableOpacity>

            {/* avatar + tên + role */}
            <View style={styles.header}>
                <Image
                    source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
                    style={styles.avatar}
                />
                <Text style={styles.name}>Richard Gere</Text>
                <Text style={styles.role}>Admin</Text>
            </View>

            {/* đường kẻ mảnh */}
            <View style={styles.divider} />

            {/* danh sách menu */}
            <ScrollView contentContainerStyle={{ paddingTop: 8 }} showsVerticalScrollIndicator={false}>
                {items.map((it) => (
                    <DrawerItem
                        key={it.label}
                        label={it.label}
                        icon={it.icon as any}
                        active={active === it.label}
                        onPress={() => {
                            setActive(it.label);
                            if (it.route) navigation.navigate(it.route as never);
                            navigation.closeDrawer();
                        }}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        backgroundColor: '#121111',
        paddingTop: 54,
        paddingHorizontal: 18,
        paddingBottom: 24,
        borderTopRightRadius: 22,
        borderBottomRightRadius: 22,
    },
    close: {
        position: 'absolute',
        right: 16,
        top: 16,
        padding: 8,
        zIndex: 10,
    },
    header: {
        marginTop: 6,
        marginBottom: 16,
    },
    avatar: {
        width: 72,
        height: 72,
        borderRadius: 36,
        marginBottom: 12,
    },
    name: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '800',
    },
    role: {
        color: '#9CA3AF',
        fontSize: 13,
        marginTop: 2,
    },
    divider: {
        height: 1,
        backgroundColor: '#2B2B2B',
        marginVertical: 14,
        opacity: 0.8,
    },
});

import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import AppText from '../../components/custom/AppText';
import { Bezier, FlashCircle, Lifebuoy, NoteFavorite, RulerPen, SecuritySafe } from 'iconsax-react-nativejs';
import Svg, { Polygon } from 'react-native-svg';

// 💎 Diamond icon nhỏ
type DiamondProps = { size?: number; color?: string };
export const Diamond = ({ size = 10, color = '#FFB020' }: DiamondProps) => (
    <Svg width={size} height={size} viewBox="0 0 16 16">
        <Polygon points="8,0 16,8 8,16 0,8" fill={color} />
    </Svg>
);

const DashboardCards = () => {
    return (
        <>
            <AppText style={styles.header}>Dashboard</AppText>
            {/* 1️⃣ Active Bid Invitations */}
            <View style={styles.card}>
                <View style={styles.row}>
                    <View style={styles.leftGroup}>
                        <View style={[styles.icon, { backgroundColor: '#007AFC' }]}>
                            <FlashCircle size="26" color="#ffffff" />
                        </View>
                        <View>
                            <AppText style={styles.title}>Active Bid Invitations</AppText>
                            <AppText style={styles.value}>5,250</AppText>
                        </View>
                    </View>

                    <Pressable
                        style={styles.button}
                        accessibilityRole="button"
                        hitSlop={8}
                        onPress={() => console.log('Respond Now pressed')}
                    >
                        <AppText style={[styles.buttonText, { fontFamily: 'CenturyGothic-Bold' }]}>
                            Respond Now
                        </AppText>
                    </Pressable>
                </View>
            </View>

            {/* 2️⃣ Submitted Bids */}
            <View style={styles.card}>
                <View style={styles.row}>
                    <View style={styles.leftGroup}>
                        <View style={[styles.icon, { backgroundColor: '#E91F27' }]}>
                            <Lifebuoy size="26" color="#ffffff" />
                        </View>
                        <View>
                            <AppText style={styles.title}>Submitted Bids</AppText>
                            <AppText style={styles.value}>12</AppText>
                        </View>
                    </View>

                    <View style={styles.submittedBidsBadgeGroup}>
                        <View style={styles.submittedBidsBadge}>
                            <Diamond size={8} color="#FF7800" />
                            <AppText style={styles.badgeText}>5 Pending</AppText>
                        </View>
                        <View style={styles.submittedBidsBadge}>
                            <Diamond size={8} color="#038336" />
                            <AppText style={styles.badgeText}>4 Approved</AppText>
                        </View>
                        <View style={styles.submittedBidsBadge}>
                            <Diamond size={8} color="#E91F27" />
                            <AppText style={styles.badgeText}>2 Declined</AppText>
                        </View>
                    </View>
                </View>
            </View>

            {/* 3️⃣ Compliance Status */}
            <View style={styles.card}>
                <View style={styles.complianceStatusRow}>
                    <View style={[styles.icon, { backgroundColor: '#7D33EF' }]}>
                        <RulerPen size="26" color="#ffffff" />
                    </View>
                    <View style={styles.complianceStatusRightGroup}>
                        <AppText style={styles.title}>Compliance Status</AppText>
                        <View style={styles.complianceStatusBagde}>
                            <Diamond size={10} color="#E91F27" />
                            <AppText style={[styles.badgeText, { fontSize: 12, color: '#E91F27' }]}>
                                Issues Detected
                            </AppText>
                        </View>
                    </View>
                </View>
            </View>

            {/* 4️⃣ Contracts Pending Signature */}
            <View style={styles.card}>
                <View style={[styles.row, { justifyContent: 'flex-start', gap: 12 }]}>
                    <View style={[styles.icon, { backgroundColor: '#007930' }]}>
                        <Bezier size="26" color="#ffffff" />
                    </View>
                    <View style={{ gap: 2 }}>
                        <AppText style={styles.title}>Contracts Pending Signature</AppText>
                        <AppText style={styles.value}>36</AppText>
                    </View>
                </View>
            </View>

            {/* 5️⃣ Invoices Pending Review */}
            <View style={styles.card}>
                <View style={styles.row}>
                    <View style={styles.leftGroup}>
                        <View style={[styles.icon, { backgroundColor: '#FF8A00' }]}>
                            <NoteFavorite size="26" color="#ffffff" />
                        </View>
                        <View>
                            <AppText style={styles.title}>Invoices Pending Review</AppText>
                            <AppText style={styles.value}>5 Invoices</AppText>
                        </View>
                    </View>
                    <Pressable onPress={() => console.log('Open invoices pressed')} accessibilityRole="link" hitSlop={8}>
                        <AppText style={styles.linkText}>Open Invoices</AppText>
                    </Pressable>
                </View>
            </View>

            {/* 6️⃣ Safety Overview */}
            <View style={styles.card}>
                <View style={styles.row}>
                    <View style={styles.leftGroup}>
                        <View style={[styles.icon, { backgroundColor: '#C900D4' }]}>
                            <SecuritySafe size="26" color="#ffffff" />
                        </View>
                        <View>
                            <AppText style={styles.title}>Safety Overview</AppText>
                            <AppText style={styles.value}>Jan 24, 2025</AppText>
                        </View>
                    </View>
                    <View style={styles.complianceStatusBagde}>
                        <Diamond size={10} color="#E91F27" />
                        <AppText style={[styles.badgeText, { fontSize: 12, color: '#E91F27' }]}>
                            Training Required
                        </AppText>
                    </View>
                </View>
            </View>
        </>
    );
};

export default DashboardCards;

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        fontWeight: '400',
        color: '#292D32',
        marginBottom: 12,
    },
    card: {
        height: 66,
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 12,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#DCE2F1',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftGroup: {
        flex: 1,
        height: 42,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    icon: {
        width: 42,
        height: 42,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 7,
        gap: 10,
    },
    title: {
        fontSize: 12,
        color: '#403535',
        fontWeight: '400',
    },
    value: {
        fontSize: 20,
        fontWeight: '400',
        color: '#140001',
        lineHeight: 24,
    },
    button: {
        backgroundColor: '#1677FF',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 12,
    },
    submittedBidsBadgeGroup: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '50%',
        gap: 10,
    },
    submittedBidsBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    complianceStatusRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    complianceStatusRightGroup: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    complianceStatusBagde: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    badgeText: {
        fontSize: 10,
        color: '#6B7280',
    },
    linkText: {
        color: '#007AFC',
        fontSize: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#007AFC',
        paddingBottom: 2,
    },
});

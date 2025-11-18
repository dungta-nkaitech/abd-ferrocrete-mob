import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft } from 'iconsax-react-nativejs';
import AppText from '../../../components/custom/AppText';

interface ProjectDetailScreenProps {
    navigation: any;
    route: any;
}

const TAB_LIST = ['Overview', 'Activities', 'Submittals', 'Reports', 'Specs'];

const ProjectDetail: React.FC<ProjectDetailScreenProps> = ({ navigation, route }) => {
    const [activeTab, setActiveTab] = useState<string>('Overview');

    // Có thể nhận data từ route.params.project
    const project = route?.params?.project;

    const overviewRows = [
        { label: 'Project', value: project?.name ?? 'Ferrocrete Builders Inc.pdf' },
        { label: 'Value', value: '$15,325.00' },
        { label: 'Country', value: 'USA' },
        { label: 'Address', value: 'Los Angeles, California' },
        { label: 'State', value: 'California' },
        { label: 'City', value: 'California' },
        { label: 'Zip Code', value: '90210' },
        { label: 'Start Date', value: '15 Jul 2025' },
        { label: 'End Date', value: '25 Jul 2025' },
        { label: 'Client Info', value: 'Traci Barr' },
        { label: 'Completion', value: '80' },
    ];

    return (
        <SafeAreaView style={styles.safe} edges={['left','right','bottom']}>
            {/* Nếu bạn có header đen riêng thì đặt component header ở đây */}

            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    {/* Back button */}
                    <TouchableOpacity
                        style={styles.backRow}
                        onPress={() => navigation.goBack()}
                        activeOpacity={0.7}
                    >
                        <ArrowLeft size="20" color="#232323" />
                        <AppText style={styles.backText}>Back</AppText>
                    </TouchableOpacity>
                    {/* Title */}
                    <AppText style={styles.title}>
                        {project?.title ?? 'Patch wall'}
                    </AppText>
                </View>
                
                {/* Tabs */}
                <View style={styles.tableContainer}>
                    <View style={styles.tabRow}>
                        {TAB_LIST.map((tab) => {
                            const isActive = tab === activeTab;
                            return (
                                <TouchableOpacity
                                    key={tab}
                                    onPress={() => setActiveTab(tab)}
                                    activeOpacity={0.8}
                                >
                                    <AppText style={[styles.tabText, isActive && styles.tabTextActive]}>
                                        {tab}
                                    </AppText>
                                    {isActive && <View style={styles.tabUnderline} />}
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                    <AppText style={styles.sectionTitle}>{activeTab}</AppText>
                    <ScrollView
                        style={styles.scroll}
                        contentContainerStyle={styles.scrollContent}
                        showsVerticalScrollIndicator={false}
                    >
                        {activeTab === 'Overview' && (
                            <>
                                <View style={styles.card}>
                                    {overviewRows.map((row, index) => {
                                        const isFirst = index === 0;
                                        const isLast = index === overviewRows.length - 1;
                                        const isCompletionRow = row.label === 'Completion';
                                        let isCompletionHigh, isCompletionMedium, isCompletionLow: Boolean = false;
                                        if (isCompletionRow){
                                            isCompletionHigh = Number(row.value) >= 80;
                                            isCompletionMedium = Number(row.value) >= 50 && Number(row.value) < 80;
                                            isCompletionLow = Number(row.value) < 50
                                        }
                                        return (
                                            <View
                                                key={row.label + index}
                                                style={styles.row}
                                            >
                                                <View style={[styles.cellLabel, 
                                                    isFirst ? {borderTopLeftRadius: 12} : {}, 
                                                    isLast ? {borderBottomLeftRadius: 12, borderBottomWidth: 1} : {}]}
                                                >
                                                    <AppText style={styles.cellLabelText}>
                                                        {row.label}
                                                    </AppText>
                                                </View>
                                                <View style={[styles.cellValue, 
                                                    isFirst ? {borderTopRightRadius: 12} : {}, 
                                                    isLast ? {borderBottomRightRadius: 12, borderBottomWidth: 1} : {}]}
                                                >
                                                    {!isCompletionRow ? (
                                                        <AppText style={styles.cellValueText}>
                                                            {row.value}
                                                        </AppText>) : (
                                                        <View style={[styles.completionCellValue,
                                                            isCompletionHigh? {backgroundColor: '#E5FFF0'} : {},
                                                            isCompletionMedium? {backgroundColor: '#f9fdc5'} : {},
                                                            isCompletionLow? {backgroundColor: '#fdcbc3'} : {}]}
                                                        >
                                                            <AppText style={[styles.completionText,
                                                                isCompletionHigh? {color:'#038336'} : {},
                                                                isCompletionMedium? {color:'#8d8404'} : {},
                                                                isCompletionLow? {color:'#8b1505'} : {}]}
                                                            >
                                                                {row.value}%
                                                            </AppText>
                                                        </View>)
                                                    }
                                                </View>
                                            </View>
                                        );
                                    })}
                                </View>
                            </>
                        )}

                        {/* Các tab khác bạn có thể bổ sung sau */}
                    </ScrollView>                    
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    container: {
        flex: 1,
    },
    header: {
        marginTop:20,
        marginHorizontal: 20,
        paddingBottom: 12,
        gap: 24,
    },
    backRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    backText: {
        color: '#232323',
        fontSize: 16,
        fontWeight: '400',
    },
    title: {
        fontSize: 20,
        color:'#232323',
        fontWeight: '400',
    },
    tableContainer: {
        flex: 1,
        marginHorizontal: 20,
        gap: 16,
    },
    tabRow: {
        flexDirection: 'row',
        height: 36,
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
        justifyContent: 'space-between',
    },
    tabText: {
        fontSize: 14,
        color: '#000000',
    },
    tabTextActive: {
        fontSize: 14,
        color: '#E91F27',
        fontWeight: '400',
    },
    tabUnderline: {
        marginTop: 15,
        height: 2,
        width: '100%',
        borderRadius: 999,
        backgroundColor: '#FF4B4B',
    },
    sectionTitle: {
        fontSize: 16,
        letterSpacing: 1.05,
        color: '#000000',
        fontWeight: '400',
        textTransform: 'uppercase',
    },
    scroll: {
        flex: 1,
    },
    scrollContent: {
        flex: 1,
    },
    card: {
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
    },
    cellLabel: {
        width: '33%',
        justifyContent: 'center',
        backgroundColor: '#F9F9F9',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#F2F2F2',
    },
    cellValue: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor:'#FFFFFF',
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#F2F2F2',
    },
    cellLabelText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#1C0104',
    },
    cellValueText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#44292C',
    },
    completionCellValue: {
        alignSelf: 'flex-start',
        paddingHorizontal: 6,
        paddingVertical:4,
        borderRadius: 100,
    },
    completionText: {
        fontSize: 12,
        fontWeight: '400',
    },
});

export default ProjectDetail;

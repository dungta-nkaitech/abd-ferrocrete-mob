import React, { useMemo, useState } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppText from '../../../components/custom/AppText';
import { SearchNormal1, Filter } from 'iconsax-react-nativejs';

type ProjectStatus = 'in-progress' | 'pending' | 'completed';

interface ProjectItem {
    id: string;
    title: string;
    company: string;
    status: ProjectStatus;
}

const MOCK_PROJECTS: ProjectItem[] = [
    {
        id: '1',
        title: 'Patch wall',
        company: 'Ferrocete Builders Inc',
        status: 'in-progress',
    },
    {
        id: '2',
        title: 'Paint ceiling',
        company: 'Skyline Painting Co',
        status: 'in-progress',
    },
    {
        id: '3',
        title: 'Install flooring',
        company: 'Premium Floors Ltd',
        status: 'pending',
    },
    {
        id: '4',
        title: 'Wire electrical system',
        company: 'ElectroTech Solutions',
        status: 'completed',
    },
    {
        id: '5',
        title: 'Plumb bathrooms',
        company: 'AquaFlow Plumbing',
        status: 'in-progress',
    },
    {
        id: '6',
        title: 'Furnish living room',
        company: 'HomeStyle Interiors',
        status: 'pending',
    },
    {
        id: '7',
        title: 'Paint ceiling',
        company: 'Skyline Painting Co',
        status: 'in-progress',
    },
        {
        id: '8',
        title: 'Paint ceiling',
        company: 'Skyline Painting Co',
        status: 'in-progress',
    },
        {
        id: '9',
        title: 'Paint ceiling',
        company: 'Skyline Painting Co',
        status: 'in-progress',
    },
];

const ProjectsScreen: React.FC = () => {
    const [search, setSearch] = useState('');

    const filteredProjects = useMemo(() => {
        const keyword = search.trim().toLowerCase();
        if (!keyword) return MOCK_PROJECTS;
        return MOCK_PROJECTS.filter(
            (p) =>
                p.title.toLowerCase().includes(keyword) ||
                p.company.toLowerCase().includes(keyword),
        );
    }, [search]);

    const renderStatusLabel = (status: ProjectStatus) => {
        let label = '';
        let containerStyle = {};


        switch (status) {
            case 'in-progress':
                label = 'In Progress';
                containerStyle = styles.statusInProgress;
                break;
            case 'pending':
                label = 'Pending';
                containerStyle = styles.statusPending;
                break;
            case 'completed':
                label = 'Completed';
                containerStyle = styles.statusCompleted;
                break;
        }

        return (
            <View style={[styles.statusChip, containerStyle]}>
                <AppText style={[styles.statusText]}>{label}</AppText>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.safeArea} edges={['left','right','bottom']}>
            <View style={styles.container}>
                <AppText style={styles.title}>Projects</AppText>

                {/* Search + Filter */}
                <View style={styles.searchRow}>
                    <View style={styles.searchContainer}>
                        <SearchNormal1 size="16" color="#AAA8A8" />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search"
                            placeholderTextColor="#AAA8A8"
                            value={search}
                            onChangeText={setSearch}
                        />
                    </View>

                    <TouchableOpacity style={styles.filterButton} activeOpacity={0.8}>
                        <Filter size="16" color="#232323" />
                        <AppText style={styles.filterText}>Filter</AppText>
                    </TouchableOpacity>
                </View>

                <ScrollView
                    style={styles.scroll}
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    {filteredProjects.map((project) => (
                        <TouchableOpacity
                            key={project.id}
                            activeOpacity={0.85}
                            style={styles.card}
                        >
                            <View style={styles.cardHeader}>
                                <View style={styles.cardTextGroup}>
                                    <AppText style={[styles.projectName, {fontFamily: 'CenturyGothic-Bold'}]}>
                                        {project.title}
                                    </AppText>
                                    <AppText style={styles.companyName}>
                                        {project.company}
                                    </AppText>
                                </View>
                                {renderStatusLabel(project.status)}
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default ProjectsScreen;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: 20,
        marginHorizontal: 20,
        gap: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: '400',
        color: '#292D32'
    },
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#F1F0F0',
        padding: 10,
        gap: 8,
    },
    searchInput: {
        flex: 1,
        fontSize: 12,
        fontWeight: '400',
    },
    filterButton: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 100,
        borderColor: '#EAEAEA',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        gap: 4,
    },
    filterText: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 16,
        color:'#232323'
    },
    scroll: {
        flex: 1,
    },
    scrollContent: {
        gap: 16,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        borderWidth: 1,
        borderColor: '#DCE2F1',
        gap: 16,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardTextGroup: {
        flex: 1,
        gap: 4,
    },
    projectName: {
        fontSize: 18,
        fontWeight: '700',
    },
    companyName: {
        fontSize: 14,
        fontWeight: '400',
        color: '#000000',
    },
    statusChip: {
        width: 86,
        paddingHorizontal: 2,
        paddingVertical: 4,
        borderRadius: 100,
        gap: 10,
        alignItems:'center'
    },
    statusText: {
        fontSize: 12,
        fontWeight: '400',
        color: '#FFFFFF'
    },
    statusInProgress: {
        backgroundColor: '#007AFC',
    },
    statusPending: {
        backgroundColor: '#FBA615',
    },
    statusCompleted: {
        backgroundColor: '#038336',
    },
});

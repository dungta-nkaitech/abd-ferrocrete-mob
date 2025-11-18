import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import AppText from '../../../components/custom/AppText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft2, ArrowRight2, Filter, SearchNormal1 } from 'iconsax-react-nativejs';
import { Calendar } from 'react-native-calendars';

interface SchedulingScreenProps {
    navigation: any;
}

const Scheduling: React.FC<SchedulingScreenProps> = ({ navigation }) =>{
    const [search, setSearch] = useState('');
	const [monthSelect, setMonthSelect] = useState('April 2025');
	const [selectedDate, setSelectedDate] = useState('2025-04-15');
    
    return (
        <SafeAreaView style={styles.safeArea} edges={['left','right','bottom']}>
            <View style={styles.container}>
				<AppText style={styles.pageTitle}>Scheduling</AppText>
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

				{/* Add Task Button */}
				<TouchableOpacity style={styles.addTaskButton}>
					<AppText style={styles.addTaskText}>Add New Task</AppText>
				</TouchableOpacity>
                <ScrollView 
                    contentContainerStyle={styles.calendarSection}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Month selector */}
					<View style={styles.calendarControl}>
						<View style={styles.timeRow}>
							<View style={styles.monthSelect}>
								<TouchableOpacity>
									<ArrowLeft2 size="16" color="#44292C" />
								</TouchableOpacity>
								<TouchableOpacity>
									<AppText style={styles.monthSelectText}>{monthSelect}</AppText>
								</TouchableOpacity>
								<TouchableOpacity>
									<ArrowRight2 size="16" color="#44292C" />
								</TouchableOpacity>
							</View>
							<TouchableOpacity style={styles.todayBtn}>
								<AppText style={styles.todayText}>Today</AppText>
							</TouchableOpacity>
                    	</View>

						{/* Calendar mock-up */}
						{/* Calendar real */}
						<View style={styles.calendarBox}>
							<Calendar
								style={styles.calendar}
								current={selectedDate}
								onDayPress={(day) => {
									// day.dateString dạng 'YYYY-MM-DD'
									setSelectedDate(day.dateString);
									setMonthSelect(String(day.month));
								}}
								markingType="custom"  
								markedDates={{
									[selectedDate]: {
										customStyles: {
											container: {
												backgroundColor: '#E91F27',
												borderRadius: 8,  
											},
											text: {
												color: '#FFFFFF',
												fontFamily: 'CenturyGothic',
											}
										}
									}
								}}
								renderHeader={() => <></>}
								hideArrows={true}
								hideExtraDays={false}
								firstDay={0} // 0: Sunday, 1: Monday
								theme={{
									textDayFontFamily: 'CenturyGothic',
									textSectionTitleColor: '#6B7280',
									textDayHeaderFontFamily: 'CenturyGothic-Bold',
									calendarBackground: '#FFFFFF',
									textDayFontSize: 14,
									textDayHeaderFontSize: 12,
									textDayHeaderFontWeight: '700',
								}}
							/>
						</View>
					</View>

                    {/* Events title */}
                    <AppText style={styles.sectionTitle}>Day’s Events</AppText>
                    {/* Events List */}
                    {EVENTS.map((event, idx) => (
                        <View key={idx} style={[styles.eventCard, { backgroundColor: event.bg }]}>
                            <View style={styles.eventDotWrapper}>
                                <View style={[styles.dot, { backgroundColor: event.color }]} />
                            </View>

                            <View>
                                <AppText style={styles.eventTitle}>
                                    Monday, Apr 15
                                </AppText>
                                <AppText style={styles.eventTime}>
                                    {event.time}
                                </AppText>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const EVENTS = [
    { time: '9:00 AM - 10:30 AM', color: '#E53935', bg: '#FFECEC' },
    { time: '11:00 AM - 12:30 PM', color: '#3D8BF2', bg: '#E8F0FF' },
    { time: '01:00 PM - 04:30 PM', color: '#23B26F', bg: '#E9FFF2' },
    { time: '05:00 PM - 07:30 PM', color: '#A46BFE', bg: '#F4EBFF' },
];

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
    pageTitle: {
        fontSize: 20,
        fontWeight: '400',
        color: '#292D32',
    },

    // Search
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

    addTaskButton: {
        backgroundColor: '#007AFC',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
		paddingVertical: 7,
        borderRadius: 48,
    },

    addTaskText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '400',
    },

    // Month selector
	calendarSection: {
		gap: 12,
    },
	calendarControl: {
		gap: 8,
	},
    timeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
	monthSelect: {
		flexDirection: 'row',
		gap: 11,
		paddingVertical: 8,
		alignItems: 'center',
	},
	monthSelectText: {
		fontSize: 14,
		fontWeight: '400',
		color: '#44292C',
	},
    todayBtn: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 9,
        paddingVertical: 7,
        borderRadius: 8,
		borderWidth: 1,
		borderColor: '#E5EAEF',
    },
    todayText: {
        fontSize: 12,
		fontWeight: '400',
        color: '#797D8A',
    },

    // Calendar placeholder
    calendarBox: {
        borderWidth: 1,
        borderColor: '#E5E7EB',
		overflow: 'hidden',
    },
	calendar: {
        width: '100%',
        alignSelf: 'stretch',
    },

    calendarText: {
        color: '#666',
    },

    // Section title
    sectionTitle: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 10,
    },

    // Event card
    eventCard: {
        marginHorizontal: 20,
        borderRadius: 12,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 12,
    },

    eventDotWrapper: {
        marginRight: 12,
        marginTop: 4,
    },

    dot: {
        width: 12,
        height: 12,
        borderRadius: 6,
    },

    eventTitle: {
        fontSize: 15,
        color: '#000',
        marginBottom: 4,
    },

    eventTime: {
        fontSize: 13,
        color: '#666',
    },
});

export default Scheduling;

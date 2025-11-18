import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import AppText from '../../../components/custom/AppText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft2, ArrowRight2, Filter, SearchNormal1 } from 'iconsax-react-nativejs';
import { Calendar } from 'react-native-calendars';
import AddTaskModal from './AddTaskModal';

interface SchedulingScreenProps {
    navigation: any;
}

const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const EVENTS = [
    { time: '9:00 AM - 10:30 AM', date: 'Monday, Apr 15', dotColor: '#E91F27', bgColor: '#FFF6F7', borderColor: '#F9D9DC'},
    { time: '11:00 AM - 12:30 PM', date: 'Monday, Apr 15', dotColor: '#3B82F6', bgColor: '#F0F7FF', borderColor: '#CAE0FA'},
    { time: '01:00 PM - 04:30 PM', date: 'Monday, Apr 15', dotColor: '#22C55E', bgColor: '#F5FFF9', borderColor: '#B8E8CB'},
    { time: '05:00 PM - 07:30 PM', date: 'Monday, Apr 15', dotColor: '#A769FF', bgColor: '#F5EEFF', borderColor: '#CBB5E9'},
];

const Scheduling: React.FC<SchedulingScreenProps> = ({ navigation }) =>{
    const [search, setSearch] = useState('');
    const [currentMonth, setCurrentMonth] = useState(''); 
    const [selectedDate, setSelectedDate] = useState('');
    const [isAddTaskModalVisible, setIsAddTaskModalVisible] = useState(false);

    const getMonthLabel = (dateStr: string) => {
        const d = new Date(dateStr);
        const month = d.getMonth();        // 0-11
        const year = d.getFullYear();
        return `${MONTH_NAMES[month]} ${year}`;
    };

    const handlePrevMonth = () => {
        setCurrentMonth(prev => {
            const d = new Date(prev);
            d.setMonth(d.getMonth() - 1);
            const y = d.getFullYear();
            const m = String(d.getMonth() + 1).padStart(2, '0');
            return `${y}-${m}-01`;
        });
    };

    const handleNextMonth = () => {
        setCurrentMonth(prev => {
            const d = new Date(prev);
            d.setMonth(d.getMonth() + 1);
            const y = d.getFullYear();
            const m = String(d.getMonth() + 1).padStart(2, '0');
            return `${y}-${m}-01`;
        });
    };

    const handleToday = () => {
        const today = new Date();
        const y = today.getFullYear();
        const m = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const todayStr = `${y}-${m}-${day}`;
        console.log("today", todayStr);
        setCurrentMonth(`${y}-${m}-01`);
        setSelectedDate(todayStr);
    };
    useEffect(() => {
        handleToday();
    }, []);
    
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
				<TouchableOpacity 
                    style={styles.addTaskButton} 
                    onPress={() => setIsAddTaskModalVisible(true)}
                >
					<AppText style={styles.addTaskText}>Add New Task</AppText>
				</TouchableOpacity>

                <ScrollView 
                    contentContainerStyle={styles.calendarSection}
                    showsVerticalScrollIndicator={false}
                >
					<View style={styles.calendarControl}>

                        {/* Month selector */}
						<View style={styles.timeRow}>
							<View style={styles.monthSelect}>
								<TouchableOpacity onPress={handlePrevMonth}>
									<ArrowLeft2 size="16" color="#44292C" />
								</TouchableOpacity>
								<TouchableOpacity>
									<AppText style={styles.monthSelectText}>{getMonthLabel(currentMonth)}</AppText>
								</TouchableOpacity>
								<TouchableOpacity onPress={handleNextMonth}>
									<ArrowRight2 size="16" color="#44292C" />
								</TouchableOpacity>
							</View>
							<TouchableOpacity style={styles.todayButton} onPress={handleToday}>
								<AppText style={styles.todayText}>Today</AppText>
							</TouchableOpacity>
                    	</View>

						{/* Calendar */}
						<View style={styles.calendarBox}>
							<Calendar
								style={styles.calendar}
                                key={currentMonth}
								current={currentMonth}
								onDayPress={(day) => {
									setSelectedDate(day.dateString);
								}}
                                onMonthChange={(month) => {
                                    const m = String(month.month).padStart(2, '0');
                                    const y = month.year;
                                    setCurrentMonth(`${y}-${m}-01`);
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
                                showSixWeeks={true}
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

                    {/* Divider */}
                    <View style={styles.dividerSection}></View>

                    {/* Day Events */}
                    <View style={styles.dayEventSection}>
                        <AppText style={[styles.dayEventTitle, {fontFamily: 'CenturyGothic-Bold'}]}>Day’s Events</AppText>
                        {/* Events List */}
                        <View style={styles.dayEventCardList}>
                            {EVENTS.map((event, idx) => (
                                <View key={idx} style={[styles.eventCard, { backgroundColor: event.bgColor, borderColor: event.borderColor }]}>
                                    <View style={styles.cardContentWrapper}>
                                        <View style={[styles.dot, { backgroundColor: event.dotColor }]} />
                                        <View>
                                            <AppText style={styles.eventDate}>
                                                Monday, Apr 15
                                            </AppText>
                                            <AppText style={styles.eventTime}>
                                                {event.time}
                                            </AppText>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                </ScrollView>
            </View>
            <AddTaskModal
                visible={isAddTaskModalVisible}
                onClose={() => setIsAddTaskModalVisible(false)}
            />
        </SafeAreaView>
    );
};

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
    todayButton: {
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
		overflow: 'hidden',
    },
	calendar: {
        width: '100%',
        alignSelf: 'stretch',
    },

    calendarText: {
        color: '#666',
    },

    dividerSection: {
        height: 6,
        backgroundColor: '#EAEAEA',
        borderRadius: 4,
    },

    // Day Events Section
    dayEventSection: {
        gap: 20,
    },

    dayEventTitle: {
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 28,
        color: '#111827',
    },

    dayEventCardList: {
        gap: 16,
    },
    // Event card
    eventCard: {
        borderRadius: 12,
        borderWidth: 1,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardContentWrapper: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 12,
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 9999,
    },
    eventDate: {
        fontSize: 14,
        fontWeight: '400',
        color: '#232323',
        lineHeight: 20,
    },
    eventTime: {
        fontSize: 12,
        fontWeight: '400',
        color: '#725B5E',
        lineHeight: 16,
    },
});

export default Scheduling;

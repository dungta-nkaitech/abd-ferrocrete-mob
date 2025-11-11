import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import AppText from '../../components/custom/AppText';
import { More } from 'iconsax-react-nativejs';

type DeadlineStatus = 'Urgent' | 'Approved';

export interface IUpcomingDeadline {
    id: string;
    type: string;
    itemName: string;
    dueDate: string;
    status: DeadlineStatus;
}

interface Props {
    title?: string;
    items?: IUpcomingDeadline[];
    onPressAction?: (item: IUpcomingDeadline) => void;
}

const statusTheme = (status: DeadlineStatus) => {
    switch (status) {
        case 'Urgent':
            return {
                rightBg: '#FFF2F2',
                rightBorder: '#FFE3E3',
                statusPillBg: '#E91F27',
                statusPillText: '#FFFFFF',
            };
        case 'Approved':
            return {
                rightBg: '#EDFFF4',
                rightBorder: '#CFF0DC',
                statusPillBg: '#038336',
                statusPillText: '#FFFFFF',
            };
    }
};

const UpcomingDeadlines: React.FC<Props> = ({
    title = 'Upcoming Deadlines',
    items = [
        {
            id: '1',
            type: 'Bid',
            itemName: 'Ferrocrete Builders Inc',
            dueDate: '24 Jan 2025',
            status: 'Urgent',
        },
        {
            id: '2',
            type: 'Bid',
            itemName: 'Ferrocrete Builders Inc',
            dueDate: '24 Jan 2025',
            status: 'Approved',
        },
    ],
    onPressAction,
}) => {
    return (
        <View style={styles.wrapper}>
            <AppText style={styles.header}>{title}</AppText>

            {items.map((item, index) => {
                const theme = statusTheme(item.status);
                return (
                    <View
                        key={item.id || String(index)}
                        style={styles.card}
                    >
                        {/* Type */}
                        <Row label="Type" rightBg={theme.rightBg} rightBorder={theme.rightBorder} isFirst>
                            <AppText style={styles.cellValueText}>{item.type}</AppText>
                        </Row>

                        {/* Item Name */}
                        <Row label="Item Name" rightBg={theme.rightBg} rightBorder={theme.rightBorder}>
                            <AppText style={styles.cellValueText}>{item.itemName}</AppText>
                        </Row>

                        {/* Due Date */}
                        <Row label="Due Date" rightBg={theme.rightBg} rightBorder={theme.rightBorder}>
                            <AppText style={styles.cellValueText}>{item.dueDate}</AppText>
                        </Row>

                        {/* Status */}
                        <Row label="Status" rightBg={theme.rightBg} rightBorder={theme.rightBorder}>
                            <View style={[styles.statusPill, { backgroundColor: theme.statusPillBg }]}>
                                <AppText style={[styles.statusText, { color: theme.statusPillText }]}>{item.status}</AppText>
                            </View>
                        </Row>

                        {/* Action */}
                        <Row label="Action" rightBg={theme.rightBg} rightBorder={theme.rightBorder} isLast>
                            <Pressable onPress={() => onPressAction?.(item)} hitSlop={8}>
                                <More size="20" color="#292D32"/>
                            </Pressable>
                        </Row>
                    </View>
                );
            })}
        </View>
    );
};

export default UpcomingDeadlines;

/** ---------- Subcomponents ---------- */
interface RowProps {
    label: string;
    rightBg: string;
    rightBorder: string;
    children: React.ReactNode;
    isFirst?: boolean;
    isLast?: boolean;
}

const Row: React.FC<RowProps> = ({ label, rightBg, rightBorder, children, isFirst, isLast }) => {
    return (
        <View style={styles.row}>
            <View 
                style={[
                    styles.cellLabel,
                    {
                        borderLeftWidth: 1,
                        borderTopWidth: isFirst ? 1 : 0,
                        borderBottomWidth: 1,
                        borderTopLeftRadius: isFirst ? 12 : 0,
                        borderBottomLeftRadius: isLast ? 12 : 0,
                    },
                ]}
            >
                <AppText style={styles.cellLabelText}>{label}</AppText>
            </View>

            <View
                style={[
                    styles.cellValue,
                    {
                        backgroundColor: rightBg,
                        borderColor: rightBorder,
                        borderRightWidth: 1,
                        borderLeftWidth: 1,
                        borderTopWidth: isFirst? 1 : 0,
                        borderBottomWidth: 1,
                        borderTopRightRadius: isFirst ? 12 : 0,
                        borderBottomRightRadius: isLast ? 12 : 0,
                    },
                ]}
            >
                {children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 16,
    },
    header: {
        fontSize: 20,
        fontWeight: '400',
        color: '#292D32',
        marginBottom: 16,
    },
    card: {
        overflow: 'hidden',
        marginBottom: 16,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'stretch',
    },
    cellLabel: {
        width: '30%',
        backgroundColor: '#F9F9F9',
        paddingVertical: 15,
        paddingHorizontal: 10,
        justifyContent: 'center',
        borderColor:'#F2F2F2',
        gap: 10,
    },
    cellValue: {
        width: '70%',
        paddingVertical: 10,
        paddingHorizontal: 12,
        justifyContent: 'center',
    },
    cellLabelText: {
        fontSize: 14,
        color: '#1C0104',
        fontWeight: '400',
    },
    cellValueText: {
        fontSize: 14,
        color: '#44292C',
        fontWeight: '400',
    },
    statusPill: {
        paddingHorizontal: 6,
        paddingVertical: 4,
        borderRadius: 100,
        alignSelf: 'flex-start',
    },
    statusText: {
        fontSize: 12,
        fontWeight: '400',
    },
    actionText: {
        fontSize: 18,
        color: '#140001',
        fontWeight: '600',
    },
});

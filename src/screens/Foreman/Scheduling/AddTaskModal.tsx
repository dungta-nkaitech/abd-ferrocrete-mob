import React from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Modal,
    StyleSheet,
} from 'react-native';
import AppText from '../../../components/custom/AppText';
import { ArrowDown2, Calendar1 } from 'iconsax-react-nativejs';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface AddTaskModalProps {
    visible: boolean;
    onClose: () => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ visible, onClose }) => {
    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent
            onRequestClose={onClose}
        >
            <KeyboardAwareScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
                enableOnAndroid
                keyboardShouldPersistTaps="handled"
                extraScrollHeight={24}
            >
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        {/* Header */}
                        <View style={styles.header}>
                            <AppText style={styles.title}>Add New Task</AppText>
                            <TouchableOpacity onPress={onClose}>
                                <AppText style={styles.close}>✕</AppText>
                            </TouchableOpacity>
                        </View>

                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={styles.content}
                        >
                            {/* Project */}
                            <View style={styles.group}>
                                <View style={styles.labelRow}>
                                    <AppText style={styles.label}>Project</AppText>
                                    <AppText style={styles.star}>*</AppText>
                                </View>

                                <TouchableOpacity style={styles.selectInput}>
                                    <AppText style={styles.placeholder}>Select Project</AppText>
                                    <ArrowDown2 size="18" color="#A0A3BD" />
                                </TouchableOpacity>
                            </View>

                            {/* Task */}
                            <View style={styles.group}>
                                <View style={styles.labelRow}>
                                    <AppText style={styles.label}>Task</AppText>
                                    <AppText style={styles.star}>*</AppText>
                                </View>

                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Select"
                                    placeholderTextColor="#A0A3BD"
                                />
                            </View>

                            {/* Assignee */}
                            <View style={styles.group}>
                                <View style={styles.labelRow}>
                                    <AppText style={styles.label}>Assignee</AppText>
                                    <AppText style={styles.star}>*</AppText>
                                </View>

                                <TouchableOpacity style={styles.selectInput}>
                                    <AppText style={styles.placeholder}>Select Assignee</AppText>
                                    <ArrowDown2 size="18" color="#A0A3BD" />
                                </TouchableOpacity>
                            </View>

                            {/* Due Date */}
                            <View style={styles.group}>
                                <View style={styles.labelRow}>
                                    <AppText style={styles.label}>Due Date</AppText>
                                    <AppText style={styles.star}>*</AppText>
                                </View>

                                <TouchableOpacity style={styles.selectInput}>
                                    <AppText style={styles.placeholder}>Date</AppText>
                                    <Calendar1 size="18" color="#A0A3BD" />
                                </TouchableOpacity>
                            </View>

                            {/* Description */}
                            <View style={styles.group}>
                                <View style={styles.labelRow}>
                                    <AppText style={styles.label}>Description</AppText>
                                </View>

                                <TextInput
                                    style={styles.textArea}
                                    placeholder="Description"
                                    placeholderTextColor="#A0A3BD"
                                    multiline
                                />
                            </View>

                            {/* Status */}
                            <View style={styles.group}>
                                <View style={styles.labelRow}>
                                    <AppText style={styles.label}>Status</AppText>
                                    <AppText style={styles.star}>*</AppText>
                                </View>

                                <TouchableOpacity style={styles.selectInput}>
                                    <AppText style={styles.placeholder}>Select Status</AppText>
                                    <ArrowDown2 size="18" color="#A0A3BD" />
                                </TouchableOpacity>
                            </View>

                            {/* Bottom buttons */}
                            <View style={styles.buttonRow}>
                                <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
                                    <AppText style={styles.cancelText}>Cancel</AppText>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.saveBtn}>
                                    <AppText style={styles.saveText}>Save</AppText>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'flex-end',
    },
    container: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingTop: 16,
        paddingHorizontal: 20,
        paddingBottom: 12,
        maxHeight: '90%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        color: '#000000',
    },
    close: {
        fontSize: 20,
        color: '#FF3B30',
    },
    content: {
        paddingBottom: 16,
        rowGap: 16,
    },
    group: { rowGap: 6 },
    labelRow: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 2,
    },
    label: {
        fontSize: 12,
        color: '#2C3144',
    },
    star: {
        fontSize: 12,
        color: '#FF3B30',
    },
    selectInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
    placeholder: {
        fontSize: 12,
        color: '#A0A3BD',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 12,
        color: '#000',
    },
    textArea: {
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        minHeight: 80,
        textAlignVertical: 'top',
        fontSize: 12,
        color: '#000',
    },
    buttonRow: {
        flexDirection: 'row',
        columnGap: 12,
        marginTop: 12,
    },
    cancelBtn: {
        flex: 1,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    saveBtn: {
        flex: 1,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancelText: {
        fontSize: 14,
        color: '#222222',
    },
    saveText: {
        fontSize: 14,
        color: '#FFFFFF',
        fontWeight: '500',
    },
});

export default AddTaskModal;

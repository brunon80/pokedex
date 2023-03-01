import React, { forwardRef } from 'react';
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
const Content = forwardRef(({ children, keyboardAvoidingProps, scrollViewProps, padder }, ref) => (<KeyboardAvoidingView keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20} behavior={Platform.OS === 'ios' ? 'padding' : undefined} {...keyboardAvoidingProps} style={[{ flex: 1 }, keyboardAvoidingProps === null || keyboardAvoidingProps === void 0 ? void 0 : keyboardAvoidingProps.style]}>
            <ScrollView {...scrollViewProps} contentContainerStyle={[
    { flexGrow: 1, padding: padder ? padder : 0 },
    scrollViewProps === null || scrollViewProps === void 0 ? void 0 : scrollViewProps.contentContainerStyle,
]} ref={ref}>
                {children}
            </ScrollView>
        </KeyboardAvoidingView>));
export default Content;
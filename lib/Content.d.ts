import React from 'react';
import { KeyboardAvoidingViewProps, ScrollView, ScrollViewProps } from 'react-native';
declare type ContentProps = {
    keyboardAvoidingProps?: KeyboardAvoidingViewProps;
    scrollViewProps?: ScrollViewProps;
    padder?: number;
    children: React.ReactNode;
};
declare const Content: React.ForwardRefExoticComponent<ContentProps & React.RefAttributes<ScrollView>>;
export default Content;
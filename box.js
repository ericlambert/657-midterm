import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { PropTypes } from 'prop-types';

export default function Box() {

    return (
        <View style={styles.box}>
            <Text style={styles.h1}>Midterm Exam</Text>
            <Text style={[styles.text]}>Compare two numbers</Text>
        </View>
    )
}

Box.propTypes = {
    children: PropTypes.node.isRequired,
}
import React from "react";
import { View, Text, StyleSheet } from 'react-native';

function Subtitle({ children }) {
    return(
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>{ children }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    subTitleContainer: {
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
    },

    subTitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Subtitle;
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { MotiView, AnimatePresence, MotiText } from 'moti';

export default function Movements({ data }) {
    const [showValue, setShowValue] = useState(false);
    return (
        <TouchableOpacity style={styles.container} onPress={ () => setShowValue(!showValue)}>
            <Text style={styles.date}>{data.date}</Text>
            <View style={styles.content}>
                <Text style={styles.label}>{data.label}</Text>

                {showValue ? (
                    <AnimatePresence exitBeforeEnter>
                        <MotiText style={data.type === 1 ? styles.value : styles.expenses} from={{ translateX: 100 }} animate={{ translateX: 0 }} transition={{ type: 'spring', duration: 1500 }}>
                            {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
                        </MotiText>
                    </AnimatePresence>
                ) : (
                    <AnimatePresence exitBeforeEnter>
                        <MotiView style={styles.skeleton} from={{ translateX: 150, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} transition={{ type: 'spring', duration: 1500 }}>
                        </MotiView>
                    </AnimatePresence>
                )}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },
    date: {
        color: '#707070',
        fontWeight: 'bold',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    value: {
        fontSize: 16,
        color: '#2ECC71',
        fontWeight: 'bold'
    },
    expenses: {
        fontSize: 16,
        color: '#E74C3C',
        fontWeight: 'bold'
    },
    skeleton : {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#707070',
        borderRadius: 8
    }
})
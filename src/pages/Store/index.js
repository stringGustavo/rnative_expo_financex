import { View, Text, StyleSheet } from 'react-native';

export default function Store() {
    return (
        <View style={styles.container}>
            <Text>Página 03</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

export default function CustomTabBar({ state, descriptors, navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name, route.params);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.buttonTab}
                      >
                        <View style={styles.tabContainer}>
                            <View style={[styles.innerButton, { backgroundColor: isFocused ? "#F8E2FD" : "transparent" }]}>
                                <MaterialIcons name={options.tabBarIcon} size={34} color={ isFocused ? "#8F2ABD" : "#535353"}/>
                            </View>
                        </View>
                      </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content : {
        borderRadius: 99,
        flexDirection: 'row',
        marginBottom: Platform.OS === 'ios' ? 38 : 24,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        gap: 8,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3.80
    },
    buttonTab : {
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabContainer : {
        alignItems: 'center',
        padding: 4
    },
    innerButton : {
        padding: 8,
        borderRadius: 99 
    }
})
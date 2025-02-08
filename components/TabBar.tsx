
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Feather from '@expo/vector-icons/Feather';

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const icons: { [key: string]: (props: any) => JSX.Element } = {
        index: (props: any) => <Feather name='home' size={24} color={'#222'} />,
        explore: (props: any) => <Feather name='compass' size={24} color={'#222'} />,
        saved: (props: any) => <Feather name='bookmark' size={24} color={'#222'} />,
        settings: (props: any) => <Feather name='settings' size={24} color={'#222'} />
    };

    return (
        <View style={styles.tabBar}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
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
                        key={route.name}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.tabItems}
                    >
                        {icons[route.name]({
                            size: 25,
                            color: isFocused ? '#673ab7' : '#222'
                        })}
                        <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                            {typeof label === 'string' ? label : route.name}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 50,
        alignItems: 'center',
        backgroundColor: '#fff',
        marginHorizontal: 50,
        paddingVertical: 20,
        borderRadius: 35,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        shadowOpacity: 0.1,
    },
    tabItems: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    }
});

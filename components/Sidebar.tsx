import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, Pressable } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navigator = useNavigation()

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
      
    return (
        <View style={styles.container}>
            {sidebarOpen && (
                <View style={styles.sidebar}>
                    <Pressable onPress={() => navigator.navigate('Home')} style={styles.sidebarItem}>Home</Pressable>
                    <Pressable style={styles.sidebarItem}>Maps</Pressable>
                    <Pressable style={styles.sidebarItem}>Rastreio</Pressable>
                    <Pressable onPress={() => navigator.navigate('Setting')} style={styles.sidebarItem}>Configuração</Pressable>
                </View>
            )}


            <View style={styles.mainContent}>
                <TouchableOpacity onPress={toggleSidebar} style={{ marginLeft: '10px'}}>
                    <FontAwesome name={sidebarOpen ? 'backward' : 'bars'} size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
      },
      sidebar: {
        flex: 1, 
        height: '100%',  
        backgroundColor: '#f7f7f7',
        padding: 20,
        borderRightWidth: 2,
        borderRightColor: 'rgb(216, 216, 216)',
      },
    sidebarItem: {
        marginBottom: 10,
        fontSize: 14,
        fontFamily: 'Arial'
        
    },mainContent: {
        display: 'flex',
        flex: 3,
        marginTop:10,
        justifyContent: 'space-between', 
        alignItems: 'center',
        flexDirection: 'row', 
        alignSelf: 'flex-start', 
    },
    toggleButton: {
        backgroundColor: 'lightgray',
        padding: 10,
        marginLeft:15,
        borderRadius: 5,
        zIndex: 1,
        alignSelf: 'flex-start', 
    },inputContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    width: '30%',
    marginRight: 15,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center', 
},
iconContainer: {
    marginLeft: 10, 
},  
});
export default Sidebar;

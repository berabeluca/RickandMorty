import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';

export default function CharacterCard({ character, onPress }) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={{uri: character.image }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.name}>{character.name}</Text>
                <Text style={styles.status}>{character.status}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#2D2D2D',
        borderRadius: 10,
        margin: 8,
        padding: 10,
        alignItems: 'center',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    info: {
        marginleft: 15,
    },
    name: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    status: {
        color: '#ccc',
    },
});
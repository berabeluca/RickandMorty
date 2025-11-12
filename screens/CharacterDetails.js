import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';

export default function CharacterDetails({ route }) {
    const { id } = route.params;
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => res.json())
            .then(data => {
                setCharacter(data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });

            
            
    }, [id]);

    if (loading) {
        return <ActivityIndicator size="large" color="#00BFFF" style={{ flex: 1, justifyContent: 'center'}} />
    }
        
    

    return (
        <View style={styles.container}>
            <Image source={{ uri: character.image }} styles={styles.image} />
            <Text style={styles.name}>{character.name}</Text>
            <Text style={styles.text}>Status: {character.status}</Text>
            <Text style={styles.text}>Espécie: {character.species}</Text>
            <Text style={styles.text}>Gênero: {character.gender}</Text>
            <Text style={styles.text}>Origem: {character.origin.name}</Text>
            <Text style={styles.text}>Localização: {character.location.name}</Text>
        </View>
    );
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
        padding: 20,
    },
    image: {
        width: 220,
        height: 220,
        borderRadius: 110,
        marginBottom: 15,
    },
    name: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white',
    },
    text: {
        color: '#ccc',
        fontSize: '16',
        marginVertical: 5,
    },
});
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import CharacterCard from '../components/CharacterCard';

export default function CharacterList({ navigation }) {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
          .then(res => res.json())
          .then(data => {
            setCharacters(data.results);
            setLoading(false);
          })
          .catch(error => {
            console.error(error);
            setLoading(false);
          });
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#00BFFF" style={{flex:1, justifyContent:'center'}} />
    }

    return (
        <View style={StyleSheet.container}>
            <FlatList
              data={characters}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <CharacterCard
                  character={item}
                  onPress={() => navigation.navigate('Detalhes', { id: item.id })}
                  />
              )}
            />
        </View>
    );
} 

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#1E1E1E' },
});
    

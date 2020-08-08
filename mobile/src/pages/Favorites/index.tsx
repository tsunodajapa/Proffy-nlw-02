import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import styles from './styles';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import AsyncStorage from '@react-native-community/async-storage';

const Favorites = () => {

    const [favorites, setFavorites] = useState<Teacher[]>([]);

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTachers: Teacher[] = JSON.parse(response);

                setFavorites(favoritedTachers);
            }
        });
    }

    useFocusEffect(() => loadFavorites);

    return (
        <View style={styles.container} >
            <PageHeader title="Meus Proffys favoritos" />

            <FlatList
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
                data={favorites}
                renderItem={({ item }) =>
                    (
                        <TeacherItem teacher={item} favorited />
                    )
                }
            />
        </View>

    )
}

export default Favorites;
import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import { Picker } from '@react-native-community/picker';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';
import { useFocusEffect } from '@react-navigation/native';


const TeacherList = () => {

    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [favorites, setFavorites] = useState<number[]>([]);

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTachers: Teacher[] = JSON.parse(response);
                const favoritedTachersIds = favoritedTachers.map(teacher => teacher.id);

                setFavorites(favoritedTachersIds);
            }
        });
    }

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    useFocusEffect(() => loadFavorites());

    async function handleFiltersSubmit() {

        loadFavorites();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });

        setTeachers(response.data);

        // fecha aba filtros
        handleToggleFiltersVisible();
    }

    return (
        <View style={styles.container} >
            <PageHeader
                title="Proffys disponíveis"
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={20} color="#fff" />
                    </BorderlessButton>
                )}
            >
                {
                    isFiltersVisible && (

                        <View style={styles.searchForm}>
                            <Text style={styles.label}>
                                Matéria
                            </Text>
                            <View style={styles.ViewPicker}>
                                <Picker
                                    selectedValue={subject}
                                    onValueChange={itemValue => setSubject(itemValue as string)}
                                >
                                    <Picker.Item label="Artes" value="Artes" />
                                    <Picker.Item label="Biologia" value="Biologia" />
                                    <Picker.Item label="Ciência" value="Ciência" />
                                    <Picker.Item label="Geografia" value="Geografia" />
                                    <Picker.Item label="Portugês" value="Portugês" />
                                    <Picker.Item label="Química" value="Química" />
                                </Picker>
                            </View>

                            <View style={styles.inputGroup}>
                                <View style={styles.inputBlock}>
                                    <Text style={styles.label}>
                                        Dia da semana
                                    </Text>
                                    <View style={styles.ViewPicker}>
                                        <Picker
                                            selectedValue={week_day}
                                            onValueChange={itemValue => setWeekDay(itemValue as string)}
                                        >
                                            <Picker.Item value= '0' label= 'Domingo'  />
                                            <Picker.Item value= '1' label= 'Segunda-feira' />
                                            <Picker.Item value= '2' label= 'Terça-feira' />
                                            <Picker.Item value= '3' label= 'Quarta-feira' />
                                            <Picker.Item value= '4' label= 'Quinta-feira' />
                                            <Picker.Item value= '5' label= 'Sexta-feira' />
                                            <Picker.Item value= '6' label= 'Sabado'  />
                                        </Picker>
                                    </View>
                                </View>

                                <View style={styles.inputBlock}>
                                    <Text style={styles.label}>
                                        Horário
                                    </Text>
                                    <TextInput
                                        style={styles.input}
                                        value={time}
                                        onChangeText={setTime}
                                        placeholder="Qual horário?"
                                        placeholderTextColor="#c1bccc"
                                    />
                                </View>
                            </View>
                            <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
                                <Text style={styles.submitButtonText}>
                                    Filtrar
                                </Text>
                            </RectButton>
                        </View>
                    )
                }
            </PageHeader>

            <FlatList
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
                data={teachers}
                renderItem={({ item }) =>
                    (
                        <TeacherItem
                            key={item.id}
                            teacher={item}
                            favorited={favorites.includes(item.id)}
                        />
                    )
                }
            />

        </View>

    )
}

export default TeacherList;
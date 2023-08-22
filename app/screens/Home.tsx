import {Text, View} from 'react-native';
import pokemonApi from 'app/apis/pokemon';
import {useEffect} from 'react';
import React from 'react';
import {useTranslation} from 'react-i18next';
const HomeScreen = () => {
  const {t} = useTranslation();
  const handleFetchData = async () => {
    try {
      const response = await pokemonApi.getAll();
      console.log(response.data.abilities);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    handleFetchData();
  }, []);
  return (
    <View>
      <Text className="text-2xl text-red-500 ">
        Home Screens {`${t('welcome')}!`}
      </Text>
    </View>
  );
};

export default HomeScreen;

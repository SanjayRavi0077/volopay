import React, {useEffect, useLayoutEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Pressable, Image} from 'react-native';
import colors from '../assets/colors';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchTrending,
  fetchTrendingRefresh,
  setLoading,
  setRefresh,
} from '../redux/action/actionGif';
import {List} from '../components/List';

const Home = ({navigation}) => {
  const gifData = useSelector(state => state.gifData);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={() => navigation.navigate('Search')}
          style={{
            height: 24,
            width: 24,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={styles.searchIcon}
            source={require('../assets/icons/search.png')}
          />
        </Pressable>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(fetchTrending(0, 50));
  }, []);

  const onRefresh = () => {
    if (!gifData.loading && gifData.pagination.offset !== 0) {
      dispatch(setRefresh());
      dispatch(setLoading());
      dispatch(fetchTrendingRefresh(0, 50));
    }
  };

  const pagination = () => {
    if (!gifData.loading) {
      dispatch(setLoading());
      dispatch(fetchTrending(gifData.pagination.offset + 25, 25));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <List gifData={gifData} pagination={pagination} onRefresh={onRefresh} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  searchIcon: {
    height: 24,
    width: 24,
  },
});

export default Home;

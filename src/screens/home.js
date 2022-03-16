import React, {useEffect, useLayoutEffect} from 'react';
import {SafeAreaView, StyleSheet, Pressable, Image} from 'react-native';
import colors from '../assets/colors';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTrending, setLoading} from '../redux/action/actionGif';
import List from '../components/List';

const Home = ({navigation}) => {
  const gifData = useSelector(state => state.gifData);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => navigation.navigate('Search')}>
          <Image
            style={styles.searchIcon}
            source={require('../assets/icons/search.png')}
          />
        </Pressable>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    dispatch(setLoading);
    dispatch(fetchTrending(0, 10));
  }, []);

  const pagination = () => {
    if (!gifData.loading) {
      dispatch(setLoading());
      dispatch(fetchTrending(gifData.pagination.offset + 25, 25));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <List
        gifData={gifData}
        pagination={pagination}
        naviagation={{navigation}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  searchIcon: {
    height: 20,
    width: 20,
  },
});

export default Home;

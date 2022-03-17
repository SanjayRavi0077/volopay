import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import colors from '../assets/colors';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearSearch,
  loadMoreSearchGif,
  searchGif,
  setSearchLoading,
} from '../redux/action/actionGif';
import {List} from '../components/List';
import SearchBar from '../components/SearchBar';

const Search = ({navigation}) => {
  const gifData = useSelector(state => state.searchData);
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const onHandleText = text => {
    if (text === '') dispatch(clearSearch());
    dispatch(searchGif(10, text));
    setQuery(text);
  };
  const onHandleClear = () => {
    setQuery('');
    dispatch(clearSearch());
  };

  const pagination = () => {
    if (!gifData.loading) {
      dispatch(setSearchLoading());
      dispatch(loadMoreSearchGif(gifData.pagination.offset + 26, 26, query));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        onChangeText={onHandleText}
        onClear={onHandleClear}
        value={query}
      />
      {query !== '' && gifData.data.length == 0 && (
        <Text style={styles.noResult}>No Results found</Text>
      )}
      {gifData.data.length != 0 && (
        <List gifData={gifData} pagination={pagination} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  header: {
    backgroundColor: colors.black,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  noResult: {
    color: colors.white,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});

export default Search;

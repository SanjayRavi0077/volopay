import React, {useRef} from 'react';
import {StyleSheet, Pressable, Image, TextInput, View} from 'react-native';
import colors from '../assets/colors';
import FastImage from 'react-native-fast-image';
import {useNavigation, CommonActions} from '@react-navigation/native';

const SearchBar = ({onChangeText, onClear, value}) => {
  const searchInput = useRef();
  const navigation = useNavigation();
  return (
    <React.Fragment>
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            navigation.dispatch(CommonActions.goBack());
            onClear();
            FastImage.clearMemoryCache();
            FastImage.clearDiskCache();
          }}>
          <Image
            source={require('../assets/icons/back.png')}
            style={styles.backImage}
          />
        </Pressable>

        <View style={styles.searchBox}>
          <TextInput
            ref={searchInput}
            style={styles.searchInput}
            autoFocus={true}
            placeholder="Search Gif's"
            returnKeyLabel="Search"
            autoCorrect={false}
            keyboardType="visible-password"
            placeholderTextColor={'grey'}
            onChangeText={onChangeText}
            value={value}
          />
          {value !== '' && (
            <Pressable
              style={styles.clearButton}
              onPress={() => {
                searchInput.current.clear();
                onClear();
              }}>
              <Image
                source={require('../assets/icons/close.png')}
                style={styles.clear}
              />
            </Pressable>
          )}
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.black,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  clear: {height: 16, width: 16},
  clearButton: {alignSelf: 'center', marginRight: 16},
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    color: colors.white,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  searchBox: {
    backgroundColor: colors.gray,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    flexDirection: 'row',
  },
  backImage: {height: 20, width: 20, marginHorizontal: 20},
});

export default SearchBar;

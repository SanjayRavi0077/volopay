import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet, Pressable, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import colors from '../assets/colors';
import {useNavigation} from '@react-navigation/native';

const ITEM_HEIGHT = 100;

const List = ({gifData, pagination}) => {
  const navigation = useNavigation();

  const getItemLayout = useCallback(
    (data, index) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    }),
    [],
  );

  const navigateToDetail = index => {
    navigation.navigate('Details', {
      index,
    });
  };

  const FlatListItem = ({item, index}) => {
    return (
      <Pressable onPress={() => navigateToDetail(index)} style={{flex: 1}}>
        <FastImage
          key={item.id}
          source={{uri: item.images.fixed_height_downsampled.url}}
          resizeMode={FastImage.resizeMode.stretch}
          style={styles.gif}
        />
      </Pressable>
    );
  };

  return (
    <React.Fragment>
      <FlatList
        data={gifData.data}
        renderItem={FlatListItem}
        numColumns={2}
        onEndReachedThreshold={10}
        onEndReached={pagination}
        getItemLayout={getItemLayout}
        windowSize={5}
        removeClippedSubviews={false}
      />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  gif: {
    flex: 1 / 2,
    height: ITEM_HEIGHT,
    borderRadius: 5,
    marginHorizontal: 4,
    marginVertical: 4,
    backgroundColor: colors.gray,
  },
});

export default List;

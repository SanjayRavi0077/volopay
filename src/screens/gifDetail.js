import React, {useLayoutEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
  View,
  Text,
} from 'react-native';
import {useSelector} from 'react-redux';
import colors from '../assets/colors';
import FastImage from 'react-native-fast-image';

const {width, height} = Dimensions.get('window');

const GifDetail = ({route, navigation}) => {
  const {index} = route.params;
  const gifData = useSelector(state => state.gifData.data[index]);

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

  return (
    <SafeAreaView style={styles.container}>
      <FastImage
        key={gifData.id}
        source={{
          uri: gifData.images.fixed_height_downsampled.url,
          priority: FastImage.priority.high,
        }}
        style={styles.gif}
        resizeMode={FastImage.resizeMode.cover}
      />
      {gifData.hasOwnProperty('user') && (
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            marginVertical: 20,
          }}>
          {gifData.user.hasOwnProperty('avatar_url') && (
            <FastImage
              source={{
                uri: gifData.user.avatar_url,
              }}
              style={{width: 48, height: 48, borderRadius: 100}}
            />
          )}
          <View style={{marginLeft: 16}}>
            {gifData.user.hasOwnProperty('display_name') && (
              <Text style={styles.displayName}>
                {gifData.user.display_name}
              </Text>
            )}
            {gifData.user.hasOwnProperty('username') && (
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.userName}>@{gifData.user.username}</Text>
                {gifData.user.hasOwnProperty('is_verified') &&
                  gifData.user.is_verified === true && (
                    <Image
                      source={require('../assets/icons/verify.png')}
                      style={{
                        width: 14,
                        height: 14,
                        alignSelf: 'center',
                        marginLeft: 4,
                      }}
                    />
                  )}
              </View>
            )}
          </View>
        </View>
      )}
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
  gif: {
    width: width - 40,
    height: height * 0.5,
    alignSelf: 'center',
    marginTop: 24,
    borderRadius: 15,
  },
  displayName: {
    color: colors.white,
    fontSize: 16,
  },
  userName: {
    color: colors.white,
    fontSize: 12,
  },
});

export default GifDetail;

import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Post = () => {
  const postInfo = [
    {
      postTitle: 'Ersel Celal Eren',
      postPersonImage: require('../storage/images/profile1.jpg'),
      postImage: require('../storage/images/post1.jpg'),
      likes: 765,
      isLiked: false,
    },
  ];

  return (
    <View>
      {postInfo.map((data, index) => {
        const [like, setLike] = useState(data.isLiked);
        return (
          <View // Post
            key={index}
            style={{
              paddingBottom: 10,
              borderBottomColor: 'gray',
              borderBottomWidth: 0.1,
              backgroundColor:'white',
              marginBottom: 10,
            }}>
            <View // Post Header
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 7,
                paddingLeft: 12,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={data.postPersonImage}
                  style={{width: 40, height: 40, borderRadius: 100}}
                />
                <View style={{paddingLeft: 5}}>
                  <Text style={{fontSize: 15, fontWeight: 'bold', paddingBottom:15}}>
                    {data.postTitle}
                  </Text>
                </View>
              </View>
              <Feather name="more-vertical" style={{fontSize: 20}} />
            </View>
            
            <View // Post Image
              style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={data.postImage}
                style={{width: '100%', height: 300}}
              />
            </View>
            
        
            <View style={{paddingHorizontal: 15}}> 
              <Text>
                Liked by {like ? 'you and' : ''}{' '}
                {like ? data.likes + 1 : data.likes} others
              </Text>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 14,
                  paddingVertical: 2,
                }}>
                If enjoy the video ! Please like and Subscribe If enjoy the video ! Please like and Subscribe If enjoy the video ! Please like and Subscribe
                If enjoy the video ! Please like and Subscribe If enjoy the video ! Please like and Subscribe If enjoy the video ! Please like and Subscribe :)
              </Text>

            
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1.7, backgroundColor: "rgba(127,127,127,0.4)"}} />
            </View>

                
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              </View>

              
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 12,
                paddingVertical: 15,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => setLike(!like)}>
                    <AntDesign
                        name={like ? 'heart' : 'hearto'}
                        style={{
                        paddingRight: 10,
                        fontSize: 20,
                        color: like ? 'red' : 'black',
                        }}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Ionic
                        name="ios-chatbubble-outline"
                        style={{fontSize: 20, paddingRight: 10}}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Feather name="navigation" style={{fontSize: 20}} />
                    </TouchableOpacity>
                </View>
              <MaterialCommunityIcons name="bookmark-plus-outline" size={30} color="black" />
            </View>

          </View>
        );
      })}
    </View>
  );
};

export default Post;
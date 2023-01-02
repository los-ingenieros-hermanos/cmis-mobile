import React, { useState } from 'react';
import { Button, Modal, Text, View,StyleSheet } from 'react-native';

const FollowedScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View style={{height:100, backgroundColor:'yellow', top:100}}>
      <Button
        title="Show Modal"
        onPress={() => setModalVisible(true)}
      />
      <Modal
        style={styles.modal}
        animationType="slide"
        transparent={false}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{backgroundColor:'blue',height:200, top:500}}>
          <Text>Hello World!</Text>
          <Button
            title="Hide Modal"
            onPress={() => setModalVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'red',
    modalWidth: 20,
    modalHeight: 20,
    color:'green'
  },
});

export default FollowedScreen;

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Ionicons";
import { globalStyles } from '../theme/AppTheme';

interface MenuOption {
  name: string;
  icon: string;
  component: string;
}

export const HomeScreen = () => {
  const menuItem: MenuOption[] = [
    {
      name: "Animation 101",
      icon: "rocket-outline",
      component: "SomeComponent"
    },
    {
      name: "Inputs",
      icon: "home-outline",
      component: "SomeComponent"
    },
    {
      name: "Forms",
      icon: "car-outline",
      component: "SomeComponent"
    },
    // {
    //   name: "Forms",
    //   icon: "car-outline",
    //   component: "SomeComponent"
    // },
    // {
    //   name: "Forms",
    //   icon: "car-outline",
    //   component: "SomeComponent"
    // },
    // {
    //   name: "Forms",
    //   icon: "car-outline",
    //   component: "SomeComponent"
    // }
  ]

  const renderMenuItem = (item: MenuOption) => {
    return <View style={styles.option}>
      <Icon name={item.icon} size={50} />
      <Text>{item.name}</Text>
    </View>
  }

  const listHeader = () => {
    return <View>
      <Text style={globalStyles.textHeader}>Options</Text>
    </View>
  }

  return (
    <View style={{ flex: 0.3, marginTop: 100 }}>
      <FlatList
        data={menuItem}
        renderItem={({ item }) => renderMenuItem(item)}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={() => listHeader()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
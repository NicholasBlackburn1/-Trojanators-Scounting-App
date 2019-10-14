import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default class PageHeaderTeam extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View
          style={{
            height: 52,
            flexDirection: "row",
            marginLeft: 5,
            marginTop: 5
          }}
        >
          <TouchableOpacity style={styles.leftIconButton}>
            <MaterialCommunityIconsIcon name="menu" style={styles.leftIcon} />
          </TouchableOpacity>
          <View style={styles.textWrapper}>
            <Text numberOfLines={1} style={styles.title}>
              Team name
            </Text>
          </View>
          <View style={styles.rect}>
            <Text numberOfLines={1} style={styles.text2}>
              Rank
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row"
          }}
        />
        <TouchableOpacity style={styles.rightIconButton}>
          <MaterialCommunityIconsIcon
            name="dots-vertical"
            style={styles.rightIcon}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(171,35,1,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 4,
    elevation: 3,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0,
    shadowRadius: 1
  },
  leftIconButton: {
    padding: 11
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontFamily: "roboto-regular",
    fontSize: 24
  },
  textWrapper: {
    marginLeft: 14,
    marginTop: 28
  },
  title: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 18,
    lineHeight: 18
  },
  rect: {
    width: 40,
    height: 23,
    marginLeft: 107,
    marginTop: 29
  },
  text2: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 18,
    lineHeight: 18
  },
  rightIconButton: {
    alignItems: "center",
    padding: 11,
    marginRight: 5,
    marginTop: 5
  },
  rightIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontFamily: "roboto-regular",
    fontSize: 24
  }
});
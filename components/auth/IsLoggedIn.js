import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../../redux/actions/index";

const IsLoggedIn = (props) => {
  useEffect(() => {
    props.fetchUser();
  });
  return (
    <View>
      <Text>IsLoggedIn</Text>
    </View>
  );
};

const mapDispatchProps = (dispatch) => {
  bindActionCreators({ fetchUser }, dispatch);
};

export default connect(null, mapDispatchProps)(IsLoggedIn);

const styles = StyleSheet.create({});

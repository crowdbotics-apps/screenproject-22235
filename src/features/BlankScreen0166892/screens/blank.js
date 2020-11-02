import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = {}
  render = () => (
    <View style={styles.View_1}>
      <View style={styles.View_3} />
      <Button
        title="Call Us"
        color="#9babd9"
        onPress={() => alert("Pressed!")}
      />
      <View style={styles.View_8} />
      <Text style={styles.Text_11}>Sample text</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 16 },
  View_1: { flexWrap: "nowrap" },
  View_3: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },

  Button_5: {},
  View_1: { flexWrap: "nowrap" },
  View_3: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  Button_5: {},
  View_8: {
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "stretch"
  },
  Text_11: { textAlign: "justify" }
})

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Blank)

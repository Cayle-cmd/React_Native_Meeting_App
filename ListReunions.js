import React from "react";
import { Button } from "react-native";

export default class ListReunions extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  render() {
    return (
      <Button
        title="Ajouter reunion"
        onPress={() => this.navigation.navigate("Add")}
      />
    );
  }
}

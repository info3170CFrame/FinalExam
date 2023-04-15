import Matter from "matter-js";
import React, { useState } from "react";
import { Dimensions, View, TouchableWithoutFeedback } from "react-native";
import { LearnMoreLinks } from "react-native/Libraries/NewAppScreen";
import SpriteSheet from "rn-sprite-sheet";
const Box = (props) => {
  const width = props.size.width;
  const height = props.size.height;

  const xPos = props.body.position.x - width / 2;
  const yPos = props.body.position.y - height / 2;
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: "white",
        borderStyle: "solid",
        position: "absolute",
        left: xPos,
        top: yPos,
        width: width,
        height: height,
        backgroundColor: props.color,
      }}
    ></View>
  );
};

export default (world, color, pos, size) => {
  const theBox = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label: "Box", restitution: 1, frictionAir: 0, isStatic: true }
  );
  Matter.World.add(world, theBox);
  return { body: theBox, color, pos, size, renderer: <Box /> };
};

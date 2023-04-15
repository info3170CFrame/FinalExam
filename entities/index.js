import Matter from "matter-js";
import { Dimensions } from "react-native";
import Box from "../components/Box";
import Edges from "../components/Edges";
import Constants from "../Constants";

export default (gameWorld) => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  engine.gravity.y = 0.4;

  let windowWidth = Constants.WINDOW_WIDTH;
  let windowHeight = Constants.WINDOW_HEIGHT;

  return {
    physics: { engine, world },
    Square: Box(
      world,
      "blue",
      { x: windowWidth / 2, y: windowHeight / 2 },
      { height: 90, width: 90 }
    ),
    TopEdge: Edges(
      world,
      "red",
      { x: windowWidth / 2, y: 0 },
      { height: 30, width: windowWidth }
    ),
    LeftEdge: Edges(
      world,
      "red",
      { x: 0, y: windowHeight / 2 },
      { height: windowHeight, width: 30 }
    ),
    RightEdge: Edges(
      world,
      "red",
      { x: windowWidth, y: windowHeight / 2 },
      { height: windowHeight, width: 30 }
    ),
    BottomEdge: Edges(
      world,
      "red",
      { x: windowWidth / 2, y: windowHeight },
      { height: 30, width: windowWidth }
    ),
  };
};

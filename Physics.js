import Matter, { Sleeping } from "matter-js";
import Box from "./components/Box";
const Physics = (entities, { touches, time }) => {
  let engine = entities.physics.engine;

  touches
    .filter((t) => t.type === "press")
    .forEach((t) => {
      //code for mobile touch
    });
  Matter.Engine.update(engine, time.delta);

  Matter.Events.on(engine, "collisionStart", (event) => {
    //collision reaction code here
  });
  return entities;
};

export default Physics;

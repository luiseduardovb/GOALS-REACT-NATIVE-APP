import React from "react";
import { observer } from "mobx-react";
import Svg, { G, Circle } from "react-native-svg";

//Styles
import { StyledView } from "./styles";
import { Animated, Text } from "react-native";

const PopularityGraph = ({ route }) => {
  const { goal } = route.params;

  let percentage = 1; /// (this would be progress.targetProgress)
  let radius = 90;
  let strokeWidth = 20;
  let color = "orange";
  let color2 = "lime";
  let color3 = "blue";
  let color4 = "red";
  let max = 5; ///(this would be the goal.target)

  const AnimatedCircle = Animated.createAnimatedComponent(Circle);

  const circleRef = React.useRef();
  const halfCircle = radius + strokeWidth;
  const circleCircumference = 2 * Math.PI * radius;
  // maxPerc isn't a better name than maxPercentage. It's like 6 extra characters, come on -.-
  const maxPerc = (100 * percentage) / max;
  const strokeDashoffset =
    circleCircumference - (circleCircumference * maxPerc) / 100;

  // if the code below is difficult to understand, or if you think you might forget how it works later,
  // then it's a good idea to add comments to explain how it works, so that in the future if you come 
  // back to it, you'll quickly know how it works without re-learning it from the docs.
  return (
    <StyledView>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cx="50%"
            cy="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeOpacity={0.2}
          />
          <AnimatedCircle
            ref={circleRef}
            cx="50%"
            cy="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeDasharray={circleCircumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
          <Circle
            cx="50%"
            cy="50%"
            stroke={color2}
            strokeWidth={strokeWidth}
            r={radius / 1.3}
            fill="transparent"
            strokeOpacity={0.2}
          />
          <AnimatedCircle
            ref={circleRef}
            cx="50%"
            cy="50%"
            stroke={color2}
            strokeWidth={strokeWidth}
            r={radius / 1.3}
            fill="transparent"
            strokeDasharray={circleCircumference}
            strokeDashoffset={strokeDashoffset * 0.6}
            strokeLinecap="round"
          />
          <Circle
            cx="50%"
            cy="50%"
            stroke={color3}
            strokeWidth={strokeWidth}
            r={radius / 1.85}
            fill="transparent"
            strokeOpacity={0.2}
          />
          <AnimatedCircle
            ref={circleRef}
            cx="50%"
            cy="50%"
            stroke={color3}
            strokeWidth={strokeWidth}
            r={radius / 1.85}
            fill="transparent"
            strokeDasharray={circleCircumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
          <Circle
            cx="50%"
            cy="50%"
            stroke={color4}
            strokeWidth={strokeWidth}
            r={radius / 3}
            fill="transparent"
            strokeOpacity={0.2}
          />
          <AnimatedCircle
            ref={circleRef}
            cx="50%"
            cy="50%"
            stroke={color4}
            strokeWidth={strokeWidth}
            r={radius / 3}
            fill="transparent"
            strokeDasharray={circleCircumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </G>
      </Svg>

      <Text
        style={{
          fontSize: radius / 3,
          color: color,
          fontWeight: "900",
          textAlign: "center",
        }}
      >
        {maxPerc} %
      </Text>
    </StyledView>
  );
};

export default observer(PopularityGraph);

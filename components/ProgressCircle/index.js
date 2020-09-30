import React from "react";
import { observer } from "mobx-react";
import Svg, { G, Circle } from "react-native-svg";

//Styles
import { StyledView } from "./styles";
import { Animated, Text } from "react-native";

const ProgressCircle = ({ goal }) => {
  let percentage = goal.Progress.targetProgress;
  console.log("ProgressCircle -> percentage", percentage);
  let radius = 90;
  let strokeWidth = 20;
  let color = "#e2e2e2";
  let max = goal.target;
  console.log("ProgressCircle -> max", max);

  const AnimatedCircle = Animated.createAnimatedComponent(Circle);

  const circleRef = React.useRef();
  const halfCircle = radius + strokeWidth;
  const circleCircumference = 2 * Math.PI * radius;
  const maxPerc = (100 * percentage) / max;
  console.log("ProgressCircle -> maxPerc", maxPerc);
  const strokeDashoffset =
    circleCircumference - (circleCircumference * maxPerc) / 100;

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
        </G>
      </Svg>
      <Text
        style={{
          fontSize: radius / 3,
          color: "#DCD0D4",
          fontWeight: "900",
          textAlign: "center",
        }}
      >
        {maxPerc} %
      </Text>
    </StyledView>
  );
};

export default observer(ProgressCircle);

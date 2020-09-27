import React from "react";
import { observer } from "mobx-react";
import { PieChart } from "react-native-chart-kit";

//Styles
import { StyledCard, StyledTitle } from "./styles";

const CategoriesPieChart = () => {
  let data = [
    {
      name: "Fitness",
      percentage: 20,
      color: "royalblue",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
    {
      name: "Weight Loss",
      percentage: 30,
      color: "orange",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
    {
      name: "Reading",
      percentage: 50,
      color: "lime",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
  ];

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(130, 205, 205, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <StyledCard>
      <StyledTitle>Categories</StyledTitle>
      <PieChart
        style={{ marginTop: 30 }}
        data={data}
        width={350}
        height={220}
        chartConfig={chartConfig}
        accessor="percentage"
        backgroundColor="transparent"
        paddingLeft="1"
        absolute
      />
    </StyledCard>
  );
};

export default observer(CategoriesPieChart);

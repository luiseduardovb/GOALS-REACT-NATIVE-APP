import React from "react";
import { observer } from "mobx-react";
import { PieChart } from "react-native-chart-kit";

//Styles
import { StyledCard, StyledTitle } from "./styles";
import categoryStore from "../../stores/categoryStore";
import CategoryItem from "./CategoryItem";
import { Spinner, Text } from "native-base";

const CategoriesPieChart = ({ category }) => {
  // console.log("CategoriesPieChart -> category", category);
  // if (!category) return <Spinner />;
  // const whatever = category.Goals.filter((goal) => goal.Tag.catId === 2);

  // const leng = whatever.length;
  // console.log("CategoriesPieChart -> leng", leng);
  // let categoryList = [];
  // let categoryList2 = [];

  // let categories = categoryStore.categories.forEach((category) =>
  //   categoryList.push(category)
  // );

  // console.log("CategoriesPieChart -> categoryList", categoryList);

  // let categories2 = categoryList.find((goal) => goal);
  // console.log("CategoriesPieChart -> categories2", categories2);

  //   <>
  //     <Text>name:{category.name}</Text>
  //     <Text>percentage: {category.percentage}</Text>
  //     <Text>color: {category.color}</Text>
  //     <Text>legendFontColor:{category.legendFontColor}</Text>
  //     <Text>legendFontSize: {category.legendFontSize}</Text>
  //   </>
  // ));

  // console.log("CategoriesPieChart -> categories", categories);

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

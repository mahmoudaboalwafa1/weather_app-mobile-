import React from "react";
import { View, Text, Image } from "react-native";
import Styles from "./StyleHome";

const StateWeather = ({ weather }) => {
  const textState = weather?.current?.condition?.text;
  return (
    <View style={Styles.areaContainer}>
      <Text style={Styles.titleArea}>
        {" "}
        {textState === "Sunny"
          ? "مشمس"
          : textState === "Hot"
          ? "حار"
          : textState === "Cloudy"
          ? "غائم"
          : textState === "Partly cloudy"
          ? "غائم جزئيا"
          : textState === "Cold"
          ? "بارد"
          : textState === "Snowy"
          ? "مثلج"
          : textState === "Thunderstorms"
          ? "عواصف رعدية"
          : textState === "Foggy"
          ? "ضباب"
          : textState === "Heavy Rain"
          ? "ممطر بغزارة"
          : textState === "Heavy Snowfall"
          ? "تساقط الثلوج الكثيفة"
          : textState === "windy"
          ? "رياح قوية"
          : "..."}
      </Text>
      <Text style={Styles.titleArea}>
        اخر تحديث: {weather?.current?.last_updated}
      </Text>
    </View>
  );
};

export default StateWeather;

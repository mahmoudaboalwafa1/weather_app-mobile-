import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  viewHome: { flex: 1, paddingTop: 45 },
  inputContainer: {
    alignItems: "center",
  },
  inputWeather: {
    borderColor: "black",
    borderWidth: 2,
    height: 40,
    width: 200,
    paddingHorizontal: 10,
  },
  areaContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },
  titleArea: {
    color: "green",
    textAlign: "center",
    fontSize: 25,
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  tempWeather: (titleArea) => {
    return {
      ...titleArea,
      fontSize: 100,
      textShadowColor: "black",
    };
  },
  quotesContainer: { marginTop: 50 },
});

export default Styles;

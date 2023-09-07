// Learn Stack options
import React, { useState } from "react";
import {
  ImageBackground,
  Button,
  TextInput,
  View,
  Text,
  Image,
} from "react-native";
import axios from "axios";
import Styles from "./StyleHome";
import weatherBackground from "../assets/weather_background.jpg";
import SunnyImage from "../assets/sunny.jpg";
import StateWeather from "./StateWeather";
import QuotesData from "./quotes.json";

const Home = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState();
  const [quotes, setQuotes] = useState({ text: "", author: "" });
  const images = [SunnyImage, weatherBackground];
  const handleBtnSearch = async () => {
    if (city.trim()) {
      const res = await axios
        .get(
          `http://api.weatherapi.com/v1/current.json?key=f54562b5385e4f2d90e71730230709&q=${city}&aqi=yes
        `
        )
        .then((response) => {
          response && setWeather(response.data);
          setQuotes({
            text: QuotesData[Math.floor(Math.random() * QuotesData.length)]
              ?.text,
            author:
              QuotesData[Math.floor(Math.random() * QuotesData.length)]?.author,
          });
        });
    }
  };
  return (
    <ImageBackground
      source={
        weather?.current?.condition?.text === "Sunny" ? images[0] : images[1]
      }
      style={Styles.viewHome}
    >
      <View style={Styles.inputContainer}>
        <TextInput
          placeholder="Cario ادخل مدينك مثال"
          style={Styles.inputWeather}
          onChangeText={(text) => setCity(text)}
          value={city}
        />
      </View>
      <View
        style={{
          flex: 2 / 10,
          height: 50,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button color="green" title="بحث" onPress={handleBtnSearch} />
      </View>
      {weather ? (
        <View>
          <View style={Styles.areaContainer}>
            <Text style={Styles.titleArea}>{weather?.location?.country}</Text>
            <Text style={{ ...Styles.titleArea, paddingVertical: 30 }}>
              {weather?.location?.name}
            </Text>
            <Text style={Styles.titleArea}>{weather?.location?.region}</Text>
          </View>
          <Text style={Styles.tempWeather(Styles.titleArea)}>
            {weather?.current?.temp_c + "°C"}
          </Text>
          <StateWeather weather={weather} />
          <View style={Styles.quotesContainer}>
            <Text style={{ ...Styles.titleArea, paddingVertical: 30 }}>
              مقولة: {quotes?.text}
            </Text>
            <Text style={Styles.titleArea}>الكاتب: {quotes?.author}</Text>
          </View>
        </View>
      ) : (
        ""
      )}
    </ImageBackground>
  );
};

export default Home;

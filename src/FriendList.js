import { ScrollView, View } from "react-native";
import Margin from "./Margin";
import Profile from "./Profile";

export default (props) => {
  return props.isOpened ? (
    <ScrollView showsVerticalScrollIndicator={false}>
      {props.data.map((item, index) => (
        <View key={index}>
          <Profile
            uri={item.uri}
            name={item.name}
            introduction={item.introduction}
          />
          <Margin height={13} />
        </View>
      ))}
    </ScrollView>
  ) : null;
};

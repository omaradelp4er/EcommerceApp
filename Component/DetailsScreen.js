import React from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  Button,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Add_Item } from "../Redux/ActionCreators/CartActionCreator";
function DetailsScreen({ route, navigation }, props) {
  const dispatch = useDispatch();
  const { productId } = route.params;
  const product = useSelector((state) =>
    state.logreducer.availableProduct.find((prod) => prod.id == productId)
  );

  navigation.setOptions({
    headerTitle: product.title,
  });
  const AddToCartHandler = (product) => {
    dispatch(Add_Item(product));
  };
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: product.imageUrl }} />
      <View style={styles.actions}>
        <Button
          color={"black"}
          title="Add to Cart"
          onPress={() => {
            AddToCartHandler(product);
          }}
        />
      </View>
      <Text style={styles.price}>$ {product.price.toFixed(2)}</Text>
      <Text style={styles.description}> {product.description}</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
  },
  actions: {
    marginVertical: 10,
    alignItems: "center",
  },
});

export default DetailsScreen;

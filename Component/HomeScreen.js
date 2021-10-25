import React from "react";
import { View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./Shop/ProductItem";
import { Add_Item } from "../Redux/ActionCreators/CartActionCreator";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../Component/Shop/HeaderButton";

function HomeScreen({ navigation }) {
  const products = useSelector((state) => state.logreducer.availableProduct);
  const dispatch = useDispatch();
  const AddToCartHandler = (product) => {
    dispatch(Add_Item(product));
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headertitle: "All Product",
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Cart"
            iconName={"md-cart"}
            onPress={() => {
              navigation.navigate("cart");
            }}
          />
        </HeaderButtons>
      ),
      title: "All Product",
      headerStyle: {
        backgroundColor: "#f4511e",
      },
      headerTitleStyle: {
        position: "absolute",
        backgroundColor: "transparent",
        textAlign: "center",
      },
    });
  }, [navigation]);
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FlatList
        data={products}
        renderItem={(itemdata) => (
          <ProductItem
            image={itemdata.item.imageUrl}
            title={itemdata.item.title}
            price={itemdata.item.price}
            onViewDetails={() => {
              navigation.navigate("details", {
                productId: itemdata.item.id,
              });
            }}
            onAddToCart={() => {
              AddToCartHandler(itemdata.item);
            }}
          />
        )}
      />
    </View>
  );
}

export default HomeScreen;

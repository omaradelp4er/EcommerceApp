import React, { useEffect } from "react";
import { View, Button, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./Shop/ProductItem";
import { Log_Out } from "../Redux/ActionCreators/LoginActionsCreator";
import { Add_Item } from "../Redux/ActionCreators/CartActionCreator";
function HomeScreen({ navigation }, { porps }) {
  const islogedin = useSelector((state) => state.logreducer.isLoggedIn);
  const products = useSelector((state) => state.logreducer.availableProduct);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if(islogedin){
  //     navigation.replace("login")
  //   }
  // }, [islogedin]);


  const LogOutHandler = () => {
    dispatch(Log_Out());
    if (islogedin) {
      navigation.replace("login");
    }
  };
  // const AddToCartHandler = product => {
  //   dispatch(Add_Item(product));
  // };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={LogOutHandler} title="LogOut" color="black" />
      ),
      headerLeft: () => (
        <Button
          onPress={() => navigation.navigate("cart")}
          title="Cart"
          color="black"
        />
      ),
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
            onAddToCart={()=>{}}
          />
        )}
      />
    </View>
  );
}

export default HomeScreen;

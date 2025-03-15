import React from "react";
import { ButtonBase, Typography } from "@mui/material";
import useTheme from "../../hooks/useTheme";
import { addItemToCart } from "../../API/services/cartService.js"; // Import the API function

export default function Button({ productId }) {
  const theme = useTheme();

  const handleAddToCart = async () => {
    try {
      await addItemToCart(productId, 1); // Add the item to the cart by sending the product ID to the API
      console.log(`Product with ID ${productId} added to cart!`);
      // Optionally, trigger a UI update here (e.g., updating the cart count)
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return (
    <ButtonBase sx={{
      backgroundColor: theme.secondaryColor,
      width: "92%",
      borderRadius: "11px",
      height: "36px",
      margin: "8px 4% 10px 4%",
    }} onClick={handleAddToCart} // Handle the click event
    >
      <Typography sx={{
        color: "white",
        fontWeight: "bold",
        marginTop: "8px",
        fontFamily: "Ubuntu",
      }}>
        У кошик
      </Typography>
    </ButtonBase>
  );
}

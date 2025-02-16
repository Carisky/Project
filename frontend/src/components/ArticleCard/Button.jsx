import React from "react";
import { ButtonBase, Typography } from "@mui/material";
import useTheme from "../../hooks/useTheme";
import { addItemToCart } from "../../API/services/cartService.js"; // Import the API function

export default function Button({ productId }) {
  const theme = useTheme();

  const handleAddToCart = async () => {
    try {
      await addItemToCart(productId,1); // Add the item to the cart by sending the product ID to the API
      console.log(`Product with ID ${productId} added to cart!`);
      // Optionally, trigger a UI update here (e.g., updating the cart count)
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return (
    <ButtonBase
      onClick={handleAddToCart} // Handle the click event
      sx={{
        backgroundColor: theme.secondaryColor,
        width: "100%",
        borderRadius: "11px",
        height: "36px",
        marginBottom: "10px",
        marginTop: "8px",
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontWeight: "bold",
        }}
      >
        У кошик
      </Typography>
    </ButtonBase>
  );
}

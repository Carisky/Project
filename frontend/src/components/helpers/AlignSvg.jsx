import React from "react";
import { Box } from "@mui/material";

export default function AlignSvg({children}) {
    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            {children}
        </Box>
    )
}
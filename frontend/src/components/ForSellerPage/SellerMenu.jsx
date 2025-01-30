import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import useTheme from "../../hooks/useTheme";
import { useMediaQuery } from "../../hooks/useMediaQuery.js";
import { LogoUser, LogoStatic, LogoMyShop, LogoOrder, LogoTick, LogoLamp, LogoStar2, LogoLine } from "../../icons/icons.jsx";

export default function SellerMenu() {

    const theme = useTheme();
  
    const isMobile = useMediaQuery("(max-width: 500px)");  
    const isDesktop = useMediaQuery("(min-width: 500.01px)");
  
    const AlignSvg = ({ children }) => (
        <Box display="flex" justifyContent="center" alignItems="center">
            {children}
        </Box>
    );

    const AlignSvgLine = ({ children }) => (
        <Box sx={{
            marginLeft: "30px",
            marginRight: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }}>
            {children}
        </Box>
    );

    const nameSeller = "Coffe Original";
    const quantity = 3;

    const textOneStyles = {
        color: theme.mainText,
        fontSize: "24px",
        fontWeight: "bold",
        fontFamily: "Montserrat",
    };
    
    const textTwoStyles = {
        color: theme.secondaryText,
        fontSize: "16px",
        fontFamily: "Montserrat",
    };
    
    const blockStyles = {
        borderRadius: "20px",
        padding: "10px",
        marginTop: "10px",
        marginLeft: "20px",
        marginRight: "20px",
        marginBottom: "10px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        display: "flex",
        justifyContent: "space-between",
    };

    return (
    <>
        {isDesktop &&
        <>
            <Box sx={{
                height: "1050px",
                width: "82%",
                marginLeft: "9%",
                marginRight: "9%",
                marginTop: "10px",
                marginBottom: "40px",
                display: "flex",
                //overflowBlock: "scroll",
                backgroundColor: theme.backgroundColor,
            }}>
                <Box sx={{
                    height: "100%",
                    width: "29%",
                    display: "flex",
                    flexWrap: "wrap",
                    alignContent: "space-between",
                }}>
                    <Box sx={{
                        height: "49%",
                        width: "100%",
                        borderRadius: "20px",
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    }}>
                        <Box sx={{
                            marginLeft: "20px",
                            marginRight: "10px",
                            marginTop: "10px",
                            marginBottom: "20px",
                            display: "flex",
                            cursor: "pointer",
                        }}>
                            <AlignSvg><LogoUser/></AlignSvg>
                            <Box sx={{
                                alignContent: "center",
                                marginLeft: "10px",
                            }}>
                                <Typography sx={textOneStyles}>{nameSeller}</Typography>
                                <Typography sx={textTwoStyles}>Змінити дані магазина</Typography>
                            </Box>
                        </Box>
                        <Box sx={blockStyles}>
                            <Box>
                                <Typography sx={textOneStyles}>Статистика</Typography>
                                <Typography sx={textTwoStyles}>Дивитись</Typography>
                            </Box>
                            <AlignSvg><LogoStatic/></AlignSvg>
                        </Box>
                        <Box sx={blockStyles}>
                            <Box>
                                <Typography sx={textOneStyles}>Управління</Typography>
                                <Typography sx={textTwoStyles}>Дивитись</Typography>
                            </Box>
                            <AlignSvg><LogoMyShop/></AlignSvg>
                        </Box>
                        <Box sx={blockStyles}>
                            <Box>
                                <Typography sx={textOneStyles}>Замовлення</Typography>
                                <Typography sx={textTwoStyles}>Дивитись</Typography>
                            </Box>
                            <AlignSvg><LogoOrder/></AlignSvg>
                        </Box>
                        <Box sx={{
                            borderRadius: "20px",
                            padding: "10px",
                            marginTop: "10px",
                            marginLeft: "20px",
                            marginRight: "20px",
                            marginBottom: "10px",
                        }}>
                            <Typography sx={textOneStyles}>Сервіси та допомога</Typography>
                            <Typography sx={textTwoStyles}>Написати в підтримку</Typography>
                            <Typography sx={textTwoStyles} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" backgroundColor="#82b1ff">Повернення товару</Typography>
                            <Typography sx={textTwoStyles}>Вийти з акаунту</Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        height: "49%",
                        width: "100%",
                        borderRadius: "20px",
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                        display: "flex",
                        flexWrap: "wrap",
                        alignContent: "space-around"
                    }}>
                        <Box sx={{
                            margin: "20px 30px 0px 30px"
                        }}>
                            <Typography sx={textOneStyles}>Ваші досягнення на цьому тижні:</Typography>
                        </Box>
                        <Box sx={{
                            marginTop: "10px",
                            marginLeft: "30px",
                            marginRight: "20px",
                            marginBottom: "10px",
                            
                        }}>
                            <Typography sx={{
                                color: theme.mainText,
                                fontSize: "24px",
                                fontFamily: "Montserrat",
                            }}>Виконано замовлень:</Typography>
                            <Box sx={{
                                display: "flex",
                            }}>
                                <Typography sx={textOneStyles} marginRight="20px">22</Typography>
                                <AlignSvg><LogoTick/></AlignSvg>
                            </Box>
                        </Box>
                        <AlignSvgLine><LogoLine/></AlignSvgLine>
                        <Box sx={{
                            marginTop: "10px",
                            marginLeft: "30px",
                            marginRight: "20px",
                            marginBottom: "10px",
                        }}>
                            <Typography sx={{
                                color: theme.mainText,
                                fontSize: "24px",
                                fontFamily: "Montserrat",
                            }}>Рейтинг зріс на:</Typography>
                            <Box sx={{
                                display: "flex",
                            }}>
                                <Typography sx={textOneStyles} marginRight="20px">0.3</Typography>
                                <AlignSvg><LogoStar2/></AlignSvg>
                            </Box>
                        </Box>
                        <AlignSvgLine><LogoLine/></AlignSvgLine>
                        <Box sx={{
                            marginTop: "10px",
                            marginLeft: "30px",
                            marginRight: "20px",
                            marginBottom: "10px",
                        }}>
                            <Box sx={{
                                display: "flex",
                            }}>
                                <AlignSvg><LogoLamp/></AlignSvg>
                                <Typography sx={textOneStyles} marginLeft="20px">Порада</Typography>
                            </Box>
                            <Typography sx={{
                                color: theme.mainText,
                                fontSize: "24px",
                                fontFamily: "Montserrat",
                            }}>Додайте опис до {quantity} товарів, щоб підвищити їх продаж!</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{
                    height: "100%",
                    width: "71%",
                    marginLeft: "20px",
                    display: "flex",
                    flexWrap: "wrap",
                    alignContent: "space-between",
                }}>
                    <Box sx={{
                        height: "37%",
                        width: "100%",
                        borderRadius: "20px",
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    }}>
                        <Box sx={{
                            margin: "20px 30px 0px 30px"
                        }}>
                            <Box sx={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}>
                                <Typography sx={textOneStyles}>Ваш рейтинг продавця</Typography>
                                <Typography sx={textOneStyles}>МІСЯЦЬ</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{
                        height: "20%",
                        width: "100%",
                        borderRadius: "20px",
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    }}><span>HELLO WORLD!!!</span></Box>
                    <Box sx={{
                        height: "20%",
                        width: "100%",
                        borderRadius: "20px",
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    }}><span>HELLO WORLD!!!</span></Box>
                    <Box sx={{
                        height: "20%",
                        width: "100%",
                        borderRadius: "20px",
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    }}><span>HELLO WORLD!!!</span></Box>
                </Box>
            </Box>
        </>
        }
        {isMobile &&
            <>
                <span>HELLO WORLD!!!</span>
                <span>HELLO WORLD!!!HELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLO</span>
            </>
        }
    </>
  );
}
import React, { useState } from "react";
import { Box, Button, Typography, Select, Option, ButtonBase, MenuItem, InputLabel, FormControl, Modal } from "@mui/material";
import useTheme from "../../hooks/useTheme";
import { useMediaQuery } from "../../hooks/useMediaQuery.js";
import TopList from "./TopList.jsx";
import GraphSales from "./GraphSales.jsx";
import ProductTable from "./ProductTable.jsx";
import AddArticle from "./AddArticle.jsx";
import { LogoUser,
    LogoStatic,
    LogoMyShop,
    LogoOrder,
    LogoTick,
    LogoLamp,
    LogoStar2,
    LogoLine,
    LogoAva,
    LogoStar4smile,
    LogoUp,
    LogoStar3,
    LogoLiner5, LogoLiner4, LogoLiner3, LogoLiner2, LogoLiner1 } from "../../icons/icons.jsx";

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
    
    const [swap,setSwap] = useState("statistics");
    const [addArticle, setaddArticle] = useState(false);
    const addArticleModal = () => setaddArticle(!addArticle);
    
    const change = () => {
        switch(swap) {
            case "statistics":
                return (
                <>
                <Box sx={{
                        height: "25%",
                        width: "100%",
                        borderRadius: "20px",
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    }}>
                        <Box sx={{
                            margin: "10px 30px 10px 30px",
                            display: "flex",
                            justifyContent: "space-between",
                        }}>
                            <Typography sx={textOneStyles}>Ваш рейтинг продавця</Typography>
                            <FormControl>
                                <InputLabel id="demo-mutiple-name-label">МІСЯЦЬ</InputLabel>
                                <Select labelId="demo-mutiple-name-label" sx={{
                                    height: "50px",
                                    width: "150px",
                                }}>
                                    <MenuItem value={1}>СІЧЕНЬ</MenuItem>
                                    <MenuItem value={2}>ЛЮТИЙ</MenuItem>
                                    <MenuItem value={3}>БЕРЕЗЕНЬ</MenuItem>
                                    <MenuItem value={4}>КВІТЕНЬ</MenuItem>
                                    <MenuItem value={5}>ТРАВЕНЬ</MenuItem>
                                    <MenuItem value={6}>ЧЕРВЕНЬ</MenuItem>
                                    <MenuItem value={7}>ЛИПЕНЬ</MenuItem>
                                    <MenuItem value={8}>СЕРПЕНЬ</MenuItem>
                                    <MenuItem value={9}>ВЕРЕСЕНЬ</MenuItem>
                                    <MenuItem value={10}>ЖОВТЕНЬ</MenuItem>
                                    <MenuItem value={11}>ЛИСТОПАД</MenuItem>
                                    <MenuItem value={12}>ГРУДЕНЬ</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{
                            height: "65%",
                            display: "flex",
                            justifyContent: "space-between",
                            margin: "10px 30px 10px 30px",
                        }}>
                            <Box sx={{
                                width: "50%",
                            }}>
                                <Box sx={{
                                    height: "20%",
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: "30px"
                                }}>
                                    <Typography sx={{
                                        color: theme.mainText,
                                        fontSize: "48px",
                                        fontWeight: "bold",
                                        fontFamily: "Montserrat",
                                        marginRight: "10px",
                                    }}>4.7</Typography>
                                    <AlignSvg><LogoStar3/></AlignSvg>
                                    <Typography sx={{
                                        color: theme.secondaryText,
                                        fontSize: "32px",
                                        fontFamily: "Montserrat",
                                        marginLeft: "30px",
                                        marginRight: "10px",
                                    }}>0.3</Typography>
                                    <AlignSvg><LogoUp/></AlignSvg>
                                </Box>
                                <Box sx={{
                                    height: "70%",
                                    display: "flex",
                                    flexWrap: "wrap",
                                    alignContent: "space-around",
                                }}>
                                    <Box sx={{width: "100%", display: "flex", justifyContent: "space-between",}}>
                                        <Typography sx={{
                                            color: theme.secondaryText,
                                            fontSize: "18px",
                                            fontFamily: "Montserrat",
                                        }}>Якість обслуговування</Typography>
                                        <Box sx={{display: "flex"}}>
                                            <Typography sx={{
                                                color: theme.secondaryText,
                                                fontSize: "18px",
                                                fontFamily: "Montserrat",
                                            }}>4.3</Typography>
                                            <AlignSvg><LogoStar4smile/></AlignSvg>
                                        </Box>
                                    </Box>
                                    <Box sx={{width: "100%", display: "flex", justifyContent: "space-between"}}>
                                        <Typography sx={{
                                            color: theme.secondaryText,
                                            fontSize: "18px",
                                            fontFamily: "Montserrat",
                                        }}>Дотримання термінів доставки</Typography>
                                        <Box sx={{display: "flex"}}>
                                            <Typography sx={{
                                                color: theme.secondaryText,
                                                fontSize: "18px",
                                                fontFamily: "Montserrat",
                                            }}>4.1</Typography>
                                            <AlignSvg><LogoStar4smile/></AlignSvg>
                                        </Box>
                                    </Box>
                                    <Box sx={{width: "100%", display: "flex", justifyContent: "space-between"}}>
                                        <Typography sx={{
                                            color: theme.secondaryText,
                                            fontSize: "18px",
                                            fontFamily: "Montserrat",
                                        }}>Актуальність ціни та наявності</Typography>
                                        <Box sx={{display: "flex"}}>
                                            <Typography sx={{
                                                color: theme.secondaryText,
                                                fontSize: "18px",
                                                fontFamily: "Montserrat",
                                            }}>3.9</Typography>
                                            <AlignSvg><LogoStar4smile/></AlignSvg>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{
                                width: "30%",
                                height: "100%",
                                display: "flex",
                                flexWrap: "wrap",
                                alignContent: "space-around",
                            }}>
                                <Box sx={{display: "flex"}}>
                                    <AlignSvg><LogoStar4smile/></AlignSvg>
                                    <Typography marginLeft="5px">5</Typography>
                                    <AlignSvgLine><LogoLiner5/></AlignSvgLine>
                                    <Typography>11</Typography>
                                </Box>
                                <Box sx={{display: "flex"}}>
                                    <AlignSvg><LogoStar4smile/></AlignSvg>
                                    <Typography marginLeft="5px">4</Typography>
                                    <AlignSvgLine><LogoLiner4/></AlignSvgLine>
                                    <Typography>10</Typography>
                                </Box>
                                <Box sx={{display: "flex"}}>
                                    <AlignSvg><LogoStar4smile/></AlignSvg>
                                    <Typography marginLeft="5px">3</Typography>
                                    <AlignSvgLine><LogoLiner3/></AlignSvgLine>
                                    <Typography>5</Typography>
                                </Box>
                                <Box sx={{display: "flex"}}>
                                    <AlignSvg><LogoStar4smile/></AlignSvg>
                                    <Typography marginLeft="5px">2</Typography>
                                    <AlignSvgLine><LogoLiner2/></AlignSvgLine>
                                    <Typography>2</Typography>
                                </Box>
                                <Box sx={{display: "flex"}}>
                                    <AlignSvg><LogoStar4smile/></AlignSvg>
                                    <Typography marginLeft="5px">1</Typography>
                                    <AlignSvgLine><LogoLiner1/></AlignSvgLine>
                                    <Typography>6</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{
                        height: "11%",
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                    }}>
                        <Box sx={{
                            height: "100%",
                            width: "49%",
                            borderRadius: "20px",
                            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                        }}>
                            <Box sx={{
                            margin: "10px 30px 10px 30px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            }}>
                                <Typography sx={textOneStyles}>Продажі товарів</Typography>
                                <FormControl>
                                    <InputLabel id="demo-mutiple-name-label">МІСЯЦЬ</InputLabel>
                                    <Select labelId="demo-mutiple-name-label" sx={{
                                        height: "50px",
                                        width: "150px",
                                    }}>
                                        <MenuItem value={1}>СІЧЕНЬ</MenuItem>
                                        <MenuItem value={2}>ЛЮТИЙ</MenuItem>
                                        <MenuItem value={3}>БЕРЕЗЕНЬ</MenuItem>
                                        <MenuItem value={4}>КВІТЕНЬ</MenuItem>
                                        <MenuItem value={5}>ТРАВЕНЬ</MenuItem>
                                        <MenuItem value={6}>ЧЕРВЕНЬ</MenuItem>
                                        <MenuItem value={7}>ЛИПЕНЬ</MenuItem>
                                        <MenuItem value={8}>СЕРПЕНЬ</MenuItem>
                                        <MenuItem value={9}>ВЕРЕСЕНЬ</MenuItem>
                                        <MenuItem value={10}>ЖОВТЕНЬ</MenuItem>
                                        <MenuItem value={11}>ЛИСТОПАД</MenuItem>
                                        <MenuItem value={12}>ГРУДЕНЬ</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{
                                margin: "10px 30px 10px 30px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}>
                                <Typography sx={{
                                    color: theme.mainText,
                                    fontSize: "28px",
                                    fontWeight: "bold",
                                    fontFamily: "Montserrat",
                                    marginRight: "10px",
                                }}>2 340 ₴</Typography>
                                <Typography sx={{
                                    color: theme.secondaryText,
                                    fontSize: "17px",
                                    fontWeight: "bold",
                                    fontFamily: "Montserrat",
                                    marginRight: "10px",
                                }}>22 товара</Typography>
                            </Box>
                        </Box>
                        <Box sx={{
                            height: "100%",
                            width: "49%",
                            borderRadius: "20px",
                            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                        }}>
                            <Box sx={{
                            margin: "10px 30px 10px 30px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            }}>
                                <Typography sx={textOneStyles}>Переглянули товари</Typography>
                                <FormControl>
                                    <InputLabel id="demo-mutiple-name-label">МІСЯЦЬ</InputLabel>
                                    <Select labelId="demo-mutiple-name-label" sx={{
                                        height: "50px",
                                        width: "150px",
                                    }}>
                                        <MenuItem value={1}>СІЧЕНЬ</MenuItem>
                                        <MenuItem value={2}>ЛЮТИЙ</MenuItem>
                                        <MenuItem value={3}>БЕРЕЗЕНЬ</MenuItem>
                                        <MenuItem value={4}>КВІТЕНЬ</MenuItem>
                                        <MenuItem value={5}>ТРАВЕНЬ</MenuItem>
                                        <MenuItem value={6}>ЧЕРВЕНЬ</MenuItem>
                                        <MenuItem value={7}>ЛИПЕНЬ</MenuItem>
                                        <MenuItem value={8}>СЕРПЕНЬ</MenuItem>
                                        <MenuItem value={9}>ВЕРЕСЕНЬ</MenuItem>
                                        <MenuItem value={10}>ЖОВТЕНЬ</MenuItem>
                                        <MenuItem value={11}>ЛИСТОПАД</MenuItem>
                                        <MenuItem value={12}>ГРУДЕНЬ</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{
                                margin: "10px 30px 10px 30px",
                                display: "flex",
                                alignItems: "center",
                            }}>
                                <Typography sx={{
                                    color: theme.mainText,
                                    fontSize: "28px",
                                    fontWeight: "bold",
                                    fontFamily: "Montserrat",
                                    marginRight: "10px",
                                }}>731</Typography>
                                <AlignSvg><LogoAva/></AlignSvg>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{
                        height: "28%",
                        width: "100%",
                        borderRadius: "20px",
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    }}>
                        <Box sx={{
                            margin: "10px 30px 10px 30px",
                            display: "flex",
                            justifyContent: "space-between",
                        }}>
                            <Typography sx={textOneStyles}>Топ товарів за переглядами</Typography>
                            <Box sx={{
                                height: "40px",
                                width: "150px",
                                backgroundColor: "#F1F1F5",
                                borderRadius: "10px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <Typography sx={{
                                    color: theme.mainText,
                                    fontWeight: "medium",
                                    fontSize: "16px",
                                    fontFamily: "Montserrat",
                                }}>Всі товари</Typography>
                            </Box>
                        </Box>
                        <TopList/>
                    </Box>
                    <Box sx={{
                        height: "34%",
                        width: "100%",
                        borderRadius: "20px",
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    }}>
                        <Box sx={{
                            margin: "10px 30px 10px 30px",
                            display: "flex",
                            justifyContent: "space-between",
                        }}>
                            <Typography sx={textOneStyles}>Загальна статистика</Typography>
                            <FormControl>
                                <InputLabel id="demo-mutiple-name-label">МІСЯЦЬ</InputLabel>
                                <Select labelId="demo-mutiple-name-label" sx={{
                                    height: "50px",
                                    width: "150px",
                                }}>
                                    <MenuItem value={1}>СІЧЕНЬ</MenuItem>
                                    <MenuItem value={2}>ЛЮТИЙ</MenuItem>
                                    <MenuItem value={3}>БЕРЕЗЕНЬ</MenuItem>
                                    <MenuItem value={4}>КВІТЕНЬ</MenuItem>
                                    <MenuItem value={5}>ТРАВЕНЬ</MenuItem>
                                    <MenuItem value={6}>ЧЕРВЕНЬ</MenuItem>
                                    <MenuItem value={7}>ЛИПЕНЬ</MenuItem>
                                    <MenuItem value={8}>СЕРПЕНЬ</MenuItem>
                                    <MenuItem value={9}>ВЕРЕСЕНЬ</MenuItem>
                                    <MenuItem value={10}>ЖОВТЕНЬ</MenuItem>
                                    <MenuItem value={11}>ЛИСТОПАД</MenuItem>
                                    <MenuItem value={12}>ГРУДЕНЬ</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <GraphSales/>
                        <Box display="flex" justifyContent="space-between" sx={{
                            margin: "10px 30px 10px 30px",
                        }}>
                            <Box width="50%" display="flex" justifyContent="space-between" alignItems="end" marginRight="20px">
                                <Typography sx={{
                                    color: theme.mainText,
                                    fontWeight: "Bold",
                                    fontSize: "28px",
                                    fontFamily: "Montserrat",
                                }}>2 340 ₴</Typography>
                                <Typography sx={{
                                    color: theme.mainText,
                                    fontWeight: "medium",
                                    fontSize: "16px",
                                    fontFamily: "Montserrat",
                                }}>22 товара</Typography>
                            </Box>
                            <Box width="50%" display="flex" justifyContent="space-between" alignItems="end">
                                <Typography sx={{
                                    color: theme.mainText,
                                    fontWeight: "Bold",
                                    fontSize: "28px",
                                    fontFamily: "Montserrat",
                                }}>1 280 ₴</Typography>
                                <Typography sx={{
                                    color: theme.mainText,
                                    fontWeight: "medium",
                                    fontSize: "16px",
                                    fontFamily: "Montserrat",
                                }}>14 товарів</Typography>
                            </Box>
                        </Box>
                    </Box>
                </>);
            break;
            case "management":
                return (
                    <>
                        <Box sx={{
                            height: "100%",
                            width: "100%",
                            borderRadius: "20px",
                            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                        }}>
                            <Typography marginLeft="20px" marginRight="10px" marginTop="10px" marginBottom="20px" sx={textOneStyles}>Перелік товарів</Typography>
                            <ProductTable/>
                            <Button onClick={addArticleModal} sx={{
                                backgroundColor: theme.mainColor,
                                width:"30%",
                                borderRadius:"11px",
                                height:"36px",
                                margin:"10px 20px 10px 20px",
                            }}>
                                <Typography sx={{
                                    color:"white",
                                    fontWeight:"bold"
                                }}>Додати новий товар</Typography>
                            </Button>
                            <Modal open={addArticle} onClose={addArticleModal}>
                                <AddArticle onClose={addArticle}/>
                            </Modal>
                        </Box>
                    </>
                );
            break;
            case "orders":
                return (
                    <><Typography>ORDER</Typography></>
                );
            break;
        }
    }

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
                        <Box sx={blockStyles} onClick={()=>{setSwap("statistics")}}>
                            <Box>
                                <Typography sx={textOneStyles}>Статистика</Typography>
                                <Typography sx={textTwoStyles}>Дивитись</Typography>
                            </Box>
                            <AlignSvg><LogoStatic/></AlignSvg>
                        </Box>
                        <Box sx={blockStyles} onClick={()=>{setSwap("management")}}>
                            <Box>
                                <Typography sx={textOneStyles}>Управління</Typography>
                                <Typography sx={textTwoStyles}>Дивитись</Typography>
                            </Box>
                            <AlignSvg><LogoMyShop/></AlignSvg>
                        </Box>
                        <Box sx={blockStyles} onClick={()=>{setSwap("orders")}}>
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
                        alignContent: "space-around",
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
                    {change()}
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
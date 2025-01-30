import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import useTheme from "../../hooks/useTheme";
import { useMediaQuery } from "../../hooks/useMediaQuery.js";
import { RevieStarS, RevieStar, LogoMyHeart, LogoCar, LogoKur, LogoGeoDot, LogoUser, LogoObrane, LogoMyShop } from "../../icons/icons.jsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from "../ArticleLists/ArticleCarousel/style.module.css";

export default function ProductCardPage() {
    const theme = useTheme();
  
    const isMobile = useMediaQuery("(max-width: 500px)");
  
    const isDesktop = useMediaQuery("(min-width: 500.01px)");
  
    const AlignSvg = ({ children }) => (
        <Box display="flex" justifyContent="center" alignItems="center">
            {children}
        </Box>
    );
    
    const textDescription = "Відомий дім TUSKANI та його спадкоємці Сім'я Роберто Джіованні ствердилися як варти італійської майстерності. Їхнє прізвище стало символом неперевершеної якості протягом багатьох десятиліть.\nЦя кава має ідеальне поєднання аромату, насиченого смаку і багатого тіла: соковиті акценти ягід і шоколаду переносять вас у довгий, неповторний післясмак.";
//для відображення "з нового рядка" отримати масив рядків з БД - ?

    const textOneStyles = {
        color: theme.mainText,
        fontSize: "24px",
        fontWeight: "bold",
        fontFamily: "Montserrat",
    };

    const Characteristick = () => (
        <>
        <Box sx={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
            marginLeft: "30px",
            marginBottom: "10px",
            marginRight: "30px",
        }}>
            <Box><Typography sx={{
                color: theme.mainText,
                fontSize: "24px",
                fontWeight: "bold",
                fontFamily: "Montserrat",
            }}>Тип кави</Typography></Box>
            <Box borderBottom={1} sx={{
                width: "60%",
                marginLeft: "2px",
                marginRight: "2px",
            }}></Box>
            <Box><Typography sx={{
                color: theme.secondaryColor,
                fontSize: "24px",
                fontWeight: "bold",
                fontFamily: "Montserrat",
            }}>У зернах</Typography></Box>
        </Box>
        <Box sx={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
            marginLeft: "30px",
            marginBottom: "10px",
            marginRight: "30px",
        }}>
            <Box><Typography sx={{
                color: theme.mainText,
                fontSize: "24px",
                fontWeight: "bold",
                fontFamily: "Montserrat",
            }}>Вага</Typography></Box>
            <Box borderBottom={1} sx={{
                width: "80%",
                marginLeft: "2px",
                marginRight: "2px",
            }}></Box>
            <Box><Typography sx={{
                color: theme.secondaryColor,
                fontSize: "24px",
                fontWeight: "bold",
                fontFamily: "Montserrat",
            }}>1 кг</Typography></Box>
        </Box>
        <Box sx={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
            marginLeft: "30px",
            marginBottom: "10px",
            marginRight: "30px",
        }}>
            <Box><Typography sx={{
                color: theme.mainText,
                fontSize: "24px",
                fontWeight: "bold",
                fontFamily: "Montserrat",
            }}>Сорт кави</Typography></Box>
            <Box borderBottom={1} sx={{
                width: "60%",
                marginLeft: "2px",
                marginRight: "2px",
            }}></Box>
            <Box><Typography sx={{
                color: theme.secondaryColor,
                fontSize: "24px",
                fontWeight: "bold",
                fontFamily: "Montserrat",
            }}>Арабіка</Typography></Box>
        </Box>
        <Box sx={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
            marginLeft: "30px",
            marginBottom: "10px",
            marginRight: "30px",
        }}>
            <Box><Typography sx={{
                color: theme.mainText,
                fontSize: "24px",
                fontWeight: "bold",
                fontFamily: "Montserrat",
            }}>Ступінь обсмаження</Typography></Box>
            <Box borderBottom={1} sx={{
                width: "40%",
                marginLeft: "2px",
                marginRight: "2px",
            }}></Box>
            <Box><Typography sx={{
                color: theme.secondaryColor,
                fontSize: "24px",
                fontWeight: "bold",
                fontFamily: "Montserrat",
            }}>Темна</Typography></Box>
        </Box>
        </>
    )
  
    const textTwoStyles = {
        color: "red",//theme.secondaryText,
        fontSize: "16px",
        fontFamily: "Montserrat",
    };
  
    const blockStyles = {
        borderRadius: "20px",
        //padding: "10px",
        marginTop: "10px",
        marginLeft: "20px",
        marginRight: "20px",
        marginBottom: "10px",
        //boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        display: "flex",
        justifyContent: "space-between",
    };

    const mainImage = './images/pexels1.jpg';

    const similarImages = [
        './images/pexels1.jpg',
        './images/pexels2.jpg',
        './images/pexels3.jpg',
        './images/pexels4.jpg',
        './images/pexels5.jpg',
        './images/pexels6.jpg',
        './images/pexels7.jpg',
        './images/pexels8.jpg',
        './images/pexels9.jpg'
    ];

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7,
        },
        mobile: {
          breakpoint: { max: 500, min: 0 },
          items: 2,
        },
      };

    const ImageGallery = ({ mainImage, similarImages }) => {
        const [selectedImage, setSelectedImage] = useState(mainImage);
      
        return (
            <Box>
                <Box sx={{
                    width: "100%",
                    height: "80%",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    borderRadius: "20px",
                    display: "flex",
                    justifyContent: "space-evenly",
                }}>
                    <img src={selectedImage} alt="Main" style={{ width: '39%', height: 'auto', }} />
                </Box>
            
            <Box sx={{
                display: 'flex',
                justifyContent: "space-evenly",
                marginTop: '20px',
            }}>
                <Carousel
                partialVisible={false}
                containerClass={style.custom_carousel_container}
                showDots={false}
                arrows={false}
                responsive={responsive}
                >
                    {similarImages.map((image, index) => (
                        <img
                        key={index}
                        src={image}
                        alt={`Similar ${index}`}
                        onClick={() => setSelectedImage(image)}
                        style={{
                            width: '96px',
                            height: '97px',
                            borderRadius: "10px",
                            cursor: 'pointer',
                            border: selectedImage === image ? '2px solid blue' : '2px solid transparent',
                        }}/>
                        ))
                    }
                </Carousel>
            </Box>
        </Box>
    );
};

  return (
    <>
        {isDesktop &&
        <>
            <Box sx={{
                height: "570px",
                width: "82%",
                marginLeft: "9%",
                marginRight: "9%",
                marginBottom: "40px",
                display: "flex",
                //overflowBlock: "scroll",
                backgroundColor: theme.backgroundColor,
            }}>
                <Box sx={{
                    height: "100%",
                    width: "50%",
                    marginRight: "1%",
                    justifyContent: 'center',
                    backgroundColor: theme.backgroundColor,
                }}>
                    <ImageGallery mainImage={mainImage} similarImages={similarImages} />
                </Box>
                <Box sx={{
                    height: "100%",
                    width: "50%",
                    borderRadius: "20px",
                    //boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    backgroundColor: theme.backgroundColor,
                    position: "relative",
                    justifyContent: "space-between",
                }}>
                    <Box sx={{
                        //height: "40%",
                        width: "100%",
                        //marginBottom: "5px",
                        borderRadius: "20px",
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                        backgroundColor: theme.backgroundColor,
                        position: "absolute",
                        top: "0px",
                    }}>
                        <Box sx={{
                            borderRadius: "20px",
                            marginLeft: "20px",
                            marginRight: "20px",
                            //marginBottom: "16px",
                            paddingTop: "20px",
                            display: "flex",
                            justifyContent: "space-between",
                        }} >
                            <Box>
                                <Typography sx={{
                                    color: theme.mainText,
                                    fontSize: "28px",
                                    fontWeight: "bold",
                                    fontFamily: "Montserrat",
                                }}>Кава в зернах Tuskani 100% арабіка 1 кг</Typography>
                            </Box>
                            <AlignSvg><LogoMyHeart/></AlignSvg>
                        </Box>
                        <Box display="flex">
                            <Typography sx={{
                                color: "black",
                                fontSize: "16px",
                                fontFamily: "Montserrat",
                                marginLeft: "20px",
                                fontWeight: "bold",
                            }}>Продавець:</Typography>
                            <Typography sx={{
                                fontWeight: "bold",
                                marginLeft: "10px",
                                color: theme.secondaryColor,
                                fontSize: "16px",
                                fontFamily: "Montserrat",
                            }}>Coffee Original</Typography>
                        </Box>
                        <Box sx={blockStyles} padding = "20px" alignItems="center" boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px">
                            <Box>
                                <Box display="flex" alignItems="center">
                                    <RevieStar />
                                    <Typography sx={{
                                        fontWeight: "bold",
                                        marginLeft: "10px",
                                        color: theme.secondaryColor,
                                        fontSize: "16px",
                                        fontFamily: "Montserrat",
                                    }}>4.0</Typography>
                                </Box>
                                <Typography sx={{
                                    fontWeight: "bold",
                                    //marginLeft: "10px",
                                    color: theme.secondaryText,
                                    fontSize: "14px",
                                    fontFamily: "Montserrat",
                                }}>(34 оцінки)</Typography>
                            </Box>
                            <RevieStarS />
                            <Typography sx={{
                                fontWeight: "bold",
                                color: theme.secondaryColor,
                                fontSize: "14px",
                                fontFamily: "Montserrat",
                            }}>Залишити відгук</Typography>
                        </Box>
                        <Box display="flex" alignItems = "end" marginLeft = "20px">
                            <Typography sx={{
                                color: "red",
                                fontSize: "54px",
                                fontWeight: "bold",
                                fontFamily: "Montserrat",
                            }}>377₴</Typography>
                            <Typography sx={{
                                color: theme.secondaryText,
                                fontSize: "24px",
                                fontFamily: "Montserrat",
                                textDecorationLine: "line-through",
                                marginLeft: "20px",
                            }}>560₴</Typography>
                        </Box>
                        <Box sx={{
                            width: "90%",
                            marginTop: "20px",
                            marginLeft: "20px",
                            marginBottom: "20px",
                        }}>
                            <Button sx={{
                                width: "50%",
                                borderRadius: "13px",
                                backgroundColor: theme.mainColor
                            }}>
                                <Typography sx={{
                                    color: "white",
                                    fontSize: "24px",
                                    fontFamily: "Montserrat",
                                }}>Купити</Typography>
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{
                        width: "100%",
                        marginTop: "5px",
                        borderRadius: "20px",
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                        position: "absolute",
                        bottom: "0px",
                        backgroundColor: theme.backgroundColor,
                    }}>
                        <Box sx={{
                            marginTop: "10px",
                            marginLeft: "20px",
                            marginRight: "20px",
                            marginBottom: "10px",
                            display: "flex",
                        }}>
                            <AlignSvg><LogoGeoDot/></AlignSvg>
                            <Box>
                                <Typography sx={{
                                    color: theme.mainText,
                                    fontSize: "36px",
                                    fontWeight: "bold",
                                    fontFamily: "Montserrat",
                                    marginLeft: "20px",
                                }}>Доставка м. Київ</Typography>
                            </Box>
                        </Box>
                        <Box sx={{
                            marginTop: "10px",
                            marginLeft: "20px",
                            marginRight: "20px",
                            marginBottom: "10px",
                            display: "flex",
                            alignItems: "center",
                        }}>
                            <AlignSvg><LogoKur/></AlignSvg>
                            <Box>
                                <Typography sx={{
                                    color: theme.mainText,
                                    fontSize: "24px",
                                    fontWeight: "medium",
                                    fontFamily: "Montserrat",
                                    marginLeft: "20px",
                                }}>Доставка кур'єром Нової Пошти</Typography>
                            </Box>
                            <Box sx={{
                                marginLeft: "220px",
                            }}>
                                <Typography sx={{
                                    color: theme.mainText,
                                    fontSize: "18px",
                                    fontWeight: "medium",
                                    fontFamily: "Montserrat",
                                    textAlign: "right",
                                }}>Тариф</Typography>
                                <Typography sx={{
                                    color: theme.mainText,
                                    fontSize: "18px",
                                    fontWeight: "medium",
                                    fontFamily: "Montserrat",
                                    textAlign: "right",
                                }}>перевізника</Typography>
                            </Box>
                        </Box>
                        <Box sx={{
                            marginTop: "10px",
                            marginLeft: "20px",
                            marginRight: "20px",
                            marginBottom: "10px",
                            display: "flex",
                            alignItems: "center",
                        }}>
                            <AlignSvg><LogoCar/></AlignSvg>
                            <Box>
                                <Typography sx={{
                                    color: theme.mainText,
                                    fontSize: "24px",
                                    fontWeight: "medium",
                                    fontFamily: "Montserrat",
                                    marginLeft: "20px",
                                }}>Доставка у відділення Нової Пошти</Typography>
                            </Box>
                            <Box sx={{
                                marginLeft: "216px",
                            }}>
                                <Typography sx={{
                                    color: theme.mainText,
                                    fontSize: "18px",
                                    fontWeight: "medium",
                                    fontFamily: "Montserrat",
                                    textAlign: "right",
                                }}>99 - 119₴</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                height: "570px",
                width: "82%",
                marginLeft: "9%",
                marginRight: "9%",
                marginTop: "40px",
                marginBottom: "10px",
                display: "flex",
                backgroundColor: theme.backgroundColor,
            }}>
                <Box sx={{
                    height: "100%",
                    width: "50%",
                    marginRight: "1%",
                    borderRadius: "20px",
                    backgroundColor: theme.backgroundText,
                    alignContent: "stretch"
                }}>
                    <Typography sx={{
                        color: theme.mainText,
                        fontSize: "56px",
                        fontWeight: "bold",
                        fontFamily: "Montserrat",
                        marginTop: "10px",
                        marginLeft: "30px",
                        marginBottom: "10px",
                        marginRight: "30px",
                    }}>Опис</Typography>
                    <Typography sx={{
                        color: theme.mainText,
                        fontSize: "24px",
                        fontWeight: "medium",
                        fontFamily: "Montserrat",
                        marginTop: "10px",
                        marginLeft: "30px",
                        marginBottom: "10px",
                        marginRight: "30px",
                    }}>{textDescription}</Typography>
                    <Typography sx={{
                        color: theme.secondaryColor,
                        fontSize: "32px",
                        fontWeight: "medium",
                        fontFamily: "Montserrat",
                        marginTop: "10px",
                        marginLeft: "30px",
                        marginBottom: "10px",
                        marginRight: "30px",
                        textDecorationLine: "underline",
                    }}>Посилання Дивитись повністю</Typography>
                </Box>
                <Box sx={{
                    height: "100%",
                    width: "50%",
                    borderRadius: "20px",
                    backgroundColor: theme.backgroundText,
                }}>
                    <Typography sx={{
                        color: theme.mainText,
                        fontSize: "56px",
                        fontWeight: "bold",
                        fontFamily: "Montserrat",
                        marginTop: "10px",
                        marginLeft: "30px",
                        marginBottom: "10px",
                        marginRight: "30px",
                    }}>Характеристики</Typography>
                    <Characteristick/>
                    <Typography sx={{
                        color: theme.secondaryColor,
                        fontSize: "32px",
                        //fontWeight: "bold",
                        fontFamily: "Montserrat",
                        marginTop: "10px",
                        marginLeft: "30px",
                        marginBottom: "10px",
                        marginRight: "30px",
                        textDecorationLine: "underline",
                    }}>Посилання Всі характеристики</Typography>
                </Box>
            </Box>
        </>
        }
        {isMobile &&
            <>
                <span>HELLO WORLD!!!</span>
                <span>HELLO WORLD!!!HELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLO</span>
                <Box sx={{
                    height: "100%",
                    width: "29%",
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
                            <Typography sx={textOneStyles}>{nameUser}</Typography>
                            <Typography sx={textTwoStyles}>Змінити особисті дані</Typography>
                        </Box>
                    </Box>
                    <Box sx={blockStyles}>
                        <Box>
                            <Typography sx={textOneStyles}>Обране</Typography>
                            <Typography sx={textTwoStyles}>Кількість товарів</Typography>
                        </Box>
                        <AlignSvg><LogoObrane/></AlignSvg>
                    </Box>
                    <Box sx={blockStyles}>
                        <Box>
                            <Typography sx={textOneStyles}>Мої покупки</Typography>
                            <Typography sx={textTwoStyles}>Дивитись</Typography>
                        </Box>
                        <AlignSvg><LogoMyShop/></AlignSvg>
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
                        <Typography sx={textTwoStyles}>Повернення товару</Typography>
                        <Typography sx={textTwoStyles}>Вийти з акаунту</Typography>
                    </Box>
                </Box>
                <Box sx={{
                    height: "100%",
                    width: "71%",
                    marginLeft: "20px",
                    borderRadius: "20px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}>
                    {userData ? (WindowUserData()):(favorData ? (WindowFavorData()):(myShop ? (WindowMyShop()):(<></>)))}
                </Box>
            </>
        }
    </>
  );
}
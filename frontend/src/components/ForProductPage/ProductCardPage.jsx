import React, { useEffect, useState } from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import useTheme from "../../hooks/useTheme";
import { useMediaQuery } from "../../hooks/useMediaQuery.js";
import { RevieStarS, RevieStar, LogoMyHeart, LogoCar, LogoKur, LogoGeoDot, LogoUser, LogoObrane, LogoMyShop } from "../../icons/icons.jsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from "../ArticleLists/ArticleCarousel/style.module.css";
import AllCharacter from "./AllCharacter.jsx";
import AllDescription from "./AllDescription.jsx";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function ProductCardPage() {
    const { id } = useParams(); // Получаем id из URL
    const [article, setArticle] = useState(null);

    useEffect(() => {
        if (!id) return;
        
        const fetchArticle = async () => {
          try {
            const response = await axios.get(`http://localhost:5000/api/articles/${id}`);
            setArticle(response.data);
          } catch (err) {
            console.log(err)
          }
        };
    
        fetchArticle();
      }, [id]);

    const theme = useTheme();
  
    const isMobile = useMediaQuery("(max-width: 500px)");
  
    const isDesktop = useMediaQuery("(min-width: 500.01px)");

    const articl = {
        id: 1,
        name: "Wireless Headphones",
        seller_name: "Audio World",
        price: "199.99",
        rating: 4.5,
        discount: "20%",
        reviews_count: 120,
        image: "./images/pexels1.jpg",
    };
  
    const AlignSvg = ({ children }) => (
        <Box display="flex" justifyContent="center" alignItems="center">
            {children}
        </Box>
    );
    
    const [allCharacter, setallCharacter] = useState(false);
    const allCharacterModal = () => setallCharacter(!allCharacter);
    const [allDescription, setallDescription] = useState(false);
    const allDescriptionModal = () => setallDescription(!allDescription);

    const textDescription = [
        "Відомий дім TUSKANI та його спадкоємці Сім'я Роберто Джіованні ствердилися як варти італійської майстерності. Їхнє прізвище стало символом неперевершеної якості протягом багатьох десятиліть.",
        "Ця кава має ідеальне поєднання аромату, насиченого смаку і багатого тіла: соковиті акценти ягід і шоколаду переносять вас у довгий, неповторний післясмак.",
        "Унікальна упаковка має презентабельний зовнішній вигляд являючи собою комбінацію джутвого мішечка з сургучною печаткою та спеціальною оболонкою всередені, яка збереже чудовий аромат.",
        "Завдяки прямим поставкам з Італії, які здійснюються двічі на місяць, ви отримуєте кавові зерна свіжого обсмаження.",
        "TUSKANI - це не масовий продукт, це рідкість, вишукування та неповторний смак.",
    ];

    const textOneStyles = {
        color: theme.mainText,
        fontSize: "24px",
        fontWeight: "bold",
        fontFamily: "Montserrat",
    };

    const characteristics = [
        { type: "Тип кави", value: "У зернах" },
        { type: "Вага", value: "1 кг" },
        { type: "Сорт кави", value: "Арабіка" },
        { type: "Ступінь обсмаження", value: "Темна" },
        { type: "Пакування", value: "Пакет з клапаном" },
        { type: "Місце вирощення зерна", value: "SHG (вирощена у горах)" },
        { type: "Твердість зерна", value: "SHB (дуже тверде)" },
        { type: "Якість зерна", value: "AA - найкраща кава" },
        { type: "Метод підготовки", value: "AP (Американська підготовка)" },
    ];

    const keyStyle = {
        color: theme.mainText,
        fontSize: "24px",
        fontWeight: "bold",
        fontFamily: "Montserrat",
    };
    const valueStyle = {
        marginLeft: "5px",
        color: theme.secondaryColor,
        fontSize: "24px",
        fontWeight: "bold",
        fontFamily: "Montserrat",
    };

    const Characteristick = ({type, value}) => (
        <>
            <Box borderBottom={1} sx={{
                alignItems: "end",
                width: "90%",
                display: "flex",
                justifyContent: "space-between",
                margin: "20px 30px 10px 30px",
            }}>
                <Typography sx={keyStyle}>{type}</Typography>
                <Typography sx={valueStyle}>{value}</Typography>
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

    const mainImage = "http://localhost:5000"+article?.photos[0];

    const similarImages = [
        "http://localhost:5000"+article?.photos[0],
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
                                }}>{article?.name}</Typography>
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
                            }}>Продавець: </Typography>
                            <Typography sx={{
                                fontWeight: "bold",
                                marginLeft: "10px",
                                color: theme.secondaryColor,
                                fontSize: "16px",
                                fontFamily: "Montserrat",
                            }}>{article?.seller}</Typography>
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
                            }}>{(article?.price-(article?.price*25/100)).toFixed(2)}₴</Typography>
                            <Typography sx={{
                                color: theme.secondaryText,
                                fontSize: "24px",
                                fontFamily: "Montserrat",
                                textDecorationLine: "line-through",
                                marginLeft: "20px",
                            }}>{article?.price}₴</Typography>
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
                    }}>{article?.description}</Typography>
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
                    {Characteristick(characteristics[0])}
                    {Characteristick(characteristics[1])}
                    {Characteristick(characteristics[2])}
                    {Characteristick(characteristics[3])}
                    <Typography onClick={allCharacterModal} sx={{
                        color: theme.secondaryColor,
                        fontSize: "32px",
                        fontWeight: "medium",
                        fontFamily: "Montserrat",
                        marginTop: "10px",
                        marginLeft: "30px",
                        marginBottom: "10px",
                        marginRight: "30px",
                        textDecorationLine: "underline",
                        cursor: "pointer",
                    }}>Всі характеристики</Typography>
                    <Modal open={allCharacter} onClose={allCharacterModal}>
                        <AllCharacter characteristick={characteristics} product={articl} onClose={allCharacter}/>
                    </Modal>
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
import React, { useState } from "react";
import {
  Box, Button,
  ButtonBase, Modal,
  TextField, Typography,
  Checkbox, Radio,
  RadioGroup, FormControl,
  FormControlLabel, Dialog,
  DialogActions, DialogContent,
  DialogContentText, DialogTitle
} from "@mui/material";
import useTheme from "../../hooks/useTheme";
import InputMask from 'react-input-mask';
import { useMediaQuery } from "../../hooks/useMediaQuery.js";
import { LogoNovaPosta, LogoMastercard, LogoVisa, LogoGooglePay } from "../../icons/icons.jsx";

export default function OrderProcessing() {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 500px)");
  const isDesktop = useMediaQuery("(min-width: 500.01px)");

  const tmpArticles = [
    { id: 1, nameArticle: "Laptop", priceArticle: 999.99, fotoArticle: '/images/pexels1.jpg', amount: 10, ratingArticle: 4.5 },
    { id: 2, nameArticle: "Smartphone", priceArticle: 699.99, fotoArticle: '/images/pexels1.jpg', amount: 15, ratingArticle: 4.7 },
    { id: 3, nameArticle: "Smartphone", priceArticle: 699.99, fotoArticle: '/images/pexels1.jpg', amount: 15, ratingArticle: 4.7 },
  ];
  
  const [openProcessing, setOpenProcessing] = useState(false);

  const toggleOpenProcessing = () => {
    console.log(openProcessing);
    setOpenProcessing(!openProcessing);
  };

  const renderTypography = (text, styles = {}) => (
    <Typography sx={{ fontFamily: "Montserrat", ...styles }}>{text}</Typography>
  );

  const renderLabel = (text, icon, styles = {}) => (
    <Box display="flex" alignItems="center">
      <Typography sx={{ fontFamily: "Montserrat", ...styles }}>{text}</Typography>
      {icon}
    </Box>
  );

  const logoCard = (icon, icon2) => (
    <>{icon}{icon2}</>
  );

  const viewImgProduct = (article) => {
    <img src={article.fotoArticle} alt={article.fotoArticle} sx={{width: "150px", height: "150px", borderRadius: "8px",}}/>
  }

  var sumPrice = "2 350 ₴";
  var discount = "129 ₴";
  var delivery = "60 ₴";
  var sumAll = "2 539 ₴";

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    toggleOpenProcessing();
  };

  return (
    <>
      {isDesktop &&
      <>
        <ButtonBase onClick={toggleOpenProcessing} sx={{
            backgroundColor: "#9283FF",
            height: "42px",
            borderRadius: "13px",
            fontFamily: "Montserrat",
            fontSize: "16px",
            fontWeight: "600",
            color: "#FFFFFF",
            marginTop: "25px",
            width: "100%",
        }}>
            ПЕРЕЙТИ ДО ОФОРМЛЕННЯ
        </ButtonBase>
        
        <Modal open={openProcessing} onClose={toggleOpenProcessing}>
            <Box sx={{
                width: "86vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "background.paper",
                overflow: "hidden",
                borderRadius: "40px",
            }}>
                <Box sx={{width: "95%", display: "flex", justifyContent: "space-between", margin: "20px 30px 00px 30px",}}>
                    {renderTypography("ОФОРМЛЕННЯ ЗАМОВЛЕННЯ", {
                        fontSize: "30px",
                        fontWeight: "600",
                        //margin: "20px 30px 20px 30px",
                    })}
                    <Box onClick={toggleOpenProcessing} sx={{ cursor: "pointer", }}>
                      <img src="./images/CloseBtn.svg" alt="Close" />
                    </Box>
                </Box>
                <Box sx={{width: "95%", display: "flex", justifyContent: "space-between", alignItems: "start", margin: "20px 30px 20px 30px",}}>
                    <Box sx={{width: "64%",}}>
                        <Box sx={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius: "20px", paddingTop: "10px"}}>
                            {renderTypography("ДАНІ ОТРИМУВАЧА*", {
                                marginLeft: "30px",
                                marginTop: "0px",
                                fontSize: "22px",
                                fontWeight: "bold",
                            })}
                            <TextField id="recipient"
                            label="Прізвище та Ім'я одержувача"
                            variant="standard"
                            sx={{marginLeft: "30px", width: "90%"}}
                            />
                            <InputMask
                            mask="+38 (099) 999-99-99"
                            maskChar=" " sx={{ marginTop: "0px", }}>
                                {() => (
                                    <TextField
                                    id="phone"
                                    label="Номер телефону"
                                    variant="standard"
                                    sx={{ margin: "5px 0 20px 30px", width: "90%", }}
                                    required
                                    />
                                )}
                            </InputMask>
                        </Box>
                        <Box sx={{ width: "100%", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius: "20px", paddingTop: "20px", paddingLeft: "0px", paddingBottom: "20px", marginTop: "20px", }}>
                            {renderTypography("ДОСТАВКА*", {
                                marginLeft: "30px",
                                //marginTop: "20px",
                                fontSize: "22px",
                                fontWeight: "bold",
                            })}
                            <Box display="flex" alignItems="center" margin="0 0 0 20px">
                                <Checkbox defaultChecked disabled/>
                                <LogoNovaPosta/>
                                {renderTypography("Нова пошта, 85₴", {
                                    marginLeft: "10px",
                                    //marginTop: "20px",
                                    fontSize: "22px",
                                    fontWeight: "500",
                                })}
                            </Box>
                            <Box sx={{width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", margin: "20px 40px 0px 20px",}}>
                              <FormControl component="postment" sx={{marginLeft: "10px", width: "100%",}}>
                                <RadioGroup defaultValue="postoffice">
                                  <Box sx={{width: "90%", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                                    <FormControlLabel value="postoffice" control={<Radio color="default" />} label="У відділення" />
                                    <FormControlLabel value="postmachine" control={<Radio color="default" />} label="У поштомат" />
                                    <FormControlLabel value="courier" control={<Radio color="default" />} label="Кур'єром" />
                                  </Box>
                                </RadioGroup>
                              </FormControl>
                            </Box>
                        </Box>
                        <Box sx={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius: "20px", paddingTop: "20px", paddingLeft: "20px", paddingBottom: "20px", marginTop: "20px",}}>
                          {renderTypography("СПОСІБ ОПЛАТИ*", {
                            marginLeft: "10px",
                            //marginTop: "20px",
                            fontSize: "22px",
                            fontWeight: "bold",
                          })}
                          <FormControl component="payment" sx={{marginLeft: "10px"}}>
                            <RadioGroup defaultValue="cardpay" >
                              <FormControlLabel value="cardpay" control={<Radio color="default" />} label={renderLabel("Безпечна оплата карткою", logoCard(<LogoMastercard/>, <LogoVisa />), {marginRight: "10px",})} />
                              <FormControlLabel value="googlpay" control={<Radio color="default" />} label={renderLabel("Google Pay", <LogoGooglePay />, {marginRight: "10px",})} />
                              <FormControlLabel value="other" control={<Radio color="default" />} label="Оплата при отриманні" />
                            </RadioGroup>
                          </FormControl>
                        </Box>
                    </Box>
                    <Box sx={{
                      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                      borderRadius: "20px",
                      margin: "0px 0px 0px 0px",
                      height: "100%",
                      width: "34%",
                    }}>
                        {renderTypography("ЗАМОВЛЕННЯ", {
                          margin: "15px 0px 0px 30px",
                          fontSize: "22px",
                          fontWeight: "bold",
                        })}
                        <Box sx={{backgroundColor: "orange", display: "flex", justifyContent: "space-between", alignItems: "start", margin: "20px 30px 20px 30px", overflow: "auto",}}>
                          {tmpArticles.map((article) => (
                            <Box sx={{width: "160px", height: "160px"}}>
                            {viewImgProduct(article)}</Box>
                          ))}
                        </Box>
                        <Box sx={{
                            width: "88%",
                            margin: "20px 0px 20px 30px",
                          }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "10px 0px 10px 0px",}}>
                              {renderTypography("Товари"+" (" + tmpArticles.length + ")", {
                                //margin: "20px 0px 20px 0px",
                                fontSize: "22px",
                              })}
                              {renderTypography(sumPrice, {
                                fontSize: "22px",
                                //fontWeight: "bold",
                              })}
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "10px 0px 10px 0px", }}>
                              {renderTypography("Знижка", {
                                //margin: "20px 0px 20px 0px",
                                fontSize: "22px",
                              })}
                              {renderTypography(discount, {
                                fontSize: "22px",
                                //fontWeight: "bold",
                              })}
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "10px 0px 10px 0px", }}>
                              {renderTypography("Доставка", {
                                //margin: "20px 0px 20px 0px",
                                fontSize: "22px",
                              })}
                              {renderTypography(delivery, {
                                fontSize: "22px",
                                //fontWeight: "bold",
                              })}
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "20px 0px 10px 0px", }}>
                              {renderTypography("РАЗОМ", {
                                //margin: "20px 0px 20px 0px",
                                fontSize: "28px",
                                fontWeight: "bold",
                              })}
                              {renderTypography(sumAll, {
                                fontSize: "28px",
                                fontWeight: "bold",
                              })}
                            </Box>
                            <ButtonBase onClick={handleClickOpen} sx={{
                              backgroundColor: "#9283FF",
                              height: "42px",
                              borderRadius: "13px",
                              fontFamily: "Montserrat",
                              fontSize: "16px",
                              fontWeight: "600",
                              color: "#FFFFFF",
                              margin: "10px 0px 10px 0px",
                              width: "100%",
                            }}>
                              ПІДТВЕРДИТИ ЗАМОВЛЕННЯ
                            </ButtonBase>
                            <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                            >
                              <DialogTitle id="alert-dialog-title">{"Підтвердження замовлення"}</DialogTitle>
                              <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                  Ваше замовлення успішно взято в обробку.
                                </DialogContentText>
                              </DialogContent>
                              <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                  ЗРОЗУМІЛО
                                </Button>
                              </DialogActions>
                            </Dialog>
                            <ButtonBase onClick={toggleOpenProcessing} sx={{
                              backgroundColor: "lightgrey",
                              height: "42px",
                              borderRadius: "13px",
                              fontFamily: "Montserrat",
                              fontSize: "16px",
                              fontWeight: "600",
                              color: "black",
                              margin: "10px 0px 10px 0px",
                              width: "100%",
                            }}>
                              ПОВЕРНУТИСЯ ДО КОШИКА
                            </ButtonBase>
                          </Box>
                      </Box>
                </Box>
            </Box>
          </Modal>
        </>
      }
      {isMobile &&
        <>
          <ButtonBase onClick={toggleOpenProcessing} sx={{
            backgroundColor: "#9283FF",
            height: "42px",
            borderRadius: "13px",
            fontFamily: "Montserrat",
            fontSize: "16px",
            fontWeight: "600",
            color: "#FFFFFF",
            marginTop: "25px",
            width: "100%",
        }}>
            ПЕРЕЙТИ ДО ОФОРМЛЕННЯ
        </ButtonBase>
        
        <Modal open={openProcessing} onClose={toggleOpenProcessing}>
            <Box sx={{
                width: "100vw",
                height: "95vh",
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "background.paper",
                overflow: "scroll",
                borderRadius: "20px",
            }}>
                <Box sx={{
                  width: "100%", display: "flex", justifyContent: "space-between",
                  alignItems: "center",
                  marginTop : "5px",
                }}>
                    {renderTypography("ОФОРМЛЕННЯ ЗАМОВЛЕННЯ", {
                        fontSize: "20px",
                        fontWeight: "600",
                        margin: "0px 0px 0px 15px",
                    })}
                    <Box onClick={toggleOpenProcessing} sx={{ margin: "0px 15px 0px 0px", }}>
                      <img src="./images/CloseBtn.svg" alt="Close" />
                    </Box>
                </Box>
                <Box sx={{
                  width: "100%",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  borderRadius: "20px",
                  marginTop: "5px",
                }}>
                  {renderTypography("Дані одержувача*", {
                    fontSize: "20px",
                    fontWeight: "bold",
                    margin: "5px 0px 0px 10px",
                  })}
                  <TextField id="recipient"
                  label="Прізвище та Ім'я одержувача"
                  variant="standard" sx={{
                    width: "94%",
                    margin: "0px 0px 0px 10px",
                  }}/>
                  <InputMask
                  mask="+38 (099) 999-99-99"
                  maskChar=" ">
                    {() => (
                      <TextField
                      id="phone"
                      label="Номер телефону"
                      variant="standard"
                      required sx={{
                        width: "94%",
                        margin: "5px 0px 10px 10px",
                      }}/>
                    )}
                  </InputMask>
                </Box>
                <Box sx={{
                  width: "100%",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  borderRadius: "20px",
                  marginTop: "15px",
                }}>
                  {renderTypography("Доставка*", {
                    fontSize: "20px",
                    fontWeight: "bold",
                    margin: "5px 0px 0px 10px",
                  })}
                  <Box display="flex" alignItems="center" margin="0 0 0 0px">
                    <Checkbox defaultChecked disabled/>
                    <LogoNovaPosta/>
                    {renderTypography("Нова пошта, 85₴", {
                      marginLeft: "10px",
                      fontSize: "20px",
                      fontWeight: "500",
                    })}
                  </Box>
                  <Box sx={{width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", }}>
                    <FormControl component="postment" sx={{ width: "100%", margin: "0px 0px 0px 10px", }}>
                      <RadioGroup defaultValue="postoffice">
                        <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <FormControlLabel value="postoffice" control={<Radio color="default" />} label="У відділення" />
                          <FormControlLabel value="postmachine" control={<Radio color="default" />} label="У поштомат" />
                          <FormControlLabel value="courier" control={<Radio color="default" />} label="Кур'єром" />
                        </Box>
                      </RadioGroup>
                    </FormControl>
                  </Box>
                </Box>
                <Box sx={{
                  width: "100%",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  borderRadius: "20px",
                  marginTop: "15px",
                }}>
                  {renderTypography("Спосіб оплати*", {
                    margin: "5px 0px 0px 10px",
                    fontSize: "20px",
                    fontWeight: "bold",
                  })}
                  <FormControl component="payment" sx={{marginLeft: "10px"}}>
                    <RadioGroup defaultValue="cardpay" >
                      <FormControlLabel value="cardpay" control={<Radio color="default" />} label={renderLabel("Безпечна оплата карткою", logoCard(<LogoMastercard/>, <LogoVisa />), {marginRight: "10px",})} />
                      <FormControlLabel value="googlpay" control={<Radio color="default" />} label={renderLabel("Google Pay", <LogoGooglePay />, {marginRight: "10px",})} />
                      <FormControlLabel value="other" control={<Radio color="default" />} label="Оплата при отриманні" />
                    </RadioGroup>
                  </FormControl>
                </Box>
                <Box sx={{
                  //height: "100%",
                  width: "100%",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  borderRadius: "20px",
                  margin: "15px 0px 0px 0px",
                }}>
                  {renderTypography("Замовлення", {
                    margin: "5px 0px 0px 10px",
                    fontSize: "20px",
                    fontWeight: "bold",
                  })}
                  <Box sx={{
                    backgroundColor: "orange",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    margin: "20px 30px 20px 30px",
                    overflow: "auto",
                  }}>
                    {tmpArticles.map((article) => (
                      <Box sx={{width: "160px", height: "160px"}}>
                        {viewImgProduct(article)}
                      </Box>
                    ))}
                  </Box>
                  <Box sx={{
                    width: "88%",
                    margin: "20px 0px 20px 30px",
                  }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "10px 0px 10px 0px",}}>
                      {renderTypography("Товари"+" (" + tmpArticles.length + ")", { fontSize: "20px", })}
                      {renderTypography(sumPrice, { fontSize: "20px", })}
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "10px 0px 10px 0px", }}>
                      {renderTypography("Знижка", { fontSize: "20px", })}
                      {renderTypography(discount, { fontSize: "20px", })}
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "10px 0px 10px 0px", }}>
                      {renderTypography("Доставка", { fontSize: "20px", })}
                      {renderTypography(delivery, { fontSize: "20px", })}
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "20px 0px 10px 0px", }}>
                      {renderTypography("РАЗОМ", { fontSize: "28px", fontWeight: "bold", })}
                      {renderTypography(sumAll, { fontSize: "28px", fontWeight: "bold", })}
                    </Box>
                    <ButtonBase onClick={handleClickOpen} sx={{
                      backgroundColor: "#9283FF",
                      height: "42px",
                      borderRadius: "13px",
                      fontFamily: "Montserrat",
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#FFFFFF",
                      margin: "10px 0px 10px 0px",
                      width: "100%",
                    }}>
                      ПІДТВЕРДИТИ ЗАМОВЛЕННЯ
                    </ButtonBase>
                    <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">{"Підтвердження замовлення"}</DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          Ваше замовлення успішно взято в обробку.
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose} color="primary">ЗРОЗУМІЛО</Button>
                      </DialogActions>
                    </Dialog>
                    <ButtonBase onClick={toggleOpenProcessing} sx={{
                      backgroundColor: "lightgrey",
                      height: "42px",
                      borderRadius: "13px",
                      fontFamily: "Montserrat",
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "black",
                      margin: "10px 0px 10px 0px",
                      width: "100%",
                    }}>
                      ПОВЕРНУТИСЯ ДО КОШИКА
                    </ButtonBase>
                  </Box>
                </Box>
              </Box>
          </Modal>
        </>
      }
    </>
  );
}
const images = {
  golden_gate_bridge: 'https://s3.us-east-2.amazonaws.com/portfolio-assets-cas/goldengate-crop.jpg',
  museum_selfie: 'https://s3.us-east-2.amazonaws.com/portfolio-assets-cas/museumselfie.jpg',
  wash_monument: 'https://s3.us-east-2.amazonaws.com/portfolio-assets-cas/wash-mon-crop.jpg',
  coffee_crossword: 'https://lh3.googleusercontent.com/ivpbpXWfVs-ydJxhc6_-4SydNxgrqmnDLTvEu1pWVbQmjmLReAQ_7uifnJczSSiiwi3XYIMZkMK5P_43Z7yBLXyPtsRJSPtRHnaEQT9lxQveEp_JSncfuI-wXIcSjkPZRP1JrYaACa5wGQx8cg-5ZiTYYnxhkDDdbnj7x0cHNErx8JUSq_ZrNEy8hjcC7tjPOsvzRYi5qO5qZ_NEQxmy1YxAc_Mg4rVAWLhdrN6bHn2RNfEnWuaHOGZ5oGzHgdC88GEARXorjrQBa4MaPYKGKEKhtr_WNnulyGtS7QLXRHqrgYAPqcJjBGz4uOqW4FByTQTX79eG7e8H6TxtdHQnlT6dSGRY4_gDQtdBnSCHrcMe84Iq18qlRdMP7bgn-UKfT3PspzinvCLh-EJc3RpdJXKTabRt0rE6wYhQcBy3QAfhvplZHkAInOxdHPIlQf_a23CPVIbM-4PDR2Sz8IHnXTO4PdWuiiL5uGZmL90scH0XUXIVDowj-Zez8l4Tb4dyU8k264My9zGN5JLLEMOBnDC4LeLAoJfVnhrExN30QGkJum_knRuDMDBDmY912vCBaglBNVr3SRYkRhGJK4EgqCS4oiLLBGn_dHwH8SU_O7FAee19zrNJ=w1334-h750-no',
  att_park: 'https://lh3.googleusercontent.com/TYUq8UoogGSImobCcQhEGcZz6-JcCvcLtH1-UnpZ1ElpJVQf6M59Bz8cq14qOj-cUMUuzUJgL0svmdc_HNupHv5vlyjVW34IAsW79jqwt2xL1-wJQLsY4R-lxZgnK-sOt1JhzP3AVAbQVe3u1PmIV3bvEfQJl9eFR3ZsOILRgSibuZ7pwmpI9U4GdbauTaUj3z5QRl-Q-gw08DAXTJ0BTqSwXo5duXNz_lMsP-amTggY2ZQqe3uZ_Cjo4g8VGFvRjOpZBXY_HHd1BWQgGdpev_2dqrip-9k_KezvHagqJc_cIdAEI7K2XOBQ_-XN1MxWXxYT_HNWcpT0MBjKcaxg_H4S-nDQWaUZkky-KqWPdclbqL9o5ZPTxnFeVOBAkeshCtlpBxVhZz1C0winbcyUdK2XpBmoBjf_ALh8qXEbAccwwgUFeB6rXSkvOjXN9TXt5RW4U4biJt-Y81Ys16SKXePWQzAeJyH52I5oZ5n4eGsmwA31Ax13D6Nuc2Rcf8xkhAFh3Zo4JFJot3hHphKLDD1U0H66VcyeenvvtT_kbJgjgDX5kGkPWDEWObWmhTBLJeHTohYdyrE08YcJ8ky91inoxp0XodR72trJJS1kRlKLFbA3zlfW=w1035-h776-no',
  ragbrai: 'https://s3.us-east-2.amazonaws.com/portfolio-assets-cas/ragbrai.jpg',
  moped: 'https://lh3.googleusercontent.com/ks3Z1cS4JeCvVLYE2ifQOO9mQ2WJSM6Y893Y7k2Abb7LGXDLs7ZKA1NUgh7S0OphAS6rOxbW_ef6_P_6j9TaXbRc-50qozTb-G8wHtuIMGe3Df53tbgcAqqKe76uA372Nt52rOFjpO-CJsh7_wCt6aO66eecqDT_bnIjjANLSLuUPZr2gubiJK-kg88zWNwfpaOScR_jiSxYwlV1squaOWxMMuzmITn6hlFHR_iUiYlCfKC2ON5GfIr-Sj6UVI4ojBi3IT-Gf6Q5L_FiTRSL2gVye2c4D13TfLpCJakhQoabtiEDBCh-gTlbzlvTs5vJ41X-D-AX27rf1KgQ_OjrODtqXgtDJt2XGiGFCjFTDmrD4dNYN4OQ2kHNnv2l2FN3CjisGGnvuwrZfJucw1b36U9t2i-Rud_mC_3zdHaLE1VnZ8dUc3zbJSd5CHjthkiqpPLL671g8mF2S8PSOj3n8nh5oUcgpAMl9B3tv3NStg1W06m_AP8rnAbDX7v3cfhJfEkBZOS6qiVqCYIG8UJTTEjTJ9R2w24glToD4HO3uK2B6OaUaRlAQcBpkExU82tgaZnvYWyMnJnMlBbK4PwpFtZvNkKWeEnFSHVENjjf0LMSkxRS0cMl=w1035-h776-no',
  sunset: 'https://lh3.googleusercontent.com/NcxEd5xf50qG44g-SQKXhTawfr_b7AfSPGxpoDFizA_0rhnyEpXVGnUtnUBHBOlkvAXmKn2nL1ySkc6mwSaVPpcW13knsIlCGx4jNj-Qp7quZXnESDuzbHLipCij-QhUgR9xhTC57XVze5Bc5OQVV30lFxx0aKirs2ExIamg6yNuMn-xtaTHw_6hGd_74qMTPM5rBBIWI7eX91ismZvjxSmAj7BjKfms72bhsBYj_pDaPgpOAUOwMBqJ9hMAB3P5esrla8S6PE_HC3gyyJ7eTRKEU34sdRgWJwm3DmyPrOZ37ujmbJn7W2XOKeuJ9dhKlKGHCERskD2jQUv2flJlXooypzsz4M5odJ3W_S09KP_nVDPaJOjKGT_MgkR_K6qQ1KSGSzkG46TpGETfrfl3qSud3NvvSGIg8osBBlUMtXgm5-Ros9uaD2MzazfaTQcAwIGp7e-KoXuvg8sfRbIOq4jOqxb_zpbri9qlnd-2Kjt2siFnogtCr794otTC-pCPfTD8G6vHT6OQXfH1e8os0fG_Ixz0Xa719DCy7I-61fpCy2v54rJTy3NC7QUcfgV5cOsZ0d1sBSGw-y2EFvjRnu6HmaKREJOM7h1h_uj46b5qWAX60i6n=w1440-h553-no',
  hca_map: 'https://s3.us-east-2.amazonaws.com/portfolio-assets-cas/CarolineSheaFinalProject572.png',
  sh_landing: 'https://s3.us-east-2.amazonaws.com/portfolio-assets-cas/SH-landing.png',
  sh_user: 'https://s3.us-east-2.amazonaws.com/portfolio-assets-cas/SH-user-page.png',
  twitter: 'https://s3.us-east-2.amazonaws.com/portfolio-assets-cas/twitter-01.png',
  github: 'https://s3.us-east-2.amazonaws.com/portfolio-assets-cas/github-01.png',
  instagram: 'https://s3.us-east-2.amazonaws.com/portfolio-assets-cas/instagram-01.png',
  linkedin: 'https://s3.us-east-2.amazonaws.com/portfolio-assets-cas/linkedin-01.png',
  code_shot: 'https://s3.us-east-2.amazonaws.com/portfolio-assets-cas/codescreenshot.png',
  wis_map: 'https://s3.us-east-2.amazonaws.com/portfolio-assets-cas/Screen+Shot+2017-06-07+at+9.09.25+PM.png',
  sen_thesis: 'https://s3.us-east-2.amazonaws.com/portfolio-assets-cas/sen_thesis.png',
}

export default images

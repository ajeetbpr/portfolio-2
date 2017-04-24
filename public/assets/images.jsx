const images = {
  golden_gate_bridge: "https://lh3.googleusercontent.com/hOG6jRNzkLu3sTPGtF833fr-CS_6vbYM8VMI9vooHEHlx5EumOcTD7Q0xRjjInEoGAjAL22tGIhg-42VY9fU1yH1XiTMyvPStglI-h7fhHBIiPTHSJPeQuYS-CisAzklw_LhBU5KoBoZ0GS4b2hNmZ6Y3JyQF-DeQtA81_F8fJ_dPHFCddlFwA5jMNTXW9r_8rMn3GU69UXNu1K-5bZ2SMU_juMiwbA8C1Va43uArMO1qenzCO8aEDsy1sn7S7S86PBy2ai48sN30Vqh0-JoDPFlTWzVvv9rWuw2h47eBgwPKjMKYf8VPr8gSl76Qq1lkIVxu7hy4ms_AYcP52kt2HabYr8sUxNCdAUe45VPW6UZ-O1I314tk7xnkZ77XvVmj4S2xurw5g_C14vHTHT4UUaAL05Ao1dKN7ng8mJONPgL0AhSDCDe4uSb7rkfq1mOiTgLurhd_UY1mOoKddTGQR9Nz_aHrEkVky9tifUPfALaeqryDpyHIcLD02iZdxcuwtsODBE2Dw9KFyTwnuiJjy4GxPtYAVHrvSTpy4iQJzK2nA0umzB7UVKYprwg8WKjRbZLksDU9kod7TUuTHMd4GyThUOHZy5spf0v3kikkFC6hOmsERem=w1441-h286-no",
  museum_selfie: 'https://lh3.googleusercontent.com/EW5yHlrHkvnl0uvLrz7dpN_49irb9-9bNQR_WTdGkcBH_jIHNbtNz3uk9imkz8qWo6A_cGV9sDx3QaxhvPqMnTS7XkuQs81vhjh_SBb73ZJiGHgBND_XKj0Jo_WD3aL6PfC3PL9aGvlQAgx0zDg5BQwGZrGr52mj02G4qAltWyp1nmPRgF00A4QeJZ6JRc3v9Kg7oaC5XCUAgn6q4v8iwYs_2rubSJAYlPmbe_tqRCPOG4jFCftcIOmK5S1EA94L1rlUkdntbObDCJ6cgRxY5O6-KnJI92FbCTftuCGxm4S7cI-Zr0OwOrTQLzvhSxHPaSD86xahUXq4xivkNJiUgZYuZjjJVpx1Rz5arcMyfFSO_YnP4FiacyxoURCiey6K0otG8im-oCdW13LFXXhL_dh5QJzQIkO6L7lea73Gk5Q1vJu7dmkts1odvpPwl00u7XzHgZehNsIWLo4g5t8NYCU7eULKz8GSzqwxJ91DAhVPSWa3P9Dv0vmuj3bPVNjMATw_DNByG1TwE5yLn3jvod4rmSOLSZn4sB08YVbVqebjwlYOnAZt6gtBnP8dgywDQwKiG61aKqnbzA74ag8MXrWYNa-XiqapmgayEOC6BF3CB5d-=w437-h776-no',
  wash_monument: 'https://lh3.googleusercontent.com/EIyodLY9es5jL_Jq075Xz_ndplMGso3G1Hy7IddCzkS_9IahCusHJTKSRKTzgjHOmjt5K2tf8_ljGwTdxt_9MkeMvloNWhGmyoceipH_kSHVWNBuxgeBbRHZ0CYzNc5rvqmmKHaaVe2YYyMbw3z0nrr0hOSA72UNueGexeFKrCHRohLqfXqonGlxcXbImyx6St1NaWkUZeDcI7b1kUxUu7YoQ0Y7uxoHBRpQslfXEzYvg0IUXzD2g8pbRJrJOFWsM4NKZJmO6JRYH0mCd42PFeBO8uPU-0EufQ2LNZEfxiRChAPsM8luOgAVFxNZvfYXllz3rB8fcyksrYXfCfd-SJ86HMNLySyeWfKBTmFglOz_xnnPiEvOQpEkcSQHv4Mfb-TUiG0UnqzewKuVTxqjpxlJZdLqB6SJaTyVGXi9BDJTj5WEULujPbPIUHVyQcZPhQkDLIeQnnqTEndnSIhBdvcvhza_hWccxA5NLFveK09ZxgSIqeuIOeRrc2378E-SFKcKrLTZru4l7r_yPN8etyNSuKgY4GGbcGXHdRd3PEAe1cl2SwS3-B_69pjL3Hi1cdXEi_4IqKelEUZyRdCLG9mXY-T2LaWzYG25HFTQG22S0LP5=w582-h776-no',
  coffee_crossword: 'https://lh3.googleusercontent.com/ivpbpXWfVs-ydJxhc6_-4SydNxgrqmnDLTvEu1pWVbQmjmLReAQ_7uifnJczSSiiwi3XYIMZkMK5P_43Z7yBLXyPtsRJSPtRHnaEQT9lxQveEp_JSncfuI-wXIcSjkPZRP1JrYaACa5wGQx8cg-5ZiTYYnxhkDDdbnj7x0cHNErx8JUSq_ZrNEy8hjcC7tjPOsvzRYi5qO5qZ_NEQxmy1YxAc_Mg4rVAWLhdrN6bHn2RNfEnWuaHOGZ5oGzHgdC88GEARXorjrQBa4MaPYKGKEKhtr_WNnulyGtS7QLXRHqrgYAPqcJjBGz4uOqW4FByTQTX79eG7e8H6TxtdHQnlT6dSGRY4_gDQtdBnSCHrcMe84Iq18qlRdMP7bgn-UKfT3PspzinvCLh-EJc3RpdJXKTabRt0rE6wYhQcBy3QAfhvplZHkAInOxdHPIlQf_a23CPVIbM-4PDR2Sz8IHnXTO4PdWuiiL5uGZmL90scH0XUXIVDowj-Zez8l4Tb4dyU8k264My9zGN5JLLEMOBnDC4LeLAoJfVnhrExN30QGkJum_knRuDMDBDmY912vCBaglBNVr3SRYkRhGJK4EgqCS4oiLLBGn_dHwH8SU_O7FAee19zrNJ=w1334-h750-no',
  att_park: 'https://lh3.googleusercontent.com/TYUq8UoogGSImobCcQhEGcZz6-JcCvcLtH1-UnpZ1ElpJVQf6M59Bz8cq14qOj-cUMUuzUJgL0svmdc_HNupHv5vlyjVW34IAsW79jqwt2xL1-wJQLsY4R-lxZgnK-sOt1JhzP3AVAbQVe3u1PmIV3bvEfQJl9eFR3ZsOILRgSibuZ7pwmpI9U4GdbauTaUj3z5QRl-Q-gw08DAXTJ0BTqSwXo5duXNz_lMsP-amTggY2ZQqe3uZ_Cjo4g8VGFvRjOpZBXY_HHd1BWQgGdpev_2dqrip-9k_KezvHagqJc_cIdAEI7K2XOBQ_-XN1MxWXxYT_HNWcpT0MBjKcaxg_H4S-nDQWaUZkky-KqWPdclbqL9o5ZPTxnFeVOBAkeshCtlpBxVhZz1C0winbcyUdK2XpBmoBjf_ALh8qXEbAccwwgUFeB6rXSkvOjXN9TXt5RW4U4biJt-Y81Ys16SKXePWQzAeJyH52I5oZ5n4eGsmwA31Ax13D6Nuc2Rcf8xkhAFh3Zo4JFJot3hHphKLDD1U0H66VcyeenvvtT_kbJgjgDX5kGkPWDEWObWmhTBLJeHTohYdyrE08YcJ8ky91inoxp0XodR72trJJS1kRlKLFbA3zlfW=w1035-h776-no',
  wash_monument_cropped: 'https://lh3.googleusercontent.com/3ccgN0PP5ysxXHU9hMFp25th4l0nCC21iLa7g_doBoVo-rbfvaANY0vX4FxhzBdwv9bO8Ux5OAwdznB05aJFu6k8iE9k-HXpVeyF--OwXFzAHkyNK3iAxmd_D3_dVZHRogN49t8ZUGkaypmkvVlMxABDtUjnsnH8n99ysh7aNUZR0__D3HUraQUdKyoaFv5bqV9Z6te-zXKW6YXS3XISDLL5Eq5Nipyk6qOVrY31T_CPgQt0sr1k0bfPWEBfyFRdRIxsC7MmnOMaQm3eA0mPSp0KQmFZ3Z6JBoCO6SNBaRUScq2VjOtbItiNa1F-e3tEp88u-aomgmQjuC1Xun5mFKRNSAsDQ-eDkuXYbly68t7kJCpBy-nJV-Sy3PZibRNI6Cko4OOBJ0mz2VAxx81oCIZtZ34MVCrFvgKfLdNowvM71slQ8E38TurlH-LCv-hT7DVNpkchMY5p3yMDGJgrtW5nDuSOMpIPdTS0oKA0P4yU9rA5HFhcjJ9PecB5VVO9g2RZ7WqJPLtrCuI8XhzdC7ov5gaj0R-Hve6pR07ilDZOxWlwwZo1wuhQm7J95IpA6fFH4fpskRZMYOggvR_N-eE_hqn10R-2knF4wyU2ES52WVkWuRBU=w254-h776-no',
  ragbrai: 'https://lh3.googleusercontent.com/KKrA5UUICdJ_eJTYsBD9ne7OC7SdAe0MQ_tYjCgt-4y03tJApIPzFDON0B24z_NQloEh1lqM9emOmK9O9pkhcQ6ycAEtJRiWqlHtwYh_hZk0w0Lkqiq6ySOT7nQ7Pb2KFn0o0DiZEsvwkwyJrXSiPdH6_cGg4xifYAA-MMKAPinIISsdrXIeSUHpJzS4dHUuo5Ar0NjxPj31oYASfFY6Zq3HvlTevNYgPcFfwIifiSUPcH7KWEWHVE42yNJN9qEW-rTBraURXecX8AkpaJVg226g-93W5jBBpeZxy1xbyovKoNuzi9xbLaTK93-ldZeOah4ja_NYqqo1KdBLe1yazEmsGW6SUb_F7nGzousPsssd9Iz1MXd4avHeo8vZ60Nf6BeEV7uqqCRHL8nDtaqDgpz40fM_9Ywd6CspkE_-fERD1pIWYKyedGOzkkU8Ub-tolq5QwGIlgnnQTQyq_QK30SyncOL2KgJza0Zsn2b43-oSkGXA08xhvkxmeqmFiaO-ri3nLXhN7fS5KVOi8VF4SmEVdNkRXy_3zugPPAnhyw1vFDOLobe7Eq4JBMuuKEC8OnC17BJNT4q3jGZMZE0hJvRrZ-zTaEtqpVrQ7DKKALLzTQGzm4h=w720-h540-no',
  moped: 'https://lh3.googleusercontent.com/ks3Z1cS4JeCvVLYE2ifQOO9mQ2WJSM6Y893Y7k2Abb7LGXDLs7ZKA1NUgh7S0OphAS6rOxbW_ef6_P_6j9TaXbRc-50qozTb-G8wHtuIMGe3Df53tbgcAqqKe76uA372Nt52rOFjpO-CJsh7_wCt6aO66eecqDT_bnIjjANLSLuUPZr2gubiJK-kg88zWNwfpaOScR_jiSxYwlV1squaOWxMMuzmITn6hlFHR_iUiYlCfKC2ON5GfIr-Sj6UVI4ojBi3IT-Gf6Q5L_FiTRSL2gVye2c4D13TfLpCJakhQoabtiEDBCh-gTlbzlvTs5vJ41X-D-AX27rf1KgQ_OjrODtqXgtDJt2XGiGFCjFTDmrD4dNYN4OQ2kHNnv2l2FN3CjisGGnvuwrZfJucw1b36U9t2i-Rud_mC_3zdHaLE1VnZ8dUc3zbJSd5CHjthkiqpPLL671g8mF2S8PSOj3n8nh5oUcgpAMl9B3tv3NStg1W06m_AP8rnAbDX7v3cfhJfEkBZOS6qiVqCYIG8UJTTEjTJ9R2w24glToD4HO3uK2B6OaUaRlAQcBpkExU82tgaZnvYWyMnJnMlBbK4PwpFtZvNkKWeEnFSHVENjjf0LMSkxRS0cMl=w1035-h776-no',
  sunset: 'https://lh3.googleusercontent.com/NcxEd5xf50qG44g-SQKXhTawfr_b7AfSPGxpoDFizA_0rhnyEpXVGnUtnUBHBOlkvAXmKn2nL1ySkc6mwSaVPpcW13knsIlCGx4jNj-Qp7quZXnESDuzbHLipCij-QhUgR9xhTC57XVze5Bc5OQVV30lFxx0aKirs2ExIamg6yNuMn-xtaTHw_6hGd_74qMTPM5rBBIWI7eX91ismZvjxSmAj7BjKfms72bhsBYj_pDaPgpOAUOwMBqJ9hMAB3P5esrla8S6PE_HC3gyyJ7eTRKEU34sdRgWJwm3DmyPrOZ37ujmbJn7W2XOKeuJ9dhKlKGHCERskD2jQUv2flJlXooypzsz4M5odJ3W_S09KP_nVDPaJOjKGT_MgkR_K6qQ1KSGSzkG46TpGETfrfl3qSud3NvvSGIg8osBBlUMtXgm5-Ros9uaD2MzazfaTQcAwIGp7e-KoXuvg8sfRbIOq4jOqxb_zpbri9qlnd-2Kjt2siFnogtCr794otTC-pCPfTD8G6vHT6OQXfH1e8os0fG_Ixz0Xa719DCy7I-61fpCy2v54rJTy3NC7QUcfgV5cOsZ0d1sBSGw-y2EFvjRnu6HmaKREJOM7h1h_uj46b5qWAX60i6n=w1440-h553-no',
  hca_map: 'https://lh3.googleusercontent.com/tWS4iKJWZOgemiZuHIPbWQyaEJy0NV_GQpYsLGVfnr88iLggZqTRDfZ-MNl4yNpptzK8qI1vb1b95vZUTwxjoQ9UI6ba25EqsieTdbJYHJLFEcCfPtpss1yV2qkdpWqUvxCmgKB_g0Dzd6wChM0eUsGHQCM8nWY2_9uFcKKbYna41Oqj8CEB4u_Vqf3sGwcUhOmWAIvsrMy2Ry-03zxfFhvOihgNJxu5l7tipwJ8hbETAx9wLzInGHBvMV0RJVgHKaPBAPkLCZZ4Cs-fanIpW52EVtZMojhJdvNF-Id9pCLDLtD9pEiiEUZw-NvJFGYlFIwSJbO-6CsE9G7U1yCjiKydHcRCVHri1vHK16GoUlNiZj9iop08ZqLySi8j7TdPDiE2DVBhIUAZZ89wQk3t_bH35Ev8beUBXEE4kFMr3AmriA7VcFD9o3N9GFhvWlH2q8ZG5wNRG6B2LLmTnYmHGJHycrJAtIvCnmWC-msVwMmpv8wJYkTdQRRgV70Bya9dLxVJGQs23hJK2gU5RSa8FrEsW3MP32761WhSor1mbn3jkPFS3dGkO4oDEyaz0yCw3J8u-24rEx05biyMdN8yZDpbCxjC_dA4wc4-dUqF6YLljGxsYf1U=w1200-h739-no',
};

export default images;

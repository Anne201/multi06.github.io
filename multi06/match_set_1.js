//=======================================================
// HTML5 對對碰 題庫設定檔
//=======================================================

//------------------------------
//遊戲標題
//------------------------------
title = '對對碰';

//------------------------------
//卡片上文字的字體名稱
//------------------------------
font = 'EngTRESS A';

//------------------------------
//是否顯示格子的編號
//  true :顯示編號   false :無編號
//------------------------------
showNumber = false;

//------------------------------
//編號大小(相對於格子的比例)
//------------------------------
numberLabelFontSizeScale = 0.4;

//------------------------------
//答對時加多少分
//------------------------------
scoreAdd = 100;

//------------------------------
//答錯時扣多少分
//------------------------------
scoreMinus = 150;

//------------------------------
//是否覆蓋牌
//  true :蓋牌   false :不蓋牌
//------------------------------
memoryMode = false;

//------------------------------
//等幾秒才蓋牌
//------------------------------
momorySeconds = 10;

//------------------------------
//牌被選取時的邊框顏色
//------------------------------
card_selected_border_color = '#ff0000';

//------------------------------
//文字的顏色
//------------------------------
card_text_color = '#ff6600';

//------------------------------
//蓋牌時背面的圖案或文字
//------------------------------
card_back = 'assets/smile.png';

//------------------------------
//牌未選取時的背景顏色(可以設多個,用逗號分隔)
//------------------------------
card_back_color = '#006666';

//------------------------------
//牌未選取時文字的顏色
//------------------------------
card_back_text_color = '#ffffff';

//------------------------------
//Google TTS 文字轉語音的設定
//語言代碼:  'en-US' 'zh-TW'
//------------------------------
tts_language = 'en-US';

//語音的速度 0 ~ 1 (可用小數)
tts_speed = 0.75;  

//---------------------------------------------------
// [題庫設定]
//---------------------------------------------------

//------------------------------
//題庫欄位分隔符號
//------------------------------
fields_seperator = '##';

//------------------------------
//一張卡片多個內容的分隔符號
//------------------------------
fields_seperator2 = '~~';

//
// [題目設定]
//
// 每一行即是一個問題(一對牌組)
// 每一個問題中以題庫欄位分隔符號分為兩欄(兩張牌)
// 牌卡目前支援的素材有：文字、圖片、聲音
//
// 一張卡片可以指定多個內容
// 多內容用 fields_seperator2(~~) 分隔，會用亂數取用其中一個
//
questionLines = function(){/*--這一行請勿更改--
2X1=2##https://Anne201.github.io/multi06.github.io/multi06/samples/1.png
2X2=4##https://Anne201.github.io/multi06.github.io/multi06/samples/2.png
2X3=6##https://Anne201.github.io/multi06.github.io/multi06/samples/3.png
2X4=8##https://Anne201.github.io/multi06.github.io/multi06/samples/4.png
2X5=10##https://Anne201.github.io/multi06.github.io/multi06/samples/5.png
2X6=12##https://Anne201.github.io/multi06.github.io/multi06/samples/6.png
2X7=14##https://Anne201.github.io/multi06.github.io/multi06/samples/7.png
2X8=16##https://Anne201.github.io/multi06.github.io/multi06/samples/8.png
2X9=18##https://Anne201.github.io/multi06.github.io/multi06/samples/9.png
2X10=20##https://Anne201.github.io/multi06.github.io/multi06/samples/13.png
-----*/}.toString().replace(/\r/g,"").slice("function(){/*--這一行請勿更改--".length+1,-9);


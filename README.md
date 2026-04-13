# 追車啦 2.0：ALL-IN-ONE Transport ETA Widget for Hong Kong
<img alt="App Preview Large" src="https://github.com/user-attachments/assets/1814dcf8-9bc9-4e85-b455-23dd2642167d" width="49%">
<img alt="App Preview Medium" src="https://github.com/user-attachments/assets/e2ee8ac7-6e39-4478-aab6-66f0e3cb5fb0" width="49%"><br>
這是一款以 Scriptable App 作基礎的 iOS 桌面小工具 (Widget)，旨在為香港人通勤或出門時提供最直覺、最快速的即時交通資訊。<br>
透過整合多方數據，將巴士、港鐵、輕鐵及小巴等交通工具的到站預報匯聚於單一介面，讓您的日常出行更加方便。<br><br>

> [!NOTE]
> 暫時不支援【小巴】【大嶼山巴士】，正在全力開發中 🤖

## 安裝方法 (使用 Scriptable APP) 
<a href="https://apps.apple.com/us/app/scriptable/id1405459188">
  <img width="150" alt="Scriptable APP" src="https://github.com/user-attachments/assets/6e5de8fe-4ef0-4bfc-9ba0-3aac615695ee">
  <img height="100" alt="image" src="https://github.com/user-attachments/assets/b540eab1-ca54-484a-9532-f1d3e8471282">
</a><br>

1. 在 App Store 下載並安裝 Scriptable App。
2. 複製本專案中的 `hk_transport_eta.js` 程式碼。
3. 打開 **Scriptable**，點擊右上方 「+」 號，貼上程式碼並命名為「追車啦 2.0」。
4. 根據本文內的註釋說明，修改 `URL_CONFIG` 部分以自定義路線。
5. 回到桌面，長按並新增 **Scriptable** 小工具。
6. 點擊並編輯小工具，在 `Script` 選項中選擇「追車啦 2.0」。
> [!Tip]
> 由於內容限制，暫時不支援 **小 (Small)** 尺寸的小工具

## 自定義路線 (修改程式碼內的 `URL_CONFIG`)
為給予使用者完全自由設定，用家需要修改部分程式碼。**請務必跟從本文指示完成設定，不要修改其他部分！**
> [!Caution]
> 請務必跟從本文指示完成設定，不要修改其他部分！

```
///////************////// 例子 /////////*************/////////
// 1. 設定你的路線資料
// For MTR & LRT, please specify 'dir: "UP / DOWN"'
// For LRT & MTR Bus, please specify company: "LRT" / "MTRB"
const URL_CONFIG = [
  { route: "K17", stn: "K17-U010", company: "MTRB" },
  { route: "K66", stn: "K66-U030", company: "MTRB" },
  { route: "A41P", stn: "F88D7720B4F389B0", company: "LWB" },
  { route: "15", stn: "001136", company: "CTB" },
  { route: "37A", stn: "002186", company: "CTB" },
  { route: "968", stn: "C3D2F84C0F0FF415", company: "KMB" },
  { route: "N368", stn: "41D1C16D44F410F1", company: "KMB" },
  { route: "EAL", stn: "UNI", company: "MTR", dir: "UP" },
  { route: "SIL", stn: "OCP", company: "MTR", dir: "UP" },
  { route: "505", stn: "280", company: "LRT", dir: "DOWN" }
]
```
<table>
  <tr>
    <th colspan="2">參數說明</th>
    <th colspan="2">例子</th>
  </tr>
  <tr>
    <td><i>route</i> (required)</td>
    <td><b>路線</b></td>
    <td colspan="2">
      巴士 - "968", "960", "15", "1", "8", "37A", "276A"<br>
      地鐵 - "EAL" (東鐵線)、"TCL" (東涌線)、"TWL" (荃灣線)<br>
      【港鐵路線代碼詳見下文】<br>
      輕鐵 - "614", "761P", "505"
    </td>
  </tr>
  <tr>
    <td><i>stn</i> (required)</td>
    <td><b>車站編碼</b></td>
    <td colspan="2">
      巴士 - "F88D7720B4F389B0", "002571", "K66-D020"<br>
      【巴士站 ID 搜尋方法詳見下文】<br>
      地鐵 - "HOK" (香港站)、"ADM" (金鐘站)、"KOT" (九龍塘站)<br>
      輕鐵 - "100", "280", "920"<br>
      【港鐵及輕鐵站代碼詳見下文】
    </td>
  </tr>
  <tr>
    <td rowspan="9"><i>company</i> (required)</td>
    <td rowspan="9"><b>營運公司</b></td>   
    <td>九龍巴士</td>
    <td><b>KMB</b></td>
  </tr>
  <tr>
    <td>龍運機場巴士</td>
    <td><b>LWB</b></td>
  </tr>
  <tr>
    <td>城巴/城巴機場快線</td>
    <td><b>CTB</b></td>
  </tr>
  <tr>
    <td>新大嶼山巴士</td>
    <td><b>-</b></td>
  </tr>
  <tr>
    <td>港鐵</td>
    <td><b>MTR</b></td>
  </tr>
  <tr>
    <td>港鐵巴士</td>
    <td><b>MTRB</b></td>
  </tr>
  <tr>
    <td>輕鐵</td>
    <td><b>LRT</b></td>
  </tr>
  <tr>
    <td>綠色專綫小巴</td>
    <td><b>-</b></td>
  </tr>
  <tr>
    <td>電車</td>
    <td><b>【已失效】</b></td>
  </tr>
    <tr>
    <td><i>dir</i></td>
    <td><b>列車運行方向</b></td>
    <td colspan="2">
      【只適用於港鐵及輕鐵】<br>
      "UP": 上行<br>
      "DOWN"：下行
    </td>
  </tr>
</table>

> [!Important]
> 當您在 `URL_CONFIG` 中新增或修改路線時，請確保遵循以下格式，**否則腳本將無法執行**：
> 1. **使用大括號 { }**：每一條路線必須被一對 { } 包圍。
> 2. **使用英文引號 ""**：所有項目內容 (如 "K17") 都必須加上雙引號。
> 3. **正確使用逗號**，隔開：
> - 括號內的每個項目 (如 `route` 與 `stn` 之間)
> - 兩組路線之間也必須加上逗號
> - 但最後一組**不用**加上逗號結尾，如例子中的 輕鐵 505

## 選擇顯示項目
- 每一個小工具均可自定義顯示<b>最多 5 條 (中尺寸) / 10 條 (大尺寸) 路線</b>
- 如不定義顯示項目，系統將自動顯示<b>前 5 / 10 條</b>在服務時間内的路線
- 你可以於主畫面加入多個小工具，但需注意儲存空間限制 (memory limitation)

<img width="90%" alt="Code Screenshot" src="https://github.com/user-attachments/assets/2bccc3d8-7d59-47be-a81f-bef4d40143cc"><br>

<b>設定方法：</b>

1. 長按小工具，選擇【編輯小工具】
2. 在`Parameter`中根據路線的次序輸入 (以半型逗號分隔數字)
3. 點擊空白處以完成編輯
4. 重新整理後便能顯示所選路線

假設我們想顯示 **K17、A41P、37A、N368 和 港鐵南港島線**，我們要在`Parameter`中輸入 _1,3,5,7,9_ 。

## 九龍巴士 (KMB) & 龍運機場巴士 (LWB)
<img src="https://github.com/user-attachments/assets/08a7402a-f21e-40c8-876c-e6adc14c2ac7" alt="App Screenshot" height="150">
<img src="https://github.com/user-attachments/assets/cc5b656a-7dc2-4054-a9fb-6f1803c67161" alt="App Screenshot" height="150">

> [!NOTE]
> 請<a href="https://ewlricw.rf.gd/chasela2/kmb">按此</a>以查詢九巴及龍運的車站代碼。

<img src="https://github.com/user-attachments/assets/49d285ac-72b2-401e-a5b9-010e39b10d58" alt="App Screenshot" height="150">

<table>
  <tr>
    <th>訊息描述</th>
    <th>説明</th>
  </tr>
  <tr>
    <td>6 分鐘</td>
    <td>下一班車將於 6 分鐘内到達該站。</td>
  </tr>
  <tr>
    <td>即將到達/已離開</td>
    <td>下一班車將於 1 分鐘内到達該站，代表巴士即將到達或即將離開。</td>
  </tr>
  <tr>
    <td>🟡 <i>巴士服務訊息</i></td>
    <td>該路線現時沒有服務，原因可能為服務已結束或特別服務時間。</td>
  </tr>
  <tr>
    <td>🔴 非服務時間</td>
    <td>現時為該路線的非服務時間。</td>
  </tr>
</table>

## 城巴及城巴機場快線 (CTB)

> [!NOTE]
> 請<a href="https://ewlricw.rf.gd/chasela2/ctb">按此</a>以查詢九巴及龍運的車站代碼。

<table>
  <tr>
    <th>訊息描述</th>
    <th>説明</th>
  </tr>
  <tr>
    <td>6 分鐘</td>
    <td>下一班車將於 6 分鐘内到達該站。</td>
  </tr>
  <tr>
    <td>即將到達/已離開</td>
    <td>下一班車將於 1 分鐘内到達該站，代表巴士即將到達或即將離開。</td>
  </tr>
  <tr>
    <td>🔴 非服務時間</td>
    <td>現時為該路線的非服務時間。</td>
  </tr>
</table>

## 新大嶼山巴士 (NLB)

> [!NOTE]
> 請<a href="https://ewlricw.rf.gd/chasela2/nlb">按此</a>以查詢九巴及龍運的車站代碼。

<table>
  <tr>
    <th>訊息描述</th>
    <th>説明</th>
  </tr>
  <tr>
    <td>6 分鐘</td>
    <td>下一班車將於 6 分鐘内到達該站。</td>
  </tr>
  <tr>
    <td>即將到達/已離開</td>
    <td>下一班車將於 1 分鐘内到達該站，代表巴士即將到達或即將離開。</td>
  </tr>
  <tr>
    <td>🔴 非服務時間</td>
    <td>現時為該路線的非服務時間。</td>
  </tr>
</table>

## 港鐵 (MTR)
### 港鐵路線代碼
<table>
  <tr>
    <th colspan="8">港鐵路線代碼總覽</th>
  </tr>
  <tr>
    <td>機場快線</td>
    <td><b>AEL</b></td>
    <td>將軍澳線</td>
    <td><b>TKL</b></td>
    <td>港島線</td>
    <td><b>ISL</b></td>    
    <td>迪士尼線</td>
    <td><b>DRL</b></td>
  </tr>
  <tr>
    <td>東涌線</td>
    <td><b>TCL</b></td>
    <td>南港島線</td>
    <td><b>SIL</b></td>
    <td>荃灣線</td>
    <td><b>TWL</b></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>屯馬線</td>
    <td><b>TML</b></td>
    <td>東鐵線</td>
    <td><b>EAL</b></td>
    <td>觀塘線</td>
    <td><b>KTL</b></td>
    <td></td>
    <td></td>
  </tr>
</table>

### 港鐵車站代碼
<!-- 1. 機場快線 (AEL) & 東涌線 (TCL) & 迪士尼線 (DRL) -->
<table>
  <tr><th colspan="8">機場快線、東涌線及迪士尼線車站代碼</th></tr>
  <tr>
    <td>香港</td><td><b>HOK</b></td>
    <td>九龍</td><td><b>KOW</b></td>
    <td>青衣</td><td><b>TSY</b></td>
    <td>機場</td><td><b>AIR</b></td>
  </tr>
  <tr>
    <td>博覽館</td><td><b>AWE</b></td>
    <td>奧運</td><td><b>OLY</b></td>
    <td>南昌</td><td><b>NAC</b></td>
    <td>荔景</td><td><b>LAK</b></td>
  </tr>
  <tr>
    <td>欣澳</td><td><b>SUN</b></td>
    <td>東涌</td><td><b>TUC</b></td>
    <td>欣澳</td><td><b>SUN</b></td>
    <td>迪士尼</td><td><b>DIS</b></td>
  </tr>
</table>

<!-- 2. 屯馬線 (TML) -->
<table>
  <tr><th colspan="8">屯馬線車站代碼總覽</th></tr>
  <tr>
    <td>屯門</td><td><b>TUM</b></td>
    <td>兆康</td><td><b>SIH</b></td>
    <td>天水圍</td><td><b>TIS</b></td>
    <td>朗屏</td><td><b>LOP</b></td>
  </tr>
  <tr>
    <td>元朗</td><td><b>YUL</b></td>
    <td>錦上路</td><td><b>KSR</b></td>
    <td>荃灣西</td><td><b>TWW</b></td>
    <td>美孚</td><td><b>MEF</b></td>
  </tr>
  <tr>
    <td>南昌</td><td><b>NAC</b></td>
    <td>柯士甸</td><td><b>AUS</b></td>
    <td>尖東</td><td><b>ETS</b></td>
    <td>紅磡</td><td><b>HUH</b></td>
  </tr>
  <tr>
    <td>何文田</td><td><b>HOM</b></td>
    <td>土瓜灣</td><td><b>TKW</b></td>
    <td>宋皇臺</td><td><b>SUW</b></td>
    <td>啟德</td><td><b>KAT</b></td>
  </tr>
  <tr>
    <td>鑽石山</td><td><b>DIH</b></td>
    <td>顯徑</td><td><b>HIK</b></td>
    <td>大圍</td><td><b>TAW</b></td>
    <td>車公廟</td><td><b>CKM</b></td>
  </tr>
  <tr>
    <td>沙田圍</td><td><b>STW</b></td>
    <td>第一城</td><td><b>CIO</b></td>
    <td>石門</td><td><b>SHM</b></td>
    <td>大水坑</td><td><b>TSH</b></td>
  </tr>
  <tr>
    <td>馬鞍山</td><td><b>MOS</b></td>
    <td>恆安</td><td><b>HEA</b></td>
    <td>烏溪沙</td><td><b>WKS</b></td>
    <td></td><td></td>
  </tr>
</table>

<!-- 3. 將軍澳線 (TKL) -->
<table>
  <tr><th colspan="8">將軍澳線車站代碼總覽</th></tr>
  <tr>
    <td>北角</td><td><b>NOP</b></td>
    <td>鰂魚涌</td><td><b>QUB</b></td>
    <td>油塘</td><td><b>YAT</b></td>
    <td>調景嶺</td><td><b>TIK</b></td>
  </tr>
  <tr>
    <td>將軍澳</td><td><b>TKO</b></td>
    <td>坑口</td><td><b>HAH</b></td>
    <td>寶琳</td><td><b>POA</b></td>
    <td>康城</td><td><b>LHP</b></td>
  </tr>
</table>

<!-- 4. 東鐵線 (EAL) -->
<table>
  <tr><th colspan="8">東鐵線車站代碼總覽</th></tr>
  <tr>
    <td>金鐘</td><td><b>ADM</b></td>
    <td>會展</td><td><b>EXH</b></td>
    <td>紅磡</td><td><b>HUH</b></td>
    <td>旺角東</td><td><b>MKK</b></td>
  </tr>
  <tr>
    <td>九龍塘</td><td><b>KOT</b></td>
    <td>大圍</td><td><b>TAW</b></td>
    <td>沙田</td><td><b>SHT</b></td>
    <td>火炭</td><td><b>FOT</b></td>
  </tr>
  <tr>
    <td>馬場</td><td><b>RAC</b></td>
    <td>大學</td><td><b>UNI</b></td>
    <td>大埔墟</td><td><b>TAP</b></td>
    <td>太和</td><td><b>TWO</b></td>
  </tr>
  <tr>
    <td>粉嶺</td><td><b>FAN</b></td>
    <td>上水</td><td><b>SHS</b></td>
    <td>羅湖</td><td><b>LOW</b></td>
    <td>落馬洲</td><td><b>LMC</b></td>
  </tr>
</table>

<!-- 5. 南港島線 (SIL)  -->
<table>
  <tr><th colspan="10">南港島線車站代碼</th></tr>
  <tr>
    <td>金鐘</td><td><b>ADM</b></td>
    <td>海洋公園</td><td><b>OCP</b></td>
    <td>黃竹坑</td><td><b>WCH</b></td>
    <td>利東</td><td><b>LET</b></td>
    <td>海怡半島</td><td><b>SOH</b></td>
  </tr>
</table>

<!-- 6. 港島線 (ISL) -->
<table>
  <tr><th colspan="8">港島線車站代碼總覽</th></tr>
  <tr>
    <td>堅尼地城</td><td><b>KET</b></td>
    <td>香港大學</td><td><b>HKU</b></td>
    <td>西營盤</td><td><b>SYP</b></td>
  </tr>
  <tr>
    <td>上環</td><td><b>SHW</b></td>
    <td>中環</td><td><b>CEN</b></td>
    <td>金鐘</td><td><b>ADM</b></td>
  </tr>
  <tr>
    <td>灣仔</td><td><b>WAC</b></td>
    <td>銅鑼灣</td><td><b>CAB</b></td>
    <td>天后</td><td><b>TIH</b></td>
  </tr>
  <tr>
    <td>炮台山</td><td><b>FOH</b></td>
    <td>北角</td><td><b>NOP</b></td>
    <td>鰂魚涌</td><td><b>QUB</b></td>
  </tr>
  <tr>
    <td>太古</td><td><b>TAK</b></td>
    <td>西灣河</td><td><b>SWH</b></td>
    <td>筲箕灣</td><td><b>SKW</b></td>
  </tr>
  <tr>
    <td>杏花邨</td><td><b>HFC</b></td>
    <td>柴灣</td><td><b>CHW</b></td>
    <td></td><td></td>
  </tr>
</table>

<!-- 7. 荃灣線 (TWL) -->
<table>
  <tr><th colspan="8">荃灣線車站代碼總覽</th></tr>
  <tr>
    <td>中環</td><td><b>CEN</b></td>
    <td>金鐘</td><td><b>ADM</b></td>
    <td>尖沙咀</td><td><b>TST</b></td>
    <td>佐敦</td><td><b>JOR</b></td>
  </tr>
  <tr>
    <td>油麻地</td><td><b>YMT</b></td>
    <td>旺角</td><td><b>MOK</b></td>
    <td>太子</td><td><b>PRE</b></td>
    <td>深水埗</td><td><b>SSP</b></td>
  </tr>
  <tr>
    <td>長沙灣</td><td><b>CSW</b></td>
    <td>荔枝角</td><td><b>LCK</b></td>
    <td>美孚</td><td><b>MEF</b></td>
    <td>荔景</td><td><b>LAK</b></td>
  </tr>
  <tr>
    <td>葵芳</td><td><b>KWF</b></td>
    <td>葵興</td><td><b>KWH</b></td>
    <td>大窩口</td><td><b>TWH</b></td>
    <td>荃灣</td><td><b>TSW</b></td>
  </tr>
</table>

<!-- 8. 觀塘線 (KTL) -->
<table>
  <tr><th colspan="8">觀塘線車站代碼總覽</th></tr>
  <tr>
    <td>黃埔</td><td><b>WHA</b></td>
    <td>何文田</td><td><b>HOM</b></td>
    <td>油麻地</td><td><b>YMT</b></td>
  </tr>
  <tr>
    <td>旺角</td><td><b>MOK</b></td>
    <td>太子</td><td><b>PRE</b></td>
    <td>石硤尾</td><td><b>SKM</b></td>
  </tr>
  <tr>
    <td>九龍塘</td><td><b>KOT</b></td>
    <td>樂富</td><td><b>LOF</b></td>
    <td>黃大仙</td><td><b>WTS</b></td>
  </tr>
  <tr>
    <td>鑽石山</td><td><b>DIH</b></td>
    <td>彩虹</td><td><b>CHO</b></td>
    <td>九龍灣</td><td><b>KOB</b></td>
  </tr>
  <tr>
    <td>牛頭角</td><td><b>NTK</b></td>
    <td>觀塘</td><td><b>KWT</b></td>
    <td>藍田</td><td><b>LAT</b></td>
  </tr>
  <tr>
    <td>油塘</td><td><b>YAT</b></td>
    <td>調景嶺</td><td><b>TIK</b></td>
    <td></td><td></td>
  </tr>
</table>

### 訊息描述
<table>
  <tr>
    <th>訊息描述</th>
    <th>説明</th>
  </tr>
  <tr>
    <td>4 分鐘</td>
    <td>下一班車將於 4 分鐘内到達該站。</td>
  </tr>
  <tr>
    <td>即將抵達</td>
    <td>下一班車將於 2 分鐘内到達該站，代表列車即將到達月台。</td>
  </tr>
  <tr>
    <td>正在離開</td>
    <td>下一班車將於 1 分鐘内到達該站，代表列車已經到達月台並即將離開。</td>
  </tr>
  <tr>
    <td>🟡 <i>特別服務訊息</i></td>
    <td>該路線現時實施特別服務安排，請留意車站資訊。</td>
  </tr>
  <tr>
    <td>🔴 非服務時間</td>
    <td>現時為該路線的非服務時間。</td>
  </tr>
</table>

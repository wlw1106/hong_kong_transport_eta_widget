# 追車啦 2.0：ALL-IN-ONE Transport ETA Widget for Hong Kong
<img alt="App Preview Large" src="https://github.com/user-attachments/assets/1814dcf8-9bc9-4e85-b455-23dd2642167d" width="49%">
<img alt="App Preview Medium" src="https://github.com/user-attachments/assets/e2ee8ac7-6e39-4478-aab6-66f0e3cb5fb0" width="49%"><br>
這是一款以 Scriptable App 作基礎的 iOS 桌面小工具 (Widget)，旨在為香港人通勤或出門時提供最直覺、最快速的即時交通資訊。<br>
透過整合多方數據，將巴士、港鐵、輕鐵及小巴等交通工具的到站預報匯聚於單一介面，讓您的日常出行更加方便。<br><br>

> [!NOTE]
> 暫時不支援【小巴】【大嶼山巴士】【電車】，正在全力開發中 🤖

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
為給予使用者完全自由設定，需要用家修改部分程式碼。**請務必跟從本文指示完成設定，不要修改其他部分！**
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
    <td>route (required)</td>
    <td><b>路線</b></td>
    <td colspan="2">
      巴士 - "968", "960", "15", "1", "8", "37A", "276A"<br>
      地鐵 - "EAL" (東鐵線)、"TCL" (東涌線)、"TWL" (荃灣線)<br>
      【港鐵路線代碼詳見下文】<br>
      輕鐵 - "614", "761P", "505"
    </td>
  </tr>
  <tr>
    <td>stn (required)</td>
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
    <td rowspan="9">company (required)</td>
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
    <td>-</td>
  </tr>
    <tr>
    <td>dir</td>
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
> 2. **使用英文引號 ""**：所有項目內容（如 "K17"）都必須加上雙引號。
> 3. **正確使用逗號**，隔開：
> - 括號內的每個項目（如 route 與 stn 之間）
> - 兩組路線之間也必須加上逗號
> - 但最後一組**不用**加上逗號結尾，如例子中的 輕鐵 505

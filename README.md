# 追車啦 2.0：ALL-IN-ONE Transport ETA Widget for Hong Kong
<img alt="App Preview Large" src="https://github.com/user-attachments/assets/1814dcf8-9bc9-4e85-b455-23dd2642167d" width="49%">
<img alt="App Preview Medium" src="https://github.com/user-attachments/assets/e2ee8ac7-6e39-4478-aab6-66f0e3cb5fb0" width="49%"><br>
這是一款以 Scriptable App 作基礎的 iOS 桌面小工具 (Widget)，旨在為香港人通勤或出門時提供最直覺、最快速的即時交通資訊。<br>
透過整合多方數據，將巴士、港鐵、輕鐵及小巴等交通工具的到站預報匯聚於單一介面，讓您的日常出行更加從容。<br><br>

> [!NOTE]
> 暫時不支援【小巴】【大嶼山巴士】【電車】，正在全力開發中 🤖

## 安裝方法 (使用 Scriptable APP) 
1. 在 App Store 下載並安裝 Scriptable App。
2. 複製本專案中的 `hk_transport_eta.js` 程式碼。
3. 打開 **Scriptable**，點擊右上方 「+」 號，貼上程式碼並命名為「追車啦 2.0」。
4. 根據本文內的註釋說明，修改 `URL_CONFIG` 部分以自定義路線。
5. 回到桌面，長按並新增 **Scriptable** 小工具。
6. 編輯組件，在 `Script` 選項中選擇「追車啦 2.0」。
> [!Tip]
> 由於內容限制，暫時不支援 **小 (Small)** 尺寸的組件

## 自定義路線 (修改程式碼內的 `URL_CONFIG`)
為給予使用者完全自由設定，需要用家修改部分程式碼。**請務必跟從本文指示完成設定，不要修改其他部分！**
> [!Caution]
> 請務必跟從本文指示完成設定，不要修改其他部分！

```
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
    <td colspan="2">
      參數說明
    </td>
  </tr>
  <tr>
    <td>route</td>
    <td>路線，例子：<br>巴士 - 968, 960, 15, 1, 8, 37A, 276A...<br>地鐵 - EAL (東鐵線)、TCL (東涌線)、TWL (荃灣線)<br>路線代碼詳見下文</td>
  </tr>
</table>
type: 交通工具類型 (Bus / MTR / Light Rail / Minibus)。
route / line: 路線編號或線路簡稱。
stopId / station: 具體的車站編號或代碼。

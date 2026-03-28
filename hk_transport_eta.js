// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: pink; icon-glyph: bus;
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

const transportColors = {
  // --- 港鐵路線 (MTR Lines) ---
  "AEL": "#00908C", // 機場快綫 (Teal)
  "TCL": "#F7943E", // 東涌綫 (Orange)
  "TML": "#923011", // 屯馬綫 (Brown)
  "TKL": "#7D499D", // 將軍澳綫 (Purple)
  "EAL": "#5ABED7", // 東鐵綫 (Light Blue)
  "SIL": "#B5BD00", // 南港島綫 (Lime)
  "TWL": "#ED1D24", // 荃灣綫 (Red)
  "ISL": "#0071BC", // 港島綫 (Blue)
  "KTL": "#00A650", // 觀塘綫 (Green)
  "DRL": "#F581A6", // 迪士尼綫 (Pink)
  "LRT": "#D3A809", // 輕鐵 (Gold)

  // --- 巴士公司 (Bus Services) ---
  "KMB": "#E60012", // 九巴 (Red)
  "CTB": "#FFD200", // 城巴 (Yellow)
  "NLB": "#007F3E", // 大嶼山巴士 (Green)
  "LWB": "#F7941D", // 龍運巴士 (Orange)
  "MTRB": "#542481", // 港鐵巴士 (Purple)

  // --- 其他 (Others) ---
  "TRM": "#006437", // 電車 (Tram Green)
  "GMB": "#198A43"  // 綠色小巴 (Minibus Green)
};

const mtrStations = {
  // 路線
  "AEL": "機場快線", "TCL": "東涌線", "TML": "屯馬線", "TKL": "將軍澳線", "EAL": "東鐵線", "SIL": "南港島線", "ISL": "港島線",  "TWL": "荃灣線",  "KTL": "觀塘線", "DRL": "迪士尼線",
  // 東涌綫 (TCL)
  "HOK": "香港", "KOW": "九龍", "OLY": "奧運", "NAC": "南昌", "LAK": "荔景", "TSY": "青衣", "SUN": "欣澳", "TUC": "東涌",
  // 觀塘綫 (KTL)
  "WHA": "黃埔", "HOM": "何文田", "YMT": "油麻地", "MOK": "旺角", "PRE": "太子", "SKM": "石硤尾", "KOT": "九龍塘", "LOF": "樂富", "WTS": "黃大仙", "DIH": "鑽石山", "CHH": "彩虹", "KOB": "九龍灣", "NTK": "牛頭角", "KWT": "觀塘", "LAT": "藍田", "YAT": "油塘", "TIK": "調景嶺",
  // 荃灣綫 (TWL)
  "CEN": "中環", "ADM": "金鐘", "TST": "尖沙咀", "JOR": "佐敦", "SSP": "深水埗", "CSW": "長沙灣", "LCK": "荔枝角", "KWF": "葵芳", "KWC": "葵興", "TWH": "大窩口", "TSW": "荃灣",
  // 港島綫 (ISL)
  "KET": "堅尼地城", "HKU": "香港大學", "SYP": "西營盤", "SHW": "上環", "WAC": "灣仔", "CWB": "銅鑼灣", "TIN": "天后", "FOH": "炮台山", "NOP": "北角", "QUB": "鰂魚涌", "TAK": "太古", "SWH": "西灣河", "SKW": "筲箕灣", "HFC": "杏花邨", "CHW": "柴灣",
  // 南港島綫 (SIL)
  "OCP": "海洋公園", "WCH": "黃竹坑", "LET": "利東", "SOH": "海怡半島",
  // 將軍澳綫 (TKL)
  "TKO": "將軍澳", "LHP": "康城", "HAH": "坑口", "POA": "寶琳",
  // 東鐵綫 (EAL)
  "EXC": "會展", "MKK": "旺角東", "TAW": "大圍", "SHT": "沙田", "FOT": "火炭", "RAC": "馬場", "UNI": "大學", "TAP": "大埔墟", "TWO": "太和", "FAN": "粉嶺", "SHS": "上水", "LOW": "羅湖", "LMC": "落馬洲",
  // 屯馬綫 (TML)
  "WKS": "烏溪沙", "MOS": "馬鞍山", "HEO": "恆安", "TSH": "大水坑", "SHM": "石門", "CIO": "第一城", "STW": "沙田圍", "CKT": "車公廟", "HIK": "顯徑", "KAT": "啟德", "SUW": "宋皇臺", "TKW": "土瓜灣", "HUH": "紅磡", "ETS": "尖東", "AUS": "柯士甸", "MEF": "美孚", "TWW": "荃灣西", "KSR": "錦上路", "YUL": "元朗", "LOP": "朗屏", "TIS": "天水圍", "SIH": "兆康", "TUM": "屯門",
  // 機場快綫 (AEL)
  "AIR": "機場", "AWE": "博覽館",
  // 迪士尼綫 (DRL)
  "DIS": "迪士尼"
};

// 輕鐵車站
const LRTstation = {
  "920":"三聖","265":"兆麟","270":"安定","280":"市中心","295":"屯門","060":"建安","190":"山景(南)","180":"山景(北)","170":"石排","160":"新圍","150":"良景","140":"田景","130":"建生","120":"青松","110":"麒麟","100":"兆康","200":"鳴琴","001":"屯門碼頭","240":"兆禧","250":"屯門泳池","260":"豐景園","070":"河田","075":"蔡意橋","230":"銀圍","220":"大興(南)","212":"大興(北)","300":"杯渡","310":"何福堂","320":"新墟","330":"景峰","340":"鳳地","050":"青雲","040":"青山村","030":"龍門","020":"輕鐵車廠","015":"蝴蝶","010":"美樂","080":"澤豐","090":"屯門醫院","350":"藍地","360":"泥圍","370":"鍾屋村","380":"洪水橋","390":"塘坊村","400":"屏山","560":"水邊圍","570":"豐年路","580":"康樂路","590":"大棠路","600":"元朗","430":"天水圍","435":"天慈","450":"天湖","455":"銀座","500":"天榮","510":"天悅","520":"天秀","530":"濕地公園","540":"天恒","550":"天逸","480":"天富","468":"頌富","460":"天瑞","448":"樂湖","445":"天耀","275":"友愛","425":"坑尾村","490":"翠湖"
}

// 輕鐵路線
const LRTroute = {
  "505":"兆康至三聖","507":"田景至屯門碼頭","614P":"兆康至屯門碼頭","615P":"兆康至屯門碼頭","610":"元朗至屯門碼頭","614":"元朗至屯門碼頭","615":"元朗至屯門碼頭","705":"天水圍循環綫","706":"天水圍循環綫","751":"友愛至天逸","761P":"元朗至天逸","751P":"天水圍至天逸","506P":"屯門碼頭至兆康","720":"兆康至天榮"
}

// 港鐵巴士站 數據
// 設定快取路徑與設定
var url = "https://opendata.mtr.com.hk/data/mtr_bus_stops.csv";
var fm = FileManager.local(); // 使用本地文件管理
var cachePath = fm.joinPath(fm.documentsDirectory(), "mtr_bus_stops_cache.csv");
const cacheMaxAgeMinutes = 7 * 60 * 24; // 快取有效期（例如：7 天）

let csvText = "";

// 檢查快取邏輯
if (fm.fileExists(cachePath)) {
  const lastModified = fm.modificationDate(cachePath);
  const now = new Date();
  const ageInMinutes = (now.getTime() - lastModified.getTime()) / (1000 * 60);

  if (ageInMinutes < cacheMaxAgeMinutes) {
    csvText = fm.readString(cachePath);
  }
}

// 若無快取或已過期，則重新下載
if (!csvText) {
  console.log("從 MTR 下載最新數據...");
  try {
    let req = new Request(url);
    csvText = await req.loadString();
    fm.writeString(cachePath, csvText); // 寫入快取
    console.log("已更新快取至本地。");
  } catch (e) {
    console.error("下載失敗: " + e);
    // 如果下載失敗但舊快取存在，則強制使用舊快取
    if (fm.fileExists(cachePath)) csvText = fm.readString(cachePath);
  }
}

// 解析數據 (同之前邏輯)
let lines = csvText.split("\n");
let MTRBstationModel = {};
for (let i = 1; i < lines.length; i++) {
  let cols = lines[i].split(",");
  if (cols.length >= 3) {
    let key = cols[3].trim();
    MTRBstationModel[key] = {"stn": cols[6].trim(), "dir": cols[1].trim(), "route": cols[0].trim()}
  }
}

// 港鐵巴士路線 數據
// 設定快取路徑與設定
url = "https://opendata.mtr.com.hk/data/mtr_bus_routes.csv";
cachePath = fm.joinPath(fm.documentsDirectory(), "mtr_bus_routes_cache.csv");

csvText = "";

// 檢查快取邏輯
if (fm.fileExists(cachePath)) {
  const lastModified = fm.modificationDate(cachePath);
  const now = new Date();
  const ageInMinutes = (now.getTime() - lastModified.getTime()) / (1000 * 60);

  if (ageInMinutes < cacheMaxAgeMinutes) {
    csvText = fm.readString(cachePath);
  }
}

// 無快取或已過期，則重新下載
if (!csvText) {
  console.log("從 MTR 下載最新數據...");
  try {
    let req = new Request(url);
    csvText = await req.loadString();
    fm.writeString(cachePath, csvText); // 寫入快取
    console.log("已更新快取至本地。");
  } catch (e) {
    console.error("下載失敗: " + e);
    // 如果下載失敗但舊快取存在，則強制使用舊快取
    if (fm.fileExists(cachePath)) csvText = fm.readString(cachePath);
  }
}

// 解析數據 (同之前邏輯)
lines = csvText.split("\n");
let MTRBrouteModel = {};
for (let i = 1; i < lines.length-1; i++) {
  let cols = lines[i].split(",");
  // Line Up 4 Down 5
  let key = cols[5].trim();
  MTRBrouteModel[key] = cols[1].trim().split("至")[0];
  key = cols[4].trim();
  MTRBrouteModel[key] = cols[1].trim().split("至")[1];
  key = cols[0].trim()
  MTRBrouteModel[key] = {"I": cols[1].trim().split("至")[0], "O": cols[1].trim().split("至")[1]}
}

var inputs = new Array()
if (args.widgetParameter){
  inputs = args.widgetParameter.split(',').map(Number)
} else {
  for (let k = 0; k < URL_CONFIG.length; k++){
    inputs.push(k);
  }
}

let w = new ListWidget()
let gradient = new LinearGradient()
gradient.colors = [new Color("#2c7284"), new Color("#203a43"), new Color("#0f2027")]
gradient.locations = [0, 0.5, 1]
w.backgroundGradient = gradient
w.setPadding(16, 16, 16, 16)

// 數據抓取與左右對齊佈局
// Example check in Scriptable
var limit = 5
if (config.runsInWidget) {
  let size = config.widgetFamily;
  if (size === 'large') {
    limit = 10
  }
} else {
  limit = 5
}
let i = 0
let j = 0

while (i < limit && j < URL_CONFIG.length) {
  var item = URL_CONFIG[j];
  j++;
  if (inputs.includes(j) == false){
    continue
  }

  // --- 右側：到站時間 (大字體) ---
  var timeStr = "..."
  var stnName = item.stn
  var route = item.route
  var dest = ""
  
  // CTB
  if (item.company == "CTB"){
    try {
      let destReq = new Request('https://rt.data.gov.hk/v2/transport/citybus/route/CTB/'+item.route)
      destReq.timeoutInterval = 10
      let destRes = await destReq.loadJSON()
      
      let req = new Request('https://rt.data.gov.hk/v2/transport/citybus/eta/CTB/'+item.stn+'/'+item.route)
      req.timeoutInterval = 10
      let res = await req.loadJSON()
      var data = res.data ? (Array.isArray(res.data) ? res.data[0] : res.data) : null
      
      let stnReq = new Request('https://rt.data.gov.hk/v2/transport/citybus/stop/'+item.stn)
      stnReq.timeoutInterval = 10
      let stnRes = await stnReq.loadJSON()
      stnName = stnRes.data.name_tc
      if ('dest_tc' in res.data){
        dest = data.dest_tc
      } else {
        dest = destRes.data.dest_tc
      } 

      if (data && data.eta) {
        let diff = Math.floor((new Date(data.eta) - Date.now()) / 60000)
        timeStr = diff <= 1 ? "即將到站/已離開" : `${diff}分鐘`
      } else { 
        timeStr = "🔴 非服務時間"
      }
    } catch (e) { 
      timeStr = "--"
      console.warn('['+item.route+'] '+e)
    }
  } else if (item.company == "KMB" || item.company == "LWB"){
    // KMB
    try {
      let req = new Request('https://data.etabus.gov.hk/v1/transport/kmb/eta/'+item.stn+'/'+item.route+'/1')
      req.timeoutInterval = 10
      let res = await req.loadJSON()
      var data = res.data ? (Array.isArray(res.data) ? res.data[0] : res.data) : null
      
      let stnReq = new Request('https://data.etabus.gov.hk/v1/transport/kmb/stop/'+item.stn)
      stnReq.timeoutInterval = 10
      let stnRes = await stnReq.loadJSON()
      stnName = stnRes.data.name_tc
      dest = data.dest_tc
      
      if (data && data.eta) {
        let diff = Math.floor((new Date(data.eta) - Date.now()) / 60000)
        timeStr = diff <= 1 ? "即將到站/已離開" : `${diff}分鐘`
      } else { 
        timeStr = data.rmk_tc ? "🟡 "+data.rmk_tc : "🔴 非服務時間"
      }
    } catch (e) { 
      timeStr = "--"
      console.warn('['+item.route+'] '+e)
    }
  } else if (item.company == "NLB"){}
  else if (item.company == "TRM"){}
  else if (item.company == "GMB"){}
  else if (item.company == "LRT"){
    // LRT
    stnName = LRTstation[item.stn]
    dest = LRTroute[item.route]
    if ('dir' in item){
      try {
        let req = new Request('https://rt.data.gov.hk/v1/transport/mtr/lrt/getSchedule?station_id='+item.stn)
        req.timeoutInterval = 10
        let res = await req.loadJSON()
        let err = 0
        if ("route_list" in res.platform_list[0]){
          var time = 0
          err = 2 // Wrong route
          if (item.dir == "UP"){
            dest = (LRTroute[item.route] == "天水圍循環綫") ? LRTroute[item.route] : LRTroute[item.route].split("至")[0]
          } else {
            dest = (LRTroute[item.route] == "天水圍循環綫") ? LRTroute[item.route] : LRTroute[item.route].split("至")[1]
          }
          
          for (let i in res.platform_list){
            for (let j in res.platform_list[i].route_list){
              let lrt = res.platform_list[i].route_list[j]
              if (lrt.route_no == item.route){
                err = 3 // Wrong dir
                if (lrt.dest_ch == dest){
                  time = lrt.time_ch
                  break;
                }
              }
            }
          }
        } else {
          err = 1 // End service
        }
        if (time) {
          timeStr = time == '-' ? "正在離開" : (time.slice(0,-2) == '1') ? "即將抵達" : time
        } else { 
          timeStr = (err == 3) ? "⚠️ 路線方向錯誤" : (err == 2) ? "⚠️ 路線不經此站" : "🔴 非服務時間"
        }
      } catch (e) { 
        timeStr = "--"
        console.warn('['+item.route+'] '+e)
      }
    } else {
      console.error("請於 'URL_CONFIG' 定義列車方向 (dir)")
      timeStr = "⚠️ 定義列車方向"
    }
  } else if (item.company == "MTRB"){
    // MTRB
    try {
      let req = new Request('https://rt.data.gov.hk/v1/transport/mtr/bus/getSchedule')
      req.timeoutInterval = 10
      req.method = "POST"
      let reqBody = { language: 'zh', routeName: item.route }
      req.body = JSON.stringify(reqBody);
      req.headers = { "Content-Type": "application/json" }
      let res = await req.loadJSON()
      var data = res.busStop
      var time = 0;
      for (const stop of data) {
        if (stop.busStopId == item.stn) {
            stnName = MTRBstationModel[stop.busStopId].stn
            dest = MTRBrouteModel[stop.bus[0].lineRef]
            time = stop.bus[0].departureTimeText
            break
        }
      }

      if (data && time) {
        timeStr = time ? time : "🟡 未有到站時間"
      } else { 
        timeStr = data.rmk_tc ? data.rmk_tc : "🔴 非服務時間"
        stnName = MTRBstationModel[item.stn].stn
        Object.entries(MTRBrouteModel[item.route]).forEach(([key, value]) => {
          if (key == MTRBstationModel[item.stn].dir){
            dest = value
          }
        });
      }
    } catch (e) { 
      timeStr = "--"
      console.warn('['+item.route+'] '+e)
    }
  } else if (item.company == "MTR"){
  // MTR
    stnName = mtrStations[stnName]
    route = mtrStations[item.route]
    if ('dir' in item){
      try {
        let req = new Request('https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line='+item.route+'&sta='+item.stn+'&lang=tc')
        req.timeoutInterval = 20
        let res = await req.loadJSON()
        var data = res.data ? (Array.isArray(res.data) ? res.data[0] : res.data) : null
        
        var time = Date.now()
        for (let key in res.data) {
          let val = res.data[key]; // 取得 UP 或 DOWN
          if (item.dir.toUpperCase() == "UP" && "UP" in val) {
            dest = "往"+mtrStations[val.UP[0].dest]
            time = val.UP[0].time
          } else if ("DOWN" in val){
            if (val.DOWN[0]){
              dest = "往"+mtrStations[val.DOWN[0].dest]
              time = val.DOWN[0].time
            } else {
              time = 0
            }
          } else {
            time = 0
            timeStr = "--"
          }
        }
        
        if (data && time) {
          let diff = Math.floor((new Date(time) - Date.now()) / 60000)
          timeStr = diff < 1 ? "正在離開" : (diff <= 2 ? "即將抵達" : `${diff}分鐘`)
        } else { 
          let lastTrain = false
          for (let key in res.data) {
            let val = res.data[key];
            if ("DOWN" in val) {
              if (val.DOWN[0] == null){
                lastTrain = true
                break
              }
            } 
          }
          
          if (lastTrain){
            timeStr = "🔴 非服務時間"
          } else {
            timeStr = res.message ? res.message.replace("此路綫現正實施","🟡 ").replace("，請按此以獲得更多資料。","").replace("列車服務","車務") : "🟡 服務受阻"
          }
        }
      } catch (e) { 
        timeStr = "--"
        console.warn('['+item.route+'] '+e)
      }
    } else {
      console.error("請於 'URL_CONFIG' 定義列車方向 (dir)")
      timeStr = "⚠️ 定義列車方向"
    }
  }
  
  //  Display
  if ((args.widgetParameter != null && inputs.includes(j) && timeStr !=  "--") || (timeStr !=  "🔴 非服務時間" && inputs.includes(j) && timeStr !=  "--")) {
    i++
    let row = w.addStack()
  row.centerAlignContent()
  
    // --- 左側：路線標籤 ---
    let labelBg = row.addStack()
    if (item.company == "MTR"){
      labelBg.backgroundColor = new Color(transportColors[item.route])
    } else {
      labelBg.backgroundColor = new Color(transportColors[item.company])
    }
    labelBg.cornerRadius = 4
    labelBg.setPadding(1, 5, 1, 5)
    labelBg.size = new Size(100, 14) // 寬度稍微加大，字體更清晰
    
    let labelText = labelBg.addText(route+" "+dest)
    labelText.font = Font.blackSystemFont(9.5) // 使用 Black 字體增加厚度
    labelText.centerAlignText()
	// 確保路線資料不會撞色
    labelText.textColor = (item.company === "CTB" || item.route === "SIL" || item.company === "LRT") ? Color.black() : Color.white()
    
    let stnStack = row.addStack()
    stnStack.size = new Size(110, 14)
    stnStack.setPadding(0,7,0,0)
    let stnText = stnStack.addText(stnName)
    stnText.textColor = Color.white()
    stnText.font = Font.boldSystemFont(10)
    stnStack.addSpacer()
    
    row.addSpacer() // 自動推開左右兩側

    let timeDisplay = row.addText(timeStr)
    timeDisplay.font = Font.boldSystemFont(9) // 大字體加粗
    timeDisplay.textColor = Color.white()
    w.addSpacer() // 行距
  }
}

if (i < limit){
  for (let l = i; l <= limit; l++){
    w.addSpacer()
  }
}

// Footer (左時間 | 右 REFRESH)
let footer = w.addStack()
footer.centerAlignContent()

let df = new DateFormatter()
df.dateFormat = "HH:mm"
let nowText = footer.addText("最後更新時間："+df.string(new Date()))
nowText.font = Font.mediumSystemFont(10)
nowText.textColor = Color.white()
nowText.textOpacity = 0.5

footer.addSpacer()

let btnStack = footer.addStack()
btnStack.backgroundColor = new Color("#ffffff", 0.15)
btnStack.cornerRadius = 5
btnStack.setPadding(3, 8, 3, 8)
let btnText = btnStack.addText("REFRESH")
btnText.font = Font.boldSystemFont(9)
btnText.textColor = Color.white()

// 點擊行為
w.url = "scriptable:///run/" + encodeURIComponent(Script.name())

// 重新整理時限
w.refreshAfterDate = new Date(Date.now() + 60000)

// 退回背景並回到桌面
if (config.runsInApp) {
  App.close()
}

if (config.runsInWidget) {
  if (config.widgetFamily !== 'small'){
    Script.setWidget(w)
  } else {
    Script.setWidget(new ListWidget())
  }
} else {
  //w.presentLarge()
  w.presentMedium()
}
Script.complete()

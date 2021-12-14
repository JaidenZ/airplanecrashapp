let ws = null;
let wsaddress = "";
let wsport = 0;

let webSocketonMessageCallback = new Array();
let webSocketonOpenCallback = null;
let webSocketonCloseCallback = null;

/**
 * @author Jaiden
 * @description 初始化通信
 * @param {string} addresss 服务器地址
 * @param {Number} port 服务器端口
 */
function initWebSocket(addresss, port, onOpenCallback, onCloseCallback) {
  if (addresss === null || addresss === '' || addresss === undefined) {
    throw new Error('服务器地址不能为空');
  }
  if (port === null || port === 0 || port === undefined) {
    throw new Error('服务器端口不能为空');
  }
  if (onOpenCallback === null || onOpenCallback === undefined) {
    throw new Error('回调函数不能为空');
  }
  if (onCloseCallback === null || onCloseCallback === undefined) {
    throw new Error('回调函数不能为空');
  }
  wsaddress = addresss;
  wsport = port;
  if ("WebSocket" in window) {
    ws = new WebSocket('ws://' + wsaddress + ':' + wsport + '');
    ws.onopen = function () {
      webSocketonOpenCallback = onOpenCallback;
      webSocketonOpenCallback();
    };
    ws.onclose = function () {
      webSocketonCloseCallback = onCloseCallback;
      webSocketonCloseCallback();
    };
    ws.onmessage = function (data) {
      receivedMessage(data);
    }

  } else {
    throw new Error("浏览器不支持WebSocket");
  }
}

/**
 * @author Jaiden
 * @description 重试连接
 */
function reTryConnect() {

  if ("WebSocket" in window) {
    ws = new WebSocket('ws://' + wsaddress + ':' + wsport + '');
    ws.onopen = function () {
      webSocketonOpenCallback();
    };
    ws.onclose = function () {
      webSocketonCloseCallback();
    };
    ws.onmessage = function (data) {
      receivedMessage(data);
    }
  } else {
    throw new Error("浏览器不支持WebSocket");
  }
}

/**
 * @author Jaiden
 * @description 注册信息获取回调
 * @param {function} func 
 */
function addMessageCallback(func) {
  webSocketonMessageCallback.push(func);
}

/**
 * @author Jaiden
 * @description 发送数据
 * @param {JSONObject} data 
 */
function sendMessage(data) {
  ws.send(JSON.stringify(data));
}

/**
 * @author Jaiden
 * @description 接受处理数据[内部使用]
 * @param {MessageEvent} message 
 */
function receivedMessage(message) {

  if (message.data === undefined || message.data === '')
    return;

  if (webSocketonMessageCallback.length > 0) {
    var obj = JSON.parse(message.data);
    for (var i = 0; i < webSocketonMessageCallback.length; i++) {
      var callback = webSocketonMessageCallback[i];
      callback(obj);
    }

  }
}


export default {
  initWebSocket,
  reTryConnect,
  addMessageCallback,
  sendMessage
}
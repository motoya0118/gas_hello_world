function doGet(e) {
  try {
    // スプレッドシートのIDを指定
    var spreadsheetId = '1HeUCgPbfK8Z1ZqpMftel_63kItfDsUg-g0f6wm3BIF8';
    var sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
    
    // 1行目1列に「Hello World」と入力
    sheet.getRange(1, 1).setValue('Hello World');
    
    // スプレッドシート名を取得
    var sheetName = sheet.getName();
    
    // レスポンスを作成
    var response = {
      status: 'success',
      message: 'Hello World has been written successfully',
      sheetName: sheetName
    };
    
    // レスポンスを返す
    return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // エラー時のレスポンスを作成
    var response = {
      status: 'error',
      message: error.message
    };
    
    // エラーのレスポンスを返す
    return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON);
  }
}

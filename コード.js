function doGet(e) {
  try {
    // スプレッドシートのIDを指定
    var spreadsheetId = '1HeUCgPbfK8Z1ZqpMftel_63kItfDsUg-g0f6wm3BIF8';
    var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    var sheet = spreadsheet.getActiveSheet();
    
    // 1行目1列に「Hello World」、1行目2列に「heavy metal」と入力
    sheet.getRange(1, 1).setValue('Hello World');
    sheet.getRange(1, 2).setValue('heavy metal');
    
    // ファイル名（スプレッドシート名）とシート名を取得
    var spreadsheetName = spreadsheet.getName();
    var sheetName = sheet.getName();
    var combinedName = spreadsheetName + "_" + sheetName;
    
    // レスポンスを作成
    var response = {
      status: 'success',
      message: 'Hello World and heavy metal have been written successfully',
      combinedName: combinedName
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

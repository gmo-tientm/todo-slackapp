function deleteTask(params, input) {
  if (!isNaN(input)) {
    var spreadsheet_id = PropertiesService.getScriptProperties().getProperty('SPREAD_SHEET_ID');
    var sheets = SpreadsheetApp.openById(spreadsheet_id);
    var todoSheet = sheets.getSheetByName('todo');
    var lastRow = todoSheet.getLastRow();
    var a1Notation = 'A2:J' + lastRow.toString();
    var taskRange = todoSheet.getRange(a1Notation);
    var taskLen = taskRange.getNumRows();

    var inputId = parseInt(input);
    var i;
    for (i = 1; i <= taskLen; i++) {
      var id = parseInt(taskRange.getCell(i,1).getValue());
      if (id == inputId) break;
    }
    
    if (i <= taskLen) {
      if (i < taskLen) {
        a1Notation = 'A' + (i+2).toString() + ':J' + lastRow.toString();
        var afterRange = todoSheet.getRange(a1Notation);
        for(var j = 1; j <= afterRange.getNumRows(); j++) {
          afterRange.getCell(j,1).setValue(i+j-1);
        }
        
        a1Notation = 'A' + (i+1).toString() + ':J' + (lastRow-1).toString();
        var targetRange = todoSheet.getRange(a1Notation);
        afterRange.copyTo(targetRange);
      }
      
      a1Notation = 'A' + lastRow.toString() + ':J' + lastRow.toString();
      var lastRowRange = todoSheet.getRange(a1Notation);
      lastRowRange.clearContent();
      
      postSimpleMessage(params.channel_name, ":tada: *Task deleted successfully* :tada:");
    } else {
      postSimpleMessage(params.channel_name, ":rage: *Input ID is not existed*\n _Type [ /todo help ] for details._");
    }
  } else {
    postSimpleMessage(params.channel_name, ":rage: *Input ID is not a number*\n _Type [ /todo help ] for details._");
  }
}

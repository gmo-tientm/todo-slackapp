function updateTask(params, input) {
  var parts = input.split("#");
  if (parts.length == 2) {
    var spreadsheet_id = PropertiesService.getScriptProperties().getProperty('SPREAD_SHEET_ID');
    var sheets = SpreadsheetApp.openById(spreadsheet_id);
    var todoSheet = sheets.getSheetByName('todo');
    var lastRow = todoSheet.getLastRow();
    var a1Notation = 'A2:J' + lastRow.toString();
    var taskRange = todoSheet.getRange(a1Notation);
    var taskLen = taskRange.getNumRows();
    var user = params.user_name.toString();
    
    if (!isNaN(parts[0])) {
      var inputId = parseInt(parts[0]);
      var i;
      for (i = 1; i <= taskLen; i++) {
        var id = parseInt(taskRange.getCell(i,1).getValue());
        if (id == inputId) break;
      }
      if (i <= taskLen) {
        var status = ["Active", "Done", "Cancel"];
        if (status.indexOf(parts[1]) != -1) {
          var currentTime = moment().format("YYYY/MM/DD HH:mm:ss");
          taskRange.getCell(i,5).setValue(params.user_name);
          taskRange.getCell(i,6).setValue(currentTime);
          taskRange.getCell(i,10).setValue(parts[1]);
          postSimpleMessage(params.channel_name, ":tada: *Task status updated successfully* :tada:");
        } else {
          postSimpleMessage(params.channel_name, ":rage: *Input status is not invalid*\n _Type [ /todo help ] for details._");
        }
      }
      else {
        postSimpleMessage(params.channel_name, ":rage: *Input ID is not existed*\n _Type [ /todo help ] for details._");
      }
    } else {
      postSimpleMessage(params.channel_name, ":rage: *Input ID is not a number*\n _Type [ /todo help ] for details._");
    }
  }
  else {
    postSimpleMessage(params.channel_name, ":rage: *Invalid syntax*\n _Type [ /todo help ] for details._");
  }
}

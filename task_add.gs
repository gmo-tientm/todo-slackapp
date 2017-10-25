function addTask(params, input) {
  var parts = input.split("#");
  if (parts.length == 3 || parts.length == 4) {
    var spreadsheet_id = PropertiesService.getScriptProperties().getProperty('SPREAD_SHEET_ID');
    var sheets = SpreadsheetApp.openById(spreadsheet_id);
    var todoSheet = sheets.getSheetByName('todo');
    var targetRow = todoSheet.getLastRow() + 1;
    var a1Notation = 'A' + targetRow.toString() + ':J' + targetRow.toString();
    var taskRange = todoSheet.getRange(a1Notation);
    var currentTime = moment().format("YYYY/MM/DD HH:mm:ss");
    var dueTime = moment(parts[2]).format("YYYY/MM/DD HH:mm:ss");
    var user = params.user_name.toString();
    if (moment(dueTime, "YYYY/MM/DD HH:mm:ss").isValid() && moment(currentTime).isBefore(moment(dueTime))) {
      taskRange.getCell(1,1).setValue(targetRow - 1) ;          //ID
      taskRange.getCell(1,2).setValue(currentTime) ;            //Created time
      taskRange.getCell(1,3).setValue(dueTime) ;                //Due time
      taskRange.getCell(1,4).setValue(user) ;                   //Created user
      taskRange.getCell(1,5).setValue(user) ;                   //Updated user
      taskRange.getCell(1,6).setValue(currentTime) ;            //Updated time
      taskRange.getCell(1,7).setValue(parts[0]) ;               //Task
      taskRange.getCell(1,8).setValue(parts[1]) ;               //Participant
      if (parts[3]) taskRange.getCell(1,9).setValue(parts[3]) ; //Note
      taskRange.getCell(1,10).setValue("Active") ;               //Status
      postSimpleMessage(params.channel_name, ":tada: *Task added successfully* :tada:");
      
    } else {
      postSimpleMessage(params.channel_name, ":rage: *Invalid timestamp*\n _Type [ /todo help ] for details._");
    }
  } else {
    postSimpleMessage(params.channel_name, ":rage: *Invalid syntax*\n _Type [ /todo help ] for details._");
  }
}

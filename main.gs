/* request.parameters sample

token=gIkuvaNzQIHg97ATvDxqgjtO
team_id=T0001
team_domain=example
channel_id=C2147483705
channel_name=test
user_id=U2147483697
user_name=Steve
command=/weather
text=94070
response_url=https://hooks.slack.com/commands/1234/5678
*/

eval(UrlFetchApp.fetch('https://momentjs.com/downloads/moment.min.js').getContentText());

function doPost(request) {
  var params = request.parameters;
  var subCommand = ['list', 'add', 'update', 'delete', 'help'];
  var appToken = PropertiesService.getScriptProperties().getProperty('SLACK_VERIFY_TOKEN');
  var action = params.text.toString().split(" ", 1)[0];
  var input = params.text.toString().substring(action.length);
  
  if (params.token.toString() == appToken && subCommand.indexOf(action) != -1) { 
    if (action == 'list') {
      postTaskList();
    } else if (action == 'add') {
      //todo add Đọc sách kỹ thuật#enso, kyo#2017/11/10#http://www.google.com
      addTask(params, input);
    } else if (action == 'update' ) {
      //todo update 1#Done
      updateTask(params, input);
    } else if (action == 'delete' ) {
      //todo delete 4
      deleteTask(params, input)
    } else {
      help(params);
    }
  }
  return ContentService.createTextOutput().setMimeType(ContentService.MimeType.JSON);
}

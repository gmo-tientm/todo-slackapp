function postMessageWithAttachments(channel, attachments) {
  var payload = {
    "channel": "#" + channel,
    "username": "todo",
    "link_names": 1,
    "attachments": attachments
  };

  var url = PropertiesService.getScriptProperties().getProperty('SLACK_INCOMING_WEBHOOK');;
  var options = {
    'method': 'post',
    'payload': JSON.stringify(payload)
  };

  var response = UrlFetchApp.fetch(url,options);
}

function postSimpleMessage(channel, text) {
  var payload = {
    "channel": "#" + channel,
    "username": "todo",
    "link_names": 1,
    "text": text,
    "mrkdwn": true
  };

  var url = PropertiesService.getScriptProperties().getProperty('SLACK_INCOMING_WEBHOOK');;
  var options = {
    'method': 'post',
    'payload': JSON.stringify(payload)
  };

  var response = UrlFetchApp.fetch(url,options);
}

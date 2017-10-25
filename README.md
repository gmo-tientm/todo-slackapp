# todo-slackapp

```
=============================
/todo [action] [input]
=============================
 -> action: list | add | update | delete | help
=============================
 -> action: list
   -> input: None
   -> Ex: /todo list
=============================
 -> action: add
   -> input: [Task]#[Participants]#[Deadline]#[Note]
   -> Ex: /todo add Viết blog tháng 11#enso, superlinh#2017/12/12#https://goo.gl/MHyYWe
   ->     /todo add Làm benkyokai tháng 11#kyo#2017/12/12 15:30
=============================
 -> action: update
   -> input: [Task_ID]#[Active | Done | Cancel]
   -> Ex: /todo update 5#Done
   ->     /todo update 20#Cancel
=============================
 -> action: delete
   -> input: [Task_ID]
   -> Ex: /todo delete 20
=============================
 -> action: help
   -> input: None
   -> Ex: /todo help
=============================
```

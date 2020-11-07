---
layout: post
title: Google Apps scripts
date: '2015-04-18T10:46:00.001+01:00'
author: Xavi
tags:
- Coding
---

![Google Apps logo](https://developers.google.com/_static/821739f673/images/redesign-14/lockup-color.png)

Apps scripts is a very versatile tool that Google has developed to expand the use of Google docs and forms although it can also work as stand alone gadgets on the web. You can find more information in the [main developers page for apps scripts](https://developers.google.com/apps-script/). The web editor lets you write Javascript code and you extend the normal functionality with Google's APIs.

I've created one quick example to show you how easy this is to use and how useful it can be.

# The birthday companion

Even when birthdays are on your calendar, it's easy to forget about them especially if you are an absent minded like me who will forget looking at the calendar to remember birthdays. So one simple thing you can potentially do is to send yourself an email every time there's a birthday in your calendar. This is really simple and the code looks like this:

```javascript
function checkBirthdays() {
  var EMAILS = "blabla@gmail.com";
  var calendar = CalendarApp.getCalendarById('blabla@gmail.com');
  var today = new Date();
  var events = calendar.getEventsForDay(today);
  var birthdays = "";
  var num_birthdays = 0;
  for (var i = 0; i < events.length; ++i) {
    var event = events[i];
    if (event.getTitle().toLowerCase().indexOf("birthday") >= 0) {
      birthdays = birthdays.concat("<p>" + event.getTitle() + "</p>\n");
      num_birthdays++;
    }
  }
  if (num_birthdays == 0) {
    Logger.log('No birthdays');
    return;
  }
  Logger.log(num_birthdays + ' birthdays: ' + birthdays);
  MailApp.sendEmail({
    to: EMAILS,
    subject: "birthdays today!",
    htmlBody: "birthdays: " + birthdays,
  });
}
```

All you have to do is to create a script and add a trigger function to it so that it runs daily. As long as your calendar contains an entry with the keyword `birthday` this apps script will send you a reminder. If you want to use it just change `calendar` and the variable `EMAILS`.

The code works like this. It gets all calendar events for the same day it is execute it and navigates through them to find the keyword `birthday`. If it exist it creates some HTML code that will be sent by email. That simple!

# The enhanced wedding spreadsheet

The second example is a little bit more complex. Like many couples out there you may be getting married. There are infinite web pages that will help you keeping up with the data but nothing beats a proper old fashioned spreadsheet. So why not extending it with a little extra personalized code? Let's do it.

You can download the document from this link: [Wedding drive spreadsheet](https://docs.google.com/spreadsheet/ccc?key=0Ak38uAPUKcmAdFR0ekJLNm1SN1QwMlFPcWRKUXdzOUE&amp;usp=sharing).

Make a copy to be able to use it (ie. "File > Make a copy...").

If you go to "Tools > Script editor..." you'll find the file `wedding.gs` which contains a few functions. There are two interesting ones:
- `onOpen`: executed when we open the spreadsheet. This adds a new menu called "Wedding".
- `createTables`: it will update a sheet in this document creating a list of tables with guests.

In the spreadsheet you can have a look at the "Guests" sheet. You'll see 4 blocks of guests (ie. groom's family, bride's family, groom's friends and bride's friends). Each block is composed of 4 columns: C=confirmed (mark it with an X) and M=table (use a number). You cal also see the "Wedding" extra menu.

![guest-list]({{ "/assets/posts/images/guest-list.png" | absolute_url }})

When you click on the "Create tables" submenu under "Wedding" you'll call function `createTables` and this will update sheet "Tables".

![finished]({{ "/assets/posts/images/finished.png" | absolute_url }})

![table]({{ "/assets/posts/images/table.png" | absolute_url }})

The code of `createTables` is very simple and it is composed of three parts. Firstly, we get the ranges of all family. Secondly, we create a column for each table where in the header we set the table id and the number of guests in the table. Finally, we add the names of each guest in the corresponding column.

```javascript
function createTables() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Guests");
  if (sheet == null) {
    Browser.msgBox("Sheet not found \"Guests\"");
  }

  var ranges = [ss.getRangeByName("brideFamily"),
                ss.getRangeByName("groomFamily"),
                ss.getRangeByName("brideFriends"),
                ss.getRangeByName("groomFriends")];

  var peopleByTable = {};
  var tables = [];
  for (var i = 0; i < ranges.length; ++i) {
    var invitados = getRowsData(sheet, ranges[i]);    
    var ret = ActualizaInvitadosPorMesa(invitados,
                                        peopleByTable,
                                        tables);
    tables = ret[0];
    peopleByTable = ret[1];
  }  
  tables.sort();

  // Init sheet.
  var sheet = ss.getSheetByName("Tables") ||
      ss.insertSheet("Tables", ss.getSheets().length);
  sheet.clear();

  // Set header.
  var headersRange = sheet.getRange(1, 1, 1, tables.length);
  headersRange.setValues([tables]);
  boldTables = [];
  for (var i = 0; i < tables.length; ++i) {
    boldTables[i] = "bold";
  }
  headersRange.setFontWeights([boldTables]);

  // Set invitados.  
  invitadosPorMesa = [];
  for (var i = 0; i < tables.length; ++i) {
    var n = setRowsData(sheet, i + 1, peopleByTable[tables[i]]);
    invitadosPorMesa[i] = [ n ];
  }
  var counterRange = sheet.getRange(2, 1, 1, tables.length);
  counterRange.setValues([invitadosPorMesa]);

  Browser.msgBox("Tables successfully created");
}
```

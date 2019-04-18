/**
 * @OnlyCurrentDoc
 *
 * The above comment directs Apps Script to limit the scope of file
 * access for this add-on. It specifies that this add-on will only
 * attempt to read or modify the files in which the add-on is used,
 * and not all of the user's files. The authorization request message
 * presented to users will reflect this limited scope.
 */

/**
 * Based on the "Translate" quickstart add-on:
 * https://developers.google.com/gsuite/add-ons/editors/docs/quickstart/translate
 */

/**
 * Creates a menu entry in the Google Docs UI when the document is opened.
 * This method is only used by the regular add-on, and is never called by
 * the mobile add-on version.
 *
 * @param {object} e The event parameter for a simple onOpen trigger. To
 *     determine which authorization mode (ScriptApp.AuthMode) the trigger is
 *     running in, inspect e.authMode.
 */
function onOpen(e) {
  DocumentApp.getUi().createAddonMenu()
      .addItem('Start', 'showSidebar')
      .addToUi();
}

/**
 * Runs when the add-on is installed.
 * This method is only used by the regular add-on, and is never called by
 * the mobile add-on version.
 *
 * @param {object} e The event parameter for a simple onInstall trigger. To
 *     determine which authorization mode (ScriptApp.AuthMode) the trigger is
 *     running in, inspect e.authMode. (In practice, onInstall triggers always
 *     run in AuthMode.FULL, but onOpen triggers may be AuthMode.LIMITED or
 *     AuthMode.NONE.)
 */
function onInstall(e) {
  onOpen(e);
}

function getProperties() {
  var documentProperties = PropertiesService.getDocumentProperties();
  return {
    convertedString: documentProperties.getProperty("convertedString"),
    convertedFile: documentProperties.getProperty("convertedFile")
  };
}

/**
 * Opens a sidebar in the document containing the add-on's user interface.
 * This method is only used by the regular add-on, and is never called by
 * the mobile add-on version.
 */
function showSidebar() {
  var ui = HtmlService.createHtmlOutputFromFile('sidebar')
      .setTitle('Convert');
  DocumentApp.getUi().showSidebar(ui);
}

function imageToURI(imageElement) {
  var mimeType = "image/png";
  var blob = imageElement.getAs(mimeType);
  var bytes = blob.getBytes();
  var encoded = Utilities.base64Encode(bytes);
  var uri = "data:" + mimeType + ";base64," + encoded;
  return uri;
}

function getImageBlobString(cell) {
  for (var i = 0; i < cell.getNumChildren(); i++) {
    var child = cell.getChild(i);
    if (child.getType() == DocumentApp.ElementType.INLINE_IMAGE) {
      return imageToURI(child);
    } else if (child.getNumChildren && child.getNumChildren() > 0) {
      var childBlob = getImageBlobString(child);
      if (childBlob) {
        return childBlob;
      }
    }
  }
  return null;
}

function getUsers(renderUserImages) {
  var users = {};
  var canonicalNames = {};
  var tables = allTables();
  tables.forEach(function(table) {
    if (isProfileTable(table)) {
      // this is the profile table ... use it
      columns = {};
      // assume titles on row 1 (second one)
      var headerRow = table.getRow(1);
      for (var i = 0; i < headerRow.getNumCells(); i++) {
        var cell = headerRow.getCell(i);
        var text = cell.getText();
        if (text.match(/^\s*Names\s*$/i)) {
          columns.referenceNames = i;
        }
        if (text.match(/^\s*Display Name\s*$/i)) {
          columns.displayName = i;
        }
        if (text.match(/^\s*Image\s*$/i)) {
          columns.image = i;
        }
      }

      for (var i = 2; i < table.getNumRows(); i++) {
        var user = {}
        var row = table.getRow(i);
        // display name
        var displayNameCell = row.getCell(columns.displayName);
        user.name = displayNameCell.getText();

        // reference name
        var referenceNamesCell = row.getCell(columns.referenceNames);
        var referenceNames = referenceNamesCell.getText().split("\n");
        referenceNames.push(user.name);
        var canonicalName = referenceNames[0];
        user.canonicalName = canonicalName;
        if (referenceNames && referenceNames.length) {
          referenceNames.forEach(function(name) {
            canonicalNames[name] = canonicalName;
          });
        }

        // get image uri
        if (renderUserImages) {
          Logger.log("rendering user images");
          var imageCell = row.getCell(columns.image);
          user.photo = getImageBlobString(imageCell);
        }

        // assign
        users[user.canonicalName] = user;
      }

    }
  });
  return {
    users: users,
    canonicalNames: canonicalNames
  }
}

function stringDistance(a, b) {
  // https://gist.github.com/andrei-m/982927#gistcomment-1888863
  if(a.length == 0) return b.length;
  if(b.length == 0) return a.length;

  // swap to save some memory O(min(a,b)) instead of O(a)
  if(a.length > b.length) {
    var tmp = a;
    a = b;
    b = tmp;
  }

  var row = [];
  // init the row
  for(var i = 0; i <= a.length; i++){
    row[i] = i;
  }

  // fill in the rest
  for(var i = 1; i <= b.length; i++){
    var prev = i;
    for(var j = 1; j <= a.length; j++){
      var val;
      if(b.charAt(i-1) == a.charAt(j-1)){
        val = row[j-1]; // match
      } else {
        val = Math.min(row[j-1] + 1, // substitution
                       prev + 1,     // insertion
                       row[j] + 1);  // deletion
      }
      row[j - 1] = prev;
      prev = val;
    }
    row[a.length] = prev;
  }
  return row[a.length];
}

function closestString(raw, possible) {
  var closestName;
  var closestDist;
  var lowerRaw = raw.toLowerCase();
  possible.forEach(function(name) {
    var dist = stringDistance(name.toLowerCase(), lowerRaw);
    if (closestDist === undefined || dist < closestDist) {
      closestName = name;
      closestDist = dist;
    }
  });
  return closestName;
}

function closestUser(raw, usersObject) {
  var canonicalNames = usersObject.canonicalNames;
  var closestName = closestString(raw, Object.keys(canonicalNames));
  return canonicalNames[closestName];
}

var canonicalReacts = {
  "angry": "angry",
  "heart": "heart",
  "love": "heart",
  "laugh": "laugh",
  "haha": "laugh",
  "like": "like",
  "thumbs-up": "like",
  "sad": "sad",
  "cry": "sad",
  "surprised": "surprised",
  "gasp": "surprised"
}

function closestReact(raw) {
  var closestReact = closestString(raw, Object.keys(canonicalReacts));
  return canonicalReacts[closestReact];
}

function parseAuthorDate(str) {
  var match = str.match(/^\s*(.*)(?: |\n)\((.*)\)\s*$/);
  if (!match) {
    throw new Error("Author/Date cannot be parsed: " + str);
  }
  var rawAuthor = match[1];
  var time = match[2];
  if (match) {
    return {
      author: rawAuthor,
      time: time
    }
  } else {
    throw new Error("Unable to parse Author/Date: \"" + str + "\". Make sure to remove any newlines");
  }
}

function parseAuthorDateForced(str, textNode) {
  try {
    return parseAuthorDate(str);
  } catch (err) {
    textNode.replaceText("\\n","");
    // failed parse
    if (str.match(/\(.*\)/)) {
      // contains parentheses but still error, propagate
      throw err;
    } else {
      // no date: add a TODO item
      textNode.appendText(" (DATE TODO)");
      return null;
    }
  }
}

function textHashtags(text) {
  // replace hashtags with links
  return text.replace(/(#[a-z]*)/ig, '[$1]()')
}

function escapeRegExp(string) {
    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

function textAtMentions(text, usersObject) {
  var users = usersObject.users;
  var names = Object.keys(usersObject.canonicalNames);
  var escapedNames = names.map(escapeRegExp);
  var re = "@" + "([a-z]+|" + escapedNames.join("|") + ")\b";
  var regex = new RegExp(re, "ig");
  return text.replace(regex, function(match) {
    var name = match
    return "[@" + name + "]()";
  });
}

function transformUserText(text, usersObject) {
  return textAtMentions(textHashtags(text), usersObject);
}

function getBasePost() {
  return {
    comments: [],
    response: {}
  };
}

function getBaseComment() {
  return {
    children: []
  };
}

function getDepth(commentCell) {
  var child = commentCell.getChild(0);
  if (child.getType() == DocumentApp.ElementType.LIST_ITEM) {
    return child.getNestingLevel() + 1;
  } else {
    return 0;
  }
}

function getParent(pendingPost, childDepth) {
  var comments = pendingPost.comments;
  if (childDepth == 1) {
    return comments[comments.length - 1];
  } else {
    return null;
  }
}

function jsonClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function getAuthorAndCircumstance(strAuthor, usersObject) {
  var splitTo = strAuthor.split(/ to /);
  if (splitTo.length == 2) {
    return {
      author: splitTo[0],
      circumstance: {
        type: "timeline",
        dest: closestUser(splitTo[1], usersObject)
      }
    }
  }

  return {
    author: strAuthor,
    circumstance: {
      type: "plain"
    }
  }
}

function handlePostContent(usersObject, post, cell, cellText) {
  var contentMatch = cellText.match(/^.{0,2}Post Contents\n((.|\n)*?)\s*$/);
  if (contentMatch) {
    var content = contentMatch[1];
    post.content = transformUserText(content, usersObject);
    var imageBlobString = getImageBlobString(cell);
    if (imageBlobString) {
      post.attachment = imageBlobString;
    }
  }
}

function handlePostAuthor(usersObject, post, cell, cellText) {
  var authorMatch = cellText.match(/(^\s{0,2}Post Author \(Date\)\n)((.|\n)*?)\s*$/);
  if (authorMatch) {
    var authorDate = parseAuthorDateForced(authorMatch[2], cell.editAsText());
    var authorAndCircumstance = getAuthorAndCircumstance(authorDate.author, usersObject);
    if (authorDate) {
      post.author = closestUser(authorAndCircumstance.author, usersObject);
      post.circumstance = authorAndCircumstance.circumstance;
      post.time = authorDate.time;
    } else {
      failed = true;
    }
  }
}

function handlePostReacts(usersObject, post, cell, cellText) {
  var reactsMatch = cellText.match(/^\s{0,2}React List/);
  var reacts = [];
  if (reactsMatch) {
    for (var i = 1; i < cell.getNumChildren(); i++) {
      var item = cell.getChild(i);
      var reactName = item.getText();
      var react = closestReact(reactName);
      reacts.push(react);
    }
    post.response.reacts = reacts;
  }
}

function handlePostLikes(usersObject, post, cell, cellText) {
  var likesMatch = cellText.match(/^\s{0,2}Likes/);
  var likes = [];
  if (likesMatch) {
    for (var i = 1; i < cell.getNumChildren(); i++) {
      var item = cell.getChild(i);
      var userName = item.getText();
      var name;
      if (userName.match(/others/)) {
        name = userName;
      } else {
        name = closestUser(userName, usersObject);
      }
      likes.push(name);
    }
    post.response.likes = likes;
  }
}

function handlePostMetrics(usersObject, post, cell, cellText) {
  var responseMatch = cellText.match(/^\s{0,2}Response/);
  if (responseMatch) {
    for (var i = 1; i < cell.getNumChildren(); i++) {
      var item = cell.getChild(i);
      var itemText = item.getText();
      var commentsMatch = itemText.match(/Comments:\s*(\S*)/)
      var sharesMatch = itemText.match(/Shares:\s*(\S*)/);
      if (commentsMatch) {
        post.response.comments = commentsMatch[1];
      }
      if (sharesMatch) {
        post.response.shares = sharesMatch[1];
      }
    }
  }
}

function shiftImage(cell, content) {
  var imageBlobString = getImageBlobString(cell);
  if (imageBlobString) {
    return content + "![](" + imageBlobString + ")";
  } else {
    return content;
  }
}

var commentProgress;
var commentContentColumn;
var commentAuthorColumn;
var commentNestingLevel;
var currentlyInComments;
var commentInProgress;
function handleComment(usersObject, post, cell, cellText, column) {
  if (cellText.match(/Comment Author/)) {
    return;
  }
  Logger.log("attempted comment text " + cellText);
  if (column == commentContentColumn) {
    commentNestingLevel = getDepth(cell);
    commentInProgress.content = transformUserText(cellText, usersObject);
    commentInProgress.content = shiftImage(cell, commentInProgress.content)
    commentProgress++;
  } else if (column == commentAuthorColumn) {
    var authorDate = parseAuthorDateForced(cellText, cell.editAsText());
    if (authorDate) {
      commentInProgress.author = closestUser(authorDate.author, usersObject);
      commentInProgress.time = authorDate.time;
    } else {
      failed = true;
    }
    commentProgress++;
  }
  if (commentProgress == 2) {
    var parent = getParent(post, commentNestingLevel);
    if (parent) {
      parent.children.push(commentInProgress);
    } else {
      post.comments.push(commentInProgress);
    }
    commentInProgress = getBaseComment();
    commentProgress = 0;
  }
}

function checkCommentsEnd(usersObject, post, cell, cellText) {
  if (cellText.match(/^\s{0,2}(Likes|Response|React)/)) {
    currentlyInComments = false;
  }
}

function checkCommentsStart(usersObject, post, cell, cellText, column) {
  // check for start of comments
  if (cellText.match(/Comment Contents/)) {
    currentlyInComments = true;
    commentContentColumn = column;
  }
  if (cellText.match(/Comment Author \(Date\)/)) {
    currentlyInComments = true;
    commentAuthorColumn = column;
  }
}

function tableToPost(table, usersObject) {
  var post = getBasePost();
  var failed = false;
  commentProgress = 0;
  commentInProgress = getBaseComment();
  currentlyInComments = false;
  for (var i = 0; i < table.getNumRows(); i++) {
    row = table.getRow(i);
    for (var j = 0; j < row.getNumCells(); j++) {
      var cell = row.getCell(j);
      var cellText = cell.getText();
      handlePostContent(usersObject, post, cell, cellText);
      handlePostAuthor(usersObject, post, cell, cellText);
      handlePostReacts(usersObject, post, cell, cellText);
      handlePostLikes(usersObject, post, cell, cellText);
      handlePostMetrics(usersObject, post, cell, cellText);

      checkCommentsEnd(usersObject, post, cell, cellText);

      if (currentlyInComments) {
        handleComment(usersObject, post, cell, cellText, j);
      }

      checkCommentsStart(usersObject, post, cell, cellText, j);
    }
  }
  return {
    failed: failed,
    post: post
  };
}

function getTableHeader(table) {
  var firstCell = table.getRow(0).getCell(0);
  return firstCell.getText();
}

function isProfileTable(table) {
  var header = getTableHeader(table);
  return Boolean(header.match(/^\s*Profiles\s*$/));
}

function isAboutMeTable(table) {
  var header = getTableHeader(table);
  return Boolean(header.match(/^\s*About Me\s*$/));
}

function allTables() {
  var doc = DocumentApp.getActiveDocument();
  var tables = doc.getBody().getTables();
  return tables;
}

function getConverted(firstPostOnly, renderUserImages) {
  var usersObject = getUsers(renderUserImages);
  var users = usersObject.users;
  var canonicalNames = usersObject.canonicalNames;
  var data = {
    viewer: 'britain',
    posts: [],
    users: users
  }
  var tables = allTables();
  var failed = false;

  var postAlreadyProcessed = false;
  tables.forEach(function(table) {
    if (isProfileTable(table) || isAboutMeTable(table)) {
      // this is some other table . . . skip
      return;
    }
    if (firstPostOnly && postAlreadyProcessed) {
      // only want one
      return;
    }
    var post = tableToPost(table, usersObject);
    postAlreadyProcessed = true;
    if (post.failed) {
      failed = true;
    } else {
      data.posts.push(post.post);
    }
  });
  converted = JSON.stringify(data);
  if (failed) {
    throw new Error("Table conversion failed successfully");
  } else {
    return converted;
  }
}

function getConvertedAndFile(firstPostOnly, renderUserImages) {
  var converted = getConverted(firstPostOnly, renderUserImages);
  var file = DriveApp.createFile("data.json", converted);
  var fileURL = file.getDownloadUrl().replace("?e=download&gd=true","");
  Logger.log("fileURL " + fileURL);
  return {
    converted: converted,
    file: fileURL
  }
}

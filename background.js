// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log('The color is green.');
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'developer.chrome.com'},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

chrome.webNavigation.onCompleted.addListener(function() {
  let tabId;
  let tab;
    tab = chrome.tabs.query({active: true, currentWindow: true}, function(tab){

        /* Run function if variable "tab" is NOT null */
        if(tab){
            tabId = tab[0].id;

            sendMessage(tabId, "helloWorld");
        }
    });
})

function sendMessage(tabId, type){
  console.log(tabId, type);
  
  chrome.tabs.sendMessage(tabId, {message: type}, function(response){
      console.log(response);
  });
}

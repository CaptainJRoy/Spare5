// ==UserScript==
// @name         Spare5 Script
// @description  Periodically refreshes Spare5 checking for new tasks for use in background or pinned tabs. Tab icon turns from gray to green when tasks are available.
// @version      16.12.18
// @author       CaptainRoy
// @namespace    https://github.com/CaptainJRoy
// @license      MIT - https://tldrlegal.com/license/mit-license
// @match        http*://www.google.pt/search?tbs=sbi:*
// @match        http*://app.spare5.com/fives/tasks/beta
// @match        http*://app.spare5.com/fives/tasks
// @match        http://app.spare5.com/fives/tasks/328
// @match        http://app.spare5.com/fives/tasks/563
// @match        http://app.spare5.com/fives/tasks/829
// @match        http://app.spare5.com/fives/tasks/1134
// @match        http://app.spare5.com/fives/tasks/1135
// @match        http://app.spare5.com/fives/tasks/1169
// @match        http://app.spare5.com/fives/tasks/1183
// @match        http://app.spare5.com/fives/tasks/1195
// @match        http://app.spare5.com/fives/tasks/1198
// @match        http://app.spare5.com/fives/tasks/1204
// @match        http://app.spare5.com/fives/tasks/1206
// @match        http://app.spare5.com/fives/tasks/1222
// @match        http://app.spare5.com/fives/tasks/1223
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// @require      https://raw.githubusercontent.com/CaptainJRoy/Spare5/master/waitForKeyElements.js?token=ALAj852QF4EbKa35hcu6ZAt4iimsomnGks5YX-WwwA%3D%3D
// @require      https://raw.githubusercontent.com/CaptainJRoy/Spare5/master/autoSelect.js?token=ALAj892Txfdmh6G0NWpgMjc6Ju_F0FpKks5YbCXwwA%3D%3D
// @require      https://cdn.firebase.com/js/client/2.4.2/firebase.js
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/CaptainJRoy/Spare5/master/Spare5%20Script.meta.js?token=ALAj82no6gPF7qjrn1C7kKF8HwvNlqz0ks5YX-HewA%3D%3D
// @downloadURL  https://raw.githubusercontent.com/CaptainJRoy/Spare5/master/Spare5%20Script.js?token=ALAj82YYEpTQkuOwIiJ9bruUWApDmHerks5YX-HHwA%3D%3D
// ==/UserScript==

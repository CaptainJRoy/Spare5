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
// @require      https://raw.githubusercontent.com/CaptainJRoy/Spare5/master/autoSelect.js?token=ALAj88gf7eq9VpDc-dXL-0ts3AtprwmUks5YbCV7wA%3D%3D
// @require      https://cdn.firebase.com/js/client/2.4.2/firebase.js
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/CaptainJRoy/Spare5/master/Spare5%20Script.meta.js?token=ALAj82no6gPF7qjrn1C7kKF8HwvNlqz0ks5YX-HewA%3D%3D
// @downloadURL  https://raw.githubusercontent.com/CaptainJRoy/Spare5/master/Spare5%20Script.js?token=ALAj82YYEpTQkuOwIiJ9bruUWApDmHerks5YX-HHwA%3D%3D
// ==/UserScript==

// Do not interfere with any libraries used by Spare5
jQuery.noConflict();

(function($) {
    'use strict';
    var TASK_TIME = 2;   //TIME IN SECONDS
    var TASK_MID_BREAK = 9000;
    var ODD = Math.floor((Math.random() * 100) + 1);
    var moneyIn = new Audio('https://www.freesound.org/data/previews/75/75235_778044-lq.mp3');
    moneyIn.volume = 0.4;
    var firebase = new Firebase('https://spare5-script.firebaseio.com');
    var imgDesc;

    firebase.on('value', gotData, errData);
    function gotData(data) {
        var info = data.val();
        var keys = Object.keys(info);
        imgDesc = info[keys[keys.length - 1]].description;
    }
    function errData(err) {
        console.log("ERROR");
        console.log(err);
    }

    /**
    * PARA REMOVER AUTO DISPLAY BLOCK (MODAL BACKDROP), NAO E NECESSARIO
    * document.getElementById("instruction-modal").style = "display: none;";
    * document.getElementsByClassName("modal-backdrop fade in")[0].style = "display: none;";
    */
    /*
    function prepareFrame() {
        var iframe = document.createElement("iframe");
        iframe.src="https://codeshare.io/5Z6pQ5";
        iframe.width="100%";
        iframe.height="500";
        iframe.style="visibility:visible";
        document.body.appendChild(iframe);
    }
    */

    switch (location.href) {
        case 'http://app.spare5.com/fives/tasks/328':                       //TESTE CASE
            document.title = 'TUTORIAL FASHION';
            setTimeout(function() {
                window.open('https://www.google.com/searchbyimage?site=search&sa=X&image_url=' + document.getElementsByTagName('a')[17].firstChild.currentSrc);
                setTimeout(function() {
                document.title = imgDesc;
                //document.getElementsByClassName("question-multiselect-checkbox-label")[0].form.submit();
                }, TASK_MID_BREAK);
            }, TASK_TIME * 1000);
            break;

        case 'http://app.spare5.com/fives/tasks/563':
            document.title = 'MENTOR REVIEW';
            break;

        case 'http://app.spare5.com/fives/tasks/829':
            document.title = 'SPORTS REVIEW';
            setTimeout(function() {
                setTimeout(function(){
                    if(ODD >= 50) document.getElementsByClassName("question-multiselect-checkbox-label-wrapper")[1].children[0].click();       //BASKET
                else
                    if(ODD >= 25) document.getElementsByClassName("question-multiselect-checkbox-label-wrapper")[8].children[0].click();   //SOCCER
                    else document.getElementsByClassName("question-multiselect-checkbox-label-wrapper")[11].children[0].click();           //NOT A SPORT
                }, TASK_MID_BREAK / 2);
                setTimeout(function(){
                    document.getElementsByClassName("question-multiselect-checkbox-label")[0].form.submit();
                    moneyIn.play();
                }, TASK_MID_BREAK / 2);
                setTimeout(function(){location.reload();}, TASK_MID_BREAK);
            }, TASK_TIME * 1000);
            break;

        case 'http://app.spare5.com/fives/tasks/1134':                         // CHANGEME
            document.title = 'ROADMARKINGS';
            alert("NOT SUPORTED YET");
            break;

        case 'http://app.spare5.com/fives/tasks/1135':                        //REVIEW
            document.title = 'REVIEW ROAD MARKS';
            alert("CONFIRMAR VALORES DOS INDICES");
            setTimeout(function() {
                if(ODD >= 90) document.getElementById( document.getElementsByTagName("input")[9].id ).checked = true;
                else document.getElementById( document.getElementsByTagName("input")[8].id ).checked = true;
                document.getElementsByClassName("question-multiselect-checkbox-label")[0].form.submit();
                moneyIn.play();
            }, TASK_TIME * 1000);
            break;

        case 'http://app.spare5.com/fives/tasks/1169':                         //REVIEW
            alert("CONFIRMAR VALORES DOS INDICES");
            setTimeout(function() {
                if(ODD >= 90) document.getElementById( document.getElementsByTagName("input")[9].id ).checked = true;
                else document.getElementById( document.getElementsByTagName("input")[8].id ).checked = true;
                document.getElementsByClassName("question-multiselect-checkbox-label")[0].form.submit();
                moneyIn.play();
            }, TASK_TIME * 1000);
            break;

        case 'http://app.spare5.com/fives/tasks/1183':
            document.title = 'DESCRIBE IMAGE';
            setTimeout(function() {
                setTimeout(function(){
                    var temp = document.getElementById("job_answers_attributes_0_response").value = imgDesc;
                }, TASK_MID_BREAK / 2);
                setTimeout(function(){
                    document.getElementsByClassName("question-multiselect-checkbox-label")[0].form.submit();
                    moneyIn.play();
                }, TASK_MID_BREAK / 2);
                setTimeout(function(){location.reload();}, TASK_MID_BREAK);
            }, TASK_TIME * 1000);
            break;

        case 'http://app.spare5.com/fives/tasks/1195':
        case 'http://app.spare5.com/fives/tasks/1222':
            document.title = 'CATEGORIZE HOTEL REVIEWS';
            setTimeout(function() {
                setTimeout(function(){
                    if(ODD >= 75) {
                        document.getElementsByClassName("question-multiselect-checkbox-label-wrapper")[0].children[0].click();   //AMENITIES
                        document.getElementsByClassName("question-multiselect-checkbox-label-wrapper")[4].children[0].click();   //CLENLINESS
                    }
                    else {
                        if(ODD >= 50) document.getElementsByClassName("question-multiselect-checkbox-label-wrapper")[3].children[0].click();   //BREAKFAST
                        else {
                            if(ODD >= 25) {
                                document.getElementsByClassName("question-multiselect-checkbox-label-wrapper")[4].children[0].click();                //CLENLINESS
                                document.getElementsByClassName("question-multiselect-checkbox-label-wrapper")[5].children[0].click();                //CONFORT
                                document.getElementsByClassName("question-multiselect-checkbox-label-wrapper")[13].children[0].click();               //WIFI
                            }
                            else {
                                document.getElementsByClassName("question-multiselect-checkbox-label-wrapper")[8].children[0].click();                //PRICE
                                document.getElementsByClassName("question-multiselect-checkbox-label-wrapper")[10].children[0].click();               //ROOM
                                document.getElementsByClassName("question-multiselect-checkbox-label-wrapper")[11].children[0].click();               //STAFF
                            }
                        }
                    }
                }, TASK_MID_BREAK / 2);
                setTimeout(function(){
                    document.getElementsByClassName("question-multiselect-checkbox-label")[0].form.submit();
                    moneyIn.play();
                }, TASK_MID_BREAK / 2);
                setTimeout(function(){location.reload();}, TASK_MID_BREAK);
            }, TASK_TIME * 1000);
            break;

        case 'http://app.spare5.com/fives/tasks/1198':
            document.title = 'CATEGORY REVIEW';
            setTimeout(function() {
                if(ODD >= 90) document.getElementById( document.getElementsByTagName("input")[9].id ).checked = true;
                else document.getElementById( document.getElementsByTagName("input")[8].id ).checked = true;
                document.getElementsByClassName("question-multiselect-checkbox-label")[0].form.submit();
                moneyIn.play();
            }, TASK_TIME * 1000);
            break;

        case 'http://app.spare5.com/fives/tasks/1204':
            document.title = 'CREATE BOXES REVIEW';
            setTimeout(function() {
                if(ODD >= 90) document.getElementsByClassName("question-multiselect-checkbox-label-wrapper")[1].children[0].click();
                else document.getElementsByClassName("question-multiselect-checkbox-label-wrapper")[0].children[0].click();
                document.getElementsByTagName("input")[5].click();
                document.getElementById("instruction-modal").style = "display: none;";
                document.getElementsByClassName("modal-backdrop fade in")[0].style = "display: none;";
                setTimeout(function() {
                    if(ODD >= 90) document.getElementsByClassName("question-multiselect-checkbox-label-wrapper")[3].children[0].click();
                    else document.getElementsByClassName("question-multiselect-checkbox-label-wrapper")[2].children[0].click();
                    document.getElementsByTagName("input")[5].click();
                    setTimeout(function() {
                        document.getElementsByTagName("input")[5].click();
                        moneyIn.play();
                        location.reload();
                    }, TASK_MID_BREAK);
                }, TASK_MID_BREAK);
            }, TASK_TIME * 1000);
            break;

        case 'http://app.spare5.com/fives/tasks/1206':
            document.title = 'REVIEW FURNITURE ITEMS';
            setTimeout(function() {
                if(ODD >= 90) document.getElementsByClassName("question-multiselect-checkbox-label-wrapper")[1].children[0].click();
                else document.getElementsByClassName("question-multiselect-checkbox-label-wrapper")[0].children[0].click();
                document.getElementsByTagName("input")[5].click();
                document.getElementById("instruction-modal").style = "display: none;";
                document.getElementsByClassName("modal-backdrop fade in")[0].style = "display: none;";
                setTimeout(function() {
                    if(ODD >= 90) document.getElementsByClassName("question-multiselect-checkbox-label-wrapper")[3].children[0].click();
                    else document.getElementsByClassName("question-multiselect-checkbox-label-wrapper")[2].children[0].click();
                    document.getElementsByTagName("input")[5].click();
                    setTimeout(function() {
                        document.getElementsByTagName("input")[5].click();
                        moneyIn.play();
                        location.reload();
                    }, TASK_MID_BREAK);
                }, TASK_MID_BREAK);
            }, TASK_TIME * 1000);
            break;

        case 'http://app.spare5.com/fives/tasks/1223':
            document.title = 'CONFIRM HOTEL REVIEW CATEGORIES';
            setTimeout(function() {
                if(ODD >= 30) document.getElementsByClassName("question-multiselect-checkbox-label-wrapper")[0].children[0].click();
                else document.getElementsByClassName("question-multiselect-checkbox-label-wrapper")[1].children[0].click();
                setTimeout(function() {
                    document.getElementsByTagName("input")[4].click();
                    moneyIn.play();
                    location.reload();
                }, TASK_MID_BREAK);
            }, TASK_TIME * 1000);
            break;

        default:
            // ABRE APENAS NA PAGINA DO GOOGLE IMAGES
            if(location.href.includes("search?tbs=sbi:")) {
                setTimeout(function() {
                    var imageDescription = document.getElementsByClassName("_gUb")[0].innerText;
                    var imageURL = document.getElementsByClassName("_u6")[0].baseURI;
                    firebase.push({image:imageURL, description:imageDescription});
                    window.top.close();
                }, TASK_MID_BREAK / 2);
                break;
            }



            // These tasks will not contribute to the active task count
            // Insert task names here separated by commas, for example: var tasksToIgnore = 'Image Tagging, Fashion';
            var tasksToIgnore = 'Free Resource, Tutorial, Practice, Qualifier, Training';
            var secondsToReload = Math.floor((Math.random() * 30) + 1);

            var faviconInactive = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODc4RkYzNzMzMjQxMTFFNjgwRjBERDlCQ0RDMzVCQkEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODc4RkYzNzQzMjQxMTFFNjgwRjBERDlCQ0RDMzVCQkEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4NzhGRjM3MTMyNDExMUU2ODBGMEREOUJDREMzNUJCQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4NzhGRjM3MjMyNDExMUU2ODBGMEREOUJDREMzNUJCQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Psj9nC8AAAFySURBVHjalFI9qsJAGDQ/RhFBY0ihWKTRdwLBE3gDm1TBi1jZpvQEpja3ULBNRLFRExBBC0MIRNT3xny8bHzPximW2fky33y7G244HOY+AZ/7EGJ2o+t6u93+80UYhqPRqFAovEmQZfl/yyAIoiiK4/hNQrlcxoqybdscx5G43W7BIYIjhxlEUSwWiyDn83k+n6c69wvyMEOpVKKuKHQ6nUqlcjweXdd9PB6pDSVmoPbAVwLim81mPB7f7/fUww4N9+12o5EmkwlGB2+1Wt1uF+Q7wctIuD7TNJFzuVzggdkwDOiapi0Wi+v1SgY+e+h6vY6c0+mEWq1WIx3z5PN5SZIohyUMBoNGo+H7/mw2Q7nX65G+2+14nocHHDnMoCgK1maz2e/3U9HzvPV6DQM4PDwxwnQ6xTHSLW7TcRzLsjDG83ISCILAElar1XK5VFW1Wq1ibjwC/OmrPY+bdH/5NSAdDof9fo9O1DL72PTBjwADADFlq/E/xlk9AAAAAElFTkSuQmCC';
            var faviconActive, faviconEl;
            var selectorsToIgnore = '';

            // Reload the page even if the tasks do not load to handle error pages
            var notLoadingTimeout = setTimeout(function() {
                location.reload();
            }, secondsToReload * 1000);

            if (tasksToIgnore) {
                selectorsToIgnore = tasksToIgnore.split(/\s*,\s*/).map(function(text) { return ':not(:contains(' + text + '))'; }).join('');
            }

            function setupFavicon() {
                faviconEl = $('head link[rel="icon"][sizes="16x16"]');
                faviconActive = faviconEl.attr('href');

                // Remove all favicons so that the previous icon is used
                $('head link[rel="icon"]').remove();
            }

            function checkActiveTasks() {
                // Even though the task items are loaded there is
                // occasionally an additional delay needed
                setTimeout(function() {
                    clearTimeout(notLoadingTimeout);
                    var activeTaskCount = $('.task-item.active' + selectorsToIgnore).length;
                    var favicon = faviconInactive;

                    if (activeTaskCount > 0) {
                        document.title = 'Spare5  (' + activeTaskCount + ' active)';

                        // Som e volume costumizaveis (O valor á direita do soud.volume é em percentagem neste caso 5%, usar 15% no freesound)
                        // O ficheiro de som do freesound pode falhar (ver se funciona com videos do youtube)
                        //Cha Ching var sound = new Audio("https://www.freesound.org/data/previews/75/75235_778044-lq.mp3");
                        var sound = new Audio('https://dl-web.dropbox.com/get/money.mp3?_subject_uid=199747046&w=AAC7Hb1RS6RZ_Qmazp-JIqg93pQqDwrRbzv2bXEfrud99g&duc_id=dropbox_duc_id');
                        sound.volume = 0.10;
                        sound.play();

                        secondsToReload = secondsToReload * 2;
                        favicon = faviconActive;
                    }

                    // Update to the appropriate favicon
                    faviconEl.attr('href', favicon)
                        .appendTo('head');

                    if(activeTaskCount > 0) setTimeout(function() {
                        autoSelect(document.getElementsByClassName("task-item active"));
                    }, TASK_TIME * 1000);

                    setTimeout(function() {
                        location.reload();
                    }, secondsToReload * 1000);
                }, 500);
            }
            waitForKeyElements('head link[rel="icon"][sizes="16x16"]', setupFavicon, true);
            waitForKeyElements('.task-item', checkActiveTasks, true);
            break;
    }
})(jQuery);

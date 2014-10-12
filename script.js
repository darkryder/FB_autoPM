listOfAllPeople = ["https://www.facebook.com/abc",
"https://www.facebook.com/xyz"]

function main(){
    var message = "Custom text msg";
    var timeToAllowMessageWindowToOpen = 6 * 1000;
    var timeToPauseBeforeStartingWithNewPerson = 15 * 1000;
    var timeToWaitToAllowPageToOpen = 8 * 1000;

    if (listOfAllPeople.length <= 0){return;}

    // go to page of the person.
    console.log("Opening " + listOfAllPeople[0]);
    
    var windowObjectReference = window.open(listOfAllPeople[0], listOfAllPeople[0]);

    var data  ="console.log('Opening messagebox'); var temp = document.getElementById('pagelet_timeline_profile_actions');temp.lastChild.children[1].firstChild.click();"
    var data1 = "friend/ = temp.innerHTML.contains('Friends');console.log('"+ listOfAllPeople[0] +"' + ' is friend: ' + " + "friend);"
    var data2 = "setTimeout(function(){console.log('Starting writing message');if (friend){var a = document.getElementsByClassName('fbNubFlyoutFooter')[0];var messagearea = a.firstChild.firstChild;messagearea.value = '" + message + "';}else{var messagearea = document.getElementsByTagName('textarea')[0];messagearea.value = '" + message + "';}}, " + timeToAllowMessageWindowToOpen + ");"
    // TODO: after testing, append the code to simulate enter key here.
    // for automatically closing opened message boxes, uncomment
    var data3 = ""//"if(friend){a.parentElement.firstChild.firstChild.lastChild.click();}"
    console.log(data+data1+data2);
    
    setTimeout(function(){
        windowObjectReference.eval(data + data1+data2);      
    }, timeToWaitToAllowPageToOpen)

    setTimeout(function(){
        listOfAllPeople.shift();
        main();
    }, timeToPauseBeforeStartingWithNewPerson);
}
main();
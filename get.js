GJAPI.TrophyAchieve(223227, function(pResponse) {console.log(pResponse.message);});

GJAPI.UserFetchID(1, function(pResponse)
{
    if(!pResponse.users) return;
    console.info(pResponse.users[0].username + " - " + pResponse.users[0].developer_description);
});

GJAPI.UserFetchCurrent(function(pResponse)
{
    if(!pResponse.users) return;
    console.info(pResponse.users[0].username + " - " + pResponse.users[0].developer_description);
});

//запрещает перетаскивание и выделение

function no_text() {  
    return false
}

document.ondragstart = no_text;
document.onselectstart = no_text;
document.oncontextmenu = no_text;

window.history.forward();

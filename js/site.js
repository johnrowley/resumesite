var resumeObjects = 
    [

        {
            nameFirst: "Pat",
            nameId: "1234"
        },
        {

            nameFirst: "Pat2",
            nameId: "1234567"

        }
    ]



$(function () {

    injectResume(resumeData);

});

function injectResume(resumeObj) {

    $('#nameFirst').html(resumeObj.nameFirst);
    $('#nameId').html(resumeObj.nameId);

    renderEducaton(resumeObj.education) ;
}


function renderEducaton(listOfItems) {
    $('#education').empty();

    var htmlString = '';

for(var i =0; i < listOfItems.length; i++) {

var currentItem = listOfItems[i];

htmlString +='<li>\
<div class="year pull-left">' + currentItem.year +  '</div>\
<div class="description pull-right">\
  <h3>' + currentItem.title +' </h3>\
  <p>'+ currentItem.body +'</p>\
</div>\
</li>';

}

$('#education').append(htmlString);

}
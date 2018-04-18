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

    injectResume(resumeObjects[1]);

});

function injectResume(resumeOb) {


    $('#nameFirst').html(resumeOb.nameFirst);
    $('#nameId').html(resumeOb.nameId);



}
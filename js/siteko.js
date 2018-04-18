// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI

function EducationItem (year, title,body) {

        this.year = year;
        this.title = title;
        this.body = body;


}


function AppViewModel() {
    this.firstName = ko.observable("Bert");
    this.lastName = ko.observable("Bertington");
   

    self.educationItems = ko.observableArray([
        new EducationItem(1979,"Dublin","College of Commerce"),
        new EducationItem(1983,"Dublin","College of Marketing"),
        new EducationItem(1985,"Dublin","Open University"),
    ]);

    this.addEducation = function() {
        self.educationItems.push(new EducationItem(1986,"Dublin","School of Hard Knocks"))
    };
    

}

$(function () {

    ko.applyBindings(new AppViewModel());
})
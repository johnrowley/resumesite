// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI

function EducationItem (year, title,body) {

        this.year = year;
        this.title = title;
        this.body = body;


}

function ExperienceItem (year, company,jobtitle, jobdesc) {

    this.year = year;
    this.company = company;
    this.jobtitle = jobtitle;
    this.jobdesc = jobdesc;


}


function AppViewModel() {
    this.firstName = ko.observable("Bert");
    this.lastName = ko.observable("Bertington");
   

    self.educationItems = ko.observableArray([
        new EducationItem(1979,"Dublin","College of Commerce"),
        new EducationItem(1983,"Dublin","College of Marketing"),
        new EducationItem(1985,"Dublin","Open University"),
    ]);

    self.experienceItems = ko.observableArray([
        new ExperienceItem (1978, "Irish Ress","coybody", "runing around"),
        new ExperienceItem (1979, "Irish Ress","subeditor", "editing around"),
        new ExperienceItem (1980, "Irish Ress","production", "production around"),
    ]);


    this.addEducation = function() {
        self.educationItems.push(new EducationItem(1986,"Dublin","School of Hard Knocks"))
    };
    

}

$(function () {

    ko.applyBindings(new AppViewModel());
})
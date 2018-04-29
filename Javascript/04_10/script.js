function course(title,instructor,level,published,views) {
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews = function() {
        return ++this.views;
    };
}

var course01 = new Course("Javascript Essential Training","Morten Rand-Henriksen",1,true,0);

console.log(course01);
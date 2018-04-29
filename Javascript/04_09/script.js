var course = new Object();

/*course.title = "Javascript Essential Training";
course.instructor = "Morten Rand Henriksen";
course.level = 1;
course.published = true;
course.views = 0;*/

var course = {
    title: "Javascript Essential TRaining",
    instructor: "Morten Rand Henroksen",
    level: 1,
    published: true,
    views: 0,
    updateViews: function() {
        return ++course.views;
    }
}

console.log(course.views);
course.updateViews;
console.log(course.views);
//=========== Average grade per course ===============

// Seloke - BD_11 Avarage Grade per course

// Map function emits a tuple with course as key and grade as value
var mapFunction = function () {
    emit(this.course, this.grade);
};

// Reduce function which averages the grades grouped by course name 
var reduceFunction = function (key, values) {
    reducedValue = Array.avg(values);
    return reducedValue;
};

db.runCommand({
 mapReduce: 'Students',
 map: mapFunction,
 reduce: reduceFunction,
 out: {inline: 1}
 });




// ==========  5 student with the worst grade  in maths and history only. Formating the final grade as a percentage eg. 87%===============

// Seloke 5 worst students per course ...

// Map function emits a tuple with course as key and students name and grade as value

var mapFunction = function () {
    emit(this.course,{name:this.name,grade:this.grade});
};

var reduceFunction = function(key,values){
    StudentsGrades = [];
    
    values.forEach(function(item){ 
    StudentsGrades.push([item.name,item.grade])});
    
    StudentsGrades.sort(function(a,b){return a[1]<b[1];});
    
    WorstStudents = String("1. "+ StudentsGrades[StudentsGrades.length - 1][0] +" - "+ StudentsGrades[StudentsGrades.length - 1][1]+ "% "+
                           "2. "+ StudentsGrades[StudentsGrades.length - 2][0] +" - "+ StudentsGrades[StudentsGrades.length - 2][1]+ "% "+
                           "3. "+ StudentsGrades[StudentsGrades.length - 3][0] +" - "+ StudentsGrades[StudentsGrades.length - 3][1]+ "% "+
                           "4. "+ StudentsGrades[StudentsGrades.length - 4][0] +" - "+ StudentsGrades[StudentsGrades.length - 4][1]+ "% "+
                           "5. "+ StudentsGrades[StudentsGrades.length - 5][0] +" - "+ StudentsGrades[StudentsGrades.length - 5][1]+ "%");
   return WorstStudents;
};

db.runCommand({
mapReduce: 'Students',
map: mapFunction,
reduce: reduceFunction,
out: {inline:1}
});
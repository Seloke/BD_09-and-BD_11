// ========= top 5 students for each course ====================                        

// Seloke - BD_11 top 5 performing students by grade 


// Map function emits a tuple with course as key and students name and grade as value

var mapFunction = function () {
    emit(this.course,{name:this.name,grade:this.grade};);
};

var reduceFunction = function(key,values){
    StudentsGrades = [];
    
     StudentsGrades = values.sort(function(a,b){return a[1]<b[1];});
    //values.forEach(function(item){ 
      //  StudentsGrades.push(item.name,item.grade)
    //});
      
   
    
	
	//StudentsGrades.sort(function(a,b){return a[1]<b[1];});
	top = String(StudentsGrades[1][0]+" : "+StudentsGrades[1][1]+"  ,"+
		     StudentsGrades[2][0]+" : "+StudentsGrades[2][1]+"  		     
		    );
    return top
};

    


db.runCommand({
 mapReduce: 'Students',
 map: mapFunction,
 reduce: reduceFunction,
 out: {
 inline: 1
 }
 });
  

    
    
    
  /*  StudentsGrades.sort(function(a,b) {return a[1]<b[1];});
    
    
    
    var Top5Students = ""; 
    
    for (i=0; i<5; i++) {
         Top5Students = String(StudentsGrades[i][0]) +"   "+ String(StudentsGrades[i][1]);
       }
   
    return Top5Students
};*/



try {
   db.Students.insert( [
       {"name":"Baker Richards","year":2016,"grade":91,"course":"Mathematics"},
       {"name":"Kane Cervantes","year":2015,"grade":75,"course":"Mathematics"},
       {"name":"Sierra Frye","year":2015,"grade":70,"course":"Mathematics"},
       {"name":"Quin Watkins","year":2017,"grade":68,"course":"Mathematics"},
       {"name":"Cole Hill","year":2015,"grade":82,"course":"Mathematics"},
       {"name":"Zachary Gross","year":2016,"grade":74,"course":"Mathematics"},
       {"name":"Coby Witt","year":2015,"grade":83,"course":"Mathematics"},
       {"name":"Kirby Holt","year":2016,"grade":86,"course":"Mathematics"},
       {"name":"Ivy Watkins","year":2016,"grade":100,"course":"Mathematics"},
       {"name":"Brandon Hays","year":2015,"grade":91,"course":"Mathematics"},
       {"name":"Oprah Barrera","year":2017,"grade":92,"course":"Earth Science"},
       {"name":"Miranda Higgins","year":2015,"grade":79,"course":"Earth Science"},
       {"name":"Zane Cox","year":2017,"grade":66,"course":"Earth Science"},
       {"name":"Yvonne Mclean","year":2015,"grade":95,"course":"Earth Science"},
       {"name":"Wilma Church","year":2016,"grade":93,"course":"Earth Science"},
       {"name":"Kennan Moss","year":2017,"grade":95,"course":"Earth Science"},
       {"name":"Brandon Bolton","year":2015,"grade":65,"course":"Earth Science"},
       {"name":"Asher Lynch","year":2016,"grade":88,"course":"Earth Science"},
       {"name":"Marny Macias","year":2016,"grade":82,"course":"Earth Science"},
       {"name":"Graham Meyer","year":2015,"grade":98,"course":"Earth Science"}
   ] );
} catch (e) {
   print (e);
}

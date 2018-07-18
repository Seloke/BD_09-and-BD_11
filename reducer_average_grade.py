"""reducer_average_grade.py"""

# Seloke DB_09 reducer_average_grade.py

import sys

UniqueCourses = []
Students = []

# input comes from STDIN

#Get Unique Courses

for line in sys.stdin:
    
    # remove leading and trailing whitespace
    line = line.strip()
    
    # parse the input we got from mapper.py splitting by '\t'
    line = line.split('\t', 2)
    Students.append(line)

    unique = [UniqueCourses.append(line[2]) for x in line if line[2] not in UniqueCourses and line[2] !='course']
        
Course_Ave = []   
   
for i in range(len(UniqueCourses)):
    StudentsInCourse = 0
    TotalCourseMark = 0
            
    for y in range(len(Students)):
                
        if UniqueCourses[i] == Students[y][2]:
            StudentsInCourse +=1
            TotalCourseMark += int(Students[y][1])
            
    print('%s\t%s' % (UniqueCourses[i],TotalCourseMark/StudentsInCourse))   
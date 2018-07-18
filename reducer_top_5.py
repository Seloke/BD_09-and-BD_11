"""reducer_top_5.py"""
# fill in code

# Seloke DB_09 - reducer_top_5.py

import sys

UniqueCourses = []
Data = []

# input comes from STDIN

#Get Unique Courses

for line in sys.stdin:
    
    # remove leading and trailing whitespace
    line = line.strip()
    
    # parse the input we got from mapper.py splitting by '\t'
    line = line.split('\t', 2)
    if line[2] !='course':
        expanded = [str(line[0]), int(line[1]),str(line[2])] 
        Data.append(expanded)

    unique = [UniqueCourses.append(line[2]) for x in line if line[2] not in UniqueCourses and line[2] !='course']
        

from operator import itemgetter

#Sorting the list according to suject, grade and name


DataSorted = sorted(Data, key=itemgetter(2,1,0),reverse=True)
UniqueCourses =sorted(UniqueCourses,reverse=True)

#Printing top 5 students per course
topFiveStudents = []

i =0

for y in range(len(DataSorted)):
    if i < len(UniqueCourses):   
        if UniqueCourses[i] == DataSorted[y][2]:
            z = y
            ind =0
            while ind<5:
                topFiveStudents.append(DataSorted[z]) 
                z+=1 
                ind+=1
            i+=1

for i in range(len(topFiveStudents)):
    print('%s\t%s\t%s' % (topFiveStudents[i][0],topFiveStudents[i][1],topFiveStudents[i][2]))   
           
            
            
            
     
"""mapper.py"""

# Seloke DB_09 Parallel Computing

import sys

# input for this step comes from STDIN (standard input)
for line in sys.stdin:
    # remove leading and trailing whitespace
    line = line.strip()
    # split the line and select the three columns needed
    items = line.split(',')
    print('%s\t%s\t%s' % (items[0].lower(),items[2],items[3].lower()))
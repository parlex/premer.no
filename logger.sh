#!/usr/bin/env bash

# Use this one-liner to produce a JSON literal from the Git log:

cd ~/../../var/www/html/premer.no/

git log \
    -n 15 --pretty=format:'{%n  "commit": "%H",%n  "author": "%an <%ae>",%n  "date": "%ar",%n  "message": "%f"%n},' \
    $@ | \
    perl -pe 'BEGIN{print "["}; END{print "]\n"}' | \
    perl -pe 's/},]/}]/' > gitlog.json
#Thanks to textarcana for making this script
#https://gist.github.com/textarcana/1306223

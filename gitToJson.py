#!/usr/bin/python
import os;

os.system("git log     --pretty=format:'{%n  "commit": "%H",%n  "author": "%an <%ae>",%n  "date": "%ad",%n  "message": "%f"%n},'     $@ |     perl -pe 'BEGIN{print "["}; END{print "]\n"}' |     perl -pe 's/},]/}]/' > gitlog.json
");

#!/usr/bin/python
import os;

os.system("git log --pretty=format:'{%n user: %an,%n msg: %s,%n since: %ar%n}' >> gitlog.json");

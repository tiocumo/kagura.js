import sys
import requests

url=sys.argv[1]
path=sys.argv[2]

with open(path,"wb") as f:
  f.write(requests.get(url).content)
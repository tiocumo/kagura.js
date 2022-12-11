import json
import re
import os
from css_html_js_minify import js_minify

class Yakumo:

  def __init__(self, config):
    conf = json.loads(config)
    root = conf["root"]

    self.main = root + conf["main"]
    self.start = conf["split"]["start"]
    self.end = conf["split"]["end"]
    self.root = root

  def hasamare(self, text, start, end):

    def reEscape(text):
      escapes = ["\\"]
      escapes.extend(list("*+.?{}()[]^$-|/"))
      for escape in escapes:
        text = text.replace(escape, ("\\") + escape)
      return text

    c = (reEscape(start) + r'(.+)' + reEscape(end))
    str = re.findall(c, text)
    return str

  def build(self):
    files = {}
    with open(self.main) as f:
      main = f.read()
      while True:
        hasa = self.hasamare(main, self.start, self.end)
        if len(hasa) == 0:
          break
        hasa = hasa[0]
        path = self.root + hasa

        if not path in files:
          with open(path) as file:
            files[path] = file.read()
        main = main.replace(
          self.start + hasa + self.end,
          files[path],
        )
      return main


def build(configPath, outPath,minifyPath=None):
  with open(configPath) as f:
    yakumo = Yakumo(f.read())
  if not os.path.isdir(os.path.dirname(outPath)):
    os.makedirs(os.path.dirname(outPath))
  b=yakumo.build()
  with open(outPath, "w") as f:
    f.write(b)
  if(minifyPath):
    with open(minifyPath,"w") as f:
      f.write(js_minify(b))
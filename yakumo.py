import json
import re
import os


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


def build(configPath, outPath):
  with open(configPath) as f:
    yakumo = Yakumo(f.read())
  if not os.path.isdir(os.path.dirname(outPath)):
    os.makedirs(os.path.dirname(outPath))
  with open(outPath, "w") as f:
    f.write(yakumo.build())
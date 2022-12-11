from flask import Flask,Response
import mimetypes
import yakumo

app = Flask(__name__)


@app.route('/')
def index():
  with open("index.html") as f:
    return f.read()
@app.route('/kagura.js')
def kagurajs():
  yakumo.build("./yakumo.config.json","./dist/kagura.js","./dist/kagura.min.js")
  with open("./dist/kagura.js") as f:
    resp=Response(f.read())
    resp.mimetype="text/javascript"
    return resp
@app.route('/<path:path>') 
def free_path(path) :
  try:
    with open(path) as f:
      resp=Response(f.read())
      resp.mimetype = mimetypes.guess_type(path)[0]
      return resp
  except:
    return "404",404

app.run(host='0.0.0.0', port=81)

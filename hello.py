from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/index")
def hello():
    return render_template("index.html")

@app.route("/bitcoin")
def bitcoin():
    return render_template("bitcoin.html")

app.run()
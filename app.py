from flask import Flask, render_template
import requests

app = Flask(__name__)

@app.route('/')
def home():
    response = requests.get('http://190.83.96.85:3000/agricola')
    productos = response.json()
    return render_template('index.html', productos=productos)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

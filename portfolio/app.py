from flask import Flask, render_template, send_from_directory

app = Flask(__name__, static_folder='assets')


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/portfolio/assets/<path:path>')
def send_static(path):
    return send_from_directory('assets', path)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=port, debug=True)

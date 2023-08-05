from flask import Flask
from flask_cors import CORS, cross_origin
from website import recomend;

app = Flask(__name__, static_folder='../movie-recommendation-system/build', static_url_path='/')
CORS(app)

@app.route('/recommend/<movie>',methods=['GET'])
@cross_origin()
def Recommended(movie):
    return recomend(movie)

@app.errorhandler(404)
@cross_origin()
def not_found(e):
    return app.send_static_file('index.html')

@app.route('/')
@cross_origin()
def index():
    return app.send_static_file('index.html')

if __name__ == "__main__":
    app.run(debug=True)

import pandas as pd
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin
from flask import Flask, request, render_template, jsonify
import requests

newMovies = pd.read_pickle('movies.pkl')
similarity = pd.read_pickle('similarity.pkl')
movieNames = pd.read_pickle('movieNames.pkl')

def getMovieDetaile(movieId):
    response = requests.get('https://api.themoviedb.org/3/movie/{}?api_key=2144c30ff91ce4ad919d206c68ffe29c'.format(movieId))
    data = response.json()
    return data

def recomend(movie):
    movie = movie.lower()
    movie = movie.replace(r' ','-')
    currMovie = newMovies[newMovies['comp'] == movie]
    res = []
    if(currMovie.size==0):
        res.append("No Movies Found")
        result = {'found' : 0,'data':None}
    else:
        movie_index = currMovie.index[0]
        distance = similarity[movie_index]
        res.append(getMovieDetaile(newMovies.iloc[movie_index].movie_id))
        movies_list = sorted(list(enumerate(distance)), reverse=True, key = lambda x:x[1])[1:6]
        for i in movies_list:
            res.append(getMovieDetaile(newMovies.iloc[i[0]].movie_id))
        result = {'found' : 1,'data':res}
    return jsonify(result)


# app = Flask(__name__)
app = Flask(__name__, static_folder='../movie-recommendation-system/build', static_url_path='/')
CORS(app)

@app.route('/recommend/<movie>',methods=['GET'])
@cross_origin()
def Recommended(movie):
    # print(movie)
    return recomend(movie)

@app.route('/getmovienames',methods=['GET'])
@cross_origin()
def sendNames():
    result = movieNames.to_dict()
    return jsonify(result)

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


# print(recomend('falcon Rising'))



# https://api.themoviedb.org/3/movie/65?api_key=2144c30ff91ce4ad919d206c68ffe29c
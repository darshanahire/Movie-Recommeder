import pandas as pd
from flask import jsonify
import requests

# newMovies = pd.read_pickle('movies.pkl')
# similarity = pd.read_pickle('similarity.pkl')
# newMovies = open('movies.pkl','rb')
with open("similarity.pkl", 'rb') as k:
    similarity=pd.read_pickle(k)
with open("movies.pkl", 'rb') as f:
    newMovies=pd.read_pickle(f)

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
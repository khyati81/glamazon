from flask import Flask, render_template, url_for, request
from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import pandas as pd    
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity  
from sklearn.metrics import pairwise_distances
from gensim.models import Word2Vec
from gensim.models import KeyedVectors
import pickle
from cnn import*
from idf_w2_vec import*

data= pd.read_pickle('17k_apperal_data_n')
stop_words = set(stopwords.words('english'))
def prepocessing(total_text, index, column):
    if type(total_text) is not int:
        string = ""
        for words in total_text.split():
            word = ("".join(e for e in words if e.isalnum()))
            word = word.lower()
            if not word in stop_words:
                string += word + " "
        data[column][index] = string
for index, row in data.iterrows():
    prepocessing(row['title'], index, 'title')
    
app = Flask(__name__)

CORS(app)
@app.route('/',methods=['POST','GET'])
def home():

    response = ({request.json})
    v=list(response)[0]
    print(v)
   
    r1=get_similar_products_cnn(v, 10)
    inp =0
    for i in range(len(data)):
        if data.iloc[i]['asin']== v:
            inp=i
            break
    r2 = weighted_w2v_model(inp)
    return jsonify({'similar': list(r1+r2)})
if __name__ == '__main__':
    app.run(debug=True)
    

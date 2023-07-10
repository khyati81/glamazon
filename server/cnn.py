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

def get_similar_products_cnn(v, num_results):
    bottleneck_features_train = np.load('16k_data_cnn_features.npy')
    asins = np.load('16k_data_cnn_feature_asins.npy')
    data = pd.read_pickle('17k_apperal_data_n')
    df_asins = list(data['asin'])
    asins = list(asins)
    doc_id = asins.index( v)
    pairwise_dist = pairwise_distances(bottleneck_features_train, bottleneck_features_train[doc_id].reshape(1,-1))

    indices = np.argsort(pairwise_dist.flatten())[0:num_results]
    pdists  = np.sort(pairwise_dist.flatten())[0:num_results]
    r=[]
    for i in range(len(indices)):
        r.append(asins[indices[i]])
    return r
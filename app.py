import pickle

import numpy as np
from flask import Flask, request

app = Flask(__name__)
model = pickle.load(open('model.pkl', 'rb'))

@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'

@app.route('/test_predict')
def test_predict():
    Xnew = [[1000, 31, 15, 1, 2, 1, 32, 20, 12, 11]]
    prediction = model.predict(Xnew)
    print(prediction)
    return np.array2string(prediction)

@app.route('/predict', methods=['POST'])
def predict():  # put application's code here
    data = request.get_json(force=True)
    Xnew = [[1000, 31, 15, 1, 2, 1, 32, 20, 12, 11]]
    prediction = model.predict(Xnew)
    print(prediction)
    return 'Hello'


if __name__ == '__main__':
    app.run()

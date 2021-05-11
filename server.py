"""Server for Recallama app."""

from flask import (Flask, render_template, request, flash, session, redirect, jsonify)
from model import connect_to_db
import crud
import model

from jinja2 import StrictUndefined

from pprint import pformat
import os
import requests


app = Flask(__name__)
app.secret_key = "M3XIXXKzRa3hlxp404ldCUSeCxn3a7Ubfl17TRro"
app.jinja_env.undefined = StrictUndefined

API_KEY = os.environ['OPENFDA_KEY']

@app.route('/results')
@app.route('/signup')
@app.route('/login')
@app.route('/search')
@app.route('/')
def homepage():
    """view homepage"""
    return render_template('root.html')

@app.route('/api/login', methods=["POST"])
def login():

    input_email = request.form.get('email')
    input_password = request.form.get('password')

    user = crud.get_user_by_email(input_email)

    if user and user.password == input_password:
        session['user'] = user.user_id
        session['user_name'] = f'{user.fname} {user.lname}'
        return redirect('/search')
    else:
        flash('incorrect login')
        return redirect('/login')


@app.route('/api/signup', methods=["POST"])
def signup():

    data = request.get_json()

    input_fname = data['fname']
    input_lname = data['lname']
    input_email = data['email']
    input_password = data['password']

    if input_email in crud.get_all_emails():
        return '"email used"'
    
    new_user = crud.create_user(input_fname, input_lname, input_email, input_password)

    return '"account made"'


@app.route('/results', methods=["POST"])
def search():

    product_description = request.form.get("description")
    status = request.form.get("status")
    reason_for_recall = request.form.get("reason-for-recall")
    recalling_firm = request.form.get("recalling-firm")
    
    url = 'https://api.fda.gov/food/enforcement.json?search=status="Terminated"&limit=5'

    # url = 'https://api.fda.gov/food/enforcement.json'

    data = requests.get(url).json()

    return data

    # return jsonify(data)
    ## returns a list of recall objects from the api call
    ## return jsonify(recall_list)

    # res = requests.get(url, params=payload)
    # data = res.json()
    # return render_template('root.html', data=data)

    # data_list = data["results"]
    # recall_list = []
    # for result in data_list:
    #     recall_list.append({"recall_number": result["recall_number"], 
    #                         "product_description": result["product_description"], 
    #                         "code_info": result["code_info"], 
    #                         "recalling_firm": result["recalling_firm"], 
    #                         "reason_for_recall": result["reason_for_recall"], 
    #                         "recall_initiation_date": result["recall_initiation_date"], 
    #                         "status": result["status"]
    #     })
    # return render_template('/root.html', recall_list={"recalls": recall_list})
    

    # search_results - res.json()
    # field = 'status="Terminated"'
    # limit = '&limit=5'
    # complete_url = url + field + limit

    # return render_template('/root.html', data=jsonify(data))
    ## shows regular page but
    ## Error: Uncaught (in promise) SyntaxError: Unexpected token < in JSON at position 0
    ## problem is at the second .then for results.jsx



if __name__ == '__main__':
    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)


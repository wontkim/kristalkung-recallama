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
app.secret_key = "kksecretkey"
app.jinja_env.undefined = StrictUndefined


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
        # TODO: figure out how to get this to appear on the front end 
        # and let the user know on the web page 
        # that they cannot use this email
    
    new_user = crud.create_user(input_fname, input_lname, input_email, input_password)

    return '"account made"'


@app.route('/search', methods=["POST"])
def search():

    payload = {}

    product_description = request.form.get("description")
    status = request.form.get("status")
    reason_for_recall = request.form.get("reason-for-recall")
    recalling_firm = request.form.get("recalling-firm")


    inputs = [product_description, status, reason_for_recall, recalling_firm]

    for input in inputs:
        if input != "":
            payload[input] = f'{input}'
    
    url = 'https://api.fda.gov/food/enforcement.json?search=status="Terminated"&limit=5'

    data = requests.get(url).json()

    # res = requests.get(url, payload)
    # print(res.url)
    # flash(res)

    # search_results - res.json()
    # field = 'status="Terminated"'
    # limit = '&limit=5'
    # complete_url = url + field + limit

    # return jsonify(data)                 
    return render_template('/results.html', data=jsonify(data))

    # search = '?search='
    # field = 'status="Terminated"'
    # field = 'recalling_firm:"Garden-Fresh Foods, Inc."'
    # limit = '&limit=5'

    # complete_url = url + search + field + limit

    # data = requests.get(complete_url).json()

    # return render_template('results.html')
    


if __name__ == '__main__':
    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)


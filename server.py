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

@app.route('/profile')
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


@app.route('/api/results', methods=["POST"])
def search():
    payload = {
        'api_key': API_KEY,
        'limit': 5
    }
    product_description = request.form.get("description")
    status = request.form.get("status")
    reason_for_recall = request.form.get("reason-for-recall")
    recalling_firm = request.form.get("recalling-firm")

    search_terms = []

    if product_description:
        search_terms.append(f'product_description:"{product_description}"')
    if status:
        search_terms.append(f'status:"{status}"')
    if reason_for_recall:
        search_terms.append(f'reason_for_recall:"{reason_for_recall}"')
    if recalling_firm:
        search_terms.append(f'recalling_firm:"{recalling_firm}"')
    
    if search_terms:
        payload['search'] = '+AND+'.join(search_terms)

    print(payload)

    # url = 'https://api.fda.gov/food/enforcement.json?search=status=Terminated&limit=5'
    # url = 'https://api.fda.gov/food/enforcement.json?search=status:"Terminated"+AND+recalling_firm:"Harry"&limit=5'

    url = 'https://api.fda.gov/food/enforcement.json'
    
    # CURRENT STATE: can query just 1 field
    # TODO: make it work with >1 fields entered in.

    data = requests.get(url, params=payload).json()

    if data.get('error'):
        return data

    data_list = data['results']

    return jsonify(data_list)


if __name__ == '__main__':
    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)


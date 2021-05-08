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

    # if user and user.password == input_password:
    #     session['user'] = user.user_id
    #     flash('Logged in.')
    #     return redirect('/')
    # else:
    #     flash('incorrect login')
    #     return redirect('/login')

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


@app.route('/api/search', methods=["POST"])
def search():

    data = request.get_json()
    
    print(data)

    input_description = data['description']
    input_status = data['status']
    input_reason_for_recall = data['reasonForRecall']
    input_recalling_firm = data['recallingFirm']

    search_result = crud.get_food_recall_by_description(input_description)

    if input_description in search_result:
        return jsonify("search successful")
    else:
        return jsonify("search failed")


# @app.route('/search/results')
# def search_results():
#     """View results from the search."""

#     url = 'https://api.fda.gov/food/enforcement.json'
#     search = '?search='
#     field = 'recalling_firm:"Garden-Fresh Foods, Inc."'
#     limit = '&limit=5'

#     complete_url = url + search + field + limit

#     data = requests.get(complete_url).json()

#     for result in data.get('results', []):
#         print(result)

#     return render_template('results.html', result=result)











# # app routes go here
# @app.route('/')
# def homepage():
#     """View homepage."""
#     return render_template('homepage.html')

# @app.route('/login')
# def login():
#     """View login page."""
    
#     return render_template('login.html')

# @app.route('/login', methods=['POST'])
# def user_login():
#     """Login user"""

#     input_email = request.form.get('email')
#     input_password = request.form.get('password')

#     user = get_user_by_email(input_email)

#     if user and user.password == input_password:
#         session['user'] = user.user_id
#         alert('Logged in.')
#         return redirect('/')
#     else:
#         alert('incorrect login')
#         return redirect('/')

# @app.route('/users', methods=['POST'])
# def register_user():
#     """Create a new user."""

#     fname = request.form.get('fname')
#     lname = request.form.get('lname')
#     email = request.form.get('email')
#     password = request.form.get('password')

#     user = crud.get_user_by_email(email)
#     if user:
#         flash('Cannot create an account with that email. Try again.')
#     else:
#         crud.create_user(fname, lname, email, password)
#         flash('Account created! Please log in.')

#     return redirect('/')

# @app.route('/search/results')
# def search_results():
#     """View results from the search."""

#     url = 'https://api.fda.gov/food/enforcement.json'
#     search = '?search='
#     field = 'recalling_firm:"Garden-Fresh Foods, Inc."'
#     limit = '&limit=5'

#     complete_url = url + search + field + limit

#     data = requests.get(complete_url).json()

#     for result in data.get('results', []):
#         print(result)

#     return render_template('results.html', result=result)


if __name__ == '__main__':
    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)


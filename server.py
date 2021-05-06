"""Server for Recallama app."""

from flask import (Flask, render_template, request, flash, session, redirect)
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

    data = request.get_json()

    email = data['email']
    password = data['password']

    valid_user = True
    # write a function here that will validate the user

    if valid_user:
        return jsonify("login successful")
    else:
        return jsonify("login failed")


@app.route('/api/signup', methods=["POST"])
def login():

    data = request.get_json()
    
    fname = data['fname']
    lname = data['lname']
    email = data['email']
    password = data['password']

    valid_user = True
    # write a function here that will validate the user

    if valid_user:
        return jsonify("login successful")
    else:
        return jsonify("login failed")


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

# @app.route('/signup')
# def signup():
#     """View sign up page."""

#     return render_template('signup.html')

# @app.route('/search')
# def search():
#     """View the search page."""
#     return render_template('search.html')

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


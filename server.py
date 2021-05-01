"""Server for Recallama app."""

from flask import (Flask, render_template, request, flash, session,
                   redirect)
from model import connect_to_db
import crud
import model

from jinja2 import StrictUndefined

app = Flask(__name__)
app.secret_key = "kksecretkey"
app.jinja_env.undefined = StrictUndefined


# app routes go here
@app.route('/')
def homepage():
    """View homepage."""
    return render_template('homepage.html')

@app.route('/login')
def login():
    """View login page."""
    
    return render_template('login.html')

@app.route('/signup')
def signup():
    """View sign up page."""

    return render_template('signup.html')


if __name__ == '__main__':
    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)


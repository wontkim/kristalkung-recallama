from datetime import datetime
from model import db, User, Food, Drug, Favorite, connect_to_db

def create_user(fname, lname, email, password):
    """Create and return a new user."""

    user = User(fname=fname, lname=lname, email=email, password=password)

    db.session.add(user)
    db.session.commit()

    return user


# this will connect to the database when running crud.py interactively
if __name__ == '__main__':
    from server import app
    connect_to_db(app)
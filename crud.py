from model import db, User, Movie, Rating, connect_to_db




# this will connect to the database when running crud.py interactively
if __name__ == '__main__':
    from server import app
    connect_to_db(app)
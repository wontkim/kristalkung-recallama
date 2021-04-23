from datetime import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    """A user."""

    __tablename__ = 'users'

    user_id = db.Column(db.Integer,
                        autoincrement=True,
                        primary_key=True,
                        nullable=False)
    fname = db.Column(db.String, nullable=False)
    lname = db.Column(db.String, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String, nullable=False)
    
    def __repr__(self):
        return f'<User user_id={self.user_id}, name={self.fname} {self.lname}, email={self.email}>'

class Food(db.Model):
    """A food recall."""

    __tablename__ = 'foods'

    food_id = db.Column(db.Integer,
                        autoincrement=True,
                        primary_key=True,
                        nullable=False)
    recall_number = db.Column(db.String, nullable=False)
    product_description = db.Column(db.String, nullable=False)
    code_info = db.Column(db.String, nullable=False)
    recalling_firm = db.Column(db.String, nullable=False) 
    recall_reason = db.Column(db.String, nullable=False)
    recall_initiation_date = db.Column(db.DateTime, nullable=False)
    status = db.Column(db.String, nullable=False)

    user = db.relationship('User', backref='foods')

    def __repr__(self):
        return f'<Food recall_number={self.recall_number}, recalling_firm={recalling_firm}, status={self.status}>'


class Drug(db.Model):
    """A drug recall."""

    __tablename__ = 'drugs'

    drug_id = db.Column(db.Integer,
                        autoincrement=True,
                        primary_key=True,
                        nullable=False)
    recall_number = db.Column(db.String, nullable=False)
    product_description = db.Column(db.String, nullable=False)
    code_info = db.Column(db.String, nullable=False)
    recalling_firm = db.Column(db.String, nullable=False) 
    recall_reason = db.Column(db.String, nullable=False)
    recall_initiation_date = db.Column(db.DateTime, nullable=False)
    status = db.Column(db.String, nullable=False)

    user = db.relationship('User', backref='drugs')

    def __repr__(self):
        return f'<Drug recall_number={self.recall_number}, recalling_firm={recalling_firm}, status={self.status}>'



def connect_to_db(flask_app, db_uri='postgresql:///ratings', echo=True):
    flask_app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
    flask_app.config['SQLALCHEMY_ECHO'] = echo
    flask_app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.app = flask_app
    db.init_app(flask_app)

    print('Connected to the db!')


if __name__ == '__main__':
    from server import app
    

    # Call connect_to_db(app, echo=False) if your program output gets
    # too annoying; this will tell SQLAlchemy not to print out every
    # query it executes.

    connect_to_db(app)
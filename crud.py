from datetime import datetime
from model import db, User, Food, Drug, Favorite, connect_to_db

def create_user(fname, lname, email, password):
    """Create and return a new user."""

    user = User(fname=fname, lname=lname, email=email, password=password)

    db.session.add(user)
    db.session.commit()

    return user

def create_food_recall(recall_number, product_description, code_info, recalling_firm, recall_reason, recall_initiation_date, status):
    """Create and returns a new food recall."""

    food_recall = Food(recall_number=recall_number, 
                       product_description=product_description, 
                       code_info=code_info, 
                       recalling_firm=recalling_firm, 
                       recall_reason=recall_reason, 
                       recall_initiation_date=recall_initiation_date, 
                       status=status)
    db.session.add(food_recall)
    db.session.commit()

    return food_recall

def create_favorite(user, food, drug, comment):
    """Create and return a new favorite."""

    favorite = Favorite(user=user, food=food, drug=drug, comment=comment)

    db.session.add(favorite)
    db.session.commit()

    return favorite


# this will connect to the database when running crud.py interactively
if __name__ == '__main__':
    from server import app
    connect_to_db(app)
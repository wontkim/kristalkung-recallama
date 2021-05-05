from datetime import datetime
from model import db, User, Food, Drug, Favorite, connect_to_db

def create_user(fname, lname, email, password):
    """Create and return a new user."""

    new_user = User(fname=fname, lname=lname, email=email, password=password)

    db.session.add(new_user)
    db.session.commit()

    return new_user

def get_user_by_email(email):
    """Return a user by email."""

    return User.query.filter(User.email == email).first()

def create_food_recall(recall_number, product_description, code_info, recalling_firm, reason_for_recall, recall_initiation_date, status):
    """Create and returns a new food recall."""

    food_recall = Food(recall_number=recall_number, 
                       product_description=product_description, 
                       code_info=code_info, 
                       recalling_firm=recalling_firm, 
                       reason_for_recall=reason_for_recall, 
                       recall_initiation_date=recall_initiation_date, 
                       status=status)
    db.session.add(food_recall)
    db.session.commit()

    return food_recall

def create_favorite_food_recall(comment, user, food):
    """Create and return a new favorite food recall."""
    
    favorite = Favorite(comment=comment, user=user, food=food)

    db.session.add(favorite)
    db.session.commit()

    return favorite

def create_drug_recall(recall_number, product_description, code_info, recalling_firm, reason_for_recall, recall_initiation_date, status):
    """Create and returns a new drug recall."""

    drug_recall = Drug(recall_number=recall_number, 
                       product_description=product_description, 
                       code_info=code_info, 
                       recalling_firm=recalling_firm, 
                       reason_for_recall=reason_for_recall, 
                       recall_initiation_date=recall_initiation_date, 
                       status=status)
    db.session.add(drug_recall)
    db.session.commit()

    return drug_recall

def create_favorite_drug_recall(comment, user, drug):
    """Create and return a new favorite drug recall."""
    
    favorite = Favorite(comment=comment, user=user, drug=drug)

    db.session.add(favorite)
    db.session.commit()

    return favorite


# this will connect to the database when running crud.py interactively
if __name__ == '__main__':
    from server import app
    connect_to_db(app)
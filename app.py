# Dependencies
import pandas as pd
import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import datetime as dt
from flask import Flask
from flask import Flask, jsonify

#################################################
# Database Setup
#################################################
engine = create_engine(
    "postgres://shihlhslfsiyfb:fb0d5fcc82dcc4a8b6cf460472c0a77e21a1dade1b668fd7efbdcbbda8aac145@ec2-107-20-104-234.compute-1.amazonaws.com:5432/ddn79un7gs1tf3")


# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
# Aca = Base.classes.aca_table

#################################################
# Flask Setup

app = Flask(__name__)


@app.route("/")
def homepage():

    # Render an index.html template and pass in the data retrieved from the database
    return render_template("index.html")


@app.route("/demographics/<state>")
def demographics(state):
    # Create our session (link) from Python to the DB
    session = Session(engine)
    state = state.capitalize()
    query = f"""
    Select "State", "Deaths_2010", "Deaths_2015", "Births_2010", "Births_2015"
    From aca_table
    where "State" = '{state}'"""

    data = session.execute(query).fetchall()
    session.close()
    print(data)
    #  aca_list = []

    for state in data:
        new_dict = {}
        new_dict["State"] = state[0]
        new_dict["Deaths (2010)"] = state[1]
        new_dict["Births (2010)"] = state[2]
        new_dict["Deaths (2015)"] = state[3]
        new_dict["Births (2015)"] = state[4]
            # aca_list.append(new_dict)

    return jsonify(new_dict)

    


# @app.route("/deaths")
# def deaths():
#     # Create our session (link) from Python to the DB
#     session = Session(engine)

#     # Query all stations
#     deaths_results = session.query(States.name, States.deaths).all()

#     session.close()

#     # Convert to list of dictionaries to jsonify
#     deaths_list = []

#     for deaths, states in deaths_results:
#         new_dict = {}
#         new_dict[deaths] = states
#         death_list.append(new_dict)

#     return jsonify (death_list)

# @app.route("/births")
# def births():
#     # Create our session (link) from Python to the DB
#     session = Session(engine)

#     # Query for the dates and births by states and dates
#     birth_results = session.query(States.name, States.births).\
#         group_by(States.name).order_by(States.births).all()

#     session.close()

#     # Convert to list of dictionaries to jsonify
#     births_list = []

#     for births, states in birth_results:
#         new_dict = {}
#         new_dict[birth] = states
#         birth_list.append(new_dict)

#     return jsonify(births_list)


# @app.route("/uninsured")
# def deaths():
#     # Create our session (link) from Python to the DB
#     session = Session(engine)

#     # Query all uninsured
#     uninsured_results = session.query(States.name, States.uninsured).all()

#     session.close()

#     # Convert to list of dictionaries to jsonify
#     uninsured_list = []

#     for uninsured, states in uninsured_results:
#         new_dict = {}
#         new_dict[uninsured] = uninsured
#         uninsured_list.append(new_dict)

#     return jsonify(uninsured_list)

    # # Return to home page
    # return redirect("/", code=302)

if __name__ == "__main__":
    app.run(debug=True)

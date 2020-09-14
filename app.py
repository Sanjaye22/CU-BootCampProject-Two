import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import datetime as dt

from flask import Flask, jsonify

#################################################
# Database Setup
#################################################
engine = create_engine(f'postgresql://postgres:{password}@localhost/ACA Infant Mortality_db')

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
States = Base.classes.states
Births = Base.classes.births
Deaths= Base.classes.deaths
#################################################
# Flask Setup
from flask import Flask

app = Flask(__name__)

@app.route("/")
def homepage():

    # Render an index.html template and pass in the data retrieved from the database
    aca = session.query()
    return render_template("index.html")

@app.route("/births")
def births():
    # Create our session (link) from Python to the DB
    session = Session(engine)
    
    # Query for the dates and births by states and dates
    birth_results = session.query(States.name, States.births).\
         group_by (States.name).order_by(States.births).all()
    
    session.close()

     # Convert to list of dictionaries to jsonify
    birth_list = []

    for births in birth_results:
        new_dict = {}
        new_dict[birth] = states
        birth_list.append(new_dict)

    return jsonify (birth_list)

@app.route("/demographics/<state>")
def demographics(state):
    # Create our session (link) from Python to the DB
    session = Session(engine)
    
    query = """
    Select "State", "Deaths (2010)", "Deaths (2015)", "Births (2010)", "Births (2015)"
    From aca_table
    where "State" = ?"""

    data = session.execute(query, [state]).fetchall()

    # aca_list = [] //if more than 1 state

        for state in data:
            new_dict = {}
            new_dict["State"] = state[0]
            new_dict["Deaths (2010)"] = state[0]
            new_dict["Deaths (2015)"] = state[0]
            new_dict["Births (2010)"] = state[0]
            new_dict["Births (2015)"] = state[0]
            # prcp_date_list.append(new_dict)

    return jsonify (new_dict)


@app.route("/deaths")
def deaths():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    # Query all stations
    deaths_results = session.query(States.name, States.deaths).all()
    
    session.close()    

    # Convert to list of dictionaries to jsonify
    deaths_list = []

    for deaths, states in deaths_results:
        new_dict = {}
        new_dict[deaths] = states
        death_list.append(new_dict)

    return jsonify (death_list)

@app.route("/states")
def states():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    #Query the dates and uninsured in each state by year 2010 and 2015
    #Last year data
    states = session.query(States).order_by(States.uninsured).all()
    uninsured_results = session.query(States.uninsured).\
    group_by(States.name).\
    order_by(States.date).all()
    session.close()
   
    # Convert to list of dictionaries to jsonify
    uninsured_results_list = []
    
    for date, uninsured in uninsured_results:
        uninsured_dict["States"] = uninsured
        uninsured_list.append(uninsured_dict)

    return jsonify(uninsured_results_list)


    # Return to home page
    return redirect("/", code=302)

if __name__ == "__main__":
    app.run(debug=True)    
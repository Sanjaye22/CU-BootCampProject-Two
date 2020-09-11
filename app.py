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
Measurement = Base.classes.measurement
Station = Base.classes.station

#################################################
# Flask Setup
from flask import Flask

app = Flask(__name__)

@app.route("/")
def Homepage():
    """List all available api routes."""

    return (
    f"Available Routes:<br/>"
    f"----------------------------------------------------------------------------------------<br/>"
    f"Births by date<br/>"
    f"/api/v1.0/birth<br/>"
    f"-----------------------------------------------------------------------------------------<br/>"
    f"Deaths by date <br/>"
    f"/api/v1.0/date<br/>"
    f"------------------------------------------------------------------------------------------<br/>"
    f"Uninsured by date<br/>"
    f"/api/v1.0/uninsured/>"
    f"------------------------------------------------------------------------------------------<br/>"
    f"/api/v1.0/startdate/endddate"
    ) 

@app.route("/api/v1.0/Births:2010 VS 2015")
def Births():
    # Create our session (link) from Python to the DB
    session = Session(engine)
    
    # Query for the dates and precipitation values
    prcp_results = session.query(Measurement.date, Measurement.prcp).\
         group_by (Measurement.prcp).order_by(Measurement.date).all()
    
    session.close()

     # Convert to list of dictionaries to jsonify
    prcp_date_list = []

    for date, prcp in prcp_results:
        new_dict = {}
        new_dict[date] = prcp
        prcp_date_list.append(new_dict)

    return jsonify (prcp_date_list)

@app.route("/api/v1.0/Deaths:2010 VS 2015")
def stations():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    # Query all stations
    station_results = session.query(Station.name, Station.id).all()
    
    session.close()    

    # Convert to list of dictionaries to jsonify
    station_list = []

    for name, station in station_results:
        new_dict = {}
        new_dict[name] = station
        station_list.append(new_dict)

    return jsonify (station_list)

@app.route("/api/v1.0/Uninsured")
def tobs():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    #Query the dates and temperature observations of the most active station "USC00519281" for the last year of data
    #Last year data
    last_date = session.query(Measurement.date).order_by(Measurement.date.desc()).first()
    date_yearago = (dt.datetime.strptime(last_date[0],'%Y-%m-%d') - dt.timedelta(days=365)).strftime('%Y-%m-%d')

    #Data
    tobs_results = session.query(Measurement.date,
       Measurement.tobs).\
        filter(Measurement.date >= date_yearago).\
        filter(Measurement.station == 'USC00519281').\
        group_by(Measurement.date).\
        order_by(Measurement.date.asc()).all()
    
    session.close()
   
    # Convert to list of dictionaries to jsonify
    tobs_list = []
    
    for date, tobs in tobs_results:
        tobs_dict = {}
        tobs_dict["Date"] = date
        tobs_dict["Tobs"] = tobs
        tobs_list.append(tobs_dict)

    return jsonify(tobs_list)

@app.route("/api/v1.0/<start_date>/<end_date>")
def enddate(start_date, end_date):
    # Create our session (link) from Python to the DB
    session = Session(engine)
    
    #query
  
    tobs_end_results = session.query(Measurement.date, func.min(Measurement.tobs), func.avg(Measurement.tobs), 
        func.max(Measurement.tobs)).\
       filter(Measurement.date >= start_date).\
           filter(Measurement.date <= end_date).all()    
    session.close()

    # Convert to list of dictionaries to jsonify
    tobs_e_list = []
    
    #for min,avg,max in tobs_end_results:
    for date,min,avg,max in tobs_end_results:    
        tobs_dict = {}
        tobs_dict["Date"] = date
        tobs_dict["Min"] = min
        tobs_dict["Average"] = avg
        tobs_dict["Max"] = max
        tobs_e_list.append(tobs_dict)
    
    return jsonify(tobs_e_list)

if __name__ == "__main__":
    app.run(debug=True)    
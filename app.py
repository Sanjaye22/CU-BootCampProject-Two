from flask import Flask, jsonify
from flask_cors import CORS, cross_origin

# Import our pymongo library, which lets us connect our Flask app to our Mongo database.
import pymongo

# Create connection variable
conn = 'mongodb://localhost:27017'

# Pass connection to the pymongo instance.
client = pymongo.MongoClient(conn)

# Connect to a database. Will create one if not already available.
db = client.ACA_states

# Create an instance of our Flask app.
app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/api/acadata')
@cross_origin()
def aca_data():
    cs_info = [doc for doc in db.acadata.find({}, {'_id': False})]
    return jsonify(cs_info)
    
@app.route('/api/acadataCharts')
@cross_origin()
def aca_data_chart():
    cs_info = [doc for doc in db.acadatacharts.find({}, {'_id': False})]
    return jsonify(cs_info[0])

@app.route('/api/states')
@cross_origin()
def states():
    cs_status = [doc for doc in db.usstates.find({}, {'_id': False})]
    return jsonify(cs_status)



if __name__ == "__main__":
    app.run(debug=True)
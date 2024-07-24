import os

from flask import Flask,request,jsonify
from flask_cors import CORS
from . import db


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    CORS(app)
    # a simple page that says hello
    @app.route('/testcase/gettestcase')
    def getUser():
        return db.gettestcase()
    
    @app.route('/init')
    def init():
        return db.initializeDB()
    
    
    @app.route('/testcase/setStatus', methods=['POST'])
    def setStatus():
         # Access JSON payload
        data = request.get_json()
        print()
        db.updateStatus(data.get('id'),data.get('status'))
        
        return jsonify({"msg": "status changed"}), 200
    

    return app
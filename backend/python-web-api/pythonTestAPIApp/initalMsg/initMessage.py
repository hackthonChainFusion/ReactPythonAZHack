from flask import jsonify,request

def initMessage():
    return jsonify(message = "Response received from Python Flask server"),200
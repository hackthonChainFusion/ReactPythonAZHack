from pythonTestAPIApp import app
from .initalMsg import initMessage

#Home
app.add_url_rule('/taskslist', 'getUserRoleDetails', initMessage.initMessage , methods=['GET'])

@app.route('/', defaults={'path': ''})
@app.route('/<path>')

def catch_all(path):
  return app.send_static_file('index.html')

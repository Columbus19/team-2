from flask import Flask, jsonify
import pymysql

app = Flask(__name__)

host = "127.0.0.1"
user = "test"
password = "password"
db = "employees"


con = pymysql.connect(host=host, user=user, password=password, db=db, cursorclass=pymysql.cursors.DictCursor)
cursor = con.cursor()


@app.route("/", methods =['GET', 'POST'])
def index():
    if request.method == 'POST':
        data = request.form
        first_name = data['first_name']
        last_name = data['last_name']
    else:
        return jsonify({'about': "Flask"})

if __name__ == '__main__':
    app.run(debug=True)

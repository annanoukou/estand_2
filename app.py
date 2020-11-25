from flask import Flask, render_template, request
from streetmarket import StreetMarket

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('home.html')


@app.route('/streetmarkets/')
def street_market():
    streetmarket = StreetMarket()
    street = streetmarket.getAllStreetMarket()
    for x in street:
        print({x})
    return render_template('martkets.html', obj_streetmarket = street)


@app.route('/streetmarkets/categories/', methods=['GET'])
def categories():
    street = request.args.get('street')
    return "Hello " + street


@app.route('/admin')
def hello_name():
    return 'Hello my name George'


if __name__ == '__main__':
    app.run(debug=True)

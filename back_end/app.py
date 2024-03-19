from flask import Flask, request
from flask_cors import CORS, cross_origin
import psycopg2
from dotenv import load_dotenv
#from flask_sqlalchemy import SQLAlchemy

load_dotenv()

app = Flask(__name__)
CORS(app)
connection = psycopg2.connect("postgresql://postgres:drink7up@localhost/ffl")

GET_ALL_PRODUCTS = """SELECT * FROM products;"""


@app.get("/")
def home():
    return "Hello World!"

@app.get("/products")
def get_products():
    with connection:
        with connection.cursor() as cursor:
            cursor.execute("SELECT * FROM products")
            products = cursor.fetchall();
            #print(products);
    return products

@app.get("/lowers")
def get_lowers():
    #page = request.args.get('p')

    #if page == '1':
        #beginning = int(page) * 10 - 10
        #end = int(page) * 10
    #else:
        #beginning = int(page) * 10 - 9
        #end = int(page) * 10

    #print(beginning)
    #print(end)
    with connection:
        with connection.cursor() as cursor:
            cursor.execute("SELECT * FROM products WHERE type='lower'")
            lowers = cursor.fetchall();
            #print('testing ' + page)
    return lowers

#app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:drink7up@localhost/ffl'
#db = SQLAlchemy(app)

#app.app_context().push()

#class Products(db.Model):
#    id = db.Column(db.Integer, primary_key=True)
#    name = db.Column(db.String(100), nullable=False)
#    description = db.Column(db.String(1000), nullable=False)
#    image = db.Column(db.String(500), nullable=False)
#    price = db.Column(db.Float(), nullable=False)
#    type = db.Column(db.String(50), nullable=False)
#
#    def __repr__(self):
#        return f"Event: {self.description}"
#    def __init__(self, name, description, image, price, type):
#        self.name = name
#        self.description = description
#        self.image = image
#        self. price = price
#        self.type = type

#@app.route('/products', methods = ['GET'])
#def get_products():
#  products = products.query.all()
#  product_list = []
#  for product in products:
#      product_list.append(product)
#  return product_list
#
#
#if __name__ == '__main__':
#    app.run(debug=True)
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=False, nullable=False)
    last_name = db.Column(db.String(100), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    num_funcionario = db.Column(db.Integer, unique=True, nullable=False)
    is_admin = db.Column(db.Boolean(), unique=False, nullable=True)
    reserva = db.relationship("Reserva", backref="user")

    def __repr__(self):
        return f'<User {self.email}>'

    def __init__(self, name, email,last_name, password,num_funcionario):
        self.name = name
        self.last_name=last_name
        self.email = email
        self.password = password
        self.is_active = True
        self.num_funcionario = num_funcionario
        self.is_admin = False

    def serialize(self):
        return {
           "id":self.id,
            "name":self.name,
            "last_name":self.last_name,
            "email":self.email,
            "is_active":self.is_active,
            "num_funcionario":self.num_funcionario,
            "is_admin":self.is_admin,
            "reserva":[res.id for res in self.reserva] if self.reserva else []
            
        }

    # menus = db.relationship('Menu', backref='user', lazy=True)

#Menú
class Menu(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    day = db.Column(db.String(50), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(255), nullable=True)
    img = db.Column(db.String(1000), nullable=False)
    price = db.Column(db.String(20), nullable=False)  

    def __repr__(self):
        return f'<Menu {self.name}>'
     
    def __init__(self, day,name,description, img, price):
        self.day = day
        self.name= name
        self.description = description
        self.img = img
        self.price= price

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "img": self.img,
            "price": self.price
        }



#MenuOptions
class MenuOptions(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    img = db.Column(db.String(1000), nullable=False)
    price = db.Column(db.String(20), nullable=False)  

    def __repr__(self):
        return f'<MenuOptions {self.name}>'
     
    def __init__(self,name, img, price):
        self.name=name
        self.img = img
        self.price= price

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "img": self.img,
            "price": self.price,
        }

#user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)  es asi, cada menú está asociado a un único usuario?????

class Reserva(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    #user = db.relationship("User", backref="reserva")
    lunes = db.Column(db.String(20), nullable=True)
    martes = db.Column(db.String(20), nullable=True)
    miercoles = db.Column(db.String(20), nullable=True)
    jueves = db.Column(db.String(20), nullable=True)
    viernes = db.Column(db.String(20), nullable=True)
    sabado = db.Column(db.String(20), nullable=True)
    
    def __repr__(self):
        return f'<Reserva {self.user_id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user":self.user_id,          
            "user_id": self.user_id,
            "lunes":self.lunes,
            "martes":self.martes,
            "miercoles":self.miercoles,
            "jueves":self.jueves,
            "viernes":self.viernes,
            "sabado":self.sabado,
        }
            
        

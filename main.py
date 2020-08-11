import csv
from flask import Flask, render_template

app = Flask(__name__)

app.secret_key = "neki string"

raspored = []
predavaci = []
ucionice = []

with open("raspored.csv") as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    for i in csv_reader:
        a=[]

        if i[2] not in predavaci:
            predavaci.append(i[2])

        if i[6] not in ucionice:
            ucionice.append((i[6]))

        for j in i:
            a.append(j)
        raspored.append(a)

@app.route("/podaci",methods=["POST"])
def podaci():
    return {"raspored":raspored}

@app.route("/raspored")
def ras():
    return render_template("raspored.html",predavaci=predavaci,ucionice=ucionice)

#rutiranje
@app.route("/pocetna")
def pocetna():
    return "pocetna strana"

podatak = "ovo je podatak"
@app.route("/temp")
def tempasd():
    return render_template("templejt.html",podatak=[11,22,33,44,55])

if __name__ == "__main__":
    app.run(debug=True)




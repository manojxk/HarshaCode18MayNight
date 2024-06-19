from flask import Flask, render_template,request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/home')
def home():
    return render_template('index.html')

@app.route('/teams')
def teams():
    return render_template('cricketteams.html')

@app.route('/schedule')
def schedule():
    return render_template('prediction.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('teams.html')

@app.route('/matchpredict')
def matchpredict():
    return render_template('mymatchprediction.html')

@app.route('/batsman')
def batsman():
    return render_template('batsman.html')

@app.route('/bowler')
def bowler():
    return render_template('bowler.html')

@app.route('/sForm/results', methods=['POST'])
def results():
    if request.method == 'POST':
        data=request.form.to_dict()
        print("formdata",data)
        winteam = 'INDIA'
        return render_template('result.html',team=winteam)

if __name__ == '__main__':
    app.run(debug=True)

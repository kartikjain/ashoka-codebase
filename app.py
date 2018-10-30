from flask import Flask, render_template, request, redirect, url_for
import requests
import ConfigParser
from flask_mail import Mail, Message

app = Flask(__name__)
import csv

config = ConfigParser.ConfigParser()
config.readfp(open(r'config'))
email = config.get('Email', 'email')
password = config.get('Email', 'password')

app.config.update(
    DEBUG=True,
    # EMAIL SETTINGS
    MAIL_SERVER='smtp.gmail.com',
    MAIL_PORT=465,
    MAIL_USE_SSL=True,
    MAIL_USERNAME=email,
    MAIL_PASSWORD=password
)
mail = Mail(app)


@app.route('/')
def student():
    return render_template('mash.html')


@app.route('/ashoka')
def ashoka_home():
    return render_template('ashoka.html')


@app.route('/forms', methods=['POST'])
def result():
    if request.method == 'POST':
        Sname = request.form['Sname']
        name = request.form['name']
        email = request.form['email']
        phone = request.form['phone']
        news = request.form['news']
        news1 = request.form.get('news1')
        news2 = request.form.get('news2')
        date = request.form['date']

        # row = [name, Sname, email, phone, news, news1, date]
        # with open('exampleCsv.csv', 'a') as f:
        #     writer = csv.writer(f)
        #     writer.writerow(row)
        #
        #     f.close()
        #     # return "thanks for submission"
        #     return redirect(url_for('student'))

        msg = Message('Information - Apply now',
                      sender='ashoka.changemakerday@gmail.com',
                      recipients=['ashoka.changemakerday@gmail.com'])
        msg.body = 'School name- {}\nName- {}\nEmail- {}\nPhone Number- {}\nNewsletter- {}\nWorkshops- {}' \
                   '\nChangemaker club-{}\nStart date- {}'.format(Sname, name, email, phone, news, news1,
                                                                  news2, date)
        mail.send(msg)
        return redirect(url_for('student'))


@app.route('/querry', methods=['POST'])
def result1():
    if request.method == 'POST':
        name1 = request.form['name1']
        email1 = request.form['email1']
        phone1 = request.form['phone1']
        message = request.form['message']

        # row1 = [name1, email1, phone1, message]
        # with open('exampleCsv1.csv', 'a') as f1:
        #     writer = csv.writer(f1)
        #     writer.writerow(row1)
        #
        #     f1.close()
        #     # return "thanks for submission"
        #     return redirect(url_for('student'))

        msg1 = Message('Query information',
                      sender='ashoka.changemakerday@gmail.com',
                      recipients=['ashoka.changemakerday@gmail.com'])
        msg1.body = 'Name- {}\nEmail- {}\nPhone- {}\nMessage- {}'.format(name1, email1, phone1, message)

        mail.send(msg1)
        return redirect(url_for('student'))


if __name__ == '__main__':
    app.run(host='0.0.0.0')
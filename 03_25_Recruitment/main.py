from flask import Flask, render_template, redirect
from g4f.client import Client

gpt_client = Client()
app = Flask(__name__)

@app.route('/')
def index():
    # TODO: NOT DEMO
    return redirect('/demo')

@app.route('/demo')
def demo_ndex():
    return render_template('demo/index.html')

@app.route('/demo/candidates')
def demo_candidates():
    return render_template('demo/candidates.html')

@app.route('/demo/candidates/compare_<id1>_<id2>')
def demo_candidates_compare(id1, id2):
    # TODO in js: return render_template('demo/candidates/compare.html', candidate_id_1=id1, candidate_id_2=id2)
    return render_template(f'demo/candidates/compare_{id1}_{id2}.html')

@app.route('/demo/candidates/candidate_<id>')
def demo_candidate(id):
    # TODO in js: return render_template('demo/candidates/candidate.html', candidate_id=id)
    return render_template(f'demo/candidates/candidate_{id}.html')

@app.route('/demo/settings')
def demo_settings():
    return render_template('demo/settings.html')


# TODO: Summarize the candidates and smartly compare them
@app.route('/ee')
def ee():
    response = gpt_client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": "Tell me some fun fact about cow."}],
        web_search=False
    )
    return f'<div style="font-size: 24px">{response.choices[0].message.content}</div>'


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
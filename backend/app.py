from flask import Flask, request, jsonify
from flask_cors import CORS
from advisor import get_advice

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def index():
    return "Career Advisor Flask Backend is Running"

@app.route('/get_options', methods=['POST'])
def get_options():
    try:
        data = request.get_json()

        education_level = data.get('education_level')
        option_type = data.get('option_type')

        if not education_level or not option_type:
            return jsonify({'error': 'Missing required fields'}), 400

        options = get_advice(education_level, option_type)
        return jsonify({'options': options})

    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({'error': 'Internal server error', 'details': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

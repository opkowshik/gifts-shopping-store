from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)

# Load Model & Encoders
with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

with open('le_gender.pkl', 'rb') as f:
    le_gender = pickle.load(f)

with open('le_occasion.pkl', 'rb') as f:
    le_occasion = pickle.load(f)

with open('le_gift.pkl', 'rb') as f:
    le_gift = pickle.load(f)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        age = int(data['Age'])
        gender = data['Gender']
        occasion = data['Occasion']
        budget = int(data['Budget'])

        # Handle unseen labels by assigning a default or closest value if needed.
        # Here we assume valid inputs based on our dataset.
        if gender not in le_gender.classes_:
            gender = le_gender.classes_[0]
        if occasion not in le_occasion.classes_:
            occasion = le_occasion.classes_[0]

        gender_encoded = le_gender.transform([gender])[0]
        occasion_encoded = le_occasion.transform([occasion])[0]

        features = np.array([[age, gender_encoded, occasion_encoded, budget]])
        
        prediction_encoded = model.predict(features)[0]
        recommended_gift = le_gift.inverse_transform([prediction_encoded])[0]

        return jsonify({'recommended_gift': recommended_gift})

    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(port=5001, debug=True)

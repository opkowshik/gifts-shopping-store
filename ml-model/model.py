import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
import pickle
import os

# Load dataset
df = pd.read_csv('dataset.csv')

# Initialize LabelEncoders
le_gender = LabelEncoder()
le_occasion = LabelEncoder()
le_gift = LabelEncoder()

# Encode string features
df['gender_encoded'] = le_gender.fit_transform(df['gender'])
df['occasion_encoded'] = le_occasion.fit_transform(df['occasion'])
df['gift_encoded'] = le_gift.fit_transform(df['gift'])

# Features & Target
X = df[['age', 'gender_encoded', 'occasion_encoded', 'budget']]
y = df['gift_encoded']

# Train Model
clf = RandomForestClassifier(n_estimators=100, random_state=42)
clf.fit(X, y)

# Save the model and encoders using pickle
with open('model.pkl', 'wb') as f:
    pickle.dump(clf, f)

with open('le_gender.pkl', 'wb') as f:
    pickle.dump(le_gender, f)

with open('le_occasion.pkl', 'wb') as f:
    pickle.dump(le_occasion, f)

with open('le_gift.pkl', 'wb') as f:
    pickle.dump(le_gift, f)

print("Model training complete and files saved successfully.")

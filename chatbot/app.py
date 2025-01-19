import google.generativeai as genai
from flask import Flask, request, jsonify
import os
from flask_cors import CORS


# Initialize Flask app
app = Flask(__name__)
CORS(app)
# Set the API key for Google Generative AI
genai.configure(api_key='AIzaSyChLYW845Nu3kTrgizXvztf1Uxr12S32HE')

# Load the fine-tuned model
model_name = "tunedModels/fitai-rjxj4w7lu0jz"
model = genai.GenerativeModel(model_name=model_name)

@app.route('/ask', methods=['POST'])
def ask_ai():
    # Get the question from the incoming request
    data = request.json
    question = data.get('question', '')

    if not question:
        return jsonify({'error': 'No question provided'}), 400
    
    try:
        # Generate a response using the fine-tuned model
        response = model.generate_content(question)
        return jsonify({'response': response.text}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


# Route for checking server status
@app.route('/')
def home():
    return "AI Assistant is up and running!", 200


if __name__ == '__main__':
    # Specify the port as 5004
    app.run(debug=True, port=5004)
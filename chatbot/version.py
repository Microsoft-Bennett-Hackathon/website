import google.generativeai as genai

genai.configure(api_key = '')

for model_info in genai.list_tuned_models():
    print(model_info.name)

import google.generativeai as genai

genai.configure(api_key = 'AIzaSyChLYW845Nu3kTrgizXvztf1Uxr12S32HE')

for model_info in genai.list_tuned_models():
    print(model_info.name)
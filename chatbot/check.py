import google.generativeai as genai

genai.configure(api_key = 'AIzaSyChLYW845Nu3kTrgizXvztf1Uxr12S32HE')

model = genai.GenerativeModel(model_name="tunedModels/jaatram-b0u9xa08zbp8")
result = model.generate_content("How is politiccs in india?")
print(result.text)  # "IV"
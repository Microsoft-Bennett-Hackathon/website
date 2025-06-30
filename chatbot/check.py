import google.generativeai as genai

genai.configure(api_key = '')

model = genai.GenerativeModel(model_name="tunedModels/jaatram-b0u9xa08zbp8")
result = model.generate_content("How is politiccs in india?")
print(result.text)  # "IV"

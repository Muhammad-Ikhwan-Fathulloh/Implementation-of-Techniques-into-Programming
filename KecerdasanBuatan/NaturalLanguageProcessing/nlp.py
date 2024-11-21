from textblob import TextBlob

# Teks yang akan dianalisis
text = "I love programming, it's so exciting and fun!"

# Analisis sentimen
blob = TextBlob(text)
sentiment = blob.sentiment

print(f"Teks: {text}")
print(f"Polaritas: {sentiment.polarity} (positif jika > 0)")
print(f"Subjektivitas: {sentiment.subjectivity}")
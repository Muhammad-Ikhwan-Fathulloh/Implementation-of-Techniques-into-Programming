from sklearn.linear_model import LinearRegression
import numpy as np

# Data pelatihan (jumlah jam belajar vs skor ujian)
X = np.array([[1], [2], [3], [4], [5]])  # Jumlah jam belajar
y = np.array([50, 55, 65, 70, 75])  # Skor ujian

# Model regresi linier
model = LinearRegression()
model.fit(X, y)

# Prediksi skor untuk 6 jam belajar
predicted_score = model.predict([[6]])
print(f"Prediksi skor untuk 6 jam belajar: {predicted_score[0]:.2f}")
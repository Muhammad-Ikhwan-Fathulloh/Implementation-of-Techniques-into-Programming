import cv2

# Muat model deteksi wajah
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# Baca gambar
image = cv2.imread('person.jpg')
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# Deteksi wajah
faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5)

# Tandai wajah yang terdeteksi
for (x, y, w, h) in faces:
    cv2.rectangle(image, (x, y), (x+w, y+h), (255, 0, 0), 2)

# Tampilkan hasil
cv2.imshow('Deteksi Wajah', image)
cv2.waitKey(0)
cv2.destroyAllWindows()
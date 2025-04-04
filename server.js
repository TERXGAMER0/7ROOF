const express = require('express');
const path = require('path');
const app = express();

// إعداد محرك القوالب
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// تقديم الملفات الثابتة من مجلد 'public'

// التعامل مع الطلبات إلى الصفحة الرئيسية
app.get('/', (req, res) => {
  res.render('index'); // لا حاجة لامتداد الملف عند استخدام EJS
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

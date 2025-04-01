// استدعاء مكتبة Express لإنشاء الخادم
const express = require('express');
const path = require('path');
const app = express();

// تحديد رقم المنفذ: Railway ستحدد رقم المنفذ من خلال متغير البيئة PORT، وإلا سيعمل على 3000 محلياً
const port = process.env.PORT || 3000;

// لتسهيل قراءة بيانات JSON من الطلبات (مثل طلب التحقق من الرمز)
app.use(express.json());

// تقديم الملفات الثابتة الموجودة داخل مجلد public
app.use(express.static(path.join(__dirname, 'public')));

// إنشاء endpoint لمعالجة الطلبات الحساسة (مثال: التحقق من رمز التفعيل)
app.post('/process', (req, res) => {
  const { code } = req.body;
  // قائمة الرموز المسموح بها تبقى على الخادم ولا تظهر للمستخدم
  const allowedCodes = [
    "IAGSJ81628JAVW",
    "KABWJWHYSV",
    "KAHWUWHVSKV",
    "LANNSIDHSHHS",
    "kiV6VN0ktqdrLmN",
    "Ct1g4TlYdqG233n",
    "1TPDOC2GBXQ3Q",
    "11111",
    "ECO6233Y63Y19",
    "X8PILDJ1SDD95"
  ];
  if (allowedCodes.includes(code)) {
    res.json({ success: true, message: "رمز التفعيل صحيح" });
  } else {
    res.json({ success: false, message: "رمز خاطئ" });
  }
});

// بدء تشغيل الخادم
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

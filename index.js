const express = require('express');
const app = express();
const PORT = 3000;

// Middleware برای پشتیبانی از JSON
app.use(express.json());

// Route اصلی
app.get('/', (req, res) => {
    res.send('سلام، به API ساده خوش آمدید!');
});

// دریافت اطلاعات
app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: 'علی' },
        { id: 2, name: 'زهرا' },
        { id: 3, name: 'حسین' }
    ];
    res.json(users);
});

// ارسال اطلاعات
app.post('/api/users', (req, res) => {
    const newUser = req.body;
    // به صورت فرضی، داده را ذخیره می‌کنیم
    res.status(201).json({ message: 'کاربر جدید اضافه شد!', user: newUser });
});

// سرور گوش می‌دهد
app.listen(PORT, () => {
    console.log(`سرور روی پورت ${PORT} در حال اجراست.`);
});

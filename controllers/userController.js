const User = require('../users/userModel');

// إنشاء مستخدم جديد
exports.createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "يرجى ملء جميع الحقول" });
        }

       
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "المستخدم مسجل بالفعل" });
        }

        const newUser = await User.create({ name, email, password });

        res.status(201).json({
            message: "تم إنشاء المستخدم بنجاح",
            user: newUser
        });
    } catch (error) {
        res.status(500).json({ message: "حدث خطأ أثناء إنشاء المستخدم", error: error.message });
    }
};

// pages/api/submit-form.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, number, email } = req.body;

        const response = await fetch('https://test3.aidaksa.com/submit-form.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, number, email }),
        });

        if (response.ok) {
            res.status(200).json({ message: 'تم إرسال النموذج بنجاح!' });
        } else {
            res.status(500).json({ message: 'فشل في إرسال النموذج.' });
        }
    } else {
        res.status(405).json({ message: 'الطريقة غير مسموحة.' });
    }
}

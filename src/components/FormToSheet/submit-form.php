<?php
// التحقق من طريقة الطلب
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // قراءة البيانات من الطلب
    $data = json_decode(file_get_contents("php://input"), true);
    
    // التحقق من وجود البيانات
    if (empty($data)) {
        echo json_encode(['message' => 'لا توجد بيانات مستلمة']);
        exit;
    }

    // استخراج البيانات من المصفوفة
    $name = isset($data['name']) ? $data['name'] : '';
    $number = isset($data['number']) ? $data['number'] : '';
    $email = isset($data['email']) ? $data['email'] : '';
         $city = isset($data['city']) ? $data['city'] : '';

    $contentType = isset($data['contentType']) ? $data['contentType'] : '';
    $otherContentType = isset($data['otherContentType']) ? $data['otherContentType'] : '';
    $platforms = isset($data['platforms']) ? $data['platforms'] : [];
    $accounts = isset($data['accounts']) ? $data['accounts'] : [];
    $pastWork = isset($data['pastWork']) ? $data['pastWork'] : '';
    $priceWithPublishing = isset($data['priceWithPublishing']) ? $data['priceWithPublishing'] : '';
    $priceWithoutPublishing = isset($data['priceWithoutPublishing']) ? $data['priceWithoutPublishing'] : '';
    $cooperationTerms = isset($data['cooperationTerms']) ? $data['cooperationTerms'] : '';
    $ecommerceLicense = isset($data['ecommerceLicense']) ? $data['ecommerceLicense'] : '';
    $licenseNumber = isset($data['licenseNumber']) ? $data['licenseNumber'] : '';

    // التحقق من أن جميع الحقول المطلوبة موجودة
    if (empty($name) || empty($number)) {
        echo json_encode(['message' => 'الرجاء تعبئة جميع الحقول المطلوبة']);
        exit;
    }

    // عنوان URL لتطبيق Google Apps Script
    $googleAppsScriptUrl = 'https://script.google.com/macros/s/AKfycbyX8V7b0CdklKs72cSsxEwzO3EZgHmMcJ8rujA5GpbikMi-FNPWrV_AD1vUmtUKWSmHxQ/exec';

    // إعداد البيانات لإرسالها إلى Google Apps Script
    $postData = json_encode([
        'name' => $name,
        'number' => $number,
        'email' => $email,
                'city' => $city,

        'contentType' => $contentType,
        'otherContentType' => $otherContentType,
        'platforms' => $platforms,
        'accounts' => $accounts,
        'pastWork' => $pastWork,
        'priceWithPublishing' => $priceWithPublishing,
        'priceWithoutPublishing' => $priceWithoutPublishing,
        'cooperationTerms' => $cooperationTerms,
        'ecommerceLicense' => $ecommerceLicense,
        'licenseNumber' => $licenseNumber,
    ]);

    // إعداد طلب CURL
    $ch = curl_init($googleAppsScriptUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
    ]);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true); // تمكين متابعة الإعادة التوجيه

    // تنفيذ الطلب
    $response = curl_exec($ch);

    // التحقق من حدوث أي أخطاء أثناء التنفيذ
    if (curl_errno($ch)) {
        $error_msg = curl_error($ch);
        echo json_encode(['message' => 'فشل في إرسال النموذج: ' . $error_msg]);
        curl_close($ch);
        exit;
    }

    curl_close($ch);

    // عرض الرد الخام للتحقق من صلاحيته
    if ($response) {
        echo $response;
    } else {
        echo json_encode(['message' => 'فشل في إرسال النموذج: الرد فارغ']);
    }
}
?>

<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    
    // طباعة البيانات للتحقق من استقبالها بشكل صحيح
    error_log(print_r($data, true));

    $name = $data['name'];
    $number = $data['number'];
    $email = $data['email'];
    $contentType = $data['contentType'];
    $platforms = $data['platforms'];
    $accounts = $data['accounts'];
    $pastWork = $data['pastWork'];
    $priceWithPublishing = $data['priceWithPublishing'];
    $priceWithoutPublishing = $data['priceWithoutPublishing'];
    $cooperationTerms = $data['cooperationTerms'];
    $ecommerceLicense = $data['ecommerceLicense'];
    $licenseNumber = $data['licenseNumber'];

    // Google Apps Script Web App URL
    $googleAppsScriptUrl = 'https://script.google.com/macros/s/AKfycbyJuv86jogIoAiYyWkvbk0Io-7KSncQr61fIRfd9anZdKfHu1L1iIwoyPYJoxcrRQUGzQ/exec';

    // Data to be sent to Google Apps Script
    $postData = json_encode([
        'name' => $name,
        'number' => $number,
        'email' => $email,
        'contentType' => $contentType,
        'platforms' => $platforms,
        'accounts' => $accounts,
        'pastWork' => $pastWork,
        'priceWithPublishing' => $priceWithPublishing,
        'priceWithoutPublishing' => $priceWithoutPublishing,
        'cooperationTerms' => $cooperationTerms,
        'ecommerceLicense' => $ecommerceLicense,
        'licenseNumber' => $licenseNumber,
    ]);

    $ch = curl_init($googleAppsScriptUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
    ]);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);

    $response = curl_exec($ch);
    
    if (curl_errno($ch)) {
        $error_msg = curl_error($ch);
    }
    
    curl_close($ch);

    if ($response) {
        $responseData = json_decode($response, true);
        if (isset($responseData['result']) && $responseData['result'] == 'success') {
            echo json_encode(['message' => 'تم إرسال النموذج بنجاح!']);
        } else {
            echo json_encode(['message' => 'فشل في إرسال النموذج: ' . $responseData['message']]);
        }
    } else {
        echo json_encode(['message' => 'فشل في إرسال النموذج: ' . $error_msg]);
    }
}
?>

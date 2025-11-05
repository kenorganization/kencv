<?php
  /**
  * Requires the "PHP Email Form" library
  * The "PHP Email Form" library is available only in the pro version of the template
  * The library should be uploaded to: vendor/php-email-form/php-email-form.php
  * For more info and help: https://bootstrapmade.com/php-email-form/
  */

  // 將接收郵件的地址改為您的郵件地址
  $receiving_email_address = 'ken158ken@yahoo.com.tw';

  if( file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php' )) {
    include( $php_email_form );
  } else {
    // 如果找不到庫文件，我們使用PHP內建的郵件功能
    if(isset($_POST['email']) && isset($_POST['name']) && isset($_POST['subject']) && isset($_POST['message'])) {
      $name = $_POST['name'];
      $email = $_POST['email'];
      $subject = $_POST['subject'];
      $message = $_POST['message'];
      
      // 設置郵件頭信息
      $headers = "From: $name <$email>" . "\r\n";
      $headers .= "Reply-To: $email" . "\r\n";
      $headers .= "MIME-Version: 1.0\r\n";
      $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
      
      // 郵件內容
      $email_content = "<h2>聯繫表單提交</h2>";
      $email_content .= "<p><strong>姓名:</strong> $name</p>";
      $email_content .= "<p><strong>郵箱:</strong> $email</p>";
      $email_content .= "<p><strong>主題:</strong> $subject</p>";
      $email_content .= "<p><strong>訊息:</strong></p><p>$message</p>";
      
      // 發送郵件
      $success = mail($receiving_email_address, "網站聯繫表單: $subject", $email_content, $headers);
      
      if($success) {
        echo json_encode(['ok' => true, 'message' => '郵件已成功發送！']);
      } else {
        echo json_encode(['ok' => false, 'message' => '郵件發送失敗，請稍後重試。']);
      }
      exit;
    } else {
      echo json_encode(['ok' => false, 'message' => '請填寫所有必要欄位。']);
      exit;
    }
  }

  $contact = new PHP_Email_Form;
  $contact->ajax = true;
  
  $contact->to = $receiving_email_address;
  $contact->from_name = $_POST['name'];
  $contact->from_email = $_POST['email'];
  $contact->subject = $_POST['subject'];

  // 取消註釋下面的代碼，如果您想使用SMTP發送郵件
  // Yahoo Mail SMTP設置
  $contact->smtp = array(
    'host' => 'smtp.mail.yahoo.com',
    'username' => 'ken158ken@yahoo.com.tw',
    'password' => '您的Yahoo郵箱密碼', // 請替換為您的實際密碼或應用專用密碼
    'port' => '465',
    'encryption' => 'ssl'
  );

  $contact->add_message( $_POST['name'], '寄件人');
  $contact->add_message( $_POST['email'], '郵箱');
  $contact->add_message( $_POST['message'], '訊息內容', 10);

  echo $contact->send();
?>
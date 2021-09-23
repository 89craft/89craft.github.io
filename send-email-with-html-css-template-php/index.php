<?php

$email = file_get_contents("payment.php");

$variables = array();
$variables["coupon_code"] = 78612345;
$variables["date"] = date("d M, Y");
$variables["receipt"] = 123;
$variables["products"] = "";
$variables["username"] = "Adnan Afzal";
$variables["ending_credit_card"] = 9876;

$products = array();
array_push($products, array(
    "title" => "Hello",
    "quantity" => 2,
    "price" => 130,
    "total" => 260
));
array_push($products, array(
    "title" => "World",
    "quantity" => 1,
    "price" => 70,
    "total" => 70
));

$total = 0;
foreach ($products as $product)
{
    $single_product = file_get_contents("product.php");

    $single_product = str_replace('{{ title }}', $product["title"], $single_product);
    $single_product = str_replace('{{ quantity }}', $product["quantity"], $single_product);
    $single_product = str_replace('{{ price }}', $product["price"], $single_product);

    $variables["products"] .= $single_product;
    $total += $product["price"] * $product["quantity"];
}

$variables["sub_total"] = $total;
$variables["tax"] = 13;
$variables["total"] = $total + 13;

foreach ($variables as $key => $value)
{
    $email = str_replace('{{ ' . $key . ' }}', $value, $email);
}

echo $email;

if (isset($_GET["mail"]))
{
    require_once "send-mail.php";
    send_mail("receiver_email@gmail.com", "Invoice", $email);
}

?>

<a href="?mail=1" class="btn btn-primary">Send mail</a>

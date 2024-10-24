SELECT * FROM galleryapp.orders;
SELECT
    orders.* ,
    products .*,
    cart .*,
    users .*
FROM
    orders
JOIN
    users  ON orders.user_id = users.id
JOIN
    cart  ON orders.order_id = cart.order_id
JOIN
    products  ON cart.product_id = products.id
WHERE
    orders.order_id = 1;
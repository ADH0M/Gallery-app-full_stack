-- INSERT INTO category (name)
-- VALUES
-- ('Art'),('Web Design'),("Branding"),('Product design'),('illustrations');
-- ------------------------------------------
-- select * from galleryapp.category
-- ------------------------------------------
-- ALTER TABLE products
-- ADD priceSale  decimal(9 , 3);
-- ALTER TABLE products
-- DROP COLUMN quantity;
-- ALTER TABLE products
-- MODIFY COLUMN price DECIMAL(9, 3);
-- ALTER TABLE products
-- RENAME COLUMN name TO tittle;


-- INSERT INTO products (name ,tittle ,price , description , stock , category_id  )
-- VALUES
-- ('HyperX QuadCast',"HyperX QuadCast USB Condenser Gaming Mic" , 6600 , "Anti-Vibration shock mount  ,Tap-to-Mute sensor with LED indicator  ,Four selectable polar patterns  ,Mount adapter included  ,Convenient gain control adjustment  ,Internal pop filter  ,Built-in headphone jack  ,Multi-device and chat program compatibilit" 
-- , 5 , 4 );


-- INSERT INTO products (name ,tittle, price , description , stock , category_id ,priceSale )
-- VALUES
-- ('Bloody G350 7.1 ' , "Bloody G350 7.1 RGB USB GAMING HEADSET",970 ,"G350 Headset Speaker Unit,50mm Driver Frequency Response  , 20 Hz – 20 KHz Sensitivity           105 dB Impedance  ,16 ohm Microphone Frequency" 
-- ,  9 , 4 ,  959);

-- INSERT INTO products (name ,tittle, price , description , stock , category_id ,priceSale )
-- VALUES
-- ('Headphone Bingo Zone N2 Sport' , "Headphone Bingo Zone N2 Sport Bluetooth SD Card colors", 450 , "A wireless headset of the future designed for gamers who want both the high performance  the liberty of wireless gaming." 
-- , 4 , 4 ,  400);

select * from galleryapp.category
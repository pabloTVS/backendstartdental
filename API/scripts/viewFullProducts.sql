CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `startdental`@`localhost` 
    SQL SECURITY DEFINER
VIEW `viewFullProducts` AS
    SELECT 
        `wp_posts`.`ID` AS `ID`,
        `wp_posts`.`post_title` AS `Articulo`,
        `wp_posts`.`post_name` AS `Url`,
        `wp_posts`.`post_content` AS `DescLarga`,
        `wp_posts`.`post_excerpt` AS `DescCorta`,
        `wp_posts`.`post_status` AS `Estado`,
        (SELECT 
                `wp_postmeta`.`meta_value`
            FROM
                `wp_postmeta`
            WHERE
                ((`wp_postmeta`.`meta_key` = '_sku')
                    AND (`wp_postmeta`.`post_id` = `wp_posts`.`ID`))) AS `Sku`,
        (SELECT 
                IFNULL(`wp_postmeta`.`meta_value`, 0)
            FROM
                `wp_postmeta`
            WHERE
                ((`wp_postmeta`.`meta_key` = '_price')
                    AND (`wp_postmeta`.`post_id` = `wp_posts`.`ID`))) AS `Precio`,
        (SELECT 
                (CASE
                        WHEN (`wp_postmeta`.`meta_value` = '') THEN 21
                        ELSE 10
                    END)
            FROM
                `wp_postmeta`
            WHERE
                ((`wp_postmeta`.`meta_key` = '_tax_class')
                    AND (`wp_postmeta`.`post_id` = `wp_posts`.`ID`))) AS `IVA`,
        (SELECT 
                IFNULL(`wp_postmeta`.`meta_value`, 0)
            FROM
                `wp_postmeta`
            WHERE
                ((`wp_postmeta`.`meta_key` = '_stock')
                    AND (`wp_postmeta`.`post_id` = `wp_posts`.`ID`))) AS `Stock`,
        FN_IMAGENARTICULO(`wp_posts`.`ID`) AS `Imagen`,
        FN_NOMBREPROVEEDOR(`wp_posts`.`ID`) AS `Proveedor`,
        FN_NOMBRECATEGORIA(`wp_posts`.`ID`) AS `Categoria`,
        FN_NOMBRESUBCATEGORIA(`wp_posts`.`ID`) AS `Subcategoria`
    FROM
        `wp_posts`
    WHERE
        (`wp_posts`.`post_type` = 'product')
    ORDER BY `wp_posts`.`ID`
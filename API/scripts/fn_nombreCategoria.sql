CREATE DEFINER=`startden_dekorativa`@`213.181.68.23` FUNCTION `fn_nombreCategoria`(art bigint(20)) RETURNS varchar(200) CHARSET latin1
BEGIN 
	DECLARE valor VARCHAR(200);
	SET valor = (SELECT ter.name FROM wp_term_relationships rel left join wp_terms ter on rel.term_taxonomy_id=ter.term_id WHERE rel.object_id = art AND ter.term_id in (select term_id FROM wp_term_taxonomy WHERE parent = 24));
	RETURN valor;
END
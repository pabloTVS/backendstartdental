CREATE DEFINER=`startden_dekorativa`@`213.181.68.23` PROCEDURE `pa_CalculaPedido`(in pedido int)
BEGIN

  DECLARE var_bi DECIMAL(18,5);
  DECLARE var_impIVA DECIMAL(18,5);
  DECLARE var_iva DECIMAL(18,2);
  DECLARE var_impRE DECIMAL(18,5);
  DECLARE var_impTOTAL DECIMAL(18,5);
  
  DECLARE var_final INTEGER DEFAULT 0;

  DECLARE cursor1 CURSOR FOR SELECT SUM(BaseImponible),SUM(ImporteIVA),SUM(ImporteRE),sum(Total),IVA FROM linPed where NumPed = pedido group by IVA;

  DECLARE CONTINUE HANDLER FOR NOT FOUND SET var_final = 1;

  OPEN cursor1;

  bucle: LOOP

    FETCH cursor1 INTO var_bi, var_impIVA, var_impRE, var_impTOTAL, var_iva;

    IF var_final = 1 THEN
      LEAVE bucle;
    END IF;

    UPDATE basesPed SET BaseImponible  = var_bi, TotalIVA = var_impIVA, TotalRE = var_impRE, Total = var_impTOTAL
    WHERE NumPed = pedido AND IVA = var_iva;

	UPDATE pedidos SET TotalPedido = (SELECT SUM(Total) FROM linPed Where NumPed=pedido) WHERE NumPed = pedido;

  END LOOP bucle;
  CLOSE cursor1;
END
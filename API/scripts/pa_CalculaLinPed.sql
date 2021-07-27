CREATE DEFINER=`startden_dekorativa`@`213.181.68.23` PROCEDURE `pa_CalculaLinPed`( in pedido int, in linea int)
BEGIN
    SELECT IFNULL(Serie,'A') INTO @serie FROM pedidos WHERE NumPed=pedido;
SELECT 
    IFNULL(Cantidad, 0)
INTO @cantidad FROM
    linPed
WHERE
    NumPed = pedido AND IdLinPed = linea;
	SELECT 
    IFNULL(Precio, 0)
INTO @precio FROM
    linPed
WHERE
    NumPed = pedido AND IdLinPed = linea;
	SELECT 
    IFNULL(DtoC, 0)
INTO @dtoC FROM
    linPed
WHERE
    NumPed = pedido AND IdLinPed = linea;
	SELECT 
    IFNULL(IVA, 0)
INTO @IVA FROM
    linPed
WHERE
    NumPed = pedido AND IdLinPed = linea;
	SELECT 
    IFNULL(RE, 0)
INTO @RE FROM
    linPed
WHERE
    NumPed = pedido AND IdLinPed = linea;
	
						
	SET @subTotal = CONVERT(@cantidad * @precio,DECIMAL(18,5));
	SET @importeDtoC = CONVERT(@subTotal*(@dtoC/100),DECIMAL(18,5));
	SET @subTotal = @subTotal - @importeDtoC;
	SET @totalBase = CONVERT(@subTotal,DECIMAL(18,5));
	SET @importeIVA = CONVERT(@totalBase*(@IVA/100),DECIMAL(18,5));
	SET @importeRE = CONVERT(@totalBase*(@RE/100),DECIMAL(18,5));
	SET @total = @totalBase + @importeIVA + @importeRE;
	
	
	UPDATE linPed 
SET 
    SubTotal = @subTotal,
    ImporteDtoC = @importeDtoC,
    BaseImponible = @totalBase,
    ImporteIVA = @importeIVA,
    ImporteRE = @importeRE,
    Total = @total
WHERE
    NumPed = pedido AND IdlinPed = linea;

END
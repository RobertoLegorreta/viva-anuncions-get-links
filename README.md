# Get property links

## Description

La finalidad del proyecto es obtener links de las propiedades que próximamente se van a scrapear.

Para correrlo es necesario introducir el link de la ubicación de la cuál queremos obtener los inmuebles, con ese link se puede obtener un máximo de 1000 propiedades, el límite es establecido por Viva Anuncios, por lo que si no queremos tener ese bloqueo tenemos que segmentar la ubicación, por ejemplo, si queremos obtener todos los inmuebles en venta de la CDMX, tenemos que pasarle links de todas las colonias (o zonas más pequeñas), para sacar 1000 propiedades por zona y así poder obtener las decenas de miles de inmuebles que tiene todo Viva Anuncios en dicha ciudad.

La tarea del microservicio acaba cuando guarda los links de todas las propiedades encontradas en la zona establecida.

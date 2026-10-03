# 3Dart.uy

Sitio de llaveros personalizados con tres diseños originales, nombres de hasta 12 letras, nueve colores para base y letras, vista 3D giratoria, carrito y exportación 3MF.

## Abrir

Abrí `index.html` en un navegador con WebGL. Las bibliotecas y la tipografía 3D están incluidas. La tipografía de la interfaz usa Google Fonts, con alternativa local si no hay conexión.

## Pedidos

El cliente completa sus datos y pulsa Enviar pedido por WhatsApp. La web genera el 3MF, lo sube directamente a Beacon (beacon.host) sin cuenta con una duración de 24 horas y agrega el enlace de descarga al mensaje al +598 924 31954. Solo se sube el archivo de diseño, con el nombre grabado; no se suben teléfono, localidad ni comentarios. El cliente confirma el envío del mensaje en WhatsApp. El servicio es temporal y cualquiera con el enlace puede descargarlo. La nube permite cinco subidas por hora por IP; la integración limita el archivo a 1,9 MB. Si la subida falla, no se abre el pedido; se muestra un error para reintentar. El carrito no ofrece descarga directa; el diseño se entrega al vendedor mediante el enlace del pedido. No se procesan pagos: el vendedor confirma el pedido y envía el enlace de Mercado Pago.

El carrito se guarda solamente en el navegador del cliente. Sus datos de contacto se conservan en el formulario mientras está abierto y se incluyen en el mensaje de WhatsApp; no hay base de datos de clientes.

## Archivo 3MF

Incluye mallas cerradas de base y texto, colores, medidas en milímetros y cada unidad del pedido. La base mide 20 mm de alto y 3 mm de espesor; el texto agrega aproximadamente 1,2 mm. El ancho se adapta al nombre y el orificio mide 4,2 mm. Incluye colores estándar por triángulo, base y letras agrupadas y metadatos de asignación de filamentos para Bambu Studio/OrcaSlicer. Abrí el archivo como proyecto para conservar la paleta y las asignaciones de las partes. Incluye perfil Bambu Lab P2S con boquilla 0,4 mm, PLA genérico y cama PEI texturizada. No incluye aro metálico ni laminado previo. Verificá los colores y la correspondencia con las bobinas físicas en tu laminador. Se probó la subida y descarga desde Beacon y la importación y reexportación mediante Bambu Studio instalado, conservando modelo, placa, colores y asignación de filamentos. Revisá disposición de unidades, escala y resultado de laminado antes de imprimir. No se realizó una impresión física de prueba.

## Publicación pendiente

Estos archivos están listos para hosting estático HTTPS. Esta entrega es local: no hay un sitio publicado ni un dominio conectado. El nombre de marca 3Dart.uy no implica que el dominio esté registrado. Para publicar hacen falta el servicio de hosting y acceso al dominio. La subida de diseños usa la API pública de Beacon (beacon.host) desde el navegador. Requiere conexión y que el servicio mantenga sus permisos de acceso para otras webs (CORS). No hay garantía de almacenamiento permanente: descargá los diseños antes de que venza el enlace.

Cada llavero cuesta $60 UYU; el envío a domicilio suma $195 por pedido y el retiro es gratis. Los tres diseños son propios; no se reutilizaron archivos de MakerWorld.

## Dependencias

Three.js 0.128.0 (MIT), JSZip (MIT/GPLv3) y Helvetiker de los ejemplos de Three.js, con glifos acentuados añadidos para el personalizador. Consultá `assets/LICENCIAS.txt`.

## Cambios de esta versión

Paleta: negro, azul, blanco, celeste, rosa, rojo, naranja, violeta místico y verde. Los tonos hexadecimales son una representación aproximada del filamento físico; el violeta místico se guarda como un color sólido, sin textura de brillo o variación óptica.

El domicilio (calle, número y apartamento) es obligatorio para envío. La referencia es opcional. Ambos se incluyen únicamente en el mensaje de WhatsApp; no se suben a Beacon. En retiro, el domicilio no se solicita ni se envía.

## Modelos originales pendientes

Los modelos actuales siguen siendo los tres prototipos propios originales. No fueron reemplazados por imitaciones de MakerWorld. Para completar la sustitución exacta hacen falta los archivos fuente y acceso a su generación:

- BluzXz: https://makerworld.com/es/models/3049453-custom-name-keychain-generator-multilingual-fonts — fuente anunciada `Name_key_chain_v3.scad`; el personalizador exige sesión y la página anuncia membresía comercial.
- Sandy Design: https://makerworld.com/es/models/3044216-keychain-base-customizable-name-double-connection — fuente paramétrica descargable desde su personalizador con sesión; la página anuncia licencia comercial y BY-ND.
- LayerModels: https://makerworld.com/es/models/2138461-articulated-name-keychain-collection-10-names — colección de diez nombres fijos; los nombres arbitrarios se generan en https://layermodels.com/. La página anuncia BY-NC-ND y licencia comercial de membresía. Un STL fijo no aporta el algoritmo para generar nuevos nombres articulados.

No se descargaron fuentes detrás de una sesión ni se eludieron restricciones. Para la venta deben estar cubiertos los derechos de uso y distribución correspondientes de los autores.

## Personalizador en vivo

La vista 3D cambia automáticamente al escribir el nombre o elegir modelo, colores y fuente. Se eliminó el botón de generación. Fuentes: Negrita, Simple, Clásica y Elegante. La fuente se guarda por artículo, se incluye en el mensaje de WhatsApp y se usa para construir las letras del 3MF. Los artículos previos sin fuente se interpretan como Negrita. Un nombre vacío o inválido deshabilita Agregar al carrito.


Precios: $60 UYU por llavero; envío $195 UYU por pedido; retiro gratis en Gregorio Camino 186 esquina Carlos de la Vega. El carrito y WhatsApp incluyen subtotal, entrega y total.
Fuentes nuevas: Lobster, Pacifico, Bangers, Lilita One, Righteous y Courgette, con muestras visuales y contornos reales en el 3MF. Licencias OFL individuales en assets/. Se admiten mayúsculas y minúsculas.


Exportación Bambu: proyecto P2S, boquilla 0,4 mm, PLA genérico, cama PEI texturizada y perfil 0,20 mm Standard. Abre el archivo desde Archivo > Abrir proyecto, conservando la configuración del proyecto; antes de imprimir asigna los filamentos a los compartimentos reales del AMS 2 Pro. Si tu boquilla o material son otros, ajusta el perfil en Bambu Studio. Los colores representan los elegidos en la tienda; el tono físico depende de las bobinas.


Tema: automático según prefers-color-scheme del dispositivo; selector Claro/Oscuro/Automático con preferencia guardada. La vista 3D adapta su fondo sin modificar los colores elegidos para imprimir. Se eliminó la descarga de diseños desde el carrito; la subida para WhatsApp continúa automática.


## Alojar este ZIP

Descomprimí y subí todos los archivos conservando la carpeta assets. index.html debe quedar en la raíz pública. No requiere Node, PHP ni base de datos; usá un alojamiento estático con HTTPS. theme.js es necesario. Probá un pedido desde el dominio publicado para comprobar el acceso a Beacon y WhatsApp en ese navegador.

Validación: la nube tiene un límite externo de cinco subidas por hora por IP. En la comprobación final una nueva subida recibió ese límite; se descargó de nuevo el enlace de la prueba exitosa anterior y se verificó que el contenido del proyecto coincide con el exportador actual. No se realizó impresión física.


## Versión final confirmada
El usuario confirmó la importación correcta del diseño del cliente. El 3MF se importa como modelo/geometría: incluye la fuente y colores mediante la extensión estándar de materiales, sin reemplazar los ajustes de impresora, material ni proceso de Bambu Studio. En el diálogo de colores se asignan a los filamentos existentes. Las indicaciones anteriores de perfil de proyecto P2S corresponden a versiones anteriores y ya no aplican.
La nube principal es Beacon; si alcanza su límite, se usa Filebin. El enlace del mismo carrito se guarda para evitar subidas repetidas. Los enlaces son temporales. No hay botón de descarga de diseños en el carrito.


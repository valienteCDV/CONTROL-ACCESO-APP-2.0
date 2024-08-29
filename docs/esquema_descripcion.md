# Esquema de Base de Datos: CONTROL-ACCESO-APP

## Visión General

Este esquema de base de datos está diseñado para un sistema de control de acceso altamente flexible y escalable, capaz de manejar múltiples empresas, instalaciones, áreas, personas, vehículos y registros de acceso. El sistema también incorpora funcionalidades para gestionar autorizaciones, cargas peligrosas, documentación y auditoría de eventos.

## Descripción de Tablas

### EMPRESA
- Representa las empresas registradas en el sistema.
- Campos clave:
  - `id`: Identificador único de la empresa.
  - `nombre`: Nombre de la empresa (único).
  - `direccion`: Dirección física de la empresa.
  - `telefono`: Número de contacto.

### INSTALACION
- Representa las diferentes instalaciones o sedes de una empresa.
- Relaciones:
  - Pertenece a una EMPRESA.
  - Contiene múltiples AREAs.
  - Tiene múltiples USUARIOs trabajando en ella.
- Campos clave:
  - `empresa_id`: Vincula la instalación con una empresa.
  - `maneja_vehiculos`: Indica si la instalación maneja entrada/salida de vehículos.
  - `maneja_cargas_peligrosas`: Indica si la instalación maneja materiales peligrosos.

### AREA
- Representa diferentes zonas dentro de una instalación.
- Relaciones:
  - Pertenece a una INSTALACION.
  - Puede tener múltiples REGISTROs de acceso.
  - Puede tener AUTORIZACIONes asociadas.
- Campos clave:
  - `es_zona_peligrosa`: Indica si el área requiere precauciones especiales.

### USUARIO
- Representa a los usuarios del sistema (empleados, guardias, administradores).
- Relaciones:
  - Trabaja en una INSTALACION.
  - Puede tener múltiples ROLes.
  - Puede registrar REGISTROs y otorgar AUTORIZACIONes.
- Campos clave:
  - `username` y `email`: Únicos para cada usuario.
  - `password_hash`: Almacena la contraseña encriptada.
  - `activo`: Indica si la cuenta está activa.

### ROL y PERMISO
- Definen los roles de usuario y sus permisos asociados.
- Permite un sistema de control de acceso granular.

### PERSONA
- Representa a individuos que pueden acceder a las instalaciones.
- Relaciones:
  - Puede estar asociada a una EMPRESA.
  - Puede poseer VEHICULOs.
  - Puede tener REGISTROs de acceso y AUTORIZACIONes.
- Campos clave:
  - `dni`: Documento de identidad único.
  - `es_particular`: Distingue entre empleados y visitantes.
  - `activo`: Indica si la persona está activa en el sistema.

### VEHICULO
- Representa vehículos asociados a PERSONAs.
- Relaciones:
  - Pertenece a una PERSONA.
  - Puede estar involucrado en REGISTROs de acceso.
  - Puede transportar CARGAs.
- Campos clave:
  - `patente`: Identificador único del vehículo.
  - `sin_patente`: Para vehículos sin matrícula.
  - `es_vehiculo_peligroso`: Indica si requiere atención especial.

### AUTORIZACION
- Gestiona los permisos de acceso de PERSONAs a áreas específicas.
- Relaciones:
  - Asocia una PERSONA con un AREA.
  - Es otorgada por un USUARIO.
- Campos clave:
  - `fecha_desde` y `fecha_hasta`: Período de validez de la autorización.
  - `activa`: Indica si la autorización está vigente.

### REGISTRO
- Registra los eventos de entrada y salida de PERSONAs y VEHICULOs.
- Relaciones:
  - Asociado a una PERSONA, posiblemente a un VEHICULO, y a un AREA.
  - Registrado por un USUARIO.
  - Tiene un TIPO_ACCESO asociado.
- Campos clave:
  - `fecha_hora_entrada` y `fecha_hora_salida`: Timestamps de entrada/salida.
  - `es_entrada`: Distingue entre registros de entrada y salida.
  - `foto_entrada_url` y `foto_salida_url`: Enlaces a fotos tomadas durante el acceso.

### CARGA y TIPO_CARGA
- Gestionan información sobre las cargas transportadas por VEHICULOs.
- TIPO_CARGA clasifica las cargas, indicando si son peligrosas.

### TIPO_ACCESO
- Define diferentes tipos de acceso (ej. visita, entrega, empleado).

### EVENTO_AUDITORIA
- Registra acciones importantes realizadas por USUARIOs en el sistema.
- Crucial para seguimiento y seguridad.

### DOCUMENTO
- Permite almacenar documentos asociados a diferentes entidades (PERSONA, VEHICULO, AUTORIZACION, REGISTRO).
- Útil para almacenar permisos, seguros, etc.

### INTEGRACION
- Facilita la integración con sistemas externos (ej. escáneres, cámaras).

### CONFIGURACION
- Permite configuraciones personalizadas por INSTALACION.
- Facilita la adaptabilidad del sistema a diferentes necesidades.

### UBICACION_REGISTRO
- Permite un seguimiento detallado de la ubicación de PERSONAs y VEHICULOs dentro de las instalaciones.

## Conclusión

Este esquema proporciona una base sólida para un sistema de control de acceso altamente flexible y escalable. Permite manejar múltiples empresas e instalaciones, con un control granular de accesos y autorizaciones. La inclusión de tablas como CARGA y TIPO_CARGA permite manejar escenarios complejos como el transporte de materiales peligrosos. Las funcionalidades de auditoría y documentación aumentan la seguridad y trazabilidad del sistema.

La estructura modular del esquema permite futuras expansiones y adaptaciones a diferentes tipos de instalaciones y requisitos de seguridad.

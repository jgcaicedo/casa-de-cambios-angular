# Casa de Cambios en Tiempo Real

Aplicación web desarrollada en **Angular** que permite a los usuarios realizar conversiones de divisas en tiempo real y visualizar casas de cambio cercanas en un mapa interactivo.

## Tecnologías Utilizadas

- **Angular**: Framework de desarrollo frontend.
- **Bootstrap** : Mejorar el diseño y adaptabilidad.
- **Mapbox API**: Para mostrar ubicaciones de casas de cambio en un mapa interactivo.
- **FreecurrencyAPI**: Para obtener tasas de conversión de divisas en tiempo real.

## Imagenes 

![image](https://github.com/user-attachments/assets/b6c7eb2f-8f9d-4459-a723-930622fb9aec)
![image](https://github.com/user-attachments/assets/7f00b927-77ac-437d-ad4e-8fed4e8a2ce9)
![image](https://github.com/user-attachments/assets/8a581d4f-8e7a-447b-99b1-588b16846ffa)

## Características

- Conversión de divisas en tiempo real.
- Visualización de casas de cambio cercanas mediante un mapa interactivo.
- Interfaz amigable y responsive.
- Integración con APIs externas para datos actualizados.

## Instalación y Configuración

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repo.git
   cd nombre-del-repo
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura las claves de las APIs:
   - La API de **FreecurrencyAPI** se encuentra en `inicio.component.ts` bajo la variable `apikey`.
   - La API de **Mapbox** se encuentra en `sede.component.ts` bajo la variable `accesstoken`.
   
4. Ejecuta la aplicación en modo desarrollo:
   ```bash
   ng serve
   ```

## Uso

1. Ingresa la cantidad y selecciona las divisas para la conversión.
2. Visualiza el resultado en tiempo real.
3. Explora el mapa para encontrar casas de cambio cercanas.

## Contribución

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature-nueva-funcionalidad`).
3. Realiza los cambios y haz commit (`git commit -m 'Agrega nueva funcionalidad'`).
4. Sube los cambios (`git push origin feature-nueva-funcionalidad`).
5. Abre un Pull Request.

## Autor

Juan Guillermo Caicedo Delgado

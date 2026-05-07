# NEXOS

Este proyecto es una aplicación web desarrollada con **Next.js**, **React**, **TypeScript** y **Tailwind CSS**.

## Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- **Node.js**: versión `20` o superior.
- **npm**: normalmente viene instalado junto con Node.js.

Puedes verificar las versiones instaladas con:

```bash
node -v
npm -v
```

## Pasos para ejecutar el proyecto

### 1. Abrir la carpeta del proyecto

Ubícate en la carpeta principal del proyecto:

```bash
cd NEXOS
```

Si estás en la carpeta superior descargada, la ruta puede ser:

```bash
cd NEXOS/NEXOS
```

### 2. Instalar las dependencias

Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```bash
npm install
```

Este comando instalará paquetes como:

- **Next.js**
- **React**
- **React DOM**
- **Tailwind CSS**
- **TypeScript**

### 3. Ejecutar el servidor de desarrollo

Para iniciar el proyecto en modo desarrollo, ejecuta:

```bash
npm run dev
```

Luego abre tu navegador en:

```bash
http://localhost:3000
```

## Scripts disponibles

En el archivo `package.json` se encuentran los siguientes comandos:

### Ejecutar en desarrollo

```bash
npm run dev
```

Inicia el servidor local de desarrollo.

### Generar build de producción

```bash
npm run build
```

Compila el proyecto para producción.

### Ejecutar en modo producción

Después de generar el build, puedes ejecutar:

```bash
npm run start
```

Esto inicia la aplicación usando la versión compilada.

### Ejecutar lint

```bash
npm run lint
```

Revisa posibles errores o problemas de estilo en el código.

## Estructura principal del proyecto

```text
NEXOS/
├── src/
│   ├── app/
│   ├── components/
│   └── styles/
├── public/
├── package.json
├── next.config.js
├── postcss.config.js
└── tsconfig.json
```

## Tecnologías usadas

- **Next.js 16**
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **next-themes**

## Notas importantes

- El proyecto requiere **Node.js 20 o superior**.
- Si el puerto `3000` está ocupado, Next.js puede sugerir otro puerto automáticamente.
- Si aparecen errores relacionados con dependencias, elimina la carpeta `node_modules` y vuelve a ejecutar `npm install`.

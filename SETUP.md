# 🛠️ Configuración del Proyecto

Esta guía te ayudará a configurar el proyecto en cualquier equipo nuevo.

---

## 📋 Pre-requisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)  
  [Descargar Node.js](https://nodejs.org/)

- **pnpm** (gestor de paquetes)  
  ```bash
  npm install -g pnpm
  ```

- **Git**  
  [Descargar Git](https://git-scm.com/)

---

## 🚀 Instalación paso a paso

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/DonValen910/padel-club-gestion.git
cd padel-club-gestion
```

### 2️⃣ Instalar dependencias

```bash
pnpm install
```

Este comando instalará todas las dependencias listadas en `package.json`:
- React 19.2.0
- React Router 7.11.0
- Panda CSS 1.7.1
- Vite (rolldown-vite 7.2.5)
- dayjs
- Zustand 5.0.9
- ESLint y plugins

### 3️⃣ Generar archivos de Panda CSS

```bash
pnpm panda
```

Este comando genera el directorio `styled-system/` con todos los estilos y utilidades de Panda CSS.

### 4️⃣ Iniciar el servidor de desarrollo

```bash
pnpm dev
```

Esto iniciará:
- Panda CSS en modo watch (observa cambios en los estilos)
- Vite dev server (normalmente en http://localhost:5173)

---

## 📦 Scripts disponibles

En `package.json` se definen los siguientes comandos:

- `pnpm dev` - Inicia el servidor de desarrollo
- `pnpm build` - Compila el proyecto para producción
- `pnpm preview` - Previsualiza la build de producción
- `pnpm lint` - Ejecuta ESLint para verificar el código
- `pnpm panda` - Genera los archivos de Panda CSS

---

## 🔧 Configuración de Panda CSS

El proyecto utiliza **Panda CSS** como sistema de diseño. La configuración se encuentra en [panda.config.mjs](panda.config.mjs).

### Variables de color definidas

En el archivo de configuración se definen las siguientes variables CSS:

```css
--color-naranja: #FF7E2D
--color-rojo: #F00808
--color-verde: #1AA113
--color-negro: #010101
--color-blanco: #F1F1F1
```

Estos colores representan los diferentes estados y elementos de la UI.

### Regenerar estilos

Si modificas la configuración de Panda CSS o agregas nuevos estilos, ejecuta:

```bash
pnpm panda
```

O déjalo corriendo en modo watch junto con el dev server:

```bash
pnpm dev
```

---

## 🌐 Variables de entorno (futuro)

Cuando se integre Supabase, necesitarás crear un archivo `.env` en la raíz del proyecto:

```env
VITE_SUPABASE_URL=tu_url_de_supabase
VITE_SUPABASE_ANON_KEY=tu_clave_anonima
```

**⚠️ Importante**: Nunca subas el archivo `.env` al repositorio. Ya está incluido en `.gitignore`.

---

## 🐛 Solución de problemas

### El servidor no inicia

1. Verifica que tengas Node.js 18+ instalado:
   ```bash
   node --version
   ```

2. Elimina `node_modules` y reinstala:
   ```bash
   rm -rf node_modules pnpm-lock.yaml
   pnpm install
   ```

3. Regenera los archivos de Panda CSS:
   ```bash
   pnpm panda
   ```

### Error con pnpm

Si no tienes pnpm instalado:

```bash
npm install -g pnpm
```

### Los estilos no se aplican

Asegúrate de haber ejecutado:

```bash
pnpm panda
```

Esto genera el directorio `styled-system/` necesario para que funcionen los estilos.

### Error de puerto ocupado

Si el puerto 5173 está en uso, Vite automáticamente usará el siguiente disponible. Revisa la consola para ver qué puerto se está usando.

---

## 📁 Archivos importantes

- `panda.config.mjs` - Configuración de Panda CSS
- `vite.config.js` - Configuración de Vite
- `eslint.config.js` - Configuración de ESLint
- `package.json` - Dependencias y scripts
- `.gitignore` - Archivos ignorados por Git

---

## ✅ Verificación de instalación

Para verificar que todo está funcionando correctamente:

1. El servidor debe iniciar sin errores
2. Debes poder acceder a http://localhost:5173
3. Debes ver una tarjeta (Card) con el estado "Terminado" y fecha "14, Dic"
4. Los estilos deben estar aplicados correctamente

---

## 🔄 Sincronizar cambios

Para obtener los últimos cambios del repositorio:

```bash
git pull origin main
pnpm install  # Por si hay nuevas dependencias
pnpm panda    # Regenerar estilos si cambió la config
```

---

## 📝 Notas adicionales

- El proyecto usa **React 19** (versión más reciente)
- Se usa **pnpm** en lugar de npm por su eficiencia
- **Panda CSS** requiere regeneración al cambiar su configuración
- El directorio `styled-system/` está generado automáticamente y no debe editarse manualmente

---

¿Problemas? Abre un issue en el [repositorio](https://github.com/DonValen910/padel-club-gestion/issues).

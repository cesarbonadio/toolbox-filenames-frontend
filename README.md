## Proyecto de Procesamiento de Archivos

Este proyecto es una aplicación en React que permite listar y procesar archivos desde un backend. Utiliza hooks personalizados para obtener la lista de archivos y sus datos formateados.

### 📌 Características

- Listado de archivos obtenidos desde un servicio REST.

- Procesamiento de archivos y obtención de datos formateados.

- Uso de React y hooks personalizados para la gestión de datos.

### 🚀 Instalación y Configuración

#### 1️⃣ Prerrequisitos

- Node.js (v16 o superior recomendado)
- npm

#### 2️⃣ Clonar el repositorio

```bash
git clone git@github.com:cesarbonadio/toolbox-filenames-frontend.git && cd toolbox-filenames-frontend
```

#### 3️⃣ Instalar dependencias

```bash
npm install
```

#### 4️⃣ Configuración del entorno

Crea un archivo .env en la raíz del proyecto y define las siguientes variables de entorno según tu configuración:

```yaml
REACT_APP_API_BASE_URL=http://localhost:8005
```

### 🛠 Uso

#### Iniciar el servidor de desarrollo

```bash
npm run dev
```

El proyecto se ejecutará en http://localhost:5173/ por defecto.


### 🐋 Docker uso

```bash
sudo docker compose up --build -d
```

#### remover el container
```bash
sudo docker compose down
```
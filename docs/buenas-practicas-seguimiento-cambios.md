# Ejemplo de prompt
para una tarea específica:
"Estoy trabajando en CONTROL-ACCESO-APP, actualmente en la Fase 4: Registro de Personas y Vehículos. Estoy implementando el componente PersonForm.js para la creación y edición de registros de personas. Necesito ayuda para estructurar este componente y manejar la validación de formularios. ¿Puedes proporcionar un esqueleto inicial del componente y sugerir una estrategia para la validación?"

# Mejores Prácticas para el Seguimiento de Cambios

### Utilizando Git y GitHub:

1. Convención de Commits:
   Utiliza una convención de commits clara, por ejemplo:
   - `feat:` para nuevas características
   - `fix:` para correcciones de bugs
   - `docs:` para cambios en la documentación
   - `style:` para cambios que no afectan el significado del código
   - `refactor:` para refactorizaciones de código
   - `test:` para añadir tests faltantes o corregir existentes
   - `chore:` para tareas de mantenimiento

   Ejemplo: `feat: implementar formulario de registro de vehículos`

2. Branching Strategy:
   - Utiliza `main` o `master` para código de producción estable
   - Crea ramas de feature para cada nueva característica o tarea
   - Usa ramas de release para preparar nuevas versiones
   - Emplea ramas de hotfix para correcciones urgentes en producción

3. Pull Requests:
   - Crea un Pull Request (PR) para cada feature o fix importante
   - Utiliza la descripción del PR para documentar los cambios realizados
   - Realiza code reviews antes de mergear

4. Tagging:
   - Utiliza tags para marcar versiones importantes del proyecto
   - Sigue el versionado semántico (MAJOR.MINOR.PATCH)

### Utilizando VSCode:

1. Extensiones Útiles:
   - GitLens: Para una mejor integración de Git en VSCode
   - Git History: Para visualizar y buscar en el historial de Git
   - GitHub Pull Requests and Issues: Para manejar PRs e issues directamente desde VSCode

2. Comandos de Git en VSCode:
   - Utiliza la pestaña de Source Control para realizar commits, pulls, y pushes
   - Usa la paleta de comandos (Ctrl+Shift+P) para operaciones de Git más avanzadas

3. Documentación en Código:
   - Utiliza comentarios JSDoc para documentar funciones y componentes importantes
   - Mantén un archivo CHANGELOG.md actualizado con los cambios significativos

4. Automatización:
   - Configura husky para ejecutar linters y tests antes de cada commit
   - Utiliza GitHub Actions para CI/CD, ejecutando tests y linters automáticamente en cada push


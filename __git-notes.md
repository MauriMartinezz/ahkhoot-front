# Commit perfecto

- **Buen mensaje** de commit
- Añadir cambios **correctos**

- Cuanto menos archivos y menos temas involucre un commit **MEJOR**.
- Usar correctamente "git add **filename**" para que el commit no pierda cohesion
- Utilizar git add -p **filename** para agregar los "chunks" de codigo que forman parte del commit y que no pierda cohesion



### Mensaje de commit perfecto

- Subject = resumen conciso de que ocurrio
- Body = Explicacion mas detallada
    - Que es diferente ahora ?
    - Cual es la razon de este cambio ?
    - Hay algo para revisar o algo para remarcar ?
    - Esta en proceso o terminado ? (WIK o terminado)

Si no podes escribir un mensaje muy breve, puede significar que estas metiendo demasiados **topics** en un mismo commit. Lo cual es problematico.

### Ejemplo

Add mensajes de error en formulario de registro

Los usuarios ahora pueden ver un mensaje de error al ingresar mal sus datos al registrarse:
- Register.component.ts se encarga de validar la informacion
- La contraseña debe tener 8 caracteres incluyendo al menos una mayuscula, una minuscula y un numero
- Auth.service.ts evita que se envie informacion erronea a la base de datos validando contra nuestro backend

**Siempre hacer un git pull antes de hacer un git push a alguna rama**

# Branches

- Long running branches: 
    - Existen durante toda la aplicacion("develop", "production", "master")

- Short lived branches
    - Para features nuevas, bug fixes, experimentos, refactors, etc
    - Van a ser eliminadas luego de la integracion (rebase, merge)

Estrategia utilizada: GitFlow

- 2 long-running branches
    - Develop
    - Master

De develop surgen las short lived branches, por ejemplo
    - hotfix
    - feature X
    - release 

A develop solo llega codigo limpio y testeado desde rama release.
Luego, una vez asegurado que esta listo para produccion, se integra con Master cuando sea necesario

## Merge conflicts

Ocurren cuando se integran commits de distintas fuentes
Son cambios contradictorios que git no puede diferenciar cual es correcto 

> - git pull
> - git merge 
> - git rebase
> - git cherry-pick
> - git stash apply

#### Empezar de nuevo deshaciendo un conflicto
    - git merge --abort
    - git rebase --abort

### Corregir mensaje de commit

git commit --amend -m "nuevo mensaje"

### Agregar archivos al ultimo commit

> git add **nombreDelArchivo**
> git commit --amend HEAD~1

### Deshacer commit

> git reset --soft HEAD~1

### Deshacer commit y cambios

> git reset --hard HEAD~1

* siendo 1 la cantidad de commits hacia atras que queres ir
* HEAD~3 va a volver 3 commits hacia atras

### Deshacer merge commit que ya fue pusheado a la rama remota

> git revert -m 1 <id_commit>

* con git log se puede ver los ids de los commits

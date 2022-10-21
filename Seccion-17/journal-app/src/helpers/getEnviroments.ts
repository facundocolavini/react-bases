export const getEnviroments = () => {
    //carga de variables de entorno
    import.meta.env;
    return {
        ...import.meta.env
    }
}
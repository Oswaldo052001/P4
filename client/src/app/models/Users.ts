export interface User {
    id?: number;
    carne?: number;
    nombre?: string;
    apellido?: string;
    contrasena?: string;
    correo?: string;
    created_at?: Date; 
}

export interface userLog {
    carne?: number;
    contrasena?: string;
}

export interface Cursos{
    codigo_curso: number;
    nombre_curso: String;
    profesor: String;
    auxiliar: String;
    seccion: String;
    creditos: String;
}
export interface cursoap{
    nombre_curso:String;
}
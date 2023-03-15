export interface Producto {
        idProducto:    number;
        referencia:    string;
        idGenero:      number;
        idCategoria:   number;
        idMarca:       number;
        idColor:       number;
        idTalla:       number;
        descripcion:   string;
        valorUnitario: number;
        imagen:        string;
        masBuscados:   number;
        genero:        Genero;
        categoria:     Categoria;
        marca:         Marca;
        color:         Color;
        talla:         Talla;
        stock:         number;
    }
    
    export interface Categoria {
        idCategoria: number;
        categoria:   string;
    }
    
    export interface Color {
        idColor: number;
        color:   string;
    }
    
    export interface Genero {
        idGenero: number;
        genero:   string;
    }
    
    export interface Marca {
        idMarca: number;
        marca:   string;
    }
    
    export interface Talla {
        idTalla: number;
        talla:   string;
    }
    
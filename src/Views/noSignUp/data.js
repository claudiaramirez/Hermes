export const data = [
    {
        id: "01guia",
        num_guia: "0542971",
        created_at: "2019-07-18",
        paqueteria: "DHL",
        img_paq: "https://www.carayol.com/wp-content/uploads/2018/01/dhl-logo.jpg",
        tienda: "Pata Hueca",
        estatus: {
            id: "01_id_status",
            descripcion: "El paquete salio de almacen",
            guia_id: "01guia",
            estatus: "transito",
            }
        },
    {
        id: "02guia",
        num_guia: "0489121",
        created_at: "2019-07-19",
        paqueteria: "DHL",
        img_paq: "https://www.carayol.com/wp-content/uploads/2018/01/dhl-logo.jpg",
        tienda: "Pata Hueca",
        estatus: {
            id: "02_id_status",
            descripcion: "El paquete salio de DHL rumbo a domicilio de entrega",
            guia_id: "02guia",
            estatus: "camino",
            }
    },
    {
        id: "03guia",
        num_guia: "0934671",
        created_at: "2019-07-11",
        paqueteria: "DHL",
        img_paq: "https://www.carayol.com/wp-content/uploads/2018/01/dhl-logo.jpg",
        tienda: "Pata Hueca",
        estatus: {
            id: "03_id_status",
            descripcion: "El paquete se entrego",
            guia_id: "02guia",
            estatus: "entregado",
            }
    },
    {
        id: "04guia",
        num_guia: "0927651",
        created_at: "2019-07-19",
        paqueteria: "DHL",
        img_paq: "https://www.carayol.com/wp-content/uploads/2018/01/dhl-logo.jpg",
        tienda: "Pata Hueca",
        estatus: {
            id: "04_id_status",
            descripcion: "El paquete va hacia oficina DHL cercana a domicilio de entrega",
            guia_id: "04guia",
            estatus: "transito",
            }
    },
 ]
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoriaId } = useParams();

    useEffect(() => {
        const collectionRef = categoriaId
            ? query(collection(db, "Comidas"), where("categoria", "==", categoriaId))
            : collection(db, "Comidas");

        setLoading(true);

        getDocs(collectionRef)
            .then((response) => {
                const productsAdapted = response.docs.map((doc) => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                });
                setProductos(productsAdapted);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoriaId]);

    return (
        <div className="navegacion">
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <ItemList productos={productos} />
            )}
        </div>
    );
}

export default ItemListContainer;

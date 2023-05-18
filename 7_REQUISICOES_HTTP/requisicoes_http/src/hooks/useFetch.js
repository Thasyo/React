import {useState, useEffect} from 'react';

// CUSTOM HOOK
export const useFetch = (url) => {

    const [data, setData] = useState(null);

    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    //ESTADO DE LOADING
    const [loading, setLoading] = useState(false);

    //TRATAMENTO DE ERROS
    const [error, setError] = useState(null);

    //Variável para o id do produto que será removido
    const [itemId, setItemId] = useState(null);

    const httpConfig = (data, method) => {
        if(method === "POST"){
            setConfig({
                method,
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify(data)
            });

            setMethod(method);
        }else if(method === "DELETE") {  //REMOVENDO DADOS
            setConfig({
                method,
                headers: {
                    "Content-Type": "Application/json"
                }
            });

            setMethod(method);
            setItemId(data);
        }
    };

    useEffect(() => {

        const fetchData = async () => {

            setLoading(true);

            try {

                const res = await fetch(url);

                const json = await res.json();

                setData(json);
                
            } catch (error) {

                setError("Houve algum erro no carregameno de dados!");
                
            }

            setLoading(false);

        }

        fetchData();

    }, [url, callFetch]);

    // REFATORANDO POST
    useEffect(() => {
        
        const httpRequest = async () => {

            let json;

            if(method === "POST"){
                let fetchOptions = [url, config];

                const res = await fetch(...fetchOptions);

                json = await res.json();
                
            }else if(method === "DELETE"){
                
                const deleteUrl = `${url}/${itemId}`; 

                const res = await fetch(deleteUrl, config);

                json = await res.json();
            };

            setCallFetch(json);
        };

        httpRequest();
    }, [config, method, url])

    return {data, httpConfig, loading, error};

}
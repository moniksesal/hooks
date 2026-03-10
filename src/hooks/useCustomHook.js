import {useState, useEffect} from 'react'

const useCustomHook = (url) => {
    const [data, setData] = useState(null)
    //corrección: const [error, setError] = useState(null)
    //const [loading, setLoading] = useState(true)

    useEffect(() => {
        //corrección: setData(null) para que se reseteen nuestros estados para que desde el inicio haga lo que queremos
        //setError(null)
        //setLoading(true)
        const fetchCharacters = async () => {
            try {
                const response = await fetch(url)
                //corrección: if(!response.ok) {
                //throw new Error(`Error: ${response.status}`)}
                const result = await response.json()
                setData(result)
            } catch (error) {
                console.error(error)
                //corrección: setError(err.message || 'Ha ocurrido un error')
            } //corrección: finally { se va a ejecutar SIEMPRE al final
            // setLoading(false) } 
        }

        //corrección: if(url) {
        // fetchData()}

        fetchCharacters()
    }, [url])
    return data
    //corrección: return {data, error, loading}
}

export default useCustomHook
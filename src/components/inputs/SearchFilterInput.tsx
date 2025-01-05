import { TextField } from "@mui/material"
import React, { useState } from "react"
import { useSearchParams } from "react-router";



const SearchFilterInput = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [textParams, setTextParams] = useState('');

    function updateFilter(textParams: string) {
        const updatedParams = new URLSearchParams(searchParams);
        if (textParams) {
            updatedParams.set('q', textParams);
        } else {
            updatedParams.delete('q');
        }
        setSearchParams(updatedParams);
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            updateFilter(textParams.trim());
        }}>
            <TextField placeholder="Rechercher un titre ou une description" fullWidth value={textParams} onChange={(e: any) => setTextParams(e.target.value)} />
        </form>
    )


}

export default SearchFilterInput
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { EnumStatus } from "../../utils/interfaces";
import { useState } from "react";

const StatusFilterInput = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [statusParams, setStatusParams] = useState<string>(searchParams.get('status') || '');

    function updateFilter(newStatus: string) {
        const updatedParams = new URLSearchParams(searchParams);
        if (newStatus) {
            updatedParams.set('status', newStatus);
        } else {
            updatedParams.delete('status');
        }
        setSearchParams(updatedParams);
    }

    return (
        <FormControl fullWidth style={{ minWidth: '200px' }}>
            <InputLabel id="status-select-label">Status</InputLabel>
            <Select
                fullWidth
                labelId="status-select-label"
                id="status"
                name="status"
                value={statusParams} // Valeur par défaut : ''
                label="Status"
                onChange={(e) => {
                    const newValue = e.target.value;
                    setStatusParams(newValue); // Met à jour l'état local
                    updateFilter(newValue); // Met à jour les paramètres d'URL
                }}
            >
                <MenuItem value="">Tous</MenuItem>
                <MenuItem value={EnumStatus.A_FAIRE}>{EnumStatus.A_FAIRE}</MenuItem>
                <MenuItem value={EnumStatus.EN_COURS}>{EnumStatus.EN_COURS}</MenuItem>
                <MenuItem value={EnumStatus.TERMINE}>{EnumStatus.TERMINE}</MenuItem>
            </Select>
        </FormControl>
    );
};

export default StatusFilterInput;

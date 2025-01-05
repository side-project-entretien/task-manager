import React, { useActionState, useEffect, useState } from "react";
import { Box, CircularProgress, Container, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import { LoadingButton } from '@mui/lab';
import { useNavigate, useParams } from "react-router";
import { Task, EnumStatus } from "../utils/interfaces";
import axios from "axios";
import { toast } from 'react-toastify';
import dayjs from 'dayjs';

const getTask = async (id: string): Promise<Task | null> => {
    try {
        const response = await axios.get(`/tasks/${id}`);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération de la tâche :", error);
        return null;
    }
};

const FormPage: React.FC = () => {
    const params = useParams<{ id: any }>();
    const [task, setTask] = useState<Task | null>(null);
    const [status, setStatus] = useState<EnumStatus>(EnumStatus.A_FAIRE);
    const [loading, setLoading] = useState<boolean>(!!params?.id);

    const navigate = useNavigate();

    const [state, formAction, pending] = useActionState<any, any>(
        async (_: unknown, formData: FormData) => {
            try {
                if (params?.id) {
                    const confirm = window.confirm("Confirmer la modification de cette tâche ?");
                    if (confirm) {
                        await axios.put(`/tasks/${params.id}`, {
                            title: formData.get("title") as string,
                            description: formData.get("description") as string,
                            status: status as EnumStatus,
                        });
                        toast.success("Tâche mise à jour avec succès");
                        navigate("/");
                    }
                } else {
                    const confirm = window.confirm("Confirmer l'ajout de cette tâche ?");
                    if (confirm) {
                        await axios.post("/tasks", {
                            title: formData.get("title") as string,
                            description: formData.get("description") as string,
                            status: EnumStatus.A_FAIRE,
                            created_at: dayjs().toDate()
                        });
                        toast.success("Tâche ajoutée avec succès");
                        navigate("/");
                    }
                }
            } catch (error) {
                console.error("Erreur lors de l'envoi du formulaire :", error);
                toast.error("Une erreur est survenue");
            }
        }, {});

    const fetchTask = async () => {
        if (params?.id) {
            try {
                const response = await getTask(params?.id);
                if (!response) {
                    console.log('Tâche introuvable');
                    return navigate("/");
                }
                setTask(response);
                setLoading(false);

            } catch (error) {

            }

        }
    };

    useEffect(() => {
        fetchTask()
    }, [])


    if (pending || loading) {
        return <CircularProgress color="secondary" />;
    }

    return (
        <Box marginTop={10}>
            <Container>
                <Typography gutterBottom variant="h4" fontWeight="bold" component="h1">
                    {task ? "Modifier une tâche" : "Ajouter une tâche"}
                </Typography>
                <Box component="form" action={formAction} marginTop={5}>
                    <Stack direction="column" spacing={2}>
                        <TextField
                            id="title"
                            name="title"
                            label="Titre"
                            variant="outlined"
                            defaultValue={task?.title || ""}
                            required
                        />
                        <TextField
                            multiline
                            rows={10}
                            id="description"
                            name="description"
                            label="Description"
                            variant="outlined"
                            defaultValue={task?.description || ""}
                        />
                        {
                            task && <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="status"
                                    name="status"
                                    value={status}
                                    label="Status"
                                    onChange={(e: any) => {
                                        setStatus(e.target.value);
                                    }}
                                >
                                    <MenuItem value={EnumStatus.A_FAIRE}>{EnumStatus.A_FAIRE}</MenuItem>
                                    <MenuItem value={EnumStatus.EN_COURS}>{EnumStatus.EN_COURS}</MenuItem>
                                    <MenuItem value={EnumStatus.TERMINE}>{EnumStatus.TERMINE}</MenuItem>
                                </Select>
                            </FormControl>
                        }
                        <LoadingButton type="submit" variant="contained" color="success" sx={{ width: "fit-content" }} loading={pending}>Valider</LoadingButton>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

export default FormPage;

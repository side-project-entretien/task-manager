import { Box, Button, CircularProgress, Container, Stack, Typography } from '@mui/material';
import { useCallback, useEffect, useState, useTransition } from 'react';
import axios from 'axios';
import TaskCard from '../components/TaskCard';
import { Link, useSearchParams } from 'react-router';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import StatusFilterInput from '../components/inputs/StatusFilterInput';
import SearchFilterInput from '../components/inputs/SearchFilterInput';
import dayjs from 'dayjs';

function HomePage() {

    const [isPending, startTransition] = useTransition()

    const [searchParams, setSearchParams] = useSearchParams();

    const [tasks, setTasks] = useState<any[]>([])

    const fetchTasks = useCallback(() => {
        startTransition(async () => {
            try {
                const response = await axios.get('/tasks?' + searchParams.toString());
                setTasks(
                    response.data.sort((a: any, b: any) => dayjs(b.created_at).valueOf() - dayjs(a.created_at).valueOf())
                );
            } catch (error) {
                console.error("Erreur lors du chargement des tâches :", error);
            }
        });
    }, [searchParams]);

    useEffect(() => {
        fetchTasks()
    }, [fetchTasks])

    const onRemove = (taskId: string) => {
        setTasks(tasks.filter((task: any) => task.id !== taskId))
    }

    return (
        <Box>
            <Container>
                <Stack direction="row" flexWrap="wrap" alignContent="center" gap={3}>
                    <Typography variant="h4" fontWeight="bold" component='h1'>Liste des tâches</Typography>
                    <Link to="/manage">
                        <Button variant='outlined' startIcon={<AddCircleOutlineIcon />}>Nouvelle tâche</Button>
                    </Link>
                </Stack>
                <Stack className="filters" marginTop={5} direction="column" gap={2}>
                    <SearchFilterInput />
                    <Box width="fit-content">
                        <StatusFilterInput />
                    </Box>
                </Stack>
                <Stack direction="column" spacing={2} marginTop={10}>
                    {isPending ? <CircularProgress color="secondary" /> : tasks.map((task: any, i: number) =>
                        <TaskCard key={i} task={task} onRemove={(taskId: string) => onRemove(taskId)} />
                    )}
                    {!tasks.length && <Typography>Pas de tâches</Typography>}
                </Stack>
            </Container>
        </Box>
    )
}

export default HomePage;
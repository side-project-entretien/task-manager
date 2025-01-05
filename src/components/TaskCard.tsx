import React from "react";
import { EnumStatus, Task } from "../utils/interfaces";
import { Card, CardContent, Chip, IconButton, Stack, Typography } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DeleteIcon from '@mui/icons-material/Delete';
import dayjs from "dayjs";
import axios from "axios";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { Link } from "react-router";
import { toast } from "react-toastify";

const Status: React.FC<{ status: EnumStatus }> = ({ status }) => {
  const statusColors: Record<EnumStatus, "secondary" | "warning" | "success"> = {
    [EnumStatus.A_FAIRE]: "secondary",
    [EnumStatus.EN_COURS]: "warning",
    [EnumStatus.TERMINE]: "success",
  };

  return <Chip label={status} color={statusColors[status]} />;
};

const TaskCard: React.FC<{ task: Task, onRemove: FunctionStringCallback }> = ({ task, onRemove }) => {

  const onRemoveTask = async () => {
    try {
      const confirm = window.confirm("Voulez-vous vraiment supprimer cette tâche ?");
      if (confirm) {
        await axios.delete(`/tasks/${task.id}`);
        onRemove(task.id);
        toast.success("Tâche supprimée avec succès");
      }
    } catch (error) {
      toast.error("Erreur lors de la suppression de la tâche");
    }
  };

  return (
    <Card sx={{ mb: 2, boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h5" fontWeight="bold">
            {task.title}
          </Typography>
          <Stack direction="row">
            <IconButton color="error" onClick={onRemoveTask}>
              <DeleteIcon />
            </IconButton>
            <Link to={'/manage/' + task.id}>
              <IconButton>
                <ModeEditOutlineIcon />
              </IconButton>
            </Link>
          </Stack>
        </Stack>
        <Typography gutterBottom sx={{ whiteSpace: "pre-line", color: task.description ? "inherit" : "gray" }}>
          {task.description || <em>Pas de description disponible</em>}
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center" marginY={3}>
          <CalendarMonthIcon />
          <Typography>{dayjs(task.created_at).format("DD/MM/YYYY - HH:mm")}</Typography>
        </Stack>
        <Status status={task.status} />
      </CardContent>
    </Card>
  );
};

export default TaskCard;

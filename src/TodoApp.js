import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button,
  TextField,
  Container,
  Typography,
  Card,
  CardContent,
  IconButton,
  Box
} from '@mui/material';
import { Delete } from '@mui/icons-material';

// API URLs
const GET_TASKS_API_BASE_URL = "http://dev-get-tasks-api.jhandu.shop";
const DELETE_TASK_API_BASE_URL = "http://dev-delete-task-api.jhandu.shop";
const CREATE_TASK_API_BASE_URL = "http://dev-add-task-api.jhandu.shop";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${GET_TASKS_API_BASE_URL}/tasks`);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks', error);
    }
  };

  const createTask = async () => {
    try {
      await axios.post(`${CREATE_TASK_API_BASE_URL}/tasks`, newTask);
      fetchTasks();
      setNewTask({ title: '', description: '' });
    } catch (error) {
      console.error('Error creating task', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`${DELETE_TASK_API_BASE_URL}/tasks/${taskId}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `
          radial-gradient(circle at top left, rgba(255,223,0,0.35) 0%, transparent 28%),
          radial-gradient(circle at bottom right, rgba(255,193,7,0.28) 0%, transparent 30%),
          linear-gradient(135deg, #1a1200 0%, #332000 38%, #664400 100%)
        `,
        position: 'relative',
        overflow: 'hidden',
        py: 4,
      }}
    >
      {/* Decorative glow circles */}
      <Box
        sx={{
          position: 'absolute',
          width: 260,
          height: 260,
          borderRadius: '50%',
          background: 'rgba(255,215,0,0.16)',
          top: -60,
          left: -60,
          filter: 'blur(6px)',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          width: 320,
          height: 320,
          borderRadius: '50%',
          background: 'rgba(255,193,7,0.14)',
          bottom: -120,
          right: -100,
          filter: 'blur(10px)',
        }}
      />

      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', pt: 3, mb: 3 }}>
          <Typography
            variant="h4"
            sx={{
              color: '#FF3333',
              fontWeight: 800,
              letterSpacing: '1px',
              mb: 0.5,
              textTransform: 'uppercase',
            }}
          >
            WELCOME TO DEY INFO APP
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              color: '#FF6666',
              fontWeight: 600,
              fontStyle: 'italic',
            }}
          >
            Organized by Rajgopal Dey
          </Typography>
        </Box>

        {/* Title */}
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={newTask.title}
          margin="normal"
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          sx={{
            '& .MuiOutlinedInput-root': {
              color: '#fff8e1',
              backgroundColor: 'rgba(255, 235, 59, 0.08)',
              borderRadius: '16px',
              '& fieldset': {
                borderColor: 'rgba(255, 215, 0, 0.45)',
              },
              '&:hover fieldset': {
                borderColor: '#FFD700',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#FFD700',
                boxShadow: '0 0 12px rgba(255,215,0,0.45)',
              },
            },
            '& .MuiInputLabel-root': {
              color: '#FFE082',
            },
          }}
        />

        {/* Description */}
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={newTask.description}
          margin="normal"
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
          sx={{
            '& .MuiOutlinedInput-root': {
              color: '#fff8e1',
              backgroundColor: 'rgba(255, 235, 59, 0.08)',
              borderRadius: '16px',
              '& fieldset': {
                borderColor: 'rgba(255, 215, 0, 0.45)',
              },
              '&:hover fieldset': {
                borderColor: '#FFD700',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#FFD700',
                boxShadow: '0 0 12px rgba(255,215,0,0.45)',
              },
            },
            '& .MuiInputLabel-root': {
              color: '#FFE082',
            },
          }}
        />

        {/* Add Button */}
        <Button
          variant="contained"
          onClick={createTask}
          sx={{
            mt: 2,
            px: 4,
            py: 1.3,
            borderRadius: '14px',
            fontWeight: 'bold',
            fontSize: '1rem',
            color: '#2b1b00',
            background: 'linear-gradient(135deg, #FFD700 0%, #FFB300 100%)',
            boxShadow: '0 8px 24px rgba(255, 193, 7, 0.35)',
            '&:hover': {
              background: 'linear-gradient(135deg, #FFE55C 0%, #FFC107 100%)',
              transform: 'translateY(-2px)',
              boxShadow: '0 12px 28px rgba(255, 193, 7, 0.45)',
            },
            transition: 'all 0.25s ease',
          }}
        >
          ADD TASK
        </Button>

        {/* Existing Tasks */}
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            color: '#FFF8E1',
            my: 4,
            fontWeight: 700,
          }}
        >
          Existing Tasks
        </Typography>

        {tasks.map((task) => (
          <Box key={task.ID} mb={2}>
            <Card
              sx={{
                borderRadius: '18px',
                background: 'rgba(255, 248, 225, 0.10)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 215, 0, 0.28)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.28)',
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ color: '#FFD54F', fontWeight: 'bold' }}
                >
                  {task.Title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ color: '#FFF3C4', mt: 1 }}
                >
                  {task.Description}
                </Typography>

                <IconButton
                  onClick={() => deleteTask(task.ID)}
                  sx={{
                    mt: 1,
                    color: '#FF6B6B',
                    '&:hover': {
                      backgroundColor: 'rgba(255,107,107,0.12)',
                    },
                  }}
                >
                  <Delete />
                </IconButton>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Container>
    </Box>
  );
}

export default TodoApp;
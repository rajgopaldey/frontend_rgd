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
    <Typography variant="h6" sx={{ color: '#FFD54F', fontWeight: 'bold' }}>
      {task.Title}
    </Typography>

    <Typography variant="body2" sx={{ color: '#FFF3C4', mt: 1 }}>
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
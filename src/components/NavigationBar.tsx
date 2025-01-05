import { AppBar, Box, Button, Container, Stack, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router";

function NavigationBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky">
                <Container>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            TaskManager
                        </Typography>
                        <Stack direction="row" spacing={2} sx={{ justifyContent: "center", alignItems: "center" }}>
                            <Button
                                variant="text"
                                component={Link}
                                to="/"
                                sx={{ color: "white" }}
                            >
                                Accueil
                            </Button>
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}

export default NavigationBar
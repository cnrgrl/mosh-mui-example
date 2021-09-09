import { Box } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";

const Footer = () => {
  return (
    <footer>
      <Box
        bgcolor="text.secondary"
        color="white"
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 3, sm: 10 }}
        my={10}
      >
        <Container>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Hilfe</Box>
              <Box>
                <Link href="/" color="inherit">
                  Kontakt
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Datenschutz
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Über Uns</Box>
              <Box>
                <Link href="/" color="inherit">
                  Unternehmen
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Gechichte
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Partners
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Konto</Box>
              <Box>
                <Link href="/" color="inherit">
                  Registrieren
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Anmelden
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ sm: 10, xs: 5 }} pb={{ sm: 5, xs: 0 }}>
            <Link href="https://quizco.de/" color="inherit">
              QuizCounter &reg; {new Date().getFullYear()}{" "}
            </Link>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;

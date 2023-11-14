import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Chip from "@mui/material/Chip";

const MaterialCard = ({ repository }) => {
  console.log(repository);
  return (
    <Card sx={{ maxWidth: 300, 
                margin: '3.5px', 
                border: '2px solid black', 
                borderColor: 'darkgrey', 
                borderRadius: 4, 
                textAlign: 'center', 
                display: 'block' }}>
      <CardContent>
        <Typography variant="body1" color="#fff">
          {repository.name}
        </Typography>
        <Chip
          label={repository.language ? repository.language : "Desconhecida"}
          color="primary"
        />
        <br />
        <Link
          variant="body2"
          href={repository.html_url}
          target="_blank"
          rel="noreferrer"
        >
          Acesar repositório
        </Link>
      </CardContent>
    </Card>
  );
};

export default MaterialCard;
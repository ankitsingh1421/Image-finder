
import { Grid } from '@mui/material';
import Image from './Image';

const Images = ({ data }) => {
    
    return (
        <div className="main">
            <Grid container spacing={2}>
            {
                data.map((image, index) => (
                        
                    <Grid key={image.id} item xs={12} sm={6} md={4} lg={3}>
                        <Image image={image} />
                    </Grid>
                ))
            }
            </Grid>
        </div>
    )
}

export default Images;

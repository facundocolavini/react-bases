import { ImageList, ImageListItem } from '@mui/material';
type Props = {
	images: Array<string>

};

export const ImageGallery = ({images}: Props) => {
	
	return (
		<ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={300}>
			{images.map((item: string, index) => (
				<ImageListItem key={`${Math.random()}${index}`}>
					<img
						src={`${item}?w=164&h=164&fit=crop&auto=format`}
						srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
						alt={'Imagen de la nota'}
						loading="lazy"
					/>
				</ImageListItem>
			))}
		</ImageList>
	);
};



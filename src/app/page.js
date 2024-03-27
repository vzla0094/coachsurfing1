import {Stack} from '@mui/material';
import {Post} from "@/components/Post";


export default function Home() {
  return (
    <>
      <Stack spacing={1}>
        <Post author='Valentina'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper magna eu libero placerat, vitae fermentum libero malesuada. Phasellus consequat ante sed enim ultricies, eu aliquet mi pulvinar. Nulla facilisi. Mauris vitae consequat velit.'/>
        <Post author='Carlos'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper magna eu libero placerat, vitae fermentum libero malesuada. Phasellus consequat ante sed enim ultricies, eu aliquet mi pulvinar. Nulla facilisi. Mauris vitae consequat velit.'/>
      </Stack>
    </>
  );
}

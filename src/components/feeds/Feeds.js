
import {Box} from '@mui/material'
import React from 'react'
import FeedItem from './FeedItem';

const Feeds = () => {
  return (
    <Box flex={4} p={2}
    >
      <FeedItem image="https://picsum.photos/400" 
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
      />
      <FeedItem image="https://picsum.photos/401" 
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
      />
      <FeedItem image="https://picsum.photos/402" 
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
      />
      <FeedItem image="https://picsum.photos/403" 
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
      />
      <FeedItem image="https://picsum.photos/404" 
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
      />
    </Box>
  )
}

export default Feeds
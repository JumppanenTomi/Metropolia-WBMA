import React from 'react';
import {uploadsUrl} from '../utils/variables';
import PropTypes from 'prop-types';
import {Text, Card, ListItem} from '@rneui/themed';

const Single = ({route}) => {
  console.log(route.params);
  const {
    title,
    description,
    filename,
    time_added: timeAdded,
    user_id: userId,
  } = route.params;
  return (
    <Card>
      <Card.Divider />
      <Card.Image style={{width: '100%', height: '70%'}} source={{uri: uploadsUrl + filename}} />
      <Card.Title>{title}</Card.Title>
      <ListItem>
        <Text>{description}</Text>
      </ListItem>
      <ListItem>
        <Text>uploaded at: {timeAdded}</Text>
      </ListItem>
      <ListItem>
        <Text>by user: {userId}</Text>
      </ListItem>
    </Card>
  );
};

Single.propTypes = {
  route: PropTypes.object,
};

export default Single;

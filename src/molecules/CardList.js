import React from 'react';
import {FlatList} from 'react-native';

import {ListingCard} from '../atoms';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    description:
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    distance: 320,
    location: 'Fake St. 123',
    contact: 30012312323,
    user: 'Pepe',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    description:
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    distance: 320,
    location: 'Fake St. 123',
    contact: 30012312323,
    user: 'Pepe',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    description:
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    distance: 320,
    location: 'Fake St. 123',
    contact: 30012312323,
    user: 'Pepe',
  },
];

const CardList = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={(item) => <ListingCard data={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export {CardList};

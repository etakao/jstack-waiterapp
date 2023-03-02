import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '63ec5aa5efa06dce88d8237c',
    'table': '1',
    'status': 'IN_PRODUCTION',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1676432904525-quatro-queijos.png',
          'price': 40
        },
        'quantity': 1,
        '_id': '63ec5aa5efa06dce88d8237d'
      }
    ]
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="⏲️"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👩‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={[]}
      />
    </Container>
  );
}

import { StyleSheet, Text, View, FlatList} from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Gustavo Santos" />
      <Balance saldo="9.250,00" gastos="-527,00" />

      <Actions></Actions>

      <Text style={styles.title}>Últimas Movimentações</Text>

      <FlatList style={styles.list}
      data={list}
      keyExtractor={ (item) => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={ ({item}) => <Movements data={item}/>}/>
    </View>
  );
}

const list = [
  {
    id: 1,
    label: 'Boleto Conta de Luz',
    value: '300,90',
    date: '02/09/2024',
    type: 0
  },
  {
    id: 2,
    label: 'Pix Cliente X',
    value: '2.500,00',
    date: '29/08/2024',
    type: 1
  },
  {
    id: 3,
    label: 'Salário',
    value: '7.200,00',
    date: '17/08/2024',
    type: 1
  },
]

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  title : {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list : {
    marginStart: 14,
    marginEnd: 14,
  }
});

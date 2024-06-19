import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, selectCount} from '../../counterSlice';
import {View, Text, Button} from 'react-native';

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const HandleIncrement = () => {
    dispatch(increment());
  };
  const HandleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Redux Example</Text>
      <Text>Count: {count}</Text>
      
      <Button title="Increment" onPress={HandleIncrement} />
      <Button title="Decrement" onPress={HandleDecrement} />
      {/* <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} /> */}
    </View>
  );
};

export default Counter;

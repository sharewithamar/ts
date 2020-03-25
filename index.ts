//Decorator
/* const Component = (target: any) => {
  console.log(target);
};

@Component
class Car {}

 */

//Generics

class ValueHolder<T> {
  value: T;
}

const numHolder = new ValueHolder<number>();
numHolder.value = 20;

const strHolder = new ValueHolder<string>();
strHolder.value = 'Amar';

console.log(numHolder, strHolder);

//function Generics

const valueWrapper = <T>(value: T): T[] => {
  return [value];
};

const value = valueWrapper<number>(7);
const val = valueWrapper(10); // Type inference
console.log(value, val);

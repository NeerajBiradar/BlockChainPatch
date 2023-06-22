function PizzaResult({ pizza, size }) {
    return (
      <div>
        <h2>Order Summary</h2>
        <p> {pizza.name} - {pizza.price[size]}</p>
      </div>
    );
  }
  
  export default PizzaResult;
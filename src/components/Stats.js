export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list</em>
      </footer>
    );
  }

  const numOfItems = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  const packedPercentage = (packedItems / numOfItems) * 100;

  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You got everything ready to go! ✈️"
          : `💼 You have ${numOfItems} items on your list, and you already packed
        ${packedPercentage}%`}
      </em>
    </footer>
  );
}

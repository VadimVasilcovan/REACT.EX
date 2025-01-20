import React, { useState, useMemo } from 'react';

const ItemList = () => {
  // Sample data
  const items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Mango' },
    { id: 5, name: 'Grapes' },
  ];

  // State to manage the search term
  const [searchTerm, setSearchTerm] = useState('');

  // useMemo to memoize the filtered list
  const filteredItems = useMemo(() => {
    console.log('Filtering items...'); // This will only log when searchTerm or items change
    return items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, items]); // Dependency array: only re-run when searchTerm or items change

  return (
    <div>
      <input
        type="text"
        placeholder="Search items"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;

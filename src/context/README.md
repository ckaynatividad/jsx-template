# to use

- wrap App in index.jsx in provider
- items will pass through components as objects = to useContextName()

ex:

import { createContext, useContext, useState } from 'react';

const ItemContext = createContext();

const ItemProvider = ({ children }) => {
const [item, setItems] = useState(//insert type of default state//);

return (
<ItemContext.Provider value={{ items, setItems }}>
{children}
</ItemContext.Provider>
);
};

const useItems = () => {
const context = useContext(ItemContext);

if (context === undefined) {
throw new Error('must be defined within ItemProvider');
}
return context;
};

export { ItemProvider, useItems };

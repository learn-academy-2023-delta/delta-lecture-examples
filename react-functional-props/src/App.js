import React, { useState } from 'react'
import MenuItem from './components/MenuItem'

const App = () => {
  const [ menu, setMenu ] = useState([
    { name: "Brisket", ordered: false },
    { name: "Tri-tip", ordered: false },
    { name: "Bulgogi", ordered: false },
    { name: "Garlic Fries", ordered: false },
    { name: "Baked Potato", ordered: false },
    { name: "Ice Cream", ordered: false }
  ])

  const orderItem = (selectedItem) => {
    console.log(selectedItem)
    // find the item by index with the selected item in menu array, then access the ordered property and reassign the value to true
    menu[selectedItem].ordered = true
    // Spread operator makes copy of the menu with the updated value
    // We then set menu to override with our spread operator copy
    setMenu([...menu])
  }
  return (
    <>
      <h1>Delta BBQ</h1>
      <h2>Menu</h2>
      {menu.map((itemObject, index) => {
        return (
          <MenuItem 
            item={itemObject} 
            index={index} 
            orderItem={orderItem}
            key={index}
          />
        )
      })}
    </>
  )
}

export default App

/**
 * 
 * @param {number} tableId 
 * @param {Map<number, ChosenItem>} chosenItems 
 */
export const createOrder = async (tableId, chosenItems) => {
  const items = [];

  for (let itemId in chosenItems) {
    /**
     * @type {ChosenItem}
     */
    const chosenItem = chosenItems[itemId];
    for (let i = 0; i < chosenItem.details.length; i += 1) {
      const detail = chosenItem.details[i];
      items.push({
        item_id: parseInt(itemId),
        quantity: detail.amount,
        note: detail.note
      })
    }
  }

  await fetch('http://127.0.0.1:7878/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify({
      table_id: tableId,
      items
    })
  })
}
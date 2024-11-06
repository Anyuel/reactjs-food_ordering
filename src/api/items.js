/**
 * 
 * @returns {Item[]}
 */
export const fetchItems = async () => {
  const response = await fetch('http://127.0.0.1:7878/item')

  const result = await response.json();
  if (!response.ok) {
    throw new Error('Failed by Status Code ' + result.message);
  }

  return result.data.map(item => ({...item, id: item.item_id}));
}
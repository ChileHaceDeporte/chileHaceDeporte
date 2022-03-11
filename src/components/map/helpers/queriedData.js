const clean = string => string.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase()


export function queriedData( valueItem, items) {

  if (valueItem === '') return items
  const cleanValueItem = clean(valueItem) 
  // const queriedData = items.filter( item => clean(item).includes(cleanValueItem))
  const queriedData = items.filter( item => clean(item).startsWith(cleanValueItem))

  
  if(queriedData.length === 1 && clean(queriedData[0]) === cleanValueItem)
    return []
    
  return queriedData
}
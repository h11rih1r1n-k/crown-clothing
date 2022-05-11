export type CollectionItemType = {
  item: {
    id: number,
    imageUrl: string,
    name: string,
    price: number
  }
}

export type CollectionPreviewType = {
  title: string,
  items: CollectionItemType["item"][],
  routeName: string,
}
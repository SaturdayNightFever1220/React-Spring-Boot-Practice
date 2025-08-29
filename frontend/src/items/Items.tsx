import { useGetItemsQuery, useAddItemMutation } from './itemsApi'

function Items() {
  const { data: items = [], isLoading, isError, refetch } = useGetItemsQuery()
  const [addItem] = useAddItemMutation()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget // await前に参照保持
    const f = new FormData(form)
    try {
      await addItem({
        itemName: String(f.get('itemName') || ''),
        price: Number(f.get('price')),
        groupid: String(f.get('groupid') || ''),
      }).unwrap()
      form.reset()
      refetch()
    } catch (error) {
      console.error('Error adding item:', error)
      alert('登録に失敗しました')
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit} style={{ marginBottom: 12 }}>
        <input name="itemName" placeholder="名前" required /><br />
        <input name="price" placeholder="価格" required /><br />
        <input name="groupid" placeholder="グループ" /><br />
        <button>追加</button>
      </form>
      {isError && <p style={{ color: 'red' }}>システムエラーが発生しました。</p>}
      {isLoading ? <p>Loading...</p> : (
        <ul>
          {items.map((i: any) => (
            <li key={i.id}>{i.itemName} ({i.price}円) {i.groupid}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Items
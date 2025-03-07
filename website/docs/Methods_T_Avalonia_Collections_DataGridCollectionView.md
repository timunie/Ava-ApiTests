# DataGridCollectionView Methods




## Methods
<table>
<tr>
<td><a href="M_Avalonia_Collections_DataGridCollectionView_AddNew">AddNew()</a></td>
<td>Add a new item to the underlying collection. Returns the new item. After calling AddNew and changing the new item as desired, either CommitNew or CancelNew" should be called to complete the transaction.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_DataGridCollectionView_CancelEdit">CancelEdit()</a></td>
<td>Complete the transaction started by . The pending changes (if any) to the item are discarded.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_DataGridCollectionView_CancelNew">CancelNew()</a></td>
<td>Complete the transaction started by AddNew. The new item is removed from the collection.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_DataGridCollectionView_CommitEdit">CommitEdit()</a></td>
<td>Complete the transaction started by . The pending changes (if any) to the item are committed.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_DataGridCollectionView_CommitNew">CommitNew()</a></td>
<td>Complete the transaction started by AddNew. We follow the WPF convention in that the view's sort, filter, and paging specifications (if any) are applied to the new item.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_DataGridCollectionView_Contains">Contains(Object)</a></td>
<td>Return true if the item belongs to this view. No assumptions are made about the item. This method will behave similarly to IList.Contains(). If the caller knows that the item belongs to the underlying collection, it is more efficient to call PassesFilter.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_DataGridCollectionView_DeferRefresh">DeferRefresh()</a></td>
<td>Enter a Defer Cycle. Defer cycles are used to coalesce changes to the ICollectionView.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_DataGridCollectionView_EditItem">EditItem(Object)</a></td>
<td>Begins an editing transaction on the given item. The transaction is completed by calling either CommitEdit or CancelEdit. Any changes made to the item during the transaction are considered "pending", provided that the view supports the notion of "pending changes" for the given item.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_DataGridCollectionView_GetEnumerator">GetEnumerator()</a></td>
<td>Implementation of IEnumerable.GetEnumerator(). This provides a way to enumerate the members of the collection without changing the currency.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_DataGridCollectionView_GetItemAt">GetItemAt(Int32)</a></td>
<td>Retrieve item at the given zero-based index in this DataGridCollectionView, after the source collection is filtered, sorted, and paged.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_DataGridCollectionView_IndexOf">IndexOf(Object)</a></td>
<td>Return the index where the given item appears, or -1 if doesn't appear.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_DataGridCollectionView_MoveCurrentTo">MoveCurrentTo(Object)</a></td>
<td>Move to the given item.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_DataGridCollectionView_MoveCurrentToFirst">MoveCurrentToFirst()</a></td>
<td>Move to the first item.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_DataGridCollectionView_MoveCurrentToLast">MoveCurrentToLast()</a></td>
<td>Move to the last item.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_DataGridCollectionView_MoveCurrentToNext">MoveCurrentToNext()</a></td>
<td>Move to the next item.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_DataGridCollectionView_MoveCurrentToPosition">MoveCurrentToPosition(Int32)</a></td>
<td>Move CurrentItem to this index</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_DataGridCollectionView_MoveCurrentToPrevious">MoveCurrentToPrevious()</a></td>
<td>Move to the previous item.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_DataGridCollectionView_MoveToFirstPage">MoveToFirstPage()</a></td>
<td>Moves to the first page.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_DataGridCollectionView_MoveToLastPage">MoveToLastPage()</a></td>
<td>Moves to the last page. The move is only attempted when TotalItemCount is known.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_DataGridCollectionView_MoveToNextPage">MoveToNextPage()</a></td>
<td>Moves to the page after the current page we are on.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_DataGridCollectionView_MoveToPage">MoveToPage(Int32)</a></td>
<td>Requests a page move to page <em>pageIndex</em>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_DataGridCollectionView_MoveToPreviousPage">MoveToPreviousPage()</a></td>
<td>Moves to the page before the current page we are on.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_DataGridCollectionView_PassesFilter">PassesFilter(Object)</a></td>
<td>Return true if the item belongs to this view. The item is assumed to belong to the underlying DataCollection; this method merely takes filters into account. It is commonly used during collection-changed notifications to determine if the added/removed item requires processing. Returns true if no filter is set on collection view.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_DataGridCollectionView_Refresh">Refresh()</a></td>
<td>Re-create the view, using any SortDescriptions and/or Filters.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_DataGridCollectionView_Remove">Remove(Object)</a></td>
<td>Remove the given item from the underlying collection. It needs to be in the current filtered, sorted, and paged view to call</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_DataGridCollectionView_RemoveAt">RemoveAt(Int32)</a></td>
<td>Remove the item at the given index from the underlying collection. The index is interpreted with respect to the view (filtered, sorted, and paged list).</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Collections_NotifyCollectionChangedExtensions_GetWeakCollectionChangedObservable">GetWeakCollectionChangedObservable()</a></td>
<td>Gets a weak observable for the CollectionChanged event.<br />(Defined by <a href="T_Avalonia_Collections_NotifyCollectionChangedExtensions">NotifyCollectionChangedExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_NotifyCollectionChangedExtensions_WeakSubscribe">WeakSubscribe(Action(NotifyCollectionChangedEventArgs))</a></td>
<td>Subscribes to the CollectionChanged event using a weak subscription.<br />(Defined by <a href="T_Avalonia_Collections_NotifyCollectionChangedExtensions">NotifyCollectionChangedExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_NotifyCollectionChangedExtensions_WeakSubscribe_1">WeakSubscribe(NotifyCollectionChangedEventHandler)</a></td>
<td>Subscribes to the CollectionChanged event using a weak subscription.<br />(Defined by <a href="T_Avalonia_Collections_NotifyCollectionChangedExtensions">NotifyCollectionChangedExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Collections_DataGridCollectionView">DataGridCollectionView Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  

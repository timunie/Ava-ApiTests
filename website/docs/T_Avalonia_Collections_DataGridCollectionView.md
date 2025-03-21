# DataGridCollectionView Class


DataGrid-readable view over an IEnumerable.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public sealed class DataGridCollectionView : IDataGridCollectionView, 
	IEnumerable, INotifyCollectionChanged, IList, ICollection, INotifyPropertyChanged
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class DataGridCollectionView
	Implements IDataGridCollectionView, IEnumerable, INotifyCollectionChanged, IList, 
	ICollection, INotifyPropertyChanged
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type DataGridCollectionView = 
    class
        interface IDataGridCollectionView
        interface IEnumerable
        interface INotifyCollectionChanged
        interface IList
        interface ICollection
        interface INotifyPropertyChanged
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/Collections/DataGridCollectionView.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  DataGridCollectionView</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Collections_IDataGridCollectionView">IDataGridCollectionView</a>, <a href="https://learn.microsoft.com/dotnet/api/system.collections.icollection" target="_blank" rel="noopener noreferrer">ICollection</a>, <a href="https://learn.microsoft.com/dotnet/api/system.collections.ienumerable" target="_blank" rel="noopener noreferrer">IEnumerable</a>, <a href="https://learn.microsoft.com/dotnet/api/system.collections.ilist" target="_blank" rel="noopener noreferrer">IList</a>, <a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.inotifycollectionchanged" target="_blank" rel="noopener noreferrer">INotifyCollectionChanged</a>, <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.inotifypropertychanged" target="_blank" rel="noopener noreferrer">INotifyPropertyChanged</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Collections_DataGridCollectionView__ctor_1">DataGridCollectionView(IEnumerable)</a></td>
<td>Helper constructor that sets default values for isDataSorted and isDataInGroupOrder.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_DataGridCollectionView__ctor">DataGridCollectionView(IEnumerable, Boolean, Boolean)</a></td>
<td>Initializes a new instance of the DataGridCollectionView class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Collections_DataGridCollectionView_CanAddNew">CanAddNew</a></td>
<td>Gets a value indicating whether the view supports AddNew.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_DataGridCollectionView_CanCancelEdit">CanCancelEdit</a></td>
<td>Gets a value indicating whether the view supports the notion of "pending changes" on the current edit item. This may vary, depending on the view and the particular item. For example, a view might return true if the current edit item implements IEditableObject, or if the view has special knowledge about the item that it can use to support rollback of pending changes.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_DataGridCollectionView_CanChangePage">CanChangePage</a></td>
<td>Gets a value indicating whether the PageIndex value is allowed to change or not.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_DataGridCollectionView_CanFilter">CanFilter</a></td>
<td>Gets a value indicating whether we support filtering with this ICollectionView.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_DataGridCollectionView_CanGroup">CanGroup</a></td>
<td>Gets a value indicating whether this view supports grouping. When this returns false, the rest of the interface is ignored.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_DataGridCollectionView_CanRemove">CanRemove</a></td>
<td>Gets a value indicating whether the view supports Remove and RemoveAt.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_DataGridCollectionView_CanSort">CanSort</a></td>
<td>Gets a value indicating whether we support sorting with this ICollectionView.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_DataGridCollectionView_Count">Count</a></td>
<td>Gets the number of records in the view after filtering, sorting, and paging.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_DataGridCollectionView_Culture">Culture</a></td>
<td>Gets or sets Culture to use during sorting.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_DataGridCollectionView_CurrentAddItem">CurrentAddItem</a></td>
<td>Gets the new item when an AddNew transaction is in progress Otherwise it returns null.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_DataGridCollectionView_CurrentEditItem">CurrentEditItem</a></td>
<td>Gets the affected item when an EditItem transaction is in progress Otherwise it returns null.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_DataGridCollectionView_CurrentItem">CurrentItem</a></td>
<td>Gets the "current item" for this view</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_DataGridCollectionView_CurrentPosition">CurrentPosition</a></td>
<td>Gets the ordinal position of the CurrentItem within the (optionally sorted and filtered) view.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_DataGridCollectionView_Filter">Filter</a></td>
<td>Gets or sets the Filter, which is a callback set by the consumer of the ICollectionView and used by the implementation of the ICollectionView to determine if an item is suitable for inclusion in the view.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_DataGridCollectionView_GroupDescriptions">GroupDescriptions</a></td>
<td>Gets the description of grouping, indexed by level.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_DataGridCollectionView_Groups">Groups</a></td>
<td>Gets the top-level groups, constructed according to the descriptions given in GroupDescriptions.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_DataGridCollectionView_IsAddingNew">IsAddingNew</a></td>
<td>Gets a value indicating whether an "AddNew" transaction is in progress.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_DataGridCollectionView_IsCurrentAfterLast">IsCurrentAfterLast</a></td>
<td>Gets a value indicating whether currency is beyond the end (End-Of-File).</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_DataGridCollectionView_IsCurrentBeforeFirst">IsCurrentBeforeFirst</a></td>
<td>Gets a value indicating whether currency is before the beginning (Beginning-Of-File).</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_DataGridCollectionView_IsEditingItem">IsEditingItem</a></td>
<td>Gets a value indicating whether an EditItem transaction is in progress.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_DataGridCollectionView_IsEmpty">IsEmpty</a></td>
<td>Gets a value indicating whether the resulting (filtered) view is empty.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_DataGridCollectionView_IsPageChanging">IsPageChanging</a></td>
<td>Gets a value indicating whether a page index change is in process or not.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_DataGridCollectionView_Item">Item(Int32)</a></td>
<td>Return the item at the specified index</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_DataGridCollectionView_ItemCount">ItemCount</a></td>
<td>Gets the minimum number of items known to be in the source collection that verify the current filter if any</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_DataGridCollectionView_NeedsRefresh">NeedsRefresh</a></td>
<td>Gets a value indicating whether this view needs to be refreshed.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_DataGridCollectionView_PageIndex">PageIndex</a></td>
<td>Gets the current page we are on. (zero based)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_DataGridCollectionView_PageSize">PageSize</a></td>
<td>Gets or sets the number of items to display on a page. If the PageSize = 0, then we are not paging, and will display all items in the collection. Otherwise, we will have separate pages for the items to display.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_DataGridCollectionView_SortDescriptions">SortDescriptions</a></td>
<td>Gets the Sort criteria to sort items in collection.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_DataGridCollectionView_SourceCollection">SourceCollection</a></td>
<td>Gets the source of the IEnumerable collection we are using for our view.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_DataGridCollectionView_TotalItemCount">TotalItemCount</a></td>
<td>Gets the total number of items in the view before paging is applied.</td>
</tr>
</table>

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

## Events
<table>
<tr>
<td><a href="E_Avalonia_Collections_DataGridCollectionView_CollectionChanged">CollectionChanged</a></td>
<td>Raise this event when the (filtered) view changes</td>
</tr>
<tr>
<td><a href="E_Avalonia_Collections_DataGridCollectionView_CurrentChanged">CurrentChanged</a></td>
<td>Raised when the CurrentItem property changed</td>
</tr>
<tr>
<td><a href="E_Avalonia_Collections_DataGridCollectionView_CurrentChanging">CurrentChanging</a></td>
<td>Raised when the CurrentItem property is changing</td>
</tr>
<tr>
<td><a href="E_Avalonia_Collections_DataGridCollectionView_PageChanged">PageChanged</a></td>
<td>Raised when a page index change completed</td>
</tr>
<tr>
<td><a href="E_Avalonia_Collections_DataGridCollectionView_PageChanging">PageChanging</a></td>
<td>Raised when a page index change is requested</td>
</tr>
<tr>
<td><a href="E_Avalonia_Collections_DataGridCollectionView_PropertyChanged">PropertyChanged</a></td>
<td>PropertyChanged event.</td>
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
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  


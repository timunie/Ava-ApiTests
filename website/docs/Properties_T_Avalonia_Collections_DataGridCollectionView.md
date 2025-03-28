# DataGridCollectionView Properties




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

## See Also


#### Reference
<a href="T_Avalonia_Collections_DataGridCollectionView">DataGridCollectionView Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  


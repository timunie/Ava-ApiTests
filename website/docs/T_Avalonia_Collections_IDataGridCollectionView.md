# IDataGridCollectionView Interface


Enables collections to have the functionalities of current record management, custom sorting, filtering, and grouping.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IDataGridCollectionView : IEnumerable, 
	INotifyCollectionChanged
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IDataGridCollectionView
	Inherits IEnumerable, INotifyCollectionChanged
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IDataGridCollectionView = 
    interface
        interface IEnumerable
        interface INotifyCollectionChanged
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/Collections/IDataGridCollectionView.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.collections.ienumerable" target="_blank" rel="noopener noreferrer">IEnumerable</a>, <a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.inotifycollectionchanged" target="_blank" rel="noopener noreferrer">INotifyCollectionChanged</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Collections_IDataGridCollectionView_CanFilter">CanFilter</a></td>
<td>Gets a value that indicates whether this view supports filtering by way of the <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.icollectionview.filter" target="_blank" rel="noopener noreferrer">Filter</a> property.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_IDataGridCollectionView_CanGroup">CanGroup</a></td>
<td>Gets a value that indicates whether this view supports grouping by way of the <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.icollectionview.groupdescriptions" target="_blank" rel="noopener noreferrer">GroupDescriptions</a> property.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_IDataGridCollectionView_CanSort">CanSort</a></td>
<td>Gets a value that indicates whether this view supports sorting by way of the <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.icollectionview.sortdescriptions" target="_blank" rel="noopener noreferrer">SortDescriptions</a> property.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_IDataGridCollectionView_Culture">Culture</a></td>
<td>Gets or sets the cultural information for any operations of the view that may differ by culture, such as sorting.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_IDataGridCollectionView_CurrentItem">CurrentItem</a></td>
<td>Gets the current item in the view.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_IDataGridCollectionView_CurrentPosition">CurrentPosition</a></td>
<td>Gets the ordinal position of the <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.icollectionview.currentitem" target="_blank" rel="noopener noreferrer">CurrentItem</a> in the view.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_IDataGridCollectionView_Filter">Filter</a></td>
<td>Gets or sets a callback that is used to determine whether an item is appropriate for inclusion in the view.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_IDataGridCollectionView_GroupingDepth">GroupingDepth</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_IDataGridCollectionView_Groups">Groups</a></td>
<td>Gets the top-level groups.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_IDataGridCollectionView_IsCurrentAfterLast">IsCurrentAfterLast</a></td>
<td>Gets a value that indicates whether the <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.icollectionview.currentitem" target="_blank" rel="noopener noreferrer">CurrentItem</a> of the view is beyond the end of the collection.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_IDataGridCollectionView_IsCurrentBeforeFirst">IsCurrentBeforeFirst</a></td>
<td>Gets a value that indicates whether the <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.icollectionview.currentitem" target="_blank" rel="noopener noreferrer">CurrentItem</a> of the view is beyond the start of the collection.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_IDataGridCollectionView_IsEmpty">IsEmpty</a></td>
<td>Gets a value that indicates whether the view is empty.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_IDataGridCollectionView_IsGrouping">IsGrouping</a></td>
<td>Gets a collection of <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.groupdescription" target="_blank" rel="noopener noreferrer">GroupDescription</a> objects that describe how the items in the collection are grouped in the view.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_IDataGridCollectionView_SortDescriptions">SortDescriptions</a></td>
<td>Gets a collection of <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.sortdescription" target="_blank" rel="noopener noreferrer">SortDescription</a> instances that describe how the items in the collection are sorted in the view.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_IDataGridCollectionView_SourceCollection">SourceCollection</a></td>
<td>Gets the underlying collection.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Collections_IDataGridCollectionView_Contains">Contains(Object)</a></td>
<td>Indicates whether the specified item belongs to this collection view.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_IDataGridCollectionView_DeferRefresh">DeferRefresh()</a></td>
<td>Enters a defer cycle that you can use to merge changes to the view and delay automatic refresh.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.ienumerable.getenumerator" target="_blank" rel="noopener noreferrer">GetEnumerator()</a></td>
<td>Returns an enumerator that iterates through a collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.ienumerable" target="_blank" rel="noopener noreferrer">IEnumerable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_IDataGridCollectionView_GetGroupingPropertyNameAtDepth">GetGroupingPropertyNameAtDepth(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_IDataGridCollectionView_MoveCurrentTo">MoveCurrentTo(Object)</a></td>
<td>Sets the specified item in the view as the <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.icollectionview.currentitem" target="_blank" rel="noopener noreferrer">CurrentItem</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_IDataGridCollectionView_MoveCurrentToFirst">MoveCurrentToFirst()</a></td>
<td>Sets the first item in the view as the <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.icollectionview.currentitem" target="_blank" rel="noopener noreferrer">CurrentItem</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_IDataGridCollectionView_MoveCurrentToLast">MoveCurrentToLast()</a></td>
<td>Sets the last item in the view as the <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.icollectionview.currentitem" target="_blank" rel="noopener noreferrer">CurrentItem</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_IDataGridCollectionView_MoveCurrentToNext">MoveCurrentToNext()</a></td>
<td>Sets the item after the <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.icollectionview.currentitem" target="_blank" rel="noopener noreferrer">CurrentItem</a> in the view as the <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.icollectionview.currentitem" target="_blank" rel="noopener noreferrer">CurrentItem</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_IDataGridCollectionView_MoveCurrentToPosition">MoveCurrentToPosition(Int32)</a></td>
<td>Sets the item at the specified index to be the <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.icollectionview.currentitem" target="_blank" rel="noopener noreferrer">CurrentItem</a> in the view.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_IDataGridCollectionView_MoveCurrentToPrevious">MoveCurrentToPrevious()</a></td>
<td>Sets the item before the <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.icollectionview.currentitem" target="_blank" rel="noopener noreferrer">CurrentItem</a> in the view to the <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.icollectionview.currentitem" target="_blank" rel="noopener noreferrer">CurrentItem</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_IDataGridCollectionView_Refresh">Refresh()</a></td>
<td>Recreates the view.</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.inotifycollectionchanged.collectionchanged" target="_blank" rel="noopener noreferrer">CollectionChanged</a></td>
<td>Occurs when the collection changes.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.inotifycollectionchanged" target="_blank" rel="noopener noreferrer">INotifyCollectionChanged</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Collections_IDataGridCollectionView_CurrentChanged">CurrentChanged</a></td>
<td>Occurs after the current item has been changed.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Collections_IDataGridCollectionView_CurrentChanging">CurrentChanging</a></td>
<td>Occurs before the current item changes.</td>
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

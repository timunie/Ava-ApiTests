# IAvaloniaList&lt;T&gt; Interface


A notifying list.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IAvaloniaList<T> : IList<T>, 
	ICollection<T>, IEnumerable<T>, IEnumerable, IAvaloniaReadOnlyList<T>, IReadOnlyList<T>, 
	IReadOnlyCollection<T>, INotifyCollectionChanged, INotifyPropertyChanged

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IAvaloniaList(Of T)
	Inherits IList(Of T), ICollection(Of T), IEnumerable(Of T), 
	IEnumerable, IAvaloniaReadOnlyList(Of T), IReadOnlyList(Of T), IReadOnlyCollection(Of T), 
	INotifyCollectionChanged, INotifyPropertyChanged
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IAvaloniaList<'T> = 
    interface
        interface IList<'T>
        interface ICollection<'T>
        interface IEnumerable<'T>
        interface IEnumerable
        interface IAvaloniaReadOnlyList<'T>
        interface IReadOnlyList<'T>
        interface IReadOnlyCollection<'T>
        interface INotifyCollectionChanged
        interface INotifyPropertyChanged
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Collections/IAvaloniaList.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Collections_IAvaloniaReadOnlyList_1">IAvaloniaReadOnlyList</a>(T), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection</a>(T), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(T), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1" target="_blank" rel="noopener noreferrer">IList</a>(T), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlycollection-1" target="_blank" rel="noopener noreferrer">IReadOnlyCollection</a>(T), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(T), <a href="https://learn.microsoft.com/dotnet/api/system.collections.ienumerable" target="_blank" rel="noopener noreferrer">IEnumerable</a>, <a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.inotifycollectionchanged" target="_blank" rel="noopener noreferrer">INotifyCollectionChanged</a>, <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.inotifypropertychanged" target="_blank" rel="noopener noreferrer">INotifyPropertyChanged</a></td></tr>
</table>



#### Type Parameters
<dl><dt /><dd>The type of the items in the list.</dd></dl>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Collections_IAvaloniaList_1_Count">Count</a></td>
<td>Gets the number of items in the list.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1.isreadonly" target="_blank" rel="noopener noreferrer">IsReadOnly</a></td>
<td>Gets a value indicating whether the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a> is read-only.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection</a>(T))</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_IAvaloniaList_1_Item">Item(Int32)</a></td>
<td>Gets or sets the element at the specified index.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1.add" target="_blank" rel="noopener noreferrer">Add(T)</a></td>
<td>Adds an item to the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection</a>(T))</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_IAvaloniaList_1_AddRange">AddRange(IEnumerable(T))</a></td>
<td>Adds multiple items to the collection.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1.clear" target="_blank" rel="noopener noreferrer">Clear()</a></td>
<td>Removes all items from the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection</a>(T))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1.contains" target="_blank" rel="noopener noreferrer">Contains(T)</a></td>
<td>Determines whether the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a> contains a specific value.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection</a>(T))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1.copyto" target="_blank" rel="noopener noreferrer">CopyTo(T[], Int32)</a></td>
<td>Copies the elements of the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a> to an <a href="https://learn.microsoft.com/dotnet/api/system.array" target="_blank" rel="noopener noreferrer">Array</a>, starting at a particular <a href="https://learn.microsoft.com/dotnet/api/system.array" target="_blank" rel="noopener noreferrer">Array</a> index.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection</a>(T))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1.getenumerator" target="_blank" rel="noopener noreferrer">GetEnumerator()</a></td>
<td>Returns an enumerator that iterates through the collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(T))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1.indexof" target="_blank" rel="noopener noreferrer">IndexOf(T)</a></td>
<td>Determines the index of a specific item in the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1" target="_blank" rel="noopener noreferrer">IList(T)</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1" target="_blank" rel="noopener noreferrer">IList</a>(T))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1.insert" target="_blank" rel="noopener noreferrer">Insert(Int32, T)</a></td>
<td>Inserts an item to the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1" target="_blank" rel="noopener noreferrer">IList(T)</a> at the specified index.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1" target="_blank" rel="noopener noreferrer">IList</a>(T))</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_IAvaloniaList_1_InsertRange">InsertRange(Int32, IEnumerable(T))</a></td>
<td>Inserts multiple items at the specified index.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_IAvaloniaList_1_Move">Move(Int32, Int32)</a></td>
<td>Moves an item to a new index.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_IAvaloniaList_1_MoveRange">MoveRange(Int32, Int32, Int32)</a></td>
<td>Moves multiple items to a new index.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1.remove" target="_blank" rel="noopener noreferrer">Remove(T)</a></td>
<td>Removes the first occurrence of a specific object from the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection</a>(T))</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_IAvaloniaList_1_RemoveAll">RemoveAll(IEnumerable(T))</a></td>
<td>Removes multiple items from the collection.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1.removeat" target="_blank" rel="noopener noreferrer">RemoveAt(Int32)</a></td>
<td>Removes the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1" target="_blank" rel="noopener noreferrer">IList(T)</a> item at the specified index.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1" target="_blank" rel="noopener noreferrer">IList</a>(T))</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_IAvaloniaList_1_RemoveRange">RemoveRange(Int32, Int32)</a></td>
<td>Removes a range of elements from the collection.</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.inotifycollectionchanged.collectionchanged" target="_blank" rel="noopener noreferrer">CollectionChanged</a></td>
<td>Occurs when the collection changes.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.inotifycollectionchanged" target="_blank" rel="noopener noreferrer">INotifyCollectionChanged</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.inotifypropertychanged.propertychanged" target="_blank" rel="noopener noreferrer">PropertyChanged</a></td>
<td>Occurs when a property value changes.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.inotifypropertychanged" target="_blank" rel="noopener noreferrer">INotifyPropertyChanged</a>)</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaListExtensions_ForEachItem__1">ForEachItem(T)(Action(T), Action(T), Action, Boolean)</a></td>
<td>Invokes an action for each item in a collection and subsequently each item added or removed from the collection.<br />(Defined by <a href="T_Avalonia_Collections_AvaloniaListExtensions">AvaloniaListExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaListExtensions_ForEachItem__1_1">ForEachItem(T)(Action(Int32, T), Action(Int32, T), Action, Boolean)</a></td>
<td>Invokes an action for each item in a collection and subsequently each item added or removed from the collection.<br />(Defined by <a href="T_Avalonia_Collections_AvaloniaListExtensions">AvaloniaListExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_NotifyCollectionChangedExtensions_GetWeakCollectionChangedObservable">GetWeakCollectionChangedObservable()</a></td>
<td>Gets a weak observable for the CollectionChanged event.<br />(Defined by <a href="T_Avalonia_Collections_NotifyCollectionChangedExtensions">NotifyCollectionChangedExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaListExtensions_TrackItemPropertyChanged__1">TrackItemPropertyChanged(T)(Action(Tuple(Object, PropertyChangedEventArgs)))</a></td>
<td>Listens for property changed events from all items in a collection.<br />(Defined by <a href="T_Avalonia_Collections_AvaloniaListExtensions">AvaloniaListExtensions</a>)</td>
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


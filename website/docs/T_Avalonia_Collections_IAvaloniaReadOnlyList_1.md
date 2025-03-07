# IAvaloniaReadOnlyList&lt;T&gt; Interface


A read-only notifying list.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IAvaloniaReadOnlyList<out T> : IReadOnlyList<T>, 
	IEnumerable<T>, IEnumerable, IReadOnlyCollection<T>, INotifyCollectionChanged, INotifyPropertyChanged

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IAvaloniaReadOnlyList(Of Out T)
	Inherits IReadOnlyList(Of T), IEnumerable(Of T), IEnumerable, 
	IReadOnlyCollection(Of T), INotifyCollectionChanged, INotifyPropertyChanged
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IAvaloniaReadOnlyList<'T> = 
    interface
        interface IReadOnlyList<'T>
        interface IEnumerable<'T>
        interface IEnumerable
        interface IReadOnlyCollection<'T>
        interface INotifyCollectionChanged
        interface INotifyPropertyChanged
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Collections/IAvaloniaReadOnlyList.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(T), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlycollection-1" target="_blank" rel="noopener noreferrer">IReadOnlyCollection</a>(T), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(T), <a href="https://learn.microsoft.com/dotnet/api/system.collections.ienumerable" target="_blank" rel="noopener noreferrer">IEnumerable</a>, <a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.inotifycollectionchanged" target="_blank" rel="noopener noreferrer">INotifyCollectionChanged</a>, <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.inotifypropertychanged" target="_blank" rel="noopener noreferrer">INotifyPropertyChanged</a></td></tr>
</table>



#### Type Parameters
<dl><dt /><dd>The type of the items in the list.</dd></dl>

## Properties
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlycollection-1.count" target="_blank" rel="noopener noreferrer">Count</a></td>
<td>Gets the number of elements in the collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlycollection-1" target="_blank" rel="noopener noreferrer">IReadOnlyCollection</a>(T))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1.item" target="_blank" rel="noopener noreferrer">Item(Int32)</a></td>
<td>Gets the element at the specified index in the read-only list.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(T))</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1.getenumerator" target="_blank" rel="noopener noreferrer">GetEnumerator()</a></td>
<td>Returns an enumerator that iterates through the collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(T))</td>
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

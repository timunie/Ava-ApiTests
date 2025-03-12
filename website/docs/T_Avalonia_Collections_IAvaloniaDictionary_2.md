# IAvaloniaDictionary&lt;TKey, TValue&gt; Interface




## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IAvaloniaDictionary<TKey, TValue> : IDictionary<TKey, TValue>, 
	ICollection<KeyValuePair<TKey, TValue>>, IEnumerable<KeyValuePair<TKey, TValue>>, 
	IEnumerable, IAvaloniaReadOnlyDictionary<TKey, TValue>, IReadOnlyDictionary<TKey, TValue>, 
	IReadOnlyCollection<KeyValuePair<TKey, TValue>>, INotifyCollectionChanged, INotifyPropertyChanged, 
	IDictionary, ICollection

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IAvaloniaDictionary(Of TKey, TValue)
	Inherits IDictionary(Of TKey, TValue), ICollection(Of KeyValuePair(Of TKey, TValue)), 
	IEnumerable(Of KeyValuePair(Of TKey, TValue)), IEnumerable, 
	IAvaloniaReadOnlyDictionary(Of TKey, TValue), IReadOnlyDictionary(Of TKey, TValue), 
	IReadOnlyCollection(Of KeyValuePair(Of TKey, TValue)), INotifyCollectionChanged, 
	INotifyPropertyChanged, IDictionary, ICollection
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IAvaloniaDictionary<'TKey, 'TValue> = 
    interface
        interface IDictionary<'TKey, 'TValue>
        interface ICollection<KeyValuePair<'TKey, 'TValue>>
        interface IEnumerable<KeyValuePair<'TKey, 'TValue>>
        interface IEnumerable
        interface IAvaloniaReadOnlyDictionary<'TKey, 'TValue>
        interface IReadOnlyDictionary<'TKey, 'TValue>
        interface IReadOnlyCollection<KeyValuePair<'TKey, 'TValue>>
        interface INotifyCollectionChanged
        interface INotifyPropertyChanged
        interface IDictionary
        interface ICollection
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Collections/IAvaloniaDictionary.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Collections_IAvaloniaReadOnlyDictionary_2">IAvaloniaReadOnlyDictionary</a>(TKey, TValue), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2" target="_blank" rel="noopener noreferrer">KeyValuePair</a>(TKey, TValue)), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">IDictionary</a>(TKey, TValue), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2" target="_blank" rel="noopener noreferrer">KeyValuePair</a>(TKey, TValue)), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlycollection-1" target="_blank" rel="noopener noreferrer">IReadOnlyCollection</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2" target="_blank" rel="noopener noreferrer">KeyValuePair</a>(TKey, TValue)), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2" target="_blank" rel="noopener noreferrer">IReadOnlyDictionary</a>(TKey, TValue), <a href="https://learn.microsoft.com/dotnet/api/system.collections.icollection" target="_blank" rel="noopener noreferrer">ICollection</a>, <a href="https://learn.microsoft.com/dotnet/api/system.collections.idictionary" target="_blank" rel="noopener noreferrer">IDictionary</a>, <a href="https://learn.microsoft.com/dotnet/api/system.collections.ienumerable" target="_blank" rel="noopener noreferrer">IEnumerable</a>, <a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.inotifycollectionchanged" target="_blank" rel="noopener noreferrer">INotifyCollectionChanged</a>, <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.inotifypropertychanged" target="_blank" rel="noopener noreferrer">INotifyPropertyChanged</a></td></tr>
</table>



#### Type Parameters
<dl><dt /><dd /><dt /><dd /></dl>

## Properties
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1.count" target="_blank" rel="noopener noreferrer">Count</a></td>
<td>Gets the number of elements contained in the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2" target="_blank" rel="noopener noreferrer">KeyValuePair</a>(TKey, TValue)))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.idictionary.isfixedsize" target="_blank" rel="noopener noreferrer">IsFixedSize</a></td>
<td>Gets a value indicating whether the <a href="https://learn.microsoft.com/dotnet/api/system.collections.idictionary" target="_blank" rel="noopener noreferrer">IDictionary</a> object has a fixed size.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.idictionary" target="_blank" rel="noopener noreferrer">IDictionary</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1.isreadonly" target="_blank" rel="noopener noreferrer">IsReadOnly</a></td>
<td>Gets a value indicating whether the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a> is read-only.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2" target="_blank" rel="noopener noreferrer">KeyValuePair</a>(TKey, TValue)))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.icollection.issynchronized" target="_blank" rel="noopener noreferrer">IsSynchronized</a></td>
<td>Gets a value indicating whether access to the <a href="https://learn.microsoft.com/dotnet/api/system.collections.icollection" target="_blank" rel="noopener noreferrer">ICollection</a> is synchronized (thread safe).<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.icollection" target="_blank" rel="noopener noreferrer">ICollection</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2.item" target="_blank" rel="noopener noreferrer">Item(TKey)</a></td>
<td>Gets or sets the element with the specified key.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">IDictionary</a>(TKey, TValue))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.idictionary.item" target="_blank" rel="noopener noreferrer">Item(Object)</a></td>
<td>Gets or sets the element with the specified key.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.idictionary" target="_blank" rel="noopener noreferrer">IDictionary</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2.keys" target="_blank" rel="noopener noreferrer">Keys</a></td>
<td>Gets an <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a> containing the keys of the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">IDictionary(TKey, TValue)</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">IDictionary</a>(TKey, TValue))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.icollection.syncroot" target="_blank" rel="noopener noreferrer">SyncRoot</a></td>
<td>Gets an object that can be used to synchronize access to the <a href="https://learn.microsoft.com/dotnet/api/system.collections.icollection" target="_blank" rel="noopener noreferrer">ICollection</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.icollection" target="_blank" rel="noopener noreferrer">ICollection</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2.values" target="_blank" rel="noopener noreferrer">Values</a></td>
<td>Gets an <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a> containing the values in the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">IDictionary(TKey, TValue)</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">IDictionary</a>(TKey, TValue))</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1.add" target="_blank" rel="noopener noreferrer">Add(T)</a></td>
<td>Adds an item to the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2" target="_blank" rel="noopener noreferrer">KeyValuePair</a>(TKey, TValue)))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2.add#system-collections-generic-idictionary-2-add(-0-1)" target="_blank" rel="noopener noreferrer">Add(TKey, TValue)</a></td>
<td>Adds an element with the provided key and value to the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">IDictionary(TKey, TValue)</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">IDictionary</a>(TKey, TValue))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.idictionary.add" target="_blank" rel="noopener noreferrer">Add(Object, Object)</a></td>
<td>Adds an element with the provided key and value to the <a href="https://learn.microsoft.com/dotnet/api/system.collections.idictionary" target="_blank" rel="noopener noreferrer">IDictionary</a> object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.idictionary" target="_blank" rel="noopener noreferrer">IDictionary</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1.clear" target="_blank" rel="noopener noreferrer">Clear()</a></td>
<td>Removes all items from the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2" target="_blank" rel="noopener noreferrer">KeyValuePair</a>(TKey, TValue)))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1.contains" target="_blank" rel="noopener noreferrer">Contains(T)</a></td>
<td>Determines whether the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a> contains a specific value.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2" target="_blank" rel="noopener noreferrer">KeyValuePair</a>(TKey, TValue)))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.idictionary.contains" target="_blank" rel="noopener noreferrer">Contains(Object)</a></td>
<td>Determines whether the <a href="https://learn.microsoft.com/dotnet/api/system.collections.idictionary" target="_blank" rel="noopener noreferrer">IDictionary</a> object contains an element with the specified key.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.idictionary" target="_blank" rel="noopener noreferrer">IDictionary</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2.containskey" target="_blank" rel="noopener noreferrer">ContainsKey(TKey)</a></td>
<td>Determines whether the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">IDictionary(TKey, TValue)</a> contains an element with the specified key.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">IDictionary</a>(TKey, TValue))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.icollection.copyto" target="_blank" rel="noopener noreferrer">CopyTo(Array, Int32)</a></td>
<td>Copies the elements of the <a href="https://learn.microsoft.com/dotnet/api/system.collections.icollection" target="_blank" rel="noopener noreferrer">ICollection</a> to an <a href="https://learn.microsoft.com/dotnet/api/system.array" target="_blank" rel="noopener noreferrer">Array</a>, starting at a particular <a href="https://learn.microsoft.com/dotnet/api/system.array" target="_blank" rel="noopener noreferrer">Array</a> index.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.icollection" target="_blank" rel="noopener noreferrer">ICollection</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1.copyto" target="_blank" rel="noopener noreferrer">CopyTo(T[], Int32)</a></td>
<td>Copies the elements of the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a> to an <a href="https://learn.microsoft.com/dotnet/api/system.array" target="_blank" rel="noopener noreferrer">Array</a>, starting at a particular <a href="https://learn.microsoft.com/dotnet/api/system.array" target="_blank" rel="noopener noreferrer">Array</a> index.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2" target="_blank" rel="noopener noreferrer">KeyValuePair</a>(TKey, TValue)))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1.getenumerator" target="_blank" rel="noopener noreferrer">GetEnumerator()</a></td>
<td>Returns an enumerator that iterates through the collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2" target="_blank" rel="noopener noreferrer">KeyValuePair</a>(TKey, TValue)))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2.remove#system-collections-generic-idictionary-2-remove(-0)" target="_blank" rel="noopener noreferrer">Remove(TKey)</a></td>
<td>Removes the element with the specified key from the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">IDictionary(TKey, TValue)</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">IDictionary</a>(TKey, TValue))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1.remove" target="_blank" rel="noopener noreferrer">Remove(T)</a></td>
<td>Removes the first occurrence of a specific object from the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2" target="_blank" rel="noopener noreferrer">KeyValuePair</a>(TKey, TValue)))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.idictionary.remove" target="_blank" rel="noopener noreferrer">Remove(Object)</a></td>
<td>Removes the element with the specified key from the <a href="https://learn.microsoft.com/dotnet/api/system.collections.idictionary" target="_blank" rel="noopener noreferrer">IDictionary</a> object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.idictionary" target="_blank" rel="noopener noreferrer">IDictionary</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2.trygetvalue" target="_blank" rel="noopener noreferrer">TryGetValue(TKey, TValue)</a></td>
<td>Gets the value associated with the specified key.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">IDictionary</a>(TKey, TValue))</td>
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


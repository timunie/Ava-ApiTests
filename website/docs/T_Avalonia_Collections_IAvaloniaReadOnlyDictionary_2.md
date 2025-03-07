# IAvaloniaReadOnlyDictionary&lt;TKey, TValue&gt; Interface




## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IAvaloniaReadOnlyDictionary<TKey, TValue> : IReadOnlyDictionary<TKey, TValue>, 
	IEnumerable<KeyValuePair<TKey, TValue>>, IEnumerable, IReadOnlyCollection<KeyValuePair<TKey, TValue>>, 
	INotifyCollectionChanged, INotifyPropertyChanged

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IAvaloniaReadOnlyDictionary(Of TKey, TValue)
	Inherits IReadOnlyDictionary(Of TKey, TValue), IEnumerable(Of KeyValuePair(Of TKey, TValue)), 
	IEnumerable, IReadOnlyCollection(Of KeyValuePair(Of TKey, TValue)), 
	INotifyCollectionChanged, INotifyPropertyChanged
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IAvaloniaReadOnlyDictionary<'TKey, 'TValue> = 
    interface
        interface IReadOnlyDictionary<'TKey, 'TValue>
        interface IEnumerable<KeyValuePair<'TKey, 'TValue>>
        interface IEnumerable
        interface IReadOnlyCollection<KeyValuePair<'TKey, 'TValue>>
        interface INotifyCollectionChanged
        interface INotifyPropertyChanged
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Collections/IAvaloniaReadOnlyDictionary.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2" target="_blank" rel="noopener noreferrer">KeyValuePair</a>(TKey, TValue)), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlycollection-1" target="_blank" rel="noopener noreferrer">IReadOnlyCollection</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2" target="_blank" rel="noopener noreferrer">KeyValuePair</a>(TKey, TValue)), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2" target="_blank" rel="noopener noreferrer">IReadOnlyDictionary</a>(TKey, TValue), <a href="https://learn.microsoft.com/dotnet/api/system.collections.ienumerable" target="_blank" rel="noopener noreferrer">IEnumerable</a>, <a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.inotifycollectionchanged" target="_blank" rel="noopener noreferrer">INotifyCollectionChanged</a>, <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.inotifypropertychanged" target="_blank" rel="noopener noreferrer">INotifyPropertyChanged</a></td></tr>
</table>



#### Type Parameters
<dl><dt /><dd /><dt /><dd /></dl>

## Properties
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlycollection-1.count" target="_blank" rel="noopener noreferrer">Count</a></td>
<td>Gets the number of elements in the collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlycollection-1" target="_blank" rel="noopener noreferrer">IReadOnlyCollection</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2" target="_blank" rel="noopener noreferrer">KeyValuePair</a>(TKey, TValue)))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2.item" target="_blank" rel="noopener noreferrer">Item(TKey)</a></td>
<td>Gets the element that has the specified key in the read-only dictionary.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2" target="_blank" rel="noopener noreferrer">IReadOnlyDictionary</a>(TKey, TValue))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2.keys" target="_blank" rel="noopener noreferrer">Keys</a></td>
<td>Gets an enumerable collection that contains the keys in the read-only dictionary.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2" target="_blank" rel="noopener noreferrer">IReadOnlyDictionary</a>(TKey, TValue))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2.values" target="_blank" rel="noopener noreferrer">Values</a></td>
<td>Gets an enumerable collection that contains the values in the read-only dictionary.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2" target="_blank" rel="noopener noreferrer">IReadOnlyDictionary</a>(TKey, TValue))</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2.containskey" target="_blank" rel="noopener noreferrer">ContainsKey(TKey)</a></td>
<td>Determines whether the read-only dictionary contains an element that has the specified key.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2" target="_blank" rel="noopener noreferrer">IReadOnlyDictionary</a>(TKey, TValue))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1.getenumerator" target="_blank" rel="noopener noreferrer">GetEnumerator()</a></td>
<td>Returns an enumerator that iterates through the collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2" target="_blank" rel="noopener noreferrer">KeyValuePair</a>(TKey, TValue)))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2.trygetvalue" target="_blank" rel="noopener noreferrer">TryGetValue(TKey, TValue)</a></td>
<td>Gets the value that is associated with the specified key.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2" target="_blank" rel="noopener noreferrer">IReadOnlyDictionary</a>(TKey, TValue))</td>
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

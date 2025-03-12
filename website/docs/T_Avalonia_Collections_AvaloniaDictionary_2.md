# AvaloniaDictionary&lt;TKey, TValue&gt; Class


A notifying dictionary.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class AvaloniaDictionary<TKey, TValue> : IAvaloniaDictionary<TKey, TValue>, 
	IDictionary<TKey, TValue>, ICollection<KeyValuePair<TKey, TValue>>, 
	IEnumerable<KeyValuePair<TKey, TValue>>, IEnumerable, IAvaloniaReadOnlyDictionary<TKey, TValue>, 
	IReadOnlyDictionary<TKey, TValue>, IReadOnlyCollection<KeyValuePair<TKey, TValue>>, 
	INotifyCollectionChanged, INotifyPropertyChanged, IDictionary, ICollection

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class AvaloniaDictionary(Of TKey, TValue)
	Implements IAvaloniaDictionary(Of TKey, TValue), IDictionary(Of TKey, TValue), 
	ICollection(Of KeyValuePair(Of TKey, TValue)), IEnumerable(Of KeyValuePair(Of TKey, TValue)), 
	IEnumerable, IAvaloniaReadOnlyDictionary(Of TKey, TValue), IReadOnlyDictionary(Of TKey, TValue), 
	IReadOnlyCollection(Of KeyValuePair(Of TKey, TValue)), INotifyCollectionChanged, 
	INotifyPropertyChanged, IDictionary, ICollection
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type AvaloniaDictionary<'TKey, 'TValue> = 
    class
        interface IAvaloniaDictionary<'TKey, 'TValue>
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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Collections/AvaloniaDictionary.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  AvaloniaDictionary(TKey, TValue)</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Collections_IAvaloniaDictionary_2">IAvaloniaDictionary</a>(TKey, TValue), <a href="T_Avalonia_Collections_IAvaloniaReadOnlyDictionary_2">IAvaloniaReadOnlyDictionary</a>(TKey, TValue), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2" target="_blank" rel="noopener noreferrer">KeyValuePair</a>(TKey, TValue)), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">IDictionary</a>(TKey, TValue), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2" target="_blank" rel="noopener noreferrer">KeyValuePair</a>(TKey, TValue)), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlycollection-1" target="_blank" rel="noopener noreferrer">IReadOnlyCollection</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2" target="_blank" rel="noopener noreferrer">KeyValuePair</a>(TKey, TValue)), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2" target="_blank" rel="noopener noreferrer">IReadOnlyDictionary</a>(TKey, TValue), <a href="https://learn.microsoft.com/dotnet/api/system.collections.icollection" target="_blank" rel="noopener noreferrer">ICollection</a>, <a href="https://learn.microsoft.com/dotnet/api/system.collections.idictionary" target="_blank" rel="noopener noreferrer">IDictionary</a>, <a href="https://learn.microsoft.com/dotnet/api/system.collections.ienumerable" target="_blank" rel="noopener noreferrer">IEnumerable</a>, <a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.inotifycollectionchanged" target="_blank" rel="noopener noreferrer">INotifyCollectionChanged</a>, <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.inotifypropertychanged" target="_blank" rel="noopener noreferrer">INotifyPropertyChanged</a></td></tr>
</table>



#### Type Parameters
<dl><dt /><dd>The type of the dictionary key.</dd><dt /><dd>The type of the dictionary value.</dd></dl>

## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaDictionary_2__ctor">AvaloniaDictionary(TKey, TValue)()</a></td>
<td>Initializes a new instance of the AvaloniaDictionary(TKey, TValue) class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaDictionary_2__ctor_1">AvaloniaDictionary(TKey, TValue)(Int32)</a></td>
<td>Initializes a new instance of the AvaloniaDictionary(TKey, TValue) class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Collections_AvaloniaDictionary_2_Count">Count</a></td>
<td>Gets the number of elements contained in the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a>.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_AvaloniaDictionary_2_IsReadOnly">IsReadOnly</a></td>
<td>Gets a value indicating whether the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a> is read-only.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_AvaloniaDictionary_2_Item">Item(TKey)</a></td>
<td>Gets or sets the named resource.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_AvaloniaDictionary_2_Keys">Keys</a></td>
<td>Gets an <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a> containing the keys of the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">IDictionary(TKey, TValue)</a>.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_AvaloniaDictionary_2_Values">Values</a></td>
<td>Gets an <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a> containing the values in the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">IDictionary(TKey, TValue)</a>.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaDictionary_2_Add">Add(TKey, TValue)</a></td>
<td>Adds an element with the provided key and value to the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">IDictionary(TKey, TValue)</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaDictionary_2_Clear">Clear()</a></td>
<td>Removes all items from the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaDictionary_2_ContainsKey">ContainsKey(TKey)</a></td>
<td>Determines whether the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">IDictionary(TKey, TValue)</a> contains an element with the specified key.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaDictionary_2_CopyTo">CopyTo(KeyValuePair(TKey, TValue)[], Int32)</a></td>
<td>Copies the elements of the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection(T)</a> to an <a href="https://learn.microsoft.com/dotnet/api/system.array" target="_blank" rel="noopener noreferrer">Array</a>, starting at a particular <a href="https://learn.microsoft.com/dotnet/api/system.array" target="_blank" rel="noopener noreferrer">Array</a> index.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaDictionary_2_GetEnumerator">GetEnumerator()</a></td>
<td>Returns an enumerator that iterates through the collection.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaDictionary_2_Remove">Remove(TKey)</a></td>
<td>Removes the element with the specified key from the <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">IDictionary(TKey, TValue)</a>.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaDictionary_2_TryGetValue">TryGetValue(TKey, TValue)</a></td>
<td>Gets the value associated with the specified key.</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Collections_AvaloniaDictionary_2_CollectionChanged">CollectionChanged</a></td>
<td>Occurs when the collection changes.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Collections_AvaloniaDictionary_2_PropertyChanged">PropertyChanged</a></td>
<td>Raised when a property on the collection changes.</td>
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


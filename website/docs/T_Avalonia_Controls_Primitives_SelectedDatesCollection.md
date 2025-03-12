# SelectedDatesCollection Class




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public sealed class SelectedDatesCollection : ObservableCollection<DateTime>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class SelectedDatesCollection
	Inherits ObservableCollection(Of DateTime)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type SelectedDatesCollection = 
    class
        inherit ObservableCollection<DateTime>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Calendar/SelectedDatesCollection.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1" target="_blank" rel="noopener noreferrer">Collection</a>(<a href="https://learn.microsoft.com/dotnet/api/system.datetime" target="_blank" rel="noopener noreferrer">DateTime</a>)  →  <a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.observablecollection-1" target="_blank" rel="noopener noreferrer">ObservableCollection</a>(<a href="https://learn.microsoft.com/dotnet/api/system.datetime" target="_blank" rel="noopener noreferrer">DateTime</a>)  →  SelectedDatesCollection</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_SelectedDatesCollection__ctor">SelectedDatesCollection(Calendar)</a></td>
<td>Initializes a new instance of the SelectedDatesCollection class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1.count" target="_blank" rel="noopener noreferrer">Count</a></td>
<td>Gets the number of elements actually contained in the <a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1" target="_blank" rel="noopener noreferrer">Collection(T)</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1" target="_blank" rel="noopener noreferrer">Collection</a>(<a href="https://learn.microsoft.com/dotnet/api/system.datetime" target="_blank" rel="noopener noreferrer">DateTime</a>))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1.item" target="_blank" rel="noopener noreferrer">Item(Int32)</a></td>
<td>Gets or sets the element at the specified index.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1" target="_blank" rel="noopener noreferrer">Collection</a>(<a href="https://learn.microsoft.com/dotnet/api/system.datetime" target="_blank" rel="noopener noreferrer">DateTime</a>))</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1.add" target="_blank" rel="noopener noreferrer">Add(T)</a></td>
<td>Adds an object to the end of the <a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1" target="_blank" rel="noopener noreferrer">Collection(T)</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1" target="_blank" rel="noopener noreferrer">Collection</a>(<a href="https://learn.microsoft.com/dotnet/api/system.datetime" target="_blank" rel="noopener noreferrer">DateTime</a>))</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_SelectedDatesCollection_AddRange">AddRange(DateTime, DateTime)</a></td>
<td>Adds all the dates in the specified range, which includes the first and last dates, to the collection.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1.clear" target="_blank" rel="noopener noreferrer">Clear()</a></td>
<td>Removes all elements from the <a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1" target="_blank" rel="noopener noreferrer">Collection(T)</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1" target="_blank" rel="noopener noreferrer">Collection</a>(<a href="https://learn.microsoft.com/dotnet/api/system.datetime" target="_blank" rel="noopener noreferrer">DateTime</a>))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1.contains" target="_blank" rel="noopener noreferrer">Contains(T)</a></td>
<td>Determines whether an element is in the <a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1" target="_blank" rel="noopener noreferrer">Collection(T)</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1" target="_blank" rel="noopener noreferrer">Collection</a>(<a href="https://learn.microsoft.com/dotnet/api/system.datetime" target="_blank" rel="noopener noreferrer">DateTime</a>))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1.copyto" target="_blank" rel="noopener noreferrer">CopyTo(T[], Int32)</a></td>
<td>Copies the entire <a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1" target="_blank" rel="noopener noreferrer">Collection(T)</a> to a compatible one-dimensional <a href="https://learn.microsoft.com/dotnet/api/system.array" target="_blank" rel="noopener noreferrer">Array</a>, starting at the specified index of the target array.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1" target="_blank" rel="noopener noreferrer">Collection</a>(<a href="https://learn.microsoft.com/dotnet/api/system.datetime" target="_blank" rel="noopener noreferrer">DateTime</a>))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1.getenumerator" target="_blank" rel="noopener noreferrer">GetEnumerator()</a></td>
<td>Returns an enumerator that iterates through the <a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1" target="_blank" rel="noopener noreferrer">Collection(T)</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1" target="_blank" rel="noopener noreferrer">Collection</a>(<a href="https://learn.microsoft.com/dotnet/api/system.datetime" target="_blank" rel="noopener noreferrer">DateTime</a>))</td>
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
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1.indexof" target="_blank" rel="noopener noreferrer">IndexOf(T)</a></td>
<td>Searches for the specified object and returns the zero-based index of the first occurrence within the entire <a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1" target="_blank" rel="noopener noreferrer">Collection(T)</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1" target="_blank" rel="noopener noreferrer">Collection</a>(<a href="https://learn.microsoft.com/dotnet/api/system.datetime" target="_blank" rel="noopener noreferrer">DateTime</a>))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1.insert" target="_blank" rel="noopener noreferrer">Insert(Int32, T)</a></td>
<td>Inserts an element into the <a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1" target="_blank" rel="noopener noreferrer">Collection(T)</a> at the specified index.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1" target="_blank" rel="noopener noreferrer">Collection</a>(<a href="https://learn.microsoft.com/dotnet/api/system.datetime" target="_blank" rel="noopener noreferrer">DateTime</a>))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.observablecollection-1.move" target="_blank" rel="noopener noreferrer">Move(Int32, Int32)</a></td>
<td>Moves the item at the specified index to a new location in the collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.observablecollection-1" target="_blank" rel="noopener noreferrer">ObservableCollection</a>(<a href="https://learn.microsoft.com/dotnet/api/system.datetime" target="_blank" rel="noopener noreferrer">DateTime</a>))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1.remove" target="_blank" rel="noopener noreferrer">Remove(T)</a></td>
<td>Removes the first occurrence of a specific object from the <a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1" target="_blank" rel="noopener noreferrer">Collection(T)</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1" target="_blank" rel="noopener noreferrer">Collection</a>(<a href="https://learn.microsoft.com/dotnet/api/system.datetime" target="_blank" rel="noopener noreferrer">DateTime</a>))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1.removeat" target="_blank" rel="noopener noreferrer">RemoveAt(Int32)</a></td>
<td>Removes the element at the specified index of the <a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1" target="_blank" rel="noopener noreferrer">Collection(T)</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1" target="_blank" rel="noopener noreferrer">Collection</a>(<a href="https://learn.microsoft.com/dotnet/api/system.datetime" target="_blank" rel="noopener noreferrer">DateTime</a>))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.observablecollection-1.collectionchanged" target="_blank" rel="noopener noreferrer">CollectionChanged</a></td>
<td>Occurs when an item is added, removed, or moved, or the entire list is refreshed.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.observablecollection-1" target="_blank" rel="noopener noreferrer">ObservableCollection</a>(<a href="https://learn.microsoft.com/dotnet/api/system.datetime" target="_blank" rel="noopener noreferrer">DateTime</a>))</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  


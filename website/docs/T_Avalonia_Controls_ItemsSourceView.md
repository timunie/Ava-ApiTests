import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ItemsSourceView Class


Represents a standardized view of the supported interactions between an items collection and an items control.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class ItemsSourceView : IReadOnlyList<Object>, 
	IEnumerable<Object>, IEnumerable, IReadOnlyCollection<Object>, 
	IList, ICollection, INotifyCollectionChanged
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class ItemsSourceView
	Implements IReadOnlyList(Of Object), IEnumerable(Of Object), 
	IEnumerable, IReadOnlyCollection(Of Object), IList, ICollection, 
	INotifyCollectionChanged
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ItemsSourceView = 
    class
        interface IReadOnlyList<Object>
        interface IEnumerable<Object>
        interface IEnumerable
        interface IReadOnlyCollection<Object>
        interface IList
        interface ICollection
        interface INotifyCollectionChanged
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/ItemsSourceView.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  ItemsSourceView</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Controls_ItemCollection">Avalonia.Controls.ItemCollection</a><br /><a href="T_Avalonia_Controls_ItemsSourceView_1">Avalonia.Controls.ItemsSourceView(T)</a></td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlycollection-1" target="_blank" rel="noopener noreferrer">IReadOnlyCollection</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>), <a href="https://learn.microsoft.com/dotnet/api/system.collections.icollection" target="_blank" rel="noopener noreferrer">ICollection</a>, <a href="https://learn.microsoft.com/dotnet/api/system.collections.ienumerable" target="_blank" rel="noopener noreferrer">IEnumerable</a>, <a href="https://learn.microsoft.com/dotnet/api/system.collections.ilist" target="_blank" rel="noopener noreferrer">IList</a>, <a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.inotifycollectionchanged" target="_blank" rel="noopener noreferrer">INotifyCollectionChanged</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_ItemsSourceView_Count">Count</a></td>
<td>Gets the number of items in the collection.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_ItemsSourceView_Empty">Empty</a></td>
<td>Gets an empty ItemsSourceView</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_ItemsSourceView_Item">Item(Int32)</a></td>
<td>Retrieves the item at the specified index.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_ItemsSourceView_Source">Source</a></td>
<td>Gets the source collection.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_ItemsSourceView_Contains">Contains(Object)</a></td>
<td> </td>
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
<td><a href="M_Avalonia_Controls_ItemsSourceView_GetAt">GetAt(Int32)</a></td>
<td>Retrieves the item at the specified index.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ItemsSourceView_GetEnumerator">GetEnumerator()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ItemsSourceView_GetOrCreate">GetOrCreate(IEnumerable)</a></td>
<td>Gets or creates an ItemsSourceView for the specified enumerable.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ItemsSourceView_GetOrCreate__1_1">GetOrCreate(T)(IEnumerable)</a></td>
<td>Gets or creates an <a href="T_Avalonia_Controls_ItemsSourceView_1">ItemsSourceView(T)</a> for the specified enumerable.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ItemsSourceView_GetOrCreate__1">GetOrCreate(T)(IEnumerable(T))</a></td>
<td>Gets or creates an <a href="T_Avalonia_Controls_ItemsSourceView_1">ItemsSourceView(T)</a> for the specified enumerable.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ItemsSourceView_IndexOf">IndexOf(Object)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Controls_ItemsSourceView_CollectionChanged">CollectionChanged</a></td>
<td>Occurs when the collection has changed to indicate the reason for the change and which items changed.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

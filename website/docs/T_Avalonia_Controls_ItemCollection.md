import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ItemCollection Class


Holds the list of items that constitute the content of an <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class ItemCollection : ItemsSourceView, 
	IList, ICollection, IEnumerable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class ItemCollection
	Inherits ItemsSourceView
	Implements IList, ICollection, IEnumerable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ItemCollection = 
    class
        inherit ItemsSourceView
        interface IList
        interface ICollection
        interface IEnumerable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/ItemCollection.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Controls_ItemsSourceView">ItemsSourceView</a>  →  ItemCollection</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.collections.icollection" target="_blank" rel="noopener noreferrer">ICollection</a>, <a href="https://learn.microsoft.com/dotnet/api/system.collections.ienumerable" target="_blank" rel="noopener noreferrer">IEnumerable</a>, <a href="https://learn.microsoft.com/dotnet/api/system.collections.ilist" target="_blank" rel="noopener noreferrer">IList</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_ItemsSourceView_Count">Count</a></td>
<td>Gets the number of items in the collection.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsSourceView">ItemsSourceView</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_ItemCollection_IsReadOnly">IsReadOnly</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_ItemCollection_Item">Item(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_ItemsSourceView_Source">Source</a></td>
<td>Gets the source collection.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsSourceView">ItemsSourceView</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_ItemCollection_Add">Add(Object)</a></td>
<td>Adds an item to the <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ItemCollection_Clear">Clear()</a></td>
<td>Clears the collection and releases the references on all items currently in the collection.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ItemsSourceView_Contains">Contains(Object)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_ItemsSourceView">ItemsSourceView</a>)</td>
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
<td>Retrieves the item at the specified index.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsSourceView">ItemsSourceView</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ItemsSourceView_GetEnumerator">GetEnumerator()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_ItemsSourceView">ItemsSourceView</a>)</td>
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
<td><a href="M_Avalonia_Controls_ItemsSourceView_IndexOf">IndexOf(Object)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_ItemsSourceView">ItemsSourceView</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ItemCollection_Insert">Insert(Int32, Object)</a></td>
<td>Inserts an element into the collection at the specified index.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ItemCollection_Remove">Remove(Object)</a></td>
<td>Removes the specified item reference from the collection or view.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ItemCollection_RemoveAt">RemoveAt(Int32)</a></td>
<td>Removes the item at the specified index of the collection or view.</td>
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
<td>Occurs when the collection has changed to indicate the reason for the change and which items changed.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsSourceView">ItemsSourceView</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ItemsSourceView&lt;T&gt; Class




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public sealed class ItemsSourceView<T> : ItemsSourceView, 
	IReadOnlyList<T>, IEnumerable<T>, IEnumerable, IReadOnlyCollection<T>

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class ItemsSourceView(Of T)
	Inherits ItemsSourceView
	Implements IReadOnlyList(Of T), IEnumerable(Of T), 
	IEnumerable, IReadOnlyCollection(Of T)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type ItemsSourceView<'T> = 
    class
        inherit ItemsSourceView
        interface IReadOnlyList<'T>
        interface IEnumerable<'T>
        interface IEnumerable
        interface IReadOnlyCollection<'T>
    end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Controls_ItemsSourceView">ItemsSourceView</a>  →  ItemsSourceView(T)</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(T), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlycollection-1" target="_blank" rel="noopener noreferrer">IReadOnlyCollection</a>(T), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(T), <a href="https://learn.microsoft.com/dotnet/api/system.collections.ienumerable" target="_blank" rel="noopener noreferrer">IEnumerable</a></td></tr>
</table>



#### Type Parameters
<dl><dt /><dd /></dl>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_ItemsSourceView_Count">Count</a></td>
<td>Gets the number of items in the collection.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsSourceView">ItemsSourceView</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_ItemsSourceView_1_Empty">Empty</a></td>
<td>Gets an empty <a href="T_Avalonia_Controls_ItemsSourceView">ItemsSourceView</a></td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_ItemsSourceView_1_Item">Item</a></td>
<td>Retrieves the item at the specified index.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_ItemsSourceView_Source">Source</a></td>
<td>Gets the source collection.<br />(Inherited from <a href="T_Avalonia_Controls_ItemsSourceView">ItemsSourceView</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_ItemsSourceView_Contains">Contains</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_ItemsSourceView">ItemsSourceView</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ItemsSourceView_1_GetAt">GetAt</a></td>
<td>Retrieves the item at the specified index.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ItemsSourceView_1_GetEnumerator">GetEnumerator</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ItemsSourceView_IndexOf">IndexOf</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_ItemsSourceView">ItemsSourceView</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString</a></td>
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

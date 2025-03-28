# GeometryCollection Class




## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public sealed class GeometryCollection : AvaloniaList<Geometry>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class GeometryCollection
	Inherits AvaloniaList(Of Geometry)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type GeometryCollection = 
    class
        inherit AvaloniaList<Geometry>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/GeometryCollection.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList</a>(<a href="T_Avalonia_Media_Geometry">Geometry</a>)  →  GeometryCollection</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_GeometryCollection__ctor">GeometryCollection()</a></td>
<td>Initializes a new instance of the GeometryCollection class</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_GeometryCollection__ctor_1">GeometryCollection(IEnumerable(Geometry))</a></td>
<td>Initializes a new instance of the GeometryCollection class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Collections_AvaloniaList_1_Capacity">Capacity</a></td>
<td>Gets or sets the total number of elements the internal data structure can hold without resizing.<br />(Inherited from <a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T)</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_AvaloniaList_1_Count">Count</a></td>
<td>Gets the number of items in the collection.<br />(Inherited from <a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T)</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_AvaloniaList_1_Item">Item(Int32)</a></td>
<td>Gets or sets the item at the specified index.<br />(Inherited from <a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T)</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_GeometryCollection_Parent">Parent</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_AvaloniaList_1_ResetBehavior">ResetBehavior</a></td>
<td>Gets or sets the reset behavior of the list.<br />(Inherited from <a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T)</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_AvaloniaList_1_Validate">Validate</a></td>
<td>Gets or sets a validation routine that can be used to validate items before they are added.<br />(Inherited from <a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T)</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_Add">Add(T)</a></td>
<td>Adds an item to the collection.<br />(Inherited from <a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_AddRange">AddRange(IEnumerable(T))</a></td>
<td>Adds multiple items to the collection.<br />(Inherited from <a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_Clear">Clear()</a></td>
<td>Removes all items from the collection.<br />(Inherited from <a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_Contains">Contains(T)</a></td>
<td>Tests if the collection contains the specified item.<br />(Inherited from <a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_CopyTo">CopyTo(T[], Int32)</a></td>
<td>Copies the collection's contents to an array.<br />(Inherited from <a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_EnsureCapacity">EnsureCapacity(Int32)</a></td>
<td>Ensures that the capacity of the list is at least <a href="P_Avalonia_Collections_AvaloniaList_1_Capacity">Capacity</a>.<br />(Inherited from <a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T)</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_GetEnumerator">GetEnumerator()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T)</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_GetRange">GetRange(Int32, Int32)</a></td>
<td>Gets a range of items from the collection.<br />(Inherited from <a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T)</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_IndexOf">IndexOf(T)</a></td>
<td>Gets the index of the specified item in the collection.<br />(Inherited from <a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_Insert">Insert(Int32, T)</a></td>
<td>Inserts an item at the specified index.<br />(Inherited from <a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_InsertRange">InsertRange(Int32, IEnumerable(T))</a></td>
<td>Inserts multiple items at the specified index.<br />(Inherited from <a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_Move">Move(Int32, Int32)</a></td>
<td>Moves an item to a new index.<br />(Inherited from <a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_MoveRange">MoveRange(Int32, Int32, Int32)</a></td>
<td>Moves multiple items to a new index.<br />(Inherited from <a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_Remove">Remove(T)</a></td>
<td>Removes an item from the collection.<br />(Inherited from <a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_RemoveAll">RemoveAll(IEnumerable(T))</a></td>
<td>Removes multiple items from the collection.<br />(Inherited from <a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_RemoveAt">RemoveAt(Int32)</a></td>
<td>Removes the item at the specified index.<br />(Inherited from <a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_RemoveRange">RemoveRange(Int32, Int32)</a></td>
<td>Removes a range of elements from the collection.<br />(Inherited from <a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T)</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Collections_AvaloniaList_1_CollectionChanged">CollectionChanged</a></td>
<td>Raised when a change is made to the collection's items.<br />(Inherited from <a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T)</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Collections_AvaloniaList_1_PropertyChanged">PropertyChanged</a></td>
<td>Raised when a property on the collection changes.<br />(Inherited from <a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T)</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  


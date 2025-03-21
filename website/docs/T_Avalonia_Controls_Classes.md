# Classes Class


Holds a collection of style classes for an <a href="T_Avalonia_StyledElement">StyledElement</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class Classes : AvaloniaList<string>, 
	IPseudoClasses
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class Classes
	Inherits AvaloniaList(Of String)
	Implements IPseudoClasses
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type Classes = 
    class
        inherit AvaloniaList<string>
        interface IPseudoClasses
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Controls/Classes.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList</a>(<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>)  →  Classes</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_IPseudoClasses">IPseudoClasses</a></td></tr>
</table>



## Remarks
Similar to CSS, each control may have any number of styling classes applied.

## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_Classes__ctor">Classes()</a></td>
<td>Initializes a new instance of the Classes class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Classes__ctor_1">Classes(IEnumerable(String))</a></td>
<td>Initializes a new instance of the Classes class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Classes__ctor_2">Classes(String[])</a></td>
<td>Initializes a new instance of the Classes class.</td>
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
<td><a href="M_Avalonia_Controls_Classes_Add">Add(String)</a></td>
<td>Adds a style class to the collection.<br />(Overrides <a href="M_Avalonia_Collections_AvaloniaList_1_Add">AvaloniaList(T).Add(T)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Classes_AddRange">AddRange(IEnumerable(String))</a></td>
<td>Adds a style classes to the collection.<br />(Overrides <a href="M_Avalonia_Collections_AvaloniaList_1_AddRange">AvaloniaList(T).AddRange(IEnumerable(T))</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Classes_Clear">Clear()</a></td>
<td>Removes all non-pseudoclasses from the collection.<br />(Overrides <a href="M_Avalonia_Collections_AvaloniaList_1_Clear">AvaloniaList(T).Clear()</a>)</td>
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
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
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
<td><a href="M_Avalonia_Controls_Classes_Insert">Insert(Int32, String)</a></td>
<td>Inserts a style class into the collection.<br />(Overrides <a href="M_Avalonia_Collections_AvaloniaList_1_Insert">AvaloniaList(T).Insert(Int32, T)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Classes_InsertRange">InsertRange(Int32, IEnumerable(String))</a></td>
<td>Inserts style classes into the collection.<br />(Overrides <a href="M_Avalonia_Collections_AvaloniaList_1_InsertRange">AvaloniaList(T).InsertRange(Int32, IEnumerable(T))</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
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
<td><a href="M_Avalonia_Controls_Classes_Parse">Parse(String)</a></td>
<td>Parses a classes string.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Classes_Remove">Remove(String)</a></td>
<td>Removes a style class from the collection.<br />(Overrides <a href="M_Avalonia_Collections_AvaloniaList_1_Remove">AvaloniaList(T).Remove(T)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Classes_RemoveAll">RemoveAll(IEnumerable(String))</a></td>
<td>Removes style classes from the collection.<br />(Overrides <a href="M_Avalonia_Collections_AvaloniaList_1_RemoveAll">AvaloniaList(T).RemoveAll(IEnumerable(T))</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Classes_RemoveAt">RemoveAt(Int32)</a></td>
<td>Removes a style class from the collection.<br />(Overrides <a href="M_Avalonia_Collections_AvaloniaList_1_RemoveAt">AvaloniaList(T).RemoveAt(Int32)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Classes_RemoveRange">RemoveRange(Int32, Int32)</a></td>
<td>Removes style classes from the collection.<br />(Overrides <a href="M_Avalonia_Collections_AvaloniaList_1_RemoveRange">AvaloniaList(T).RemoveRange(Int32, Int32)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Classes_Replace">Replace(IList(String))</a></td>
<td>Removes all non-pseudoclasses in the collection and adds a new set.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Classes_Set">Set(String, Boolean)</a></td>
<td>Adds a or removes a style class to/from the collection.</td>
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

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_PseudolassesExtensions_Set">Set(String, Boolean)</a></td>
<td>Adds or removes a pseudoclass depending on a boolean value.<br />(Defined by <a href="T_Avalonia_Controls_PseudolassesExtensions">PseudolassesExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ControlExtensions_Set">Set(String, IObservable(Boolean))</a></td>
<td>Sets a pseudoclass depending on an observable trigger.<br />(Defined by <a href="T_Avalonia_Controls_ControlExtensions">ControlExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  


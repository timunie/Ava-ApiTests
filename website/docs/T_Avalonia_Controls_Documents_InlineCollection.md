import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# InlineCollection Class


A collection of <a href="T_Avalonia_Controls_Documents_Inline">Inline</a>s.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Documents">Avalonia.Controls.Documents</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class InlineCollection : AvaloniaList<Inline>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class InlineCollection
	Inherits AvaloniaList(Of Inline)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type InlineCollection = 
    class
        inherit AvaloniaList<Inline>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Documents/InlineCollection.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  AvaloniaList(<a href="T_Avalonia_Controls_Documents_Inline">Inline</a>)  →  InlineCollection</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_Documents_InlineCollection__ctor">InlineCollection()</a></td>
<td>Initializes a new instance of the InlineCollection class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td>Capacity</td>
<td><br />(Inherited from AvaloniaList(<a href="T_Avalonia_Controls_Documents_Inline">Inline</a>))</td>
</tr>
<tr>
<td>Count</td>
<td><br />(Inherited from AvaloniaList(<a href="T_Avalonia_Controls_Documents_Inline">Inline</a>))</td>
</tr>
<tr>
<td>Item</td>
<td><br />(Inherited from AvaloniaList(<a href="T_Avalonia_Controls_Documents_Inline">Inline</a>))</td>
</tr>
<tr>
<td>ResetBehavior</td>
<td><br />(Inherited from AvaloniaList(<a href="T_Avalonia_Controls_Documents_Inline">Inline</a>))</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Documents_InlineCollection_Text">Text</a></td>
<td>Gets or adds the text held by the inlines collection. Can be null for complex content.</td>
</tr>
<tr>
<td>Validate</td>
<td><br />(Inherited from AvaloniaList(<a href="T_Avalonia_Controls_Documents_Inline">Inline</a>))</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_Documents_InlineCollection_Add">Add(Control)</a></td>
<td>Adds a control wrapped inside a <a href="T_Avalonia_Controls_Documents_InlineUIContainer">InlineUIContainer</a> to the collection.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Documents_InlineCollection_Add_1">Add(Inline)</a></td>
<td><br />(Overrides AvaloniaList.Add(UTP))</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Documents_InlineCollection_Add_2">Add(String)</a></td>
<td>Adds a text segment to the collection. For non-complex content this appends the text to the end of currently held text. For complex content this adds a <a href="T_Avalonia_Controls_Documents_Run">Run</a> to the collection.</td>
</tr>
<tr>
<td>AddRange(IEnumerable(UTP))</td>
<td><br />(Inherited from AvaloniaList(<a href="T_Avalonia_Controls_Documents_Inline">Inline</a>))</td>
</tr>
<tr>
<td>Clear()</td>
<td><br />(Inherited from AvaloniaList(<a href="T_Avalonia_Controls_Documents_Inline">Inline</a>))</td>
</tr>
<tr>
<td>Contains(UTP)</td>
<td><br />(Inherited from AvaloniaList(<a href="T_Avalonia_Controls_Documents_Inline">Inline</a>))</td>
</tr>
<tr>
<td>CopyTo(UTP[], Int32)</td>
<td><br />(Inherited from AvaloniaList(<a href="T_Avalonia_Controls_Documents_Inline">Inline</a>))</td>
</tr>
<tr>
<td>EnsureCapacity(Int32)</td>
<td><br />(Inherited from AvaloniaList(<a href="T_Avalonia_Controls_Documents_Inline">Inline</a>))</td>
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
<td>GetEnumerator()</td>
<td><br />(Inherited from AvaloniaList(<a href="T_Avalonia_Controls_Documents_Inline">Inline</a>))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td>GetRange(Int32, Int32)</td>
<td><br />(Inherited from AvaloniaList(<a href="T_Avalonia_Controls_Documents_Inline">Inline</a>))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td>IndexOf(UTP)</td>
<td><br />(Inherited from AvaloniaList(<a href="T_Avalonia_Controls_Documents_Inline">Inline</a>))</td>
</tr>
<tr>
<td>Insert(Int32, UTP)</td>
<td><br />(Inherited from AvaloniaList(<a href="T_Avalonia_Controls_Documents_Inline">Inline</a>))</td>
</tr>
<tr>
<td>InsertRange(Int32, IEnumerable(UTP))</td>
<td><br />(Inherited from AvaloniaList(<a href="T_Avalonia_Controls_Documents_Inline">Inline</a>))</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Documents_InlineCollection_Invalidate">Invalidate()</a></td>
<td>Raises the <a href="E_Avalonia_Controls_Documents_InlineCollection_Invalidated">Invalidated</a> event.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td>Move(Int32, Int32)</td>
<td><br />(Inherited from AvaloniaList(<a href="T_Avalonia_Controls_Documents_Inline">Inline</a>))</td>
</tr>
<tr>
<td>MoveRange(Int32, Int32, Int32)</td>
<td><br />(Inherited from AvaloniaList(<a href="T_Avalonia_Controls_Documents_Inline">Inline</a>))</td>
</tr>
<tr>
<td>Remove(UTP)</td>
<td><br />(Inherited from AvaloniaList(<a href="T_Avalonia_Controls_Documents_Inline">Inline</a>))</td>
</tr>
<tr>
<td>RemoveAll(IEnumerable(UTP))</td>
<td><br />(Inherited from AvaloniaList(<a href="T_Avalonia_Controls_Documents_Inline">Inline</a>))</td>
</tr>
<tr>
<td>RemoveAt(Int32)</td>
<td><br />(Inherited from AvaloniaList(<a href="T_Avalonia_Controls_Documents_Inline">Inline</a>))</td>
</tr>
<tr>
<td>RemoveRange(Int32, Int32)</td>
<td><br />(Inherited from AvaloniaList(<a href="T_Avalonia_Controls_Documents_Inline">Inline</a>))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## Events
<table>
<tr>
<td>CollectionChanged</td>
<td><br />(Inherited from AvaloniaList(<a href="T_Avalonia_Controls_Documents_Inline">Inline</a>))</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Documents_InlineCollection_Invalidated">Invalidated</a></td>
<td>Raised when an inline in the collection changes.</td>
</tr>
<tr>
<td>PropertyChanged</td>
<td><br />(Inherited from AvaloniaList(<a href="T_Avalonia_Controls_Documents_Inline">Inline</a>))</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Documents">Avalonia.Controls.Documents Namespace</a>  

# PageChangingEventArgs Class


Event argument used for page index change notifications. The requested page move can be canceled by setting e.Cancel to True.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public sealed class PageChangingEventArgs : CancelEventArgs
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class PageChangingEventArgs
	Inherits CancelEventArgs
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type PageChangingEventArgs = 
    class
        inherit CancelEventArgs
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/Collections/DataGridCollectionView.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.eventargs" target="_blank" rel="noopener noreferrer">EventArgs</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.canceleventargs" target="_blank" rel="noopener noreferrer">CancelEventArgs</a>  →  PageChangingEventArgs</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Collections_PageChangingEventArgs__ctor">PageChangingEventArgs(Int32)</a></td>
<td>Constructor that takes the target page index</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.canceleventargs.cancel" target="_blank" rel="noopener noreferrer">Cancel</a></td>
<td>Gets or sets a value indicating whether the event should be canceled.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.canceleventargs" target="_blank" rel="noopener noreferrer">CancelEventArgs</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_PageChangingEventArgs_NewPageIndex">NewPageIndex</a></td>
<td>Gets the index of the requested page</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
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
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  

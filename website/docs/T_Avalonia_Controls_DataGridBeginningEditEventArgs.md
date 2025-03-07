# DataGridBeginningEditEventArgs Class


Provides data for the <a href="E_Avalonia_Controls_DataGrid_BeginningEdit">BeginningEdit</a> event.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class DataGridBeginningEditEventArgs : CancelEventArgs
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class DataGridBeginningEditEventArgs
	Inherits CancelEventArgs
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type DataGridBeginningEditEventArgs = 
    class
        inherit CancelEventArgs
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/EventArgs.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.eventargs" target="_blank" rel="noopener noreferrer">EventArgs</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.canceleventargs" target="_blank" rel="noopener noreferrer">CancelEventArgs</a>  →  DataGridBeginningEditEventArgs</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_DataGridBeginningEditEventArgs__ctor">DataGridBeginningEditEventArgs(DataGridColumn, DataGridRow, RoutedEventArgs)</a></td>
<td>Initializes a new instance of the DataGridBeginningEditEventArgs class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.canceleventargs.cancel" target="_blank" rel="noopener noreferrer">Cancel</a></td>
<td>Gets or sets a value indicating whether the event should be canceled.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.canceleventargs" target="_blank" rel="noopener noreferrer">CancelEventArgs</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridBeginningEditEventArgs_Column">Column</a></td>
<td>Gets the column that contains the cell to be edited.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridBeginningEditEventArgs_EditingEventArgs">EditingEventArgs</a></td>
<td>Gets information about the user gesture that caused the cell to enter edit mode.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridBeginningEditEventArgs_Row">Row</a></td>
<td>Gets the row that contains the cell to be edited.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
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
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

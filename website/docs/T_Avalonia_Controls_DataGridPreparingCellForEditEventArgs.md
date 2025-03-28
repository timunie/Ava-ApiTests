# DataGridPreparingCellForEditEventArgs Class


Provides data for the <a href="E_Avalonia_Controls_DataGrid_PreparingCellForEdit">PreparingCellForEdit</a> event.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class DataGridPreparingCellForEditEventArgs : EventArgs
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class DataGridPreparingCellForEditEventArgs
	Inherits EventArgs
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type DataGridPreparingCellForEditEventArgs = 
    class
        inherit EventArgs
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/EventArgs.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.eventargs" target="_blank" rel="noopener noreferrer">EventArgs</a>  →  DataGridPreparingCellForEditEventArgs</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_DataGridPreparingCellForEditEventArgs__ctor">DataGridPreparingCellForEditEventArgs(DataGridColumn, DataGridRow, RoutedEventArgs, Control)</a></td>
<td>Initializes a new instance of the DataGridPreparingCellForEditEventArgs class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_DataGridPreparingCellForEditEventArgs_Column">Column</a></td>
<td>Gets the column that contains the cell to be edited.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridPreparingCellForEditEventArgs_EditingElement">EditingElement</a></td>
<td>Gets the element that the column displays for a cell in editing mode.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridPreparingCellForEditEventArgs_EditingEventArgs">EditingEventArgs</a></td>
<td>Gets information about the user gesture that caused the cell to enter edit mode.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridPreparingCellForEditEventArgs_Row">Row</a></td>
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


# DataGridCurrentChangingEventArgs Class


Provides data for the CurrentChanging event.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class DataGridCurrentChangingEventArgs : EventArgs
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class DataGridCurrentChangingEventArgs
	Inherits EventArgs
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type DataGridCurrentChangingEventArgs = 
    class
        inherit EventArgs
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/Collections/IDataGridCollectionView.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.eventargs" target="_blank" rel="noopener noreferrer">EventArgs</a>  →  DataGridCurrentChangingEventArgs</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Collections_DataGridCurrentChangingEventArgs__ctor">DataGridCurrentChangingEventArgs()</a></td>
<td>Initializes a new instance of the <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.currentchangingeventargs" target="_blank" rel="noopener noreferrer">CurrentChangingEventArgs</a> class and sets the <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.currentchangingeventargs.iscancelable" target="_blank" rel="noopener noreferrer">IsCancelable</a> property to true.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_DataGridCurrentChangingEventArgs__ctor_1">DataGridCurrentChangingEventArgs(Boolean)</a></td>
<td>Initializes a new instance of the <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.currentchangingeventargs" target="_blank" rel="noopener noreferrer">CurrentChangingEventArgs</a> class and sets the <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.currentchangingeventargs.iscancelable" target="_blank" rel="noopener noreferrer">IsCancelable</a> property to the specified value.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Collections_DataGridCurrentChangingEventArgs_Cancel">Cancel</a></td>
<td>Gets or sets a value that indicates whether the <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.icollectionview.currentitem" target="_blank" rel="noopener noreferrer">CurrentItem</a> change should be canceled.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_DataGridCurrentChangingEventArgs_IsCancelable">IsCancelable</a></td>
<td>Gets a value that indicates whether the <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.icollectionview.currentitem" target="_blank" rel="noopener noreferrer">CurrentItem</a> change can be canceled.</td>
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
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  


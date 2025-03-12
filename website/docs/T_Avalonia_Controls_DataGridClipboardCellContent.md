# DataGridClipboardCellContent Structure


This structure encapsulate the cell information necessary when clipboard content is prepared.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public struct DataGridClipboardCellContent
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure DataGridClipboardCellContent
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type DataGridClipboardCellContent = 
    struct
        inherit ValueType
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGridClipboard.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  DataGridClipboardCellContent</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_DataGridClipboardCellContent__ctor">DataGridClipboardCellContent(Object, DataGridColumn, Object)</a></td>
<td>Creates a new DataGridClipboardCellValue structure containing information about a DataGrid cell.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_DataGridClipboardCellContent_Column">Column</a></td>
<td>DataGridColumn containing the cell.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridClipboardCellContent_Content">Content</a></td>
<td>Cell content.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridClipboardCellContent_Item">Item</a></td>
<td>DataGrid row item containing the cell.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_DataGridClipboardCellContent_Equals">Equals(Object)</a></td>
<td>Field-by-field comparison to avoid reflection-based ValueType.Equals.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_DataGridClipboardCellContent_GetHashCode">GetHashCode()</a></td>
<td>Returns a deterministic hash code.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns the fully qualified type name of this instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>)</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Controls_DataGridClipboardCellContent_op_Equality">Equality(DataGridClipboardCellContent, DataGridClipboardCellContent)</a></td>
<td>Field-by-field comparison to avoid reflection-based ValueType.Equals.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_DataGridClipboardCellContent_op_Inequality">Inequality(DataGridClipboardCellContent, DataGridClipboardCellContent)</a></td>
<td>Field-by-field comparison to avoid reflection-based ValueType.Equals.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  


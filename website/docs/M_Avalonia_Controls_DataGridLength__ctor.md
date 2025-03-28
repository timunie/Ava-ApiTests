# DataGridLength(Double, DataGridLengthUnitType, Double, Double) Constructor


Initializes to a specified value and unit.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DataGridLength(
	double value,
	DataGridLengthUnitType type,
	double desiredValue,
	double displayValue
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	value As Double,
	type As DataGridLengthUnitType,
	desiredValue As Double,
	displayValue As Double
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        value : float * 
        type : DataGridLengthUnitType * 
        desiredValue : float * 
        displayValue : float -> DataGridLength
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGridLength.cs#L89" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The value to hold.</dd><dt>  <a href="T_Avalonia_Controls_DataGridLengthUnitType">DataGridLengthUnitType</a></dt><dd>The unit of <code>value</code>.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd /><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd /></dl>

## Remarks
`value` is ignored unless `type` is `DataGridLengthUnitType.Pixel` or `DataGridLengthUnitType.Star`

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.argumentexception" target="_blank" rel="noopener noreferrer">ArgumentException</a></td>
<td>If <code>value</code> parameter is <code>double.NaN</code> or <code>value</code> parameter is <code>double.NegativeInfinity</code> or <code>value</code> parameter is <code>double.PositiveInfinity</code>.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGridLength">DataGridLength Structure</a>  
<a href="Overload_Avalonia_Controls_DataGridLength__ctor">DataGridLength Overload</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  


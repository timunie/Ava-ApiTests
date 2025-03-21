# Equality Operator


Overloaded operator, compares 2 DataGridLength's.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static bool operator ==(
	DataGridLength gl1,
	DataGridLength gl2
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Operator = ( 
	gl1 As DataGridLength,
	gl2 As DataGridLength
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static let inline (=)
        gl1 : DataGridLength * 
        gl2 : DataGridLength  : bool
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGridLength.cs#L289" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_DataGridLength">DataGridLength</a></dt><dd>first DataGridLength to compare.</dd><dt>  <a href="T_Avalonia_Controls_DataGridLength">DataGridLength</a></dt><dd>second DataGridLength to compare.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
true if specified DataGridLength have same value, unit type, desired value, and display value.

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGridLength">DataGridLength Structure</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  


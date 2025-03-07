# FromPath(String, ListSortDirection, CultureInfo) Method




## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static DataGridSortDescription FromPath(
	string propertyPath,
	ListSortDirection direction = ListSortDirection.Ascending,
	CultureInfo culture = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function FromPath ( 
	propertyPath As String,
	Optional direction As ListSortDirection = ListSortDirection.Ascending,
	Optional culture As CultureInfo = Nothing
) As DataGridSortDescription
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member FromPath : 
        propertyPath : string * 
        ?direction : ListSortDirection * 
        ?culture : CultureInfo 
(* Defaults:
        let _direction = defaultArg direction ListSortDirection.Ascending
        let _culture = defaultArg culture null
*)
-> DataGridSortDescription 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/Collections/DataGridSortDescription.cs#L250" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.listsortdirection" target="_blank" rel="noopener noreferrer">ListSortDirection</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo" target="_blank" rel="noopener noreferrer">CultureInfo</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Collections_DataGridSortDescription">DataGridSortDescription</a>

## See Also


#### Reference
<a href="T_Avalonia_Collections_DataGridSortDescription">DataGridSortDescription Class</a>  
<a href="Overload_Avalonia_Collections_DataGridSortDescription_FromPath">FromPath Overload</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  

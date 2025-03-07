# BeginEdit(RoutedEventArgs) Method


Enters editing mode for the current cell and current row (if they're not already in editing mode).



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool BeginEdit(
	RoutedEventArgs editingEventArgs
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function BeginEdit ( 
	editingEventArgs As RoutedEventArgs
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member BeginEdit : 
        editingEventArgs : RoutedEventArgs -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGrid.cs#L1974" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Interactivity_RoutedEventArgs">RoutedEventArgs</a></dt><dd>Provides information about the user gesture that caused the call to BeginEdit. Can be null.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if operation was successful. False otherwise.

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGrid">DataGrid Class</a>  
<a href="Overload_Avalonia_Controls_DataGrid_BeginEdit">BeginEdit Overload</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

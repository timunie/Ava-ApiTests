# OnSelectionChanged Method


Raises the SelectionChanged event and clears the _selectionChanged. This event won't get raised again until after _selectionChanged is set back to true.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void OnSelectionChanged(
	SelectionChangedEventArgs e
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub OnSelectionChanged ( 
	e As SelectionChangedEventArgs
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnSelectionChanged : 
        e : SelectionChangedEventArgs -> unit 
override OnSelectionChanged : 
        e : SelectionChangedEventArgs -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGrid.cs#L2435" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_SelectionChangedEventArgs">SelectionChangedEventArgs</a></dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGrid">DataGrid Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

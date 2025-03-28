# SelectedItem Property


Gets or sets the selected item.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Object? SelectedItem { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property SelectedItem As Object
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member SelectedItem : Object with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/TreeView.cs#L116" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>

## Remarks
Note that setting this property only currently works if the item is expanded to be visible. To select non-expanded nodes use `Selection.SelectedIndex`.

## See Also


#### Reference
<a href="T_Avalonia_Controls_TreeView">TreeView Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  


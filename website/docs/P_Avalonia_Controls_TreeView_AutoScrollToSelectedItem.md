# AutoScrollToSelectedItem Property


Gets or sets a value indicating whether to automatically scroll to newly selected items.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool AutoScrollToSelectedItem { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property AutoScrollToSelectedItem As Boolean
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member AutoScrollToSelectedItem : bool with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/TreeView.cs#L94" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## Remarks
This property is of limited use with <a href="T_Avalonia_Controls_TreeView">TreeView</a> as it will only scroll to realized items. To scroll to a non-expanded item, you need to ensure that its ancestors are expanded.

## See Also


#### Reference
<a href="T_Avalonia_Controls_TreeView">TreeView Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  


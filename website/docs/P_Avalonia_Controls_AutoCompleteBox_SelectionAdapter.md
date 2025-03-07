# SelectionAdapter Property


Gets or sets the selection adapter used to populate the drop-down with a list of selectable items.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected ISelectionAdapter? SelectionAdapter \{ get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Property SelectionAdapter As ISelectionAdapter
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member SelectionAdapter : ISelectionAdapter with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/AutoCompleteBox/AutoCompleteBox.cs#L564" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Controls_Utils_ISelectionAdapter">ISelectionAdapter</a>  
The selection adapter used to populate the drop-down with a list of selectable items.You can use this property when you create an automation peer to use with AutoCompleteBox or deriving from AutoCompleteBox to create a custom control.

## See Also


#### Reference
<a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

# UpdateSelectionFromContainer Method


Updates the selection for an item based on user interaction.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected void UpdateSelectionFromContainer(
	Control container,
	bool select = true,
	bool rangeModifier = false,
	bool toggleModifier = false,
	bool rightButton = false
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Sub UpdateSelectionFromContainer ( 
	container As Control,
	Optional select As Boolean = true,
	Optional rangeModifier As Boolean = false,
	Optional toggleModifier As Boolean = false,
	Optional rightButton As Boolean = false
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member UpdateSelectionFromContainer : 
        container : Control * 
        ?select : bool * 
        ?rangeModifier : bool * 
        ?toggleModifier : bool * 
        ?rightButton : bool 
(* Defaults:
        let _select = defaultArg select true
        let _rangeModifier = defaultArg rangeModifier false
        let _toggleModifier = defaultArg toggleModifier false
        let _rightButton = defaultArg rightButton false
*)
-> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/TreeView.cs#L702" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The container.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>Whether the item should be selected or unselected.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>Whether the range modifier is enabled (i.e. shift key).</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>Whether the toggle modifier is enabled (i.e. ctrl key).</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>Whether the event is a right-click.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_TreeView">TreeView Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  


# MoveSelection(Control, NavigationDirection, Boolean, Boolean) Method


Moves the selection in the specified direction relative to the specified container.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected bool MoveSelection(
	Control? from,
	NavigationDirection direction,
	bool wrap = false,
	bool rangeModifier = false
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Function MoveSelection ( 
	from As Control,
	direction As NavigationDirection,
	Optional wrap As Boolean = false,
	Optional rangeModifier As Boolean = false
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member MoveSelection : 
        from : Control * 
        direction : NavigationDirection * 
        ?wrap : bool * 
        ?rangeModifier : bool 
(* Defaults:
        let _wrap = defaultArg wrap false
        let _rangeModifier = defaultArg rangeModifier false
*)
-> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Primitives/SelectingItemsControl.cs#L749" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The container which serves as a starting point for the movement.</dd><dt>  <a href="T_Avalonia_Input_NavigationDirection">NavigationDirection</a></dt><dd>The direction to move.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>Whether to wrap when the selection reaches the first or last item.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>Whether the range modifier is enabled (i.e. shift key).</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if the selection was moved; otherwise false.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_SelectingItemsControl">SelectingItemsControl Class</a>  
<a href="Overload_Avalonia_Controls_Primitives_SelectingItemsControl_MoveSelection">MoveSelection Overload</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  


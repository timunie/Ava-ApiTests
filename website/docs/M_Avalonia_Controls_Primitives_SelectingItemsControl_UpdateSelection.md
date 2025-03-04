import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# UpdateSelection(Control, Boolean, Boolean, Boolean, Boolean, Boolean) Method


Updates the selection for a container based on user interaction.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected void UpdateSelection(
	Control container,
	bool select = true,
	bool rangeModifier = false,
	bool toggleModifier = false,
	bool rightButton = false,
	bool fromFocus = false
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Sub UpdateSelection ( 
	container As Control,
	Optional select As Boolean = true,
	Optional rangeModifier As Boolean = false,
	Optional toggleModifier As Boolean = false,
	Optional rightButton As Boolean = false,
	Optional fromFocus As Boolean = false
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member UpdateSelection : 
        container : Control * 
        ?select : bool * 
        ?rangeModifier : bool * 
        ?toggleModifier : bool * 
        ?rightButton : bool * 
        ?fromFocus : bool 
(* Defaults:
        let _select = defaultArg select true
        let _rangeModifier = defaultArg rangeModifier false
        let _toggleModifier = defaultArg toggleModifier false
        let _rightButton = defaultArg rightButton false
        let _fromFocus = defaultArg fromFocus false
*)
-> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Primitives/SelectingItemsControl.cs#L868" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The container.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>Whether the container should be selected or unselected.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>Whether the range modifier is enabled (i.e. shift key).</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>Whether the toggle modifier is enabled (i.e. ctrl key).</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>Whether the event is a right-click.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>Wheter the event is a focus event</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_SelectingItemsControl">SelectingItemsControl Class</a>  
<a href="Overload_Avalonia_Controls_Primitives_SelectingItemsControl_UpdateSelection">UpdateSelection Overload</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  

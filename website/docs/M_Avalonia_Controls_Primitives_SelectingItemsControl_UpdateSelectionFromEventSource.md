# UpdateSelectionFromEventSource Method


Updates the selection based on an event that may have originated in a container that belongs to the control.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected bool UpdateSelectionFromEventSource(
	Object? eventSource,
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
Protected Function UpdateSelectionFromEventSource ( 
	eventSource As Object,
	Optional select As Boolean = true,
	Optional rangeModifier As Boolean = false,
	Optional toggleModifier As Boolean = false,
	Optional rightButton As Boolean = false,
	Optional fromFocus As Boolean = false
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member UpdateSelectionFromEventSource : 
        eventSource : Object * 
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
-> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Primitives/SelectingItemsControl.cs#L899" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The control that raised the event.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>Whether the container should be selected or unselected.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>Whether the range modifier is enabled (i.e. shift key).</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>Whether the toggle modifier is enabled (i.e. ctrl key).</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>Whether the event is a right-click.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>Wheter the event is a focus event</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if the event originated from a container that belongs to the control; otherwise false.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_SelectingItemsControl">SelectingItemsControl Class</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  


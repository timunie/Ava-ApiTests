# Move Method


Moves the focus in the specified direction.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
void Move(
	IInputElement element,
	NavigationDirection direction,
	KeyModifiers keyModifiers = KeyModifiers.None
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Sub Move ( 
	element As IInputElement,
	direction As NavigationDirection,
	Optional keyModifiers As KeyModifiers = KeyModifiers.None
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Move : 
        element : IInputElement * 
        direction : NavigationDirection * 
        ?keyModifiers : KeyModifiers 
(* Defaults:
        let _keyModifiers = defaultArg keyModifiers KeyModifiers.None
*)
-> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/IKeyboardNavigationHandler.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_IInputElement">IInputElement</a></dt><dd>The current element.</dd><dt>  <a href="T_Avalonia_Input_NavigationDirection">NavigationDirection</a></dt><dd>The direction to move.</dd><dt>  <a href="T_Avalonia_Input_KeyModifiers">KeyModifiers</a>  (Optional)</dt><dd>Any key modifiers active at the time of focus.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Input_IKeyboardNavigationHandler">IKeyboardNavigationHandler Interface</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  

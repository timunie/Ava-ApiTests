# GetControl Method


Gets the next control in the specified direction.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IInputElement? GetControl(
	NavigationDirection direction,
	IInputElement? from,
	bool wrap
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function GetControl ( 
	direction As NavigationDirection,
	from As IInputElement,
	wrap As Boolean
) As IInputElement
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetControl : 
        direction : NavigationDirection * 
        from : IInputElement * 
        wrap : bool -> IInputElement 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/INavigableContainer.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_NavigationDirection">NavigationDirection</a></dt><dd>The movement direction.</dd><dt>  <a href="T_Avalonia_Input_IInputElement">IInputElement</a></dt><dd>The control from which movement begins.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd>Whether to wrap around when the first or last item is reached.</dd></dl>

#### Return Value
<a href="T_Avalonia_Input_IInputElement">IInputElement</a>  
The control.

## See Also


#### Reference
<a href="T_Avalonia_Input_INavigableContainer">INavigableContainer Interface</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  


# SetOwner Method


Sets the owner of the keyboard navigation handler.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void SetOwner(
	IInputRoot owner
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub SetOwner ( 
	owner As IInputRoot
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract SetOwner : 
        owner : IInputRoot -> unit 
override SetOwner : 
        owner : IInputRoot -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/KeyboardNavigationHandler.cs#L30" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_IInputRoot">IInputRoot</a></dt><dd>The owner.</dd></dl>

#### Implements
<a href="M_Avalonia_Input_IKeyboardNavigationHandler_SetOwner">IKeyboardNavigationHandler.SetOwner(IInputRoot)</a>  
This method can only be called once, typically by the owner itself on creation.

## See Also


#### Reference
<a href="T_Avalonia_Input_KeyboardNavigationHandler">KeyboardNavigationHandler Class</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  

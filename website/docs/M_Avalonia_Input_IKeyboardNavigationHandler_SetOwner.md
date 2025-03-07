# SetOwner Method


Sets the owner of the keyboard navigation handler.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
void SetOwner(
	IInputRoot owner
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Sub SetOwner ( 
	owner As IInputRoot
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract SetOwner : 
        owner : IInputRoot -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/IKeyboardNavigationHandler.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_IInputRoot">IInputRoot</a></dt><dd>The owner.</dd></dl>This method can only be called once, typically by the owner itself on creation.

## See Also


#### Reference
<a href="T_Avalonia_Input_IKeyboardNavigationHandler">IKeyboardNavigationHandler Interface</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  

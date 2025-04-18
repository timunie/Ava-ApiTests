# Focus Method


Focuses the control.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
bool Focus(
	NavigationMethod method = NavigationMethod.Unspecified,
	KeyModifiers keyModifiers = KeyModifiers.None
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function Focus ( 
	Optional method As NavigationMethod = NavigationMethod.Unspecified,
	Optional keyModifiers As KeyModifiers = KeyModifiers.None
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Focus : 
        ?method : NavigationMethod * 
        ?keyModifiers : KeyModifiers 
(* Defaults:
        let _method = defaultArg method NavigationMethod.Unspecified
        let _keyModifiers = defaultArg keyModifiers KeyModifiers.None
*)
-> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/IInputElement.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_NavigationMethod">NavigationMethod</a>  (Optional)</dt><dd>The method by which focus was changed.</dd><dt>  <a href="T_Avalonia_Input_KeyModifiers">KeyModifiers</a>  (Optional)</dt><dd>Any key modifiers active at the time of focus.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_Avalonia_Input_IInputElement">IInputElement Interface</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  


# ToNavigationDirection Method


Converts a keypress into a <a href="T_Avalonia_Input_NavigationDirection">NavigationDirection</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static NavigationDirection? ToNavigationDirection(
	this Key key,
	KeyModifiers modifiers = KeyModifiers.None
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function ToNavigationDirection ( 
	key As Key,
	Optional modifiers As KeyModifiers = KeyModifiers.None
) As NavigationDirection?
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member ToNavigationDirection : 
        key : Key * 
        ?modifiers : KeyModifiers 
(* Defaults:
        let _modifiers = defaultArg modifiers KeyModifiers.None
*)
-> Nullable<NavigationDirection> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/NavigationDirection.cs#L105" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_Key">Key</a></dt><dd>The key.</dd><dt>  <a href="T_Avalonia_Input_KeyModifiers">KeyModifiers</a>  (Optional)</dt><dd>The keyboard modifiers.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="T_Avalonia_Input_NavigationDirection">NavigationDirection</a>)  
A <a href="T_Avalonia_Input_NavigationDirection">NavigationDirection</a> if the keypress represents a navigation keypress.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Input_Key">Key</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Input_NavigationDirectionExtensions">NavigationDirectionExtensions Class</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  


---
title:ToNavigationDirection Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# ToNavigationDirection Method




## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static NavigationDirection? ToNavigationDirection(
	this Key key,
	KeyModifiers modifiers = KeyModifiers.None
)
```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function ToNavigationDirection ( 
	key As Key,
	Optional modifiers As KeyModifiers = KeyModifiers.None
) As NavigationDirection?
```
**F#**
``` F#
[<ExtensionAttribute>]
static member ToNavigationDirection : 
        key : Key * 
        ?modifiers : KeyModifiers 
(* Defaults:
        let _modifiers = defaultArg modifiers KeyModifiers.None
*)
-> Nullable<NavigationDirection> 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_Key">Key</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_KeyModifiers">KeyModifiers</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="T_Avalonia_Input_NavigationDirection">NavigationDirection</a>)

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Input_Key">Key</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Input_NavigationDirectionExtensions">NavigationDirectionExtensions Class</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  

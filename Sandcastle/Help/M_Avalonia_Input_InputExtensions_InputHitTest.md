---
title:InputHitTest(IInputElement, Point, Boolean) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# InputHitTest(IInputElement, Point, Boolean) Method




## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static IInputElement? InputHitTest(
	this IInputElement element,
	Point p,
	bool enabledElementsOnly = true
)
```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function InputHitTest ( 
	element As IInputElement,
	p As Point,
	Optional enabledElementsOnly As Boolean = true
) As IInputElement
```
**F#**
``` F#
[<ExtensionAttribute>]
static member InputHitTest : 
        element : IInputElement * 
        p : Point * 
        ?enabledElementsOnly : bool 
(* Defaults:
        let _enabledElementsOnly = defaultArg enabledElementsOnly true
*)
-> IInputElement 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_IInputElement">IInputElement</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Input_IInputElement">IInputElement</a>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Input_IInputElement">IInputElement</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Input_InputExtensions">InputExtensions Class</a>  
<a href="Overload_Avalonia_Input_InputExtensions_InputHitTest">InputHitTest Overload</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  

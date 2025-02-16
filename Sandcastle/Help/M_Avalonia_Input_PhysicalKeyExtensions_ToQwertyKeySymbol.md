---
title:ToQwertyKeySymbol Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# ToQwertyKeySymbol Method




## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static string? ToQwertyKeySymbol(
	this PhysicalKey physicalKey,
	bool useShiftModifier = false
)
```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function ToQwertyKeySymbol ( 
	physicalKey As PhysicalKey,
	Optional useShiftModifier As Boolean = false
) As String
```
**F#**
``` F#
[<ExtensionAttribute>]
static member ToQwertyKeySymbol : 
        physicalKey : PhysicalKey * 
        ?useShiftModifier : bool 
(* Defaults:
        let _useShiftModifier = defaultArg useShiftModifier false
*)
-> string 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_PhysicalKey">PhysicalKey</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Input_PhysicalKey">PhysicalKey</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Input_PhysicalKeyExtensions">PhysicalKeyExtensions Class</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  

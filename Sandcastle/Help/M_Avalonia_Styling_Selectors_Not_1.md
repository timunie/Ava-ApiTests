---
title:Not(Selector, Func&lt;Selector, Selector&gt;) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Not(Selector, Func&lt;Selector, Selector&gt;) Method




## Definition
**Namespace:** <a href="N_Avalonia_Styling">Avalonia.Styling</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static Selector Not(
	this Selector? previous,
	Func<Selector?, Selector> argument
)
```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function Not ( 
	previous As Selector,
	argument As Func(Of Selector, Selector)
) As Selector
```
**F#**
``` F#
[<ExtensionAttribute>]
static member Not : 
        previous : Selector * 
        argument : Func<Selector, Selector> -> Selector 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Styling_Selector">Selector</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="T_Avalonia_Styling_Selector">Selector</a>, <a href="T_Avalonia_Styling_Selector">Selector</a>)</dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Styling_Selector">Selector</a>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Styling_Selector">Selector</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Styling_Selectors">Selectors Class</a>  
<a href="Overload_Avalonia_Styling_Selectors_Not">Not Overload</a>  
<a href="N_Avalonia_Styling">Avalonia.Styling Namespace</a>  

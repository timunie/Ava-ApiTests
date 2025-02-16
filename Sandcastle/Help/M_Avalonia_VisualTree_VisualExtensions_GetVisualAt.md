---
title:GetVisualAt(Visual, Point, Func&lt;Visual, Boolean&gt;) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# GetVisualAt(Visual, Point, Func&lt;Visual, Boolean&gt;) Method




## Definition
**Namespace:** <a href="N_Avalonia_VisualTree">Avalonia.VisualTree</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static Visual? GetVisualAt(
	this Visual visual,
	Point p,
	Func<Visual, bool> filter
)
```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function GetVisualAt ( 
	visual As Visual,
	p As Point,
	filter As Func(Of Visual, Boolean)
) As Visual
```
**F#**
``` F#
[<ExtensionAttribute>]
static member GetVisualAt : 
        visual : Visual * 
        p : Point * 
        filter : Func<Visual, bool> -> Visual 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="T_Avalonia_Visual">Visual</a>, <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)</dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Visual">Visual</a>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Visual">Visual</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions Class</a>  
<a href="Overload_Avalonia_VisualTree_VisualExtensions_GetVisualAt">GetVisualAt Overload</a>  
<a href="N_Avalonia_VisualTree">Avalonia.VisualTree Namespace</a>  

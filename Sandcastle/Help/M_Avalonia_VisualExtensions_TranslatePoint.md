---
title:TranslatePoint Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# TranslatePoint Method




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static Point? TranslatePoint(
	this Visual visual,
	Point point,
	Visual relativeTo
)
```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function TranslatePoint ( 
	visual As Visual,
	point As Point,
	relativeTo As Visual
) As Point?
```
**F#**
``` F#
[<ExtensionAttribute>]
static member TranslatePoint : 
        visual : Visual * 
        point : Point * 
        relativeTo : Visual -> Nullable<Point> 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="T_Avalonia_Point">Point</a>)

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Visual">Visual</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_VisualExtensions">VisualExtensions Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

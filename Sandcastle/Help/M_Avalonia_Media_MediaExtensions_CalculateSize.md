---
title:CalculateSize Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# CalculateSize Method




## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static Size CalculateSize(
	this Stretch stretch,
	Size destinationSize,
	Size sourceSize,
	StretchDirection stretchDirection = StretchDirection.Both
)
```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function CalculateSize ( 
	stretch As Stretch,
	destinationSize As Size,
	sourceSize As Size,
	Optional stretchDirection As StretchDirection = StretchDirection.Both
) As Size
```
**F#**
``` F#
[<ExtensionAttribute>]
static member CalculateSize : 
        stretch : Stretch * 
        destinationSize : Size * 
        sourceSize : Size * 
        ?stretchDirection : StretchDirection 
(* Defaults:
        let _stretchDirection = defaultArg stretchDirection StretchDirection.Both
*)
-> Size 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_Stretch">Stretch</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Size">Size</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Size">Size</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_StretchDirection">StretchDirection</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Size">Size</a>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Media_Stretch">Stretch</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Media_MediaExtensions">MediaExtensions Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

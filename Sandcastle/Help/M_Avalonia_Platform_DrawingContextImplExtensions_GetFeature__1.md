---
title:GetFeature&lt;T&gt; Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# GetFeature&lt;T&gt; Method




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static T GetFeature<T>(
	this IDrawingContextImpl context
)
where T : class

```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function GetFeature(Of T As Class) ( 
	context As IDrawingContextImpl
) As T
```
**F#**
``` F#
[<ExtensionAttribute>]
static member GetFeature : 
        context : IDrawingContextImpl -> 'T  when 'T : not struct
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_IDrawingContextImpl">IDrawingContextImpl</a></dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
T

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Platform_IDrawingContextImpl">IDrawingContextImpl</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Platform_DrawingContextImplExtensions">DrawingContextImplExtensions Class</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  

---
title:GetValue&lt;T&gt; Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# GetValue&lt;T&gt; Method




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static T GetValue<T>(
	this AvaloniaObject target,
	AvaloniaProperty<T> property
)

```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function GetValue(Of T) ( 
	target As AvaloniaObject,
	property As AvaloniaProperty(Of T)
) As T
```
**F#**
``` F#
[<ExtensionAttribute>]
static member GetValue : 
        target : AvaloniaObject * 
        property : AvaloniaProperty<'T> -> 'T 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a></dt><dd> </dd><dt>  <a href="T_Avalonia_AvaloniaProperty_1">AvaloniaProperty</a>(T)</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
T

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

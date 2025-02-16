---
title:RegisterInNameScope&lt;T&gt; Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# RegisterInNameScope&lt;T&gt; Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.4

**C#**
``` C#
public static T RegisterInNameScope<T>(
	this T control,
	INameScope scope
)
where T : StyledElement

```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function RegisterInNameScope(Of T As StyledElement) ( 
	control As T,
	scope As INameScope
) As T
```
**F#**
``` F#
[<ExtensionAttribute>]
static member RegisterInNameScope : 
        control : 'T * 
        scope : INameScope -> 'T  when 'T : StyledElement
```



#### Parameters
<dl><dt>  T</dt><dd> </dd><dt>  <a href="T_Avalonia_Controls_INameScope">INameScope</a></dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
T

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type T. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Templates_FuncTemplateNameScopeExtensions">FuncTemplateNameScopeExtensions Class</a>  
<a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates Namespace</a>  

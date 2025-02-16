---
title:Find&lt;T&gt;(ILogical, String) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Find&lt;T&gt;(ILogical, String) Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static T Find<T>(
	this ILogical anchor,
	string name
)
where T : class

```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function Find(Of T As Class) ( 
	anchor As ILogical,
	name As String
) As T
```
**F#**
``` F#
[<ExtensionAttribute>]
static member Find : 
        anchor : ILogical * 
        name : string -> 'T  when 'T : not struct
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_LogicalTree_ILogical">ILogical</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
T

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_LogicalTree_ILogical">ILogical</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Controls_NameScopeExtensions">NameScopeExtensions Class</a>  
<a href="Overload_Avalonia_Controls_NameScopeExtensions_Find">Find Overload</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

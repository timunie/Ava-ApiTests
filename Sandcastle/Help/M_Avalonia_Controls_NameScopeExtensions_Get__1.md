---
title:Get&lt;T&gt;(INameScope, String) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Get&lt;T&gt;(INameScope, String) Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static T Get<T>(
	this INameScope nameScope,
	string name
)
where T : class

```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function Get(Of T As Class) ( 
	nameScope As INameScope,
	name As String
) As T
```
**F#**
``` F#
[<ExtensionAttribute>]
static member Get : 
        nameScope : INameScope * 
        name : string -> 'T  when 'T : not struct
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_INameScope">INameScope</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
T

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Controls_INameScope">INameScope</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Controls_NameScopeExtensions">NameScopeExtensions Class</a>  
<a href="Overload_Avalonia_Controls_NameScopeExtensions_Get">Get Overload</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

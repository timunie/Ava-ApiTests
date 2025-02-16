---
title:QueryInterface&lt;T&gt; Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# QueryInterface&lt;T&gt; Method




## Definition
**Namespace:** <a href="N_MicroCom_Runtime">MicroCom.Runtime</a>  
**Assembly:** MicroCom.Runtime (in MicroCom.Runtime.dll) Version: 0.11.0

**C#**
``` C#
public static T QueryInterface<T>(
	this IUnknown unknown
)
where T : IUnknown

```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function QueryInterface(Of T As IUnknown) ( 
	unknown As IUnknown
) As T
```
**F#**
``` F#
[<ExtensionAttribute>]
static member QueryInterface : 
        unknown : IUnknown -> 'T  when 'T : IUnknown
```



#### Parameters
<dl><dt>  <a href="T_MicroCom_Runtime_IUnknown">IUnknown</a></dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
T

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_MicroCom_Runtime_IUnknown">IUnknown</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_MicroCom_Runtime_MicroComRuntime">MicroComRuntime Class</a>  
<a href="N_MicroCom_Runtime">MicroCom.Runtime Namespace</a>  

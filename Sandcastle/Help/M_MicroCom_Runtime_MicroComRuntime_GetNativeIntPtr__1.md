---
title:GetNativeIntPtr&lt;T&gt; Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# GetNativeIntPtr&lt;T&gt; Method




## Definition
**Namespace:** <a href="N_MicroCom_Runtime">MicroCom.Runtime</a>  
**Assembly:** MicroCom.Runtime (in MicroCom.Runtime.dll) Version: 0.11.0

**C#**
``` C#
public static IntPtr GetNativeIntPtr<T>(
	this T obj,
	bool owned = false
)
where T : IUnknown

```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function GetNativeIntPtr(Of T As IUnknown) ( 
	obj As T,
	Optional owned As Boolean = false
) As IntPtr
```
**F#**
``` F#
[<ExtensionAttribute>]
static member GetNativeIntPtr : 
        obj : 'T * 
        ?owned : bool 
(* Defaults:
        let _owned = defaultArg owned false
*)
-> IntPtr  when 'T : IUnknown
```



#### Parameters
<dl><dt>  T</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.intptr" target="_blank" rel="noopener noreferrer">IntPtr</a>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type T. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_MicroCom_Runtime_MicroComRuntime">MicroComRuntime Class</a>  
<a href="N_MicroCom_Runtime">MicroCom.Runtime Namespace</a>  
